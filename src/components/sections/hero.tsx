"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import WordPullUp from "@/components/magicui/word-pull-up";
import RetroGrid from "@/components/magicui/retro-grid";

export default function Hero() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="z-10 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.svg"
            alt="awesome-shadcn/ui logo"
            className="h-24 w-24 sm:h-32 sm:w-32"
          />
        </motion.div>

        <WordPullUp
          className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
          words="Awesome Projects"
        />

        <motion.p
          className="max-w-[600px] text-center text-muted-foreground sm:text-xl px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          A curated showcase of vibecoding projects and experiments.
          <br />
          <span className="text-sm italic opacity-70">
            Showcasing creativity through code.
          </span>
        </motion.p>
      </div>

      <RetroGrid />
    </div>
  );
}
