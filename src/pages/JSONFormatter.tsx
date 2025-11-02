import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const JSONFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setIsValid(true);
      toast.success("JSON formatted successfully!");
    } catch (error) {
      setIsValid(false);
      setOutput("");
      toast.error("Invalid JSON: " + (error as Error).message);
    }
  };

  const validateJSON = () => {
    try {
      JSON.parse(input);
      setIsValid(true);
      toast.success("Valid JSON!");
    } catch (error) {
      setIsValid(false);
      toast.error("Invalid JSON: " + (error as Error).message);
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
            JSON Formatter & Validator
          </h1>
          <p className="text-muted-foreground">
            Format and validate your JSON data with syntax highlighting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Input</h2>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"key": "value"}'
              className="min-h-[400px] font-mono text-sm bg-background border-border"
            />
            <div className="flex gap-3 mt-4">
              <Button onClick={formatJSON} className="flex-1 bg-primary hover:bg-primary/90">
                Format
              </Button>
              <Button onClick={validateJSON} variant="secondary" className="flex-1">
                Validate
              </Button>
            </div>
            {isValid !== null && (
              <div className={`mt-3 p-3 rounded-lg text-sm ${isValid ? "bg-green-500/10 text-green-500" : "bg-destructive/10 text-destructive"}`}>
                {isValid ? "✓ Valid JSON" : "✗ Invalid JSON"}
              </div>
            )}
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
            <pre className="min-h-[400px] p-4 bg-background rounded-lg border border-border overflow-auto">
              <code className="text-sm text-foreground font-mono">{output || "Formatted JSON will appear here..."}</code>
            </pre>
          </Card>
        </div>

        {/* Educational Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">What is JSON?</h2>
            <p className="text-muted-foreground mb-4">
              JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It's the most popular data format for APIs and web services.
            </p>
            <h3 className="font-semibold mb-2">Why Use a JSON Formatter?</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Validate JSON syntax to catch errors early</li>
              <li>Format minified JSON for better readability</li>
              <li>Debug API responses quickly</li>
              <li>Compare JSON structures side-by-side</li>
              <li>Ensure proper nesting and structure</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Common Use Cases</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-1">API Development</h3>
                <p className="text-sm">Format and validate API responses to ensure correct data structure before sending to clients.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Configuration Files</h3>
                <p className="text-sm">Validate package.json, tsconfig.json, and other config files to prevent deployment errors.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Data Migration</h3>
                <p className="text-sm">Check JSON data structure when moving between databases or services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Learning & Teaching</h3>
                <p className="text-sm">Visualize JSON structure to understand nested objects and arrays better.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Best Practices for Working with JSON</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">✓ Do's</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Use double quotes for strings</li>
                  <li>Keep property names consistent</li>
                  <li>Use arrays for lists of similar items</li>
                  <li>Validate JSON before deployment</li>
                  <li>Use meaningful property names</li>
                  <li>Keep JSON structure shallow when possible</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">✗ Don'ts</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Don't use single quotes</li>
                  <li>Avoid trailing commas</li>
                  <li>Don't include comments (not valid JSON)</li>
                  <li>Avoid undefined values</li>
                  <li>Don't use functions or methods</li>
                  <li>Avoid circular references</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JSONFormatter;
