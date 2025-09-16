
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Working URLs - replace these with your actual URLs
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const emailAddress = import.meta.env.VITE_EMAIL;

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${emailAddress}`, label: "Email" }
  ];

  const handleQuickLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  const handleSocialClick = (href: string) => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-gradient-mountain text-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand - Full width on all screens */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-[hsl(var(--zenvi-orange))] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ZL</span>
                </div>
                <span className="text-2xl font-bold">Zenvi Labs</span>
              </div>
              <p className="text-white/80 max-w-md">
                AI consultancy helping companies rapidly prototype, test, and deploy AI-powered tools.
                Building production-grade AI products with a focus on speed, impact, and product thinking.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Mountain className="h-3 w-3 mr-1" />
                  Madrid & London
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Code className="h-3 w-3 mr-1" />
                  AI Consultancy
                </Badge>
              </div>
            </div>

            {/* Quick Links and Connect - side by side on mobile, separate on desktop */}
            <div className="col-span-1 grid grid-cols-2 gap-8 md:contents">
              {/* Quick Links */}
              <div className="md:col-span-1">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <nav className="space-y-2">
                  <button
                    onClick={() => handleQuickLinkClick("#about")}
                    className="block text-white/80 hover:text-accent transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => handleQuickLinkClick("#experience")}
                    className="block text-white/80 hover:text-accent transition-colors"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => handleQuickLinkClick("#team")}
                    className="block text-white/80 hover:text-accent transition-colors"
                  >
                    Team
                  </button>
                  <button
                    onClick={() => handleQuickLinkClick("#contact")}
                    className="block text-white/80 hover:text-accent transition-colors"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => handleQuickLinkClick("/privacy")}
                    className="block text-white/80 hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </button>
                </nav>
              </div>

              {/* Connect */}
              <div className="md:col-span-1">
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex flex-col space-y-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="justify-start p-0 h-auto text-white/80 hover:text-accent w-fit"
                      onClick={() => handleSocialClick(social.href)}
                    >
                      <social.icon className="h-4 w-4 mr-2" />
                      {social.label}
                    </Button>
                  ))}

                  {/* RSS Feed */}
                  <a
                    href="/rss/feed.xml"
                    target="_blank"
                    className="flex items-center text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    RSS Feed
                  </a>

                  {/* LinkedIn Follow Button */}
                  <div className="pt-2">
                    <a
                      href="https://www.linkedin.com/company/zenvi-labs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center text-white bg-[#0A66C2] w-[200px] h-10 leading-10 rounded-2xl font-medium text-sm hover:bg-[#004182] transition-colors"
                    >
                      Follow Zenvi Labs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-white/60 text-sm text-center">
                <span>© {currentYear} Zenvi Labs.</span>
                <div className="flex items-center gap-1">
                  <span>Our Intelligence, Your Energy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
