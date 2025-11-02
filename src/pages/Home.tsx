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

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About DevTools Hub</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              DevTools Hub is a comprehensive collection of free online tools designed specifically for developers, web designers, and IT professionals. Our mission is to provide fast, reliable, and privacy-focused utilities that make your daily development tasks easier.
            </p>
            <p>
              Every tool on this platform runs entirely in your browser, ensuring that your sensitive data never leaves your device. Whether you're formatting JSON responses, encoding Base64 strings, minifying production code, picking the perfect color, or testing regular expressions, DevTools Hub has you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Our Philosophy</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Privacy-first: All processing happens locally</li>
                  <li>✓ No registration required: Start using tools immediately</li>
                  <li>✓ Fast & efficient: Optimized for performance</li>
                  <li>✓ Always free: No hidden costs or premium tiers</li>
                  <li>✓ Open & accessible: Works on all modern browsers</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Who Uses DevTools Hub?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Frontend & Backend Developers</li>
                  <li>• Web Designers & UI/UX Professionals</li>
                  <li>• DevOps & System Administrators</li>
                  <li>• QA Engineers & Testers</li>
                  <li>• Computer Science Students</li>
                  <li>• Technical Writers & Documentarians</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Is DevTools Hub really free?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! All tools are completely free to use with no hidden costs, subscriptions, or premium features. We believe essential developer tools should be accessible to everyone.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Is my data safe?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. All tools run entirely in your browser using JavaScript. Your data never leaves your device or gets sent to our servers. We don't store, log, or track any of your input data.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Do I need to create an account?</h3>
              <p className="text-muted-foreground text-sm">
                No registration required! Just visit the site and start using any tool immediately. We respect your privacy and don't require personal information.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Which browsers are supported?</h3>
              <p className="text-muted-foreground text-sm">
                DevTools Hub works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version for the best experience.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can I use these tools offline?</h3>
              <p className="text-muted-foreground text-sm">
                Once a tool page is loaded, it will work offline since all processing happens in your browser. However, you'll need an internet connection to initially access the website.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Will you add more tools?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! We're constantly working on adding new developer tools based on community feedback. Follow our GitHub to stay updated on new releases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
