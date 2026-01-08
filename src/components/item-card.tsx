"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Bookmark, ExternalLink } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryNameToSlug } from "@/lib/slugs";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  date?: string;
  isBookmarked: boolean;
  onBookmark: (id: string) => void;
  isBookmarkLoading?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  title,
  description,
  url,
  category,
  date,
  isBookmarked,
  onBookmark,
  isBookmarkLoading = false,
}) => {
  const handleCardClick = () => {
    window.location.href = `/categories/${categoryNameToSlug(category)}/${id}`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <MagicCard
        className="flex flex-col h-[350px] cursor-pointer group border-neutral-200 dark:border-neutral-800"
        gradientColor="rgba(120, 119, 198, 0.1)"
        onClick={handleCardClick}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <Badge variant="outline" className="mb-2 text-[10px] uppercase tracking-widest font-bold opacity-60">
                {category}
              </Badge>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
            </div>
            <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary" />
          </div>

          <p className="text-sm text-muted-foreground line-clamp-4 flex-1 mb-6 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
            {date && (
              <span className="text-[10px] uppercase tracking-tighter opacity-40 font-medium">
                {date}
              </span>
            )}

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-8 w-8 rounded-full transition-all duration-300",
                  isBookmarked
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onBookmark(id);
                }}
                disabled={isBookmarkLoading}
              >
                <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                asChild
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </MagicCard>
    </motion.div>
  );
};

export default ItemCard;
