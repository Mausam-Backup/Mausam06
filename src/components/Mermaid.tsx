"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Flex, Skeleton } from "@/once-ui/components";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!ref.current) return;
      
      try {
        setLoading(true);
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        setError("Failed to render diagram");
      } finally {
        setLoading(false);
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <Flex fillWidth horizontal="center" padding="32" position="relative">
      {loading && <Skeleton shape="block" style={{ width: "100%", height: "200px" }} />}
      <div
        ref={ref}
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{ width: "100%", opacity: loading ? 0 : 1 }}
      />
    </Flex>
  );
}
