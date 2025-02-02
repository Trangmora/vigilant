import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const NotFoundMessage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-4">Articolo non trovato</h1>
      <Link to="/blog">
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna al blog
        </Button>
      </Link>
    </div>
  );
};