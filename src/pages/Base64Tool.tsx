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

        {/* Info Section */}
        <Card className="p-6 shadow-card border-border bg-card mt-6">
          <h3 className="text-lg font-semibold mb-3 text-foreground">About Base64</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format.
            It's commonly used for encoding data in emails, URLs, and data URIs.
          </p>
          <p className="text-sm text-muted-foreground">
            This tool supports Unicode characters and handles encoding/decoding with proper UTF-8 support.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Base64Tool;
