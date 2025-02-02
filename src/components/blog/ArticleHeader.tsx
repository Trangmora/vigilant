import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MessageSquare, Bookmark, Share2 } from "lucide-react";

interface ArticleHeaderProps {
  title: string;
}

export const ArticleHeader = ({ title }: ArticleHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-[#F1F0FB] to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-[rgba(0,0,46,255)]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna al blog
            </Button>
          </Link>
        </div>

        <div className="mb-3 text-sm text-gray-600 flex items-center gap-4">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            15 min
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            86
          </span>
        </div>
        
        <h1 className="text-5xl font-bold mb-8 text-[rgba(0,0,46,255)] font-montserrat">
          {title}
        </h1>

        <div className="flex gap-4 mb-12">
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};