"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils";

interface CompanyLogoProps {
  company: string;
  logo: string;
  url?: string;
  className?: string;
}

export function CompanyLogo({
  company,
  logo,
  url,
  className,
}: CompanyLogoProps) {
  const content = (
    <div
      className={cx(
        "group relative h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-bg-elevated to-bg-subtle ring-2 ring-border-subtle transition-all hover:ring-accent/50 sm:h-28 sm:w-28 md:h-32 md:w-32",
        className,
      )}
    >
      {/* Фоновый градиент при hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-sky/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Логотип */}
      <div className="relative flex h-full w-full items-center justify-center p-4">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={80}
          height={80}
          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -right-1 -top-1 h-8 w-8 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-xl transition-all group-hover:scale-150" />
      <div className="absolute -bottom-1 -left-1 h-8 w-8 rounded-full bg-gradient-to-tr from-sky/20 to-transparent blur-xl transition-all group-hover:scale-150" />
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return content;
}
