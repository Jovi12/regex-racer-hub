import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const ColorPicker = () => {
  const [color, setColor] = useState("#22d3ee");
  const [copied, setCopied] = useState<string | null>(null);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgb = hexToRgb(color);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast.success(`${type} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2000);
  };

  const ColorValueCard = ({ title, value, type }: { title: string; value: string; type: string }) => (
    <Card className="p-4 bg-secondary border-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="font-mono text-lg font-semibold">{value}</p>
        </div>
        <Button
          onClick={() => copyToClipboard(value, type)}
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary/80"
        >
          {copied === type ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Color Picker
          </h1>
          <p className="text-muted-foreground">
            Pick a color and get its HEX, RGB, and HSL values instantly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Color Display */}
          <Card className="p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Color Display</h2>
            <div
              className="w-full h-64 rounded-lg shadow-glow mb-6 transition-smooth"
              style={{ backgroundColor: color }}
            />
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Pick a color:</label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-12 rounded-lg cursor-pointer border-2 border-border"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Or enter HEX:</label>
                <Input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="font-mono bg-background border-border"
                  placeholder="#22d3ee"
                />
              </div>
            </div>
          </Card>

          {/* Color Values */}
          <Card className="p-6 shadow-card border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Color Values</h2>
            <div className="space-y-4">
              <ColorValueCard title="HEX" value={color.toUpperCase()} type="HEX" />
              {rgb && (
                <ColorValueCard
                  title="RGB"
                  value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                  type="RGB"
                />
              )}
              {hsl && (
                <ColorValueCard
                  title="HSL"
                  value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
                  type="HSL"
                />
              )}
              {rgb && (
                <ColorValueCard
                  title="RGBA"
                  value={`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`}
                  type="RGBA"
                />
              )}
            </div>
          </Card>
        </div>

        {/* Color Palette */}
        <Card className="p-6 shadow-card border-border bg-card mt-6">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Color Shades</h2>
          <div className="grid grid-cols-5 gap-2">
            {[-40, -20, 0, 20, 40].map((adjustment) => {
              const rgb = hexToRgb(color);
              if (!rgb) return null;
              const adjustedR = Math.max(0, Math.min(255, rgb.r + adjustment));
              const adjustedG = Math.max(0, Math.min(255, rgb.g + adjustment));
              const adjustedB = Math.max(0, Math.min(255, rgb.b + adjustment));
              const adjustedColor = `#${adjustedR.toString(16).padStart(2, "0")}${adjustedG
                .toString(16)
                .padStart(2, "0")}${adjustedB.toString(16).padStart(2, "0")}`;
              return (
                <div
                  key={adjustment}
                  className="h-20 rounded-lg cursor-pointer hover:scale-105 transition-smooth shadow-card"
                  style={{ backgroundColor: adjustedColor }}
                  onClick={() => setColor(adjustedColor)}
                  title={adjustedColor}
                />
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ColorPicker;
