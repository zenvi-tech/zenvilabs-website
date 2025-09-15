import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Code2, Brain, Users, Target, Globe } from "lucide-react";

const About = () => {
  const approaches = [
    { category: "End-to-end builds", items: ["Full-stack development", "Production deployment", "Integration support"] },
    { category: "Context-aware solutions", items: ["Business logic integration", "Custom workflows", "Team-focused design"] },
    { category: "Focused interventions", items: ["Rapid prototypes", "AI audits", "Targeted experiments"] },
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Enterprise Enablement",
      description: "Define high-impact use cases, architect scalable infrastructure, and upskill teams for AI adoption."
    },
    {
      icon: Code2,
      title: "AI Product Development",
      description: "Build GenAI tools, full-stack solutions, and bespoke AI/ML engineering for continuous impact."
    },
    {
      icon: Target,
      title: "Data & Applied Intelligence",
      description: "Design data pipelines, advanced analytics, and domain-specific applications across sectors."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4">
              <Globe className="h-4 w-4 mr-2" />
              About Zenvi Labs
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-[hsl(var(--zenvi-orange))]">
                AI Solutions
              </span>
              {" "}That Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Zenvi Labs is a lean LLM product focused team spun out of startup roots.
              We help companies build production-grade AI products and platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Evolution</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  From focused use cases to scalable AI solutions across multiple sectors.
                  We started with{" "}
                  <a
                    href="https://zenvi.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-medium underline decoration-accent/30 hover:decoration-accent transition-all duration-300"
                  >
                    Zenvi Energy
                  </a>
                  , expanded into insurance and telco, and now
                  focus on custom AI and LLM-based product development.
                </p>
                <p>
                  Our team has developed internal fine-tuned LLMs, launched proprietary IDP
                  technology, and consistently outperformed mainstream tools. We bring
                  experience from companies like Deliveroo, Tesco, Arcano Capital, and more.
                </p>
                <p>
                  We build AI solutions at the intersection of finance, machine learning,
                  data science, and product thinking — tailoring each engagement to your
                  goals and stage of AI maturity.
                </p>
              </div>
            </div>

            <div 
              className="rounded-2xl shadow-strong h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('/public/assets/zenvi-team.webp')`
              }}
            />
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-6 md:p-8 text-center hover:shadow-medium transition-all duration-300 group">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-foreground mb-4 text-lg">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Approach */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Approach to Building</h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {approaches.map((approach, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Code2 className="h-6 w-6 text-accent mr-3" />
                    <h4 className="font-semibold text-foreground text-lg">{approach.category}</h4>
                  </div>
                  <div className="space-y-2">
                    {approach.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-sm mr-2 mb-2">
                        {item}
                      </Badge>
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

export default About;