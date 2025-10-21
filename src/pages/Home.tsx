import { Code, Lock, Minimize2, Palette, Search } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "JSON Formatter",
    description: "Format and validate JSON data with syntax highlighting",
    icon: Code,
    path: "/json-formatter",
  },
  {
    title: "Base64 Encoder/Decoder",
    description: "Convert text to Base64 and back with ease",
    icon: Lock,
    path: "/base64",
  },
  {
    title: "Code Minifier",
    description: "Minify your JavaScript, CSS, and HTML code",
    icon: Minimize2,
    path: "/minifier",
  },
  {
    title: "Color Picker",
    description: "Pick colors and get HEX, RGB, and HSL values",
    icon: Palette,
    path: "/color-picker",
  },
  {
    title: "Regex Tester",
    description: "Test and debug regular expressions in real-time",
    icon: Search,
    path: "/regex-tester",
  },
];

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4 text-6xl animate-fade-in">⚙️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              DevTools Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
            Free, Fast, and Powerful Online Tools for Developers
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            All your favorite developer tools — in one place. No sign-up required.
          </p>
          <Link to="/json-formatter">
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Ad placeholder for future Google AdSense integration */}
      {/* <div className="container mx-auto px-4 mb-12">
        <div className="w-full h-24 border border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center text-muted-foreground/50 text-sm">
          Ad Space (Horizontal Banner - 970x90)
        </div>
      </div> */}

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.path} {...tool} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              All tools run directly in your browser for instant results
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold mb-2">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              Your data never leaves your device. Complete privacy guaranteed
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">💯</div>
            <h3 className="text-lg font-semibold mb-2">Always Free</h3>
            <p className="text-sm text-muted-foreground">
              No hidden costs, no subscriptions. Free forever
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
