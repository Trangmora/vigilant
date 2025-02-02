import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blog/ArticleData";
import { ArticleHeader } from "./blog/ArticleHeader";
import { ArticleContent } from "./blog/ArticleContent";
import { NotFoundMessage } from "./blog/NotFoundMessage";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <NotFoundMessage />;
  }

  return (
    <div className="min-h-screen">
      <ArticleHeader title={post.title} />
      <ArticleContent content={post.content} />
    </div>
  );
};

export default BlogPost;