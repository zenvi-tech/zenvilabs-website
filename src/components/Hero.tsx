import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mountain, Calendar, FileText, Download } from "lucide-react";
import { useState } from "react";
const Hero = () => {
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
        "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

      // Submit email to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'Zenvi Labs Website - Hero PDF Download'
        })
      });

      // Local PDF file
      const pdfUrl = "assets/ZenviLabs-es-Sept.pdf";

      // Trigger PDF download from local file
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = "_blank";
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

  const scrollToSection = (sectionId: string) => {
    // Use the same mobile detection logic as Index component
    const viewportWidth = window.innerWidth;
    const screenWidth = window.screen.width;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Detect if zoomed (viewport much smaller than screen)
    const isZoomed = viewportWidth < (screenWidth / devicePixelRatio) * 0.8;
    
    // Primary mobile detection
    const isMobileSize = viewportWidth < 768;
    
    // Secondary detection for tablets/zoomed desktop
    const isTabletOrZoomed = viewportWidth < 1024 && (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      isZoomed
    );
    
    const isMobile = isMobileSize || isTabletOrZoomed;
    
    console.log('scrollToSection called with:', sectionId, 'isMobile:', isMobile);
    
    if (isMobile) {
      // On mobile, dispatch a custom event that the Index component can handle
      console.log('Dispatching openAccordionSection event for:', sectionId);
      const event = new CustomEvent('openAccordionSection', { 
        detail: { sectionId } 
      });
      window.dispatchEvent(event);
      return;
    }
    
    // Default behavior for desktop or other sections
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${import.meta.env.BASE_URL}assets/sea-website.png')`
    }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout - Stack vertically */}
          <div className="block lg:hidden text-center space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[hsl(var(--zenvi-orange))]">Zenvi Labs</span>
              </h1>
                <p className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-6 leading-tight">
                Our Intelligence, Your Energy

              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium italic drop-shadow-lg">
                We shape your business automation needs into AI-powered solutions.
              </p>
            </div>

            {/* PDF Download Section - Mobile */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-strong">
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    More about ZenviLabs?
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Get detailed insights into our AI solutions and approach.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-center backdrop-blur-sm">
                    <div className="w-8 h-8 mx-auto rounded-full bg-green-400/20 flex items-center justify-center mb-2">
                      <Download className="h-4 w-4 text-green-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-green-400 mb-1">Download Started!</h4>
                    <p className="text-xs text-green-300">Check your downloads folder.</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Download Another Copy
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handlePDFDownload} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg text-foreground bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white hover:bg-accent/90 px-6 py-3"
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
                  </form>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="accent" size="lg" onClick={() => scrollToSection("experience")} className="shadow-strong text-lg px-8 py-4">
                <FileText className="h-6 w-6" />
                Our Work
              </Button>
              <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm text-lg px-8 py-4" onClick={() => scrollToSection("contact")}>
                <Calendar className="h-6 w-6" />
                Let's Chat
              </Button>
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/company/zenvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center p-3 text-center text-white bg-[#0A66C2] w-[220px] h-10 rounded-2xl font-medium text-base hover:bg-[#004182] transition-colors shadow-medium"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>

          {/* Desktop Layout - 2 Columns */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center lg:min-h-[70vh]">
            {/* Left Column - Main Content */}
            <div className="space-y-8 xl:space-y-10">
              <div className="space-y-6 xl:space-y-8">
                <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                  <span className="text-[hsl(var(--zenvi-orange))]" style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 0, 0, 0.3)'
                  }}>Zenvi Labs</span>
                </h1>
                <p className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-6 leading-tight">
                  Our Intelligence, Your Energy
                </p>
                <p className="text-lg xl:text-xl text-white/90 mb-8 leading-relaxed font-medium italic drop-shadow-lg">
                  We shape your business automation needs into AI-powered solutions.
                </p>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => window.open('https://zenvi.es', '_blank')}
                  className="shadow-strong text-lg px-6 py-3"
                >
                  Our Energy Platform
                </Button>
                <a
                  href="https://www.linkedin.com/company/zenvi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center px-6 py-3 text-center text-white bg-[#0A66C2] rounded-2xl font-medium text-lg hover:bg-[#004182] transition-colors shadow-medium"
                >
                  Follow us on LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column - Call to Action */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 xl:p-12 border border-white/20 shadow-strong">
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-6 leading-tight">
                    Let's Build Something{" "}
                    <span className="text-[hsl(var(--zenvi-orange))]">Amazing Together</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <div
                    className="flex items-center justify-center gap-4 cursor-pointer group w-full"
                    onClick={() => scrollToSection("contact")}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 text-white flex items-center justify-center shadow-strong group-hover:scale-105 transition-all duration-300 group-hover:shadow-xl">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-lg md:text-2xl font-bold text-[hsl(var(--zenvi-orange))] group-hover:text-[hsl(var(--zenvi-orange))]/80 transition-colors duration-300">
                        Let's Speak
                      </p>
                    </div>
                  </div>

                  {/* PDF Download Section - Desktop */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-center space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          Download Company Overview
                        </h3>
                        <p className="text-sm text-white/70 mb-4">
                          Get insights into our AI solutions and approach.
                        </p>
                      </div>

                      {isSubmitted ? (
                        <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-center backdrop-blur-sm">
                          <div className="w-6 h-6 mx-auto rounded-full bg-green-400/20 flex items-center justify-center mb-2">
                            <Download className="h-3 w-3 text-green-400" />
                          </div>
                          <h4 className="text-sm font-semibold text-green-400 mb-1">Download Started!</h4>
                          <p className="text-xs text-green-300">Check your downloads folder.</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs"
                            onClick={() => setIsSubmitted(false)}
                          >
                            Download Another Copy
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handlePDFDownload} className="space-y-3">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="w-full px-3 py-2 border border-white/30 rounded-lg text-foreground bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-sm"
                          />
                          <Button
                            type="submit"
                            variant="accent"
                            size="sm"
                            disabled={isSubmitting}
                            className="w-full bg-accent text-white hover:bg-accent/90 px-4 py-2 text-sm"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin mr-2">⏳</span>
                                Processing...
                              </>
                            ) : (
                              <>
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;