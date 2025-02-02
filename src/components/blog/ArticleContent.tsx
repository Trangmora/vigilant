import React from "react";

interface ArticleContentProps {
  content: string;
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
  const processedContent = content.replace(
    /<a href="#contatti"([^>]*)>/g,
    '<button onclick="window.location.href=\'/#contatti\'" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">'
  ).replace(
    /<\/a>/g,
    '</button>'
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </div>
  );
};