
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Linkedin, MessageSquare, MapPin, Mountain, Clock, Download, FileText } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePDFDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email to Google Sheets via Google Apps Script Web App
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
        "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; // Replace with your Google Apps Script URL

      // Submit email to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script doesn't support CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'Zenvi Labs Website - PDF Download'
        })
      });

      // Local PDF file
      const pdfUrl = "assets/ZenviLabs-es-Sept.pdf";

      // Trigger PDF download from local file
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = "_blank"; // Open in new tab as fallback
      link.download = "ZenviLabs-es-Sept.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    {
      title: "AI Strategy & Enterprise Enablement",
      description: "Define high-impact use cases, assess readiness, and develop execution roadmaps for AI adoption"
    },
    {
      title: "AI Product Development",
      description: "Build GenAI tools using models like GPT, Claude, or custom LLM deployments with full-stack solutions"
    },
    {
      title: "Data & Applied Intelligence",
      description: "Design pipelines that support reliable AI experimentation and extract insights across sectors"
    }
  ];

  // Working URLs - replace these with your actual URLs
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const emailAddress = import.meta.env.VITE_EMAIL;

  const handleServiceBooking = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
              Let's Build Something{" "}
              <span className="text-[hsl(var(--zenvi-orange))]">
                Amazing Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're looking to rapidly prototype AI solutions, scale your ML initiatives,
              or build production-grade AI products, our team is ready to help.
            </p>
          </div>

          {/* Combined Contact Section */}
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 lg:p-16 bg-card border-border shadow-strong">
              {/* Location Info Header */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10 md:mb-12 pb-8 md:pb-10 border-b border-border">
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-lg">Based in Madrid & London</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Mountain className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-lg">AI-first solutions</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Clock className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-lg">EU Timezone</span>
                </div>
              </div>

              {/* Main Contact Content */}
              <div className="text-center space-y-10 md:space-y-12">
                <button
                  className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-accent to-accent/80 text-white flex items-center justify-center shadow-strong hover:scale-105 transition-transform cursor-pointer"
                  onClick={handleServiceBooking}
                  aria-label="Book a consultation via Calendly"
                >
                  <Calendar className="h-12 w-12 md:h-14 md:w-14 text-white" />
                </button>

                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Let's Discuss Your AI Project
                  </h3>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
                    Our expertise spans across three core service areas to accelerate your AI journey:
                  </p>
                </div>

                {/* Services Grid */}
                <div className="bg-gradient-alt rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-border shadow-medium">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {serviceOptions.map((service, index) => (
                      <div key={index} className="bg-card rounded-xl p-6 md:p-8 border border-border hover:shadow-medium transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-4 h-4 bg-gradient-to-r from-accent to-accent/80 rounded-full shadow-sm mt-2 flex-shrink-0" />
                          <div className="space-y-3">
                            <h4 className="font-bold text-foreground text-lg md:text-xl leading-tight">{service.title}</h4>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PDF Download Section */}
                <div className="bg-gradient-alt rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-border shadow-medium">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/80 text-white flex items-center justify-center shadow-strong">
                      <FileText className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Download Our Company Overview
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Get detailed insights into our AI solutions, case studies, and approach.
                        Enter your email to receive our comprehensive company overview PDF.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                          <Download className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Download Started!</h4>
                        <p className="text-green-700">Thank you! Your download should begin shortly. Check your downloads folder.</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Download Another Copy
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handlePDFDownload} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="flex-1 px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                          />
                          <Button
                            type="submit"
                            variant="accent"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-accent text-white hover:bg-accent/90 px-6 py-3"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin mr-2">⏳</span>
                                Processing...
                              </>
                            ) : (
                              <>
                                <Download className="h-5 w-5 mr-2" />
                                Download PDF
                              </>
                            )}
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                          We respect your privacy. Your email will only be used to send you the PDF and occasional updates about Zenvi Labs.
                        </p>
                      </form>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                  <Button
                    variant="accent"
                    size="lg"
                    className="flex-1 shadow-strong text-lg md:text-xl py-6 md:py-8 px-8 md:px-10 bg-accent text-white hover:bg-accent/90 border-none"
                    onClick={handleServiceBooking}
                  >
                    <Calendar className="h-6 w-6 mr-3 text-white" />
                    Schedule via Calendly
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-accent/30 hover:border-accent text-lg md:text-xl py-6 md:py-8 px-8 md:px-10 hover:bg-accent/10 text-foreground hover:text-accent transition-all duration-300"
                    onClick={() => window.open(linkedinUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <Linkedin className="h-6 w-6 mr-3" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
