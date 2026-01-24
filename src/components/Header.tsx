"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none text-gray-900 dark:text-gray-100">Scribex Editor</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Demo Playground</p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            href="https://github.com/mirzasaikatahmmed/scribex-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
          <Link
            href="https://www.npmjs.com/package/scribex-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 7.334v8h6.666v1.332H5.334V18H8v-2.668h2.666v-8H0zm6.666 6.664H5.334v-4H3.999v4H2.666V8.667h4v5.331zm4 0v2.668H24V7.334H10.666v1.332h2.668v5.332h-2.668zM16 8.667v5.333h2.668V8.667H16z"/>
            </svg>
            <span className="hidden sm:inline">NPM</span>
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
