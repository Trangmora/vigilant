import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blog/ArticleData";
import { ArticleHeader } from "./blog/ArticleHeader";
import { ArticleContent } from "./blog/ArticleContent";
import { NotFoundMessage } from "./blog/NotFoundMessage";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <NotFoundMessage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <ArticleHeader title={post.title} />
      <ArticleContent content={post.content} />
    </div>
  );
};

export default BlogPost;