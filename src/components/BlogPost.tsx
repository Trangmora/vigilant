import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "./blog/ArticleData";
import { ArticleHeader } from "./blog/ArticleHeader";
import { ArticleContent } from "./blog/ArticleContent";
import { NotFoundMessage } from "./blog/NotFoundMessage";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // If no slug is provided or the article doesn't exist, show NotFoundMessage
  if (!slug || !blogPosts[slug]) {
    return <NotFoundMessage />;
  }

  const post = blogPosts[slug];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <ArticleHeader title={post.title} />
      <ArticleContent content={post.content} />
    </div>
  );
};

export default BlogPost;