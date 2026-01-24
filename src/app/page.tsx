"use client";

import dynamic from "next/dynamic";
import { 
  Sparkles, 
  Code2, 
  Image, 
  Table, 
  FileText, 
  Palette,
  Zap,
  Globe
} from "lucide-react";

const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

const features = [
  {
    icon: Code2,
    title: "Rich Formatting",
    description: "Bold, italic, underline, code blocks, and more"
  },
  {
    icon: Image,
    title: "Media Support",
    description: "Images, videos, GIFs, and file attachments"
  },
  {
    icon: Table,
    title: "Tables & Lists",
    description: "Create complex tables and nested lists"
  },
  {
    icon: FileText,
    title: "Export Options",
    description: "Export to PDF, Word, or HTML"
  },
  {
    icon: Sparkles,
    title: "Slash Commands",
    description: "Type / to access quick commands"
  },
  {
    icon: Palette,
    title: "Theming",
    description: "Light and dark mode support"
  },
  {
    icon: Zap,
    title: "Math & Diagrams",
    description: "KaTeX equations and Mermaid diagrams"
  },
  {
    icon: Globe,
    title: "Internationalization",
    description: "Support for 6+ languages"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Modern Rich Text Editor</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Scribex Editor
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A powerful Scribex editor. Feature-rich, customizable, and ready for production.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-slide-up">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editor Section */}
        <div className="mb-12 animate-slide-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Try it yourself</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Start typing, use <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
                /
              </kbd> for commands, <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
                :
              </kbd> for emojis
            </p>
          </div>
          <Editor />
        </div>

        {/* Installation Section */}
        <div className="mt-16 p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Quick Start</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Install via npm:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-900 dark:text-gray-100">npm install scribex-editor</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Basic usage:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-900 dark:text-gray-100">{`import { ScribexEditor, ScribexThemeProvider } from 'scribex-editor';
import 'scribex-editor/styles.css';

function App() {
  return (
    <ScribexThemeProvider>
      <ScribexEditor 
        initialContent="<p>Start typing...</p>"
        onChange={(content) => console.log(content)}
      />
    </ScribexThemeProvider>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://saikat.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Mirza Saikat Ahmmed
            </a>
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/mirzasaikatahmmed/scribex-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View on GitHub
            </a>
            {" · "}
            <a
              href="https://www.npmjs.com/package/scribex-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View on NPM
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
