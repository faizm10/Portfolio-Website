"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Clock, User, ExternalLink } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  href: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  author,
  date,
  readTime,
  href,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleExpandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const handleBlogClick = () => {
    window.open(href, '_blank');
  };

  return (
    <Card className="group transition-all duration-300">
      <div className="p-4">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <Link
              href="#"
              className="block cursor-pointer"
              onClick={handleExpandClick}
            >
              <h3 className="font-semibold text-sm sm:text-base leading-tight group-hover:text-foreground/80 transition-colors">
                {title}
              </h3>
            </Link>
          </div>
          
          {/* Blog Link Button */}
          <button
            onClick={handleBlogClick}
            className="flex-shrink-0 p-2 rounded-md hover:bg-muted transition-colors group/link"
            title="Read full blog post"
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground transition-colors" />
          </button>
        </div>

        {/* Metadata Row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
          <span className="text-muted-foreground/60">•</span>
          <span>{date}</span>
        </div>

        {/* Expandable Description */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-border/50">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {/* <ChevronRightIcon
                  className={cn(
                    "w-3 h-3 transition-transform duration-300",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                /> */}
                {/* <span>{isExpanded ? "Show less" : "Read more"}</span> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Collapsed State Indicator */}
        {/* {!isExpanded && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <ChevronRightIcon className="w-3 h-3" />
            <span>Click to expand</span>
          </div>
        )} */}
      </div>
    </Card>
  );
}; 