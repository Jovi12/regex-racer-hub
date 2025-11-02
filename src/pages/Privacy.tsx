import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2, 2025</p>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              At DevTools Hub, we take your privacy seriously. This Privacy Policy explains how we handle your data when you use our online developer tools.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded p-4">
              <p className="font-semibold text-primary mb-2">Your Data Stays Private</p>
              <p className="text-sm text-muted-foreground">
                All our tools run entirely in your browser. Your data never leaves your device or gets sent to our servers. We don't collect, store, or process any of your input data.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tool Usage Data</h3>
                <p className="text-sm">
                  Your input data (JSON, text, code, etc.) is processed entirely in your browser using JavaScript. We do not have access to this data, and it is never transmitted to our servers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Analytics Data</h3>
                <p className="text-sm">
                  We use Google Analytics and Google AdSense to understand how visitors use our site. This includes:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Pages visited and time spent on site</li>
                  <li>Browser type and device information</li>
                  <li>General geographic location (country/city level)</li>
                  <li>Referring websites</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookies</h3>
                <p className="text-sm">
                  We use cookies for analytics and advertising purposes through Google AdSense. These cookies help us understand site usage and display relevant ads. You can control cookies through your browser settings.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To improve our tools and user experience</li>
              <li>To analyze site traffic and usage patterns</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To ensure our services are functioning properly</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Google Analytics</h3>
                <p className="text-sm">
                  We use Google Analytics to understand how visitors interact with our site. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Google AdSense</h3>
                <p className="text-sm">
                  We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              Since all tool operations happen in your browser, your data remains on your device. We implement security measures to protect our website, but the nature of our tools means your sensitive data never needs to be transmitted to us.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Use our tools without creating an account</li>
              <li>Block cookies through your browser settings</li>
              <li>Opt out of personalized advertising</li>
              <li>Clear your browser data at any time</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please reach out through our GitHub profile or LinkedIn.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
