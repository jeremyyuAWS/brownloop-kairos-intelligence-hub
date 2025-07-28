import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { OGINode, OGILink } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import NodeDetailModal from './NodeDetailModal';

interface KnowledgeGraphProps {
  nodes: OGINode[];
  links: OGILink[];
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ nodes, links }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [selectedNode, setSelectedNode] = useState<OGINode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  useEffect(() => {
    if (!svgRef.current || !containerRef.current || nodes.length === 0) return;
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();
    
    // Create SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);
    
    // Define the color scale for different node categories
    const colorScale = d3.scaleOrdinal()
      .domain(['policy', 'process', 'metric', 'concept'])
      .range(['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B']);
    
    // Create a simulation for positioning nodes
    const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.size + 10));
    
    // Create tooltip
    const tooltip = d3.select(containerRef.current)
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", theme === 'dark' ? "#374151" : "#ffffff")
      .style("border", `1px solid ${theme === 'dark' ? "#4B5563" : "#D1D5DB"}`)
      .style("border-radius", "8px")
      .style("padding", "12px")
      .style("box-shadow", "0 4px 6px -1px rgba(0, 0, 0, 0.1)")
      .style("z-index", "1000")
      .style("pointer-events", "none")
      .style("font-size", "14px")
      .style("color", theme === 'dark' ? "#F3F4F6" : "#374151");
    
    // Draw the links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", theme === 'dark' ? "#4B5563" : "#D1D5DB")
      .attr("stroke-opacity", (d) => d.strength * 0.8)
      .attr("stroke-width", (d) => 1 + d.strength * 2)
      .attr("class", "transition-all duration-300");
    
    // Create node group
    const node = svg.append("g")
      .selectAll(".node")
      .data(nodes)
      .join("g")
      .attr("class", "node cursor-pointer")
      .call(d3.drag<SVGGElement, OGINode>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);
    
    // Add outer ring for hover effect
    node.append("circle")
      .attr("r", (d) => d.size / 2 + 8)
      .attr("fill", "none")
      .attr("stroke", (d) => colorScale(d.category))
      .attr("stroke-width", 0)
      .attr("opacity", 0)
      .attr("class", "hover-ring transition-all duration-300");
    
    // Add circles to nodes
    const circles = node.append("circle")
      .attr("r", (d) => d.size / 2)
      .attr("fill", (d) => colorScale(d.category))
      .attr("fill-opacity", 0.9)
      .attr("stroke", (d) => colorScale(d.category))
      .attr("stroke-width", 2)
      .attr("class", "transition-all duration-300 hover:shadow-lg");
    
    // Add labels to nodes
    node.append("text")
      .attr("dx", 0)
      .attr("dy", (d) => -d.size / 2 - 12)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .attr("fill", theme === 'dark' ? "#D1D5DB" : "#374151")
      .attr("pointer-events", "none")
      .text((d) => d.label);
    
    // Add connection count badge
    node.filter((d) => d.connections.length > 0)
      .append("circle")
      .attr("cx", (d) => d.size / 2 - 5)
      .attr("cy", (d) => -d.size / 2 + 5)
      .attr("r", 8)
      .attr("fill", "#EF4444")
      .attr("stroke", theme === 'dark' ? "#374151" : "#ffffff")
      .attr("stroke-width", 2);
    
    node.filter((d) => d.connections.length > 0)
      .append("text")
      .attr("x", (d) => d.size / 2 - 5)
      .attr("y", (d) => -d.size / 2 + 5)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .attr("pointer-events", "none")
      .text((d) => d.connections.length);
    
    // Add pulse animation to important nodes (size > 30)
    node.filter((d) => d.size > 30)
      .append("circle")
      .attr("r", (d) => d.size / 2)
      .attr("fill", "none")
      .attr("stroke", (d) => colorScale(d.category))
      .attr("stroke-width", 2)
      .attr("opacity", 0.6)
      .attr("class", "pulse-ring");
    
    // Add pulse animation
    const pulseRings = svg.selectAll(".pulse-ring");
    
    function pulseAnimation() {
      pulseRings
        .transition()
        .duration(2000)
        .attr("r", (d: any) => d.size / 2 + 20)
        .attr("opacity", 0)
        .on("end", function() {
          d3.select(this)
            .attr("r", (d: any) => d.size / 2)
            .attr("opacity", 0.6)
            .transition()
            .delay(Math.random() * 2000)
            .on("start", pulseAnimation);
        });
    }
    
    pulseAnimation();
    
    // Add event handlers
    node
      .on("mouseenter", function(event, d) {
        setHoveredNode(d.id);
        
        // Highlight node
        d3.select(this).select("circle:first-of-type")
          .transition()
          .duration(200)
          .attr("r", d.size / 2 + 5)
          .attr("fill-opacity", 1);
        
        // Show hover ring
        d3.select(this).select(".hover-ring")
          .transition()
          .duration(200)
          .attr("stroke-width", 3)
          .attr("opacity", 0.3);
        
        // Show tooltip
        tooltip
          .html(`
            <div>
              <div style="font-weight: 600; margin-bottom: 4px;">${d.label}</div>
              <div style="font-size: 12px; color: ${theme === 'dark' ? '#9CA3AF' : '#6B7280'}; margin-bottom: 8px;">
                ${d.category.charAt(0).toUpperCase() + d.category.slice(1)}
              </div>
              <div style="font-size: 12px;">
                <div>Connections: ${d.connections.length}</div>
                <div>Impact Score: ${d.size}</div>
              </div>
              <div style="font-size: 11px; margin-top: 8px; color: ${theme === 'dark' ? '#9CA3AF' : '#6B7280'};">
                Click for detailed analysis
              </div>
            </div>
          `)
          .style("visibility", "visible")
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseleave", function(event, d) {
        setHoveredNode(null);
        
        // Reset node
        d3.select(this).select("circle:first-of-type")
          .transition()
          .duration(200)
          .attr("r", d.size / 2)
          .attr("fill-opacity", 0.9);
        
        // Hide hover ring
        d3.select(this).select(".hover-ring")
          .transition()
          .duration(200)
          .attr("stroke-width", 0)
          .attr("opacity", 0);
        
        // Hide tooltip
        tooltip.style("visibility", "hidden");
      })
      .on("click", function(event, d) {
        event.stopPropagation();
        setSelectedNode(d);
        
        // Click animation
        d3.select(this).select("circle:first-of-type")
          .transition()
          .duration(150)
          .attr("r", d.size / 2 + 8)
          .transition()
          .duration(150)
          .attr("r", d.size / 2);
      });
    
    // Update positions in the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
        
      node
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });
    
    // Drag functions for simulation
    function dragstarted(event: d3.D3DragEvent<SVGGElement, OGINode, any>, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event: d3.D3DragEvent<SVGGElement, OGINode, any>, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event: d3.D3DragEvent<SVGGElement, OGINode, any>, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      svg.attr("width", newWidth).attr("height", newHeight);
      simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
      simulation.alpha(0.3).restart();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      simulation.stop();
      tooltip.remove();
    };
  }, [nodes, links, theme]);
  
  return (
    <>
      <div 
        ref={containerRef} 
        className="w-full h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 relative"
      >
        <svg ref={svgRef}></svg>
        
        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Node Types</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-700 dark:text-gray-300">Policies</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-700 dark:text-gray-300">Processes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-700 dark:text-gray-300">Metrics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-700 dark:text-gray-300">Concepts</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600 text-xs text-gray-500 dark:text-gray-400">
            Click nodes for details
          </div>
        </div>
        
        {/* Instructions */}
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm">
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <div>• Click nodes for detailed analytics</div>
            <div>• Hover for quick information</div>
            <div>• Drag nodes to explore connections</div>
          </div>
        </div>
      </div>
      
      <NodeDetailModal 
        node={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />
    </>
  );
};

export default KnowledgeGraph;