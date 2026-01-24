'use client';

import { useState } from 'react';
import { ScribexEditor, ScribexThemeProvider } from 'scribex-editor';

const demoContent = `
<h1>Rich Text Editor</h1>
<p>A modern Scribex rich text editor</p>

<h2>Features</h2>
<ul>
  <li>Use React, <a href="https://tiptap.dev/" target="_blank">tiptap</a>, <a href="https://ui.shadcn.com/" target="_blank">shadcn</a> components</li>
  <li>Also support (AI, txt, etc, py...)</li>
  <li>Slash Commands (Type <code>/</code> to show menu list)</li>
  <li>Multi Columns</li>
  <li>Support emoji :) (Type <code>:</code> to show emoji list)</li>
  <li>Support @mention</li>
</ul>

<h2>Advanced Features</h2>
<ul>
  <li>Support <strong>Attachment</strong></li>
  <li>Support <strong>Export</strong> to PDF/Word</li>
  <li>Support <strong>Twitter Embed</strong></li>
  <li>Support <strong>Callout</strong></li>
  <li>Support <strong>Table</strong> with import from Excel</li>
  <li>Insert <strong>Math equations</strong> (KaTeX)</li>
  <li>Insert <strong>Mermaid diagrams</strong></li>
  <li>Insert <strong>Excalidraw</strong> whiteboard</li>
</ul>

<p>Start typing to see all the powerful features in action! 🚀</p>
`;

export default function Editor() {
  const [content, setContent] = useState<string>(demoContent);

  const handleImageUpload = async (file: File): Promise<string> => {
    // In production, upload to your server
    // For demo, use object URL
    return URL.createObjectURL(file);
  };

  const handleVideoUpload = async (file: File): Promise<string> => {
    return URL.createObjectURL(file);
  };

  const mentionUsers = [
    { id: '1', label: 'John Doe', avatar: { src: 'https://i.pravatar.cc/150?img=1' } },
    { id: '2', label: 'Jane Smith', avatar: { src: 'https://i.pravatar.cc/150?img=2' } },
    { id: '3', label: 'Bob Johnson', avatar: { src: 'https://i.pravatar.cc/150?img=3' } },
    { id: '4', label: 'Alice Williams', avatar: { src: 'https://i.pravatar.cc/150?img=4' } },
  ];

  return (
    <ScribexThemeProvider
      defaultConfig={{
        locale: 'en',
      }}
    >
      <div className="w-full mx-auto">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
          <ScribexEditor
            initialContent={content}
            onChange={setContent}
            placeholder="Press '/' for commands, ':' for emojis..."
            characterLimit={10000}
            showToolbar={true}
            showBubbleMenus={true}
            showSlashCommands={true}
            showCharacterCount={true}
            imageUpload={handleImageUpload}
            videoUpload={handleVideoUpload}
            mentionUsers={mentionUsers}
            giphyApiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY}
          />
        </div>
      </div>
    </ScribexThemeProvider>
  );
}
