# Scribex Editor Demo

A modern, feature-rich demo application showcasing the [scribex-editor](https://www.npmjs.com/package/scribex-editor) package.

![Scribex Editor Demo](./screencapture-reactjs-tiptap-editor-playground-vercel-app-2026-01-24-09_19_01.png)

## Features

- 🎨 **Modern UI** - Beautiful interface with glassmorphism effects
- 🌓 **Dark Mode** - Seamless light/dark theme switching
- ✨ **Rich Formatting** - Bold, italic, underline, code blocks, and more
- 📷 **Media Support** - Images, videos, GIFs, and file attachments
- 📊 **Tables & Lists** - Create complex tables and nested lists
- 📤 **Export Options** - Export to PDF, Word, or HTML
- ⚡ **Slash Commands** - Type `/` to access quick commands
- 😊 **Emoji Support** - Type `:` to insert emojis
- 👥 **@Mentions** - Mention users in your content
- 🧮 **Math Equations** - KaTeX support for mathematical expressions
- 📈 **Mermaid Diagrams** - Create flowcharts and diagrams
- 🎨 **Excalidraw** - Integrated whiteboard for drawings
- 🌍 **Internationalization** - Support for 6+ languages

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mirzasaikatahmmed/scribex-editor-demo.git
cd scribex-editor-demo

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Giphy API Key for GIF support
NEXT_PUBLIC_GIPHY_API_KEY=your_giphy_api_key_here
```

Get your Giphy API key from [Giphy Developers](https://developers.giphy.com/).

## Using Scribex Editor in Your Project

### Installation

```bash
npm install scribex-editor
# or
pnpm add scribex-editor
# or
yarn add scribex-editor
```

### Basic Usage

```tsx
import { ScribexEditor, ScribexThemeProvider } from "scribex-editor";
import "scribex-editor/styles.css";
import "reactjs-tiptap-editor/style.css";

function App() {
  const [content, setContent] = useState("");

  return (
    <ScribexThemeProvider>
      <ScribexEditor
        initialContent="<p>Start typing...</p>"
        onChange={setContent}
        showToolbar={true}
        showSlashCommands={true}
      />
    </ScribexThemeProvider>
  );
}
```

### Advanced Configuration

```tsx
<ScribexEditor
  initialContent={content}
  onChange={setContent}
  placeholder="Press '/' for commands..."
  characterLimit={10000}
  showToolbar={true}
  showBubbleMenus={true}
  showSlashCommands={true}
  showCharacterCount={true}
  imageUpload={async (file) => {
    // Upload to your server
    const url = await uploadToServer(file);
    return url;
  }}
  videoUpload={async (file) => {
    const url = await uploadToServer(file);
    return url;
  }}
  mentionUsers={[
    { id: "1", label: "John Doe", avatar: { src: "/avatars/john.png" } },
  ]}
  giphyApiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY}
/>
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Editor**: [scribex-editor](https://www.npmjs.com/package/scribex-editor) (built on [TipTap](https://tiptap.dev/))
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Project Structure

```
scribex-editor-demo/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and theme variables
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Home page with demo
│   └── components/
│       ├── Editor.tsx           # Enhanced editor component
│       ├── Header.tsx           # Navigation header
│       └── ThemeSwitcher.tsx    # Theme toggle button
├── public/                      # Static assets
├── .env.example                 # Environment variables template
└── package.json
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this demo is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mirzasaikatahmmed/scribex-editor-demo)

### Manual Deployment

```bash
# Build the project
pnpm build

# Start the production server
pnpm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Mirza Saikat Ahmmed](https://saikat.com.bd)

## Links

- [NPM Package](https://www.npmjs.com/package/scribex-editor)
- [GitHub Repository](https://github.com/mirzasaikatahmmed/scribex-editor)
- [Live Demo](https://scribex-editor-demo.vercel.app)
- [Author Website](https://saikat.com.bd)

## Acknowledgments

- Built with [TipTap](https://tiptap.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Inspired by [reactjs-tiptap-editor](https://github.com/hunghg255/reactjs-tiptap-editor-demo)
