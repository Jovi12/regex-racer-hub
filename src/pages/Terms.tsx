import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2, 2025</p>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using DevTools Hub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our website or services.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Permitted Use</h3>
                <p className="text-sm mb-2">You may use DevTools Hub for:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Personal development and learning</li>
                  <li>Professional software development work</li>
                  <li>Educational purposes</li>
                  <li>Commercial projects</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Prohibited Use</h3>
                <p className="text-sm mb-2">You may NOT use DevTools Hub for:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Any illegal or unauthorized purpose</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with or disrupting the service</li>
                  <li>Distributing malware or harmful code</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Free Service</h2>
            <p className="text-muted-foreground mb-4">
              DevTools Hub is provided free of charge. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
            </p>
            <div className="bg-muted/50 border border-border rounded p-4">
              <p className="text-sm">
                <strong>No Warranty:</strong> The service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the service will be error-free or uninterrupted.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Content and Data</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p>
                All data you input into our tools is processed entirely in your browser. We do not store, collect, or have access to your input data.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded p-3">
                <p className="font-semibold text-primary mb-1">Important</p>
                <p>You are solely responsible for your use of the tools and any data you process. Always keep backups of important data before processing.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p>
                The design, code, and content of DevTools Hub are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.
              </p>
              <p>
                The tools themselves may be used freely for processing your own data.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links and Services</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites or services (including advertisements) that are not owned or controlled by DevTools Hub. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
            <p className="text-muted-foreground mb-3">
              We display advertisements through Google AdSense to support the free availability of our tools. By using our service, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Ads are provided by third-party advertisers</li>
              <li>We are not responsible for the content of advertisements</li>
              <li>Clicking on ads is at your own risk</li>
              <li>Ad blockers may impact your experience but are permitted</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-3">
              To the maximum extent permitted by law, DevTools Hub shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Errors or inaccuracies in tool output</li>
              <li>Service interruptions or unavailability</li>
              <li>Third-party actions or content</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold harmless DevTools Hub from any claims, damages, losses, liabilities, and expenses arising from your use of the service or violation of these terms.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us through our GitHub or LinkedIn profiles.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
