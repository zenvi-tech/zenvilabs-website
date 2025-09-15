import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Trophy, ExternalLink, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const services = [
    {
      category: "AI Strategy & Enterprise Enablement",
      description: "Define high-impact use cases, assess readiness, and develop execution roadmaps for AI adoption.",
      offerings: [
        "AI strategy consulting: Define high-impact use cases and develop execution roadmaps",
        "MLOps & scaling: Architect scalable infrastructure and empower internal teams",
        "Change management & enablement: Upskill teams through design, training, and tooling"
      ],
      tech: ["Strategy", "MLOps", "Training", "Architecture", "Roadmaps"]
    },
    {
      category: "AI Product Development",
      description: "Build GenAI tools using models like GPT, Claude, or custom LLM deployments with full-stack solutions.",
      offerings: [
        "LLM & GenAI development: Build GenAI tools using GPT, Claude, or custom deployments",
        "Full-stack product builds: Complete AI-powered solutions from back-end to front-end UX",
        "Bespoke AI/ML: Engineering intelligence for continuous impact"
      ],
      tech: ["LLMs", "GenAI", "Full-stack", "Custom ML", "Production"]
    },
    {
      category: "Data & Applied Intelligence",
      description: "Design pipelines that support reliable AI experimentation and extract insights across sectors.",
      offerings: [
        "Data strategy & architecture: Design pipelines for reliable AI experimentation and use",
        "Advanced analytics & modeling: Extract insights, forecast outcomes, automate decisions",
        "Domain-specific applications: From energy and logistics to finance and retail"
      ],
      tech: ["Data Pipelines", "Analytics", "Forecasting", "Domain AI", "Automation"]
    }
  ];

  const useCases = [
    {
      title: "Brokerage Energy Platform",
      status: "Production",
      description: "Intelligent document interpretation and automated contracting for energy brokerage.",
      features: [
        "NLP-powered legal analysis",
        "Automatic data extraction",
        "Negotiation automation",
        "Seamless switching technology"
      ]
    },
    {
      title: "Insurance Policy Reader",
      status: "Ongoing",
      description: "IDP and OCR-based technology for insurance policy analysis and risk assessment.",
      features: [
        "Insurance policy data extraction",
        "Risk analysis and coverage optimization",
        "Clause analysis",
        "Anomaly detection"
      ]
    },
    {
      title: "Photovoltaic Energy Development",
      status: "Ongoing",
      description: "Real-time market intelligence and predictive energy models for solar development.",
      features: [
        "Continuous price monitoring",
        "Dynamic web scraping",
        "Energy allocation models",
        "Network optimization"
      ]
    }
  ];


  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Building2 className="h-4 w-4 mr-2" />
              Core Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-[hsl(var(--zenvi-orange))]">
                AI Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We help companies build production-grade AI products and platforms across
              three core service areas, tailored to your goals and AI maturity stage.
            </p>
          </div>

          {/* AI Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Service Areas</h3>
            <Accordion type="multiple" className="space-y-4">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`service-${index}`} className="border rounded-lg border-l-4 border-l-accent">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full text-left">
                      <div className="lg:flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-bold text-foreground">{service.category}</h4>
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-accent" />
                            What We Deliver
                          </h5>
                          <ul className="space-y-2">
                            {service.offerings.map((offering, offeringIndex) => (
                              <li key={offeringIndex} className="text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
                                <span>{offering}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Focus Areas</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Real-World Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-foreground">
                      {useCase.title === "Brokerage Energy Platform" ? (
                        <a
                          href="https://zenvi.es"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent transition-all duration-300"
                        >
                          {useCase.title}
                        </a>
                      ) : (
                        useCase.title
                      )}
                    </h4>
                    <Badge variant={useCase.status === 'Production' ? 'default' : 'secondary'} className="text-xs">
                      {useCase.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;