import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const RegexTester = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState({ g: true, i: false, m: false });
  const [testString, setTestString] = useState("");

  const regexResult = useMemo(() => {
    if (!pattern) return { isValid: false, matches: [], error: null };

    try {
      const flagString = Object.entries(flags)
        .filter(([_, enabled]) => enabled)
        .map(([flag]) => flag)
        .join("");
      
      const regex = new RegExp(pattern, flagString);
      const matches = [...testString.matchAll(regex)].map((match) => ({
        text: match[0],
        index: match.index || 0,
        groups: match.slice(1),
      }));

      return { isValid: true, matches, error: null };
    } catch (error) {
      return { isValid: false, matches: [], error: (error as Error).message };
    }
  }, [pattern, flags, testString]);

  const highlightMatches = () => {
    if (!regexResult.matches.length) return testString;

    let result = "";
    let lastIndex = 0;

    regexResult.matches.forEach((match) => {
      result += testString.slice(lastIndex, match.index);
      result += `<mark class="bg-primary/30 text-primary-foreground rounded px-1">${match.text}</mark>`;
      lastIndex = match.index + match.text.length;
    });

    result += testString.slice(lastIndex);
    return result;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Regex Tester
          </h1>
          <p className="text-muted-foreground">
            Test and debug regular expressions with real-time highlighting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pattern Input */}
          <Card className="lg:col-span-2 p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Regular Expression</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Pattern:</label>
                <Input
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  placeholder="Enter regex pattern (e.g., \d+)"
                  className="font-mono bg-background border-border"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Flags:</label>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="flag-g"
                      checked={flags.g}
                      onCheckedChange={(checked) =>
                        setFlags({ ...flags, g: checked as boolean })
                      }
                    />
                    <label htmlFor="flag-g" className="text-sm cursor-pointer">
                      g (global)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="flag-i"
                      checked={flags.i}
                      onCheckedChange={(checked) =>
                        setFlags({ ...flags, i: checked as boolean })
                      }
                    />
                    <label htmlFor="flag-i" className="text-sm cursor-pointer">
                      i (case insensitive)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="flag-m"
                      checked={flags.m}
                      onCheckedChange={(checked) =>
                        setFlags({ ...flags, m: checked as boolean })
                      }
                    />
                    <label htmlFor="flag-m" className="text-sm cursor-pointer">
                      m (multiline)
                    </label>
                  </div>
                </div>
              </div>

              {regexResult.error && (
                <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
                  Error: {regexResult.error}
                </div>
              )}

              {regexResult.isValid && (
                <div className="p-3 bg-primary/10 text-primary rounded-lg text-sm">
                  Valid regex • {regexResult.matches.length} match(es) found
                </div>
              )}
            </div>
          </Card>

          {/* Quick Reference */}
          <Card className="p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Quick Reference</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="text-primary">\d</code>
                <span className="text-muted-foreground">Digit</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">\w</code>
                <span className="text-muted-foreground">Word char</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">\s</code>
                <span className="text-muted-foreground">Whitespace</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">.</code>
                <span className="text-muted-foreground">Any char</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">*</code>
                <span className="text-muted-foreground">0 or more</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">+</code>
                <span className="text-muted-foreground">1 or more</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">?</code>
                <span className="text-muted-foreground">0 or 1</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">^</code>
                <span className="text-muted-foreground">Start</span>
              </div>
              <div className="flex justify-between">
                <code className="text-primary">$</code>
                <span className="text-muted-foreground">End</span>
              </div>
            </div>
          </Card>

          {/* Test String */}
          <Card className="lg:col-span-3 p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Test String</h2>
            <Textarea
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              placeholder="Enter text to test against your regex..."
              className="min-h-[150px] font-mono text-sm bg-background border-border mb-4"
            />
            
            {testString && (
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
                  Highlighted Matches:
                </h3>
                <div
                  className="font-mono text-sm whitespace-pre-wrap break-words"
                  dangerouslySetInnerHTML={{ __html: highlightMatches() }}
                />
              </div>
            )}
          </Card>
        </div>

        {/* Educational Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">What are Regular Expressions?</h2>
            <p className="text-muted-foreground mb-4">
              Regular expressions (regex) are patterns used to match character combinations in strings. They're a powerful tool for text processing, validation, search, and manipulation across all programming languages.
            </p>
            <h3 className="font-semibold mb-2">Common Applications</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Email and phone number validation</li>
              <li>Password strength checking</li>
              <li>URL parsing and manipulation</li>
              <li>Log file analysis</li>
              <li>Data extraction and web scraping</li>
              <li>Find and replace operations</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Real-World Examples</h2>
            <div className="space-y-3 text-muted-foreground text-sm font-mono">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email Validation</h3>
                <code className="text-xs bg-muted px-2 py-1 rounded block">^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{"{2,}"}$</code>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone Number (US)</h3>
                <code className="text-xs bg-muted px-2 py-1 rounded block">^\(?\d{"{3}"}\)?[-.\s]?\d{"{3}"}[-.\s]?\d{"{4}"}$</code>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">URL Pattern</h3>
                <code className="text-xs bg-muted px-2 py-1 rounded block">^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{"{1,256}"}\.[a-zA-Z0-9()]{"{1,6}"}$</code>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Date (YYYY-MM-DD)</h3>
                <code className="text-xs bg-muted px-2 py-1 rounded block">^\d{"{4}"}-\d{"{2}"}-\d{"{2}"}$</code>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Tips for Writing Better Regex</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Performance</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Be specific with patterns</li>
                  <li>Use non-capturing groups when possible</li>
                  <li>Avoid excessive backtracking</li>
                  <li>Test with realistic data volumes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Readability</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Add comments for complex patterns</li>
                  <li>Break long patterns into smaller parts</li>
                  <li>Use named capture groups</li>
                  <li>Document expected input format</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Common Pitfalls</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Remember to escape special characters</li>
                  <li>Test edge cases thoroughly</li>
                  <li>Consider Unicode and internationalization</li>
                  <li>Validate with multiple test strings</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegexTester;
