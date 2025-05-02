"use client";

import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: React.ReactNode;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card className="flex">
      {/* Logo */}
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>

      {/* Content */}
      <div className="flex-grow ml-4 items-center flex-col group">
        <Link
          href={href ?? "#"}
          className="block cursor-pointer"
          onClick={handleClick}
        >
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="align-middle text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
        </Link>

        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-xs sm:text-sm"
          >
            {typeof description === "string" ? (
              <ReactMarkdown
                components={{
                  a: ({ href, children, ...props }) => (
                    <Link href={href!} {...props} className="underline">
                      {children}
                    </Link>
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            ) : (
              <>{description}</>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
