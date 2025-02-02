import React from "react";
import { Button } from "@/components/ui/button";

interface ArticleContentProps {
  content: string;
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
  const handleContactClick = () => {
    window.location.href = '/#contatti';
  };

  const processedContent = content.replace(
    /<a href="#contatti"([^>]*)>/g,
    '<button class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors" onclick="window.location.href=\'/#contatti\'">'
  ).replace(
    /<\/a>/g,
    '</button>'
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      <div 
        className="prose prose-lg max-w-none prose-headings:text-[rgba(0,0,46,255)] prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </div>
  );
};