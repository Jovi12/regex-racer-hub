import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encodeBase64 = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
      toast.success("Encoded to Base64!");
    } catch (error) {
      toast.error("Encoding failed: " + (error as Error).message);
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
      toast.success("Decoded from Base64!");
    } catch (error) {
      toast.error("Decoding failed: Invalid Base64 string");
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
            Base64 Encoder / Decoder
          </h1>
          <p className="text-muted-foreground">
            Convert text to Base64 and decode Base64 strings back to text
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Input</h2>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to encode or Base64 to decode..."
              className="min-h-[400px] font-mono text-sm bg-background border-border"
            />
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button onClick={encodeBase64} className="bg-primary hover:bg-primary/90">
                <ArrowRight className="h-4 w-4 mr-2" />
                Encode
              </Button>
              <Button onClick={decodeBase64} variant="secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Decode
              </Button>
            </div>
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
              placeholder="Result will appear here..."
              className="min-h-[400px] font-mono text-sm bg-background border-border"
            />
          </Card>
        </div>

        {/* Educational Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Understanding Base64 Encoding</h2>
            <p className="text-muted-foreground mb-4">
              Base64 is a binary-to-text encoding scheme that converts binary data into an ASCII string format. It's commonly used to encode data that needs to be stored or transferred over media designed to handle text.
            </p>
            <h3 className="font-semibold mb-2">How It Works</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Base64 encoding takes 3 bytes of binary data and converts them into 4 ASCII characters using a 64-character alphabet (A-Z, a-z, 0-9, +, /). This increases the data size by approximately 33%.
            </p>
            <h3 className="font-semibold mb-2">When to Use Base64</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Embedding images in HTML/CSS</li>
              <li>Sending binary data over text-based protocols</li>
              <li>Storing credentials in configuration files</li>
              <li>Email attachments (MIME)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Common Applications</h2>
            <div className="space-y-4 text-muted-foreground text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Web Development</h3>
                <p>Embed small images directly in CSS or HTML using data URIs: <code className="text-xs bg-muted px-1 py-0.5 rounded">data:image/png;base64,...</code></p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">API Authentication</h3>
                <p>Basic authentication headers encode username:password in Base64 format.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Data URLs</h3>
                <p>Include file content directly in URLs for faster page loads on small assets.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email Systems</h3>
                <p>MIME encoding uses Base64 to safely transmit binary attachments.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Security Considerations</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="bg-destructive/10 border border-destructive/20 rounded p-3">
                <p className="font-semibold text-destructive mb-1">⚠️ Important: Base64 is NOT encryption</p>
                <p>Base64 encoding is easily reversible and provides no security. Never use it to "hide" sensitive data like passwords or API keys.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use encryption (AES, RSA) for sensitive data, not Base64 alone</li>
                  <li>Base64 is for encoding, not security</li>
                  <li>Always validate decoded data before use</li>
                  <li>Consider file size impact (33% larger when encoded)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Base64Tool;
