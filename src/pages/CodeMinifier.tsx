import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type CodeType = "javascript" | "css" | "html";

const CodeMinifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [codeType, setCodeType] = useState<CodeType>("javascript");
  const [copied, setCopied] = useState(false);

  const minifyCode = () => {
    try {
      let minified = "";
      
      switch (codeType) {
        case "javascript":
          minified = input
            .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
            .replace(/\/\/.*/g, "") // Remove single-line comments
            .replace(/\s+/g, " ") // Replace multiple spaces with single space
            .replace(/\s*([{}():;,])\s*/g, "$1") // Remove spaces around punctuation
            .trim();
          break;
        case "css":
          minified = input
            .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
            .replace(/\s+/g, " ") // Replace multiple spaces with single space
            .replace(/\s*([{}:;,])\s*/g, "$1") // Remove spaces around punctuation
            .replace(/;}/g, "}") // Remove last semicolon before closing brace
            .trim();
          break;
        case "html":
          minified = input
            .replace(/<!--[\s\S]*?-->/g, "") // Remove HTML comments
            .replace(/\s+/g, " ") // Replace multiple spaces with single space
            .replace(/>\s+</g, "><") // Remove spaces between tags
            .trim();
          break;
      }
      
      setOutput(minified);
      const savings = ((1 - minified.length / input.length) * 100).toFixed(1);
      toast.success(`Code minified! Reduced by ${savings}%`);
    } catch (error) {
      toast.error("Minification failed: " + (error as Error).message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Code Minifier
          </h1>
          <p className="text-muted-foreground">
            Minify your JavaScript, CSS, and HTML code to reduce file size
          </p>
        </div>

        <div className="mb-6">
          <Select value={codeType} onValueChange={(value) => setCodeType(value as CodeType)}>
            <SelectTrigger className="w-[200px] bg-card border-border">
              <SelectValue placeholder="Select code type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="html">HTML</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Input</h2>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter your ${codeType.toUpperCase()} code here...`}
              className="min-h-[400px] font-mono text-sm bg-background border-border"
            />
            <Button onClick={minifyCode} className="w-full mt-4 bg-primary hover:bg-primary/90">
              Minify Code
            </Button>
          </Card>

          {/* Output Section */}
          <Card className="p-6 shadow-card border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Output</h2>
              {output && (
                <Button
                  onClick={copyToClipboard}
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
                </Button>
              )}
            </div>
            <Textarea
              value={output}
              readOnly
              placeholder="Minified code will appear here..."
              className="min-h-[400px] font-mono text-sm bg-background border-border"
            />
            {output && (
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Original: {input.length} chars</span>
                  <span className="text-muted-foreground">Minified: {output.length} chars</span>
                  <span className="text-primary font-semibold">
                    Saved: {((1 - output.length / input.length) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Educational Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Why Minify Your Code?</h2>
            <p className="text-muted-foreground mb-4">
              Code minification removes unnecessary characters from source code without changing functionality. This reduces file size, leading to faster page loads and improved user experience.
            </p>
            <h3 className="font-semibold mb-2">Benefits of Minification</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li><strong>Faster Load Times:</strong> Smaller files download quicker</li>
              <li><strong>Reduced Bandwidth:</strong> Less data transferred saves costs</li>
              <li><strong>Better SEO:</strong> Page speed is a ranking factor</li>
              <li><strong>Improved UX:</strong> Users experience faster, snappier sites</li>
              <li><strong>Lower Hosting Costs:</strong> Less bandwidth usage</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">What Gets Removed?</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Whitespace</h3>
                <p>Spaces, tabs, and line breaks that aren't necessary for code execution</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Comments</h3>
                <p>All /* comments */ and // inline comments are stripped out</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Optional Characters</h3>
                <p>Semicolons, brackets, and other syntax that can be safely omitted</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Formatting</h3>
                <p>Indentation and code formatting that improves readability but adds bytes</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Best Practices for Production</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Development vs Production</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Keep readable code for development</li>
                  <li>Minify only for production builds</li>
                  <li>Use source maps for debugging</li>
                  <li>Automate with build tools</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Modern Build Tools</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Webpack, Vite, Rollup</li>
                  <li>Automatic minification</li>
                  <li>Tree-shaking dead code</li>
                  <li>Code splitting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Testing After Minification</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Always test minified code</li>
                  <li>Check for syntax errors</li>
                  <li>Verify functionality</li>
                  <li>Monitor performance gains</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CodeMinifier;
