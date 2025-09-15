import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Linkedin, ExternalLink } from "lucide-react";

const Team = () => {
  const partners = [
    {
      name: "Manuel Goudie",
      role: "Partner",
      email: "manuel@zenvi.es",
      experience: "7+ years",
      background: "Banking and investment funds",
      description: "Previously VP at Arcano Capital, managing €2.4B in assets. Worked in M&A at Arcano and PwC, focusing on banking and insurance.",
      education: "Business Administration, Master's in Finance from IEB and LSE",
      companies: ["Arcano Capital", "PwC"],
      image: "/assets/manu_website.png"
    },
    {
      name: "Pablo Portillo",
      role: "Partner",
      email: "pablo@zenvi.es",
      experience: "7+ years",
      background: "Data scientist and software developer",
      description: "Previously at Bia Power (energy optimization for EV fleets), Deliveroo, and Glovo in food delivery sector.",
      education: "Mathematics and Computer Engineering from Universidad Politécnica de Madrid",
      companies: ["Bia Power", "Deliveroo", "Glovo"],
      image: "/assets/pablo_website.png"
    },
    {
      name: "Giovanni Doni, PhD",
      role: "Partner",
      email: "giovanni@zenvi.es",
      experience: "10+ years",
      background: "Machine learning and data science",
      description: "Sr. ML Engineer at Deliveroo, leading language model deployment. Previously Sr. Data Scientist at Tesco and Research Collaborator.",
      education: "PhD in Computational Physics from King's College London, Materials Engineering degrees",
      companies: ["Deliveroo", "Tesco", "SUPSI"],
      image: "/assets/giovanni_website.png"
    }
  ];

  const team = [
    { name: "Estela Falgás", role: "Full-stack Developer" },
    { name: "Enrique Sainz", role: "Product Designer" },
    { name: "Alejandro Mur", role: "Full-stack Developer" },
  ];

  return (
    <section id="team" className="py-16 md:py-20 bg-gradient-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4">
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our{" "}
              <span className="text-[hsl(var(--zenvi-orange))]">
                Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build AI solutions at the intersection of finance, machine learning,
              data science, and product.
            </p>
          </div>

          {/* Partners */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Partners</h3>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-medium transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gray-100">
                      <img
                        src={partner.image}
                        alt={`${partner.name} - ${partner.role}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-[hsl(var(--zenvi-orange))] flex items-center justify-center hidden">
                        <span className="text-white font-bold text-xl">
                          {partner.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{partner.name}</h4>
                    <Badge variant="secondary" className="mb-3">{partner.role}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">
                      {partner.experience} in {partner.background}
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <p className="text-muted-foreground">{partner.description}</p>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Education</p>
                      <p className="text-muted-foreground text-xs">{partner.education}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Experience</p>
                      <div className="flex flex-wrap gap-1">
                        {partner.companies.map((company, companyIndex) => (
                          <Badge key={companyIndex} variant="outline" className="text-xs">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <a
                        href={`mailto:${partner.email}`}
                        className="flex items-center gap-2 text-accent hover:underline text-sm"
                      >
                        <Mail className="h-4 w-4" />
                        {partner.email}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {team.map((member, index) => (
                <Card key={index} className="p-4 md:p-6 text-center hover:shadow-medium transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--zenvi-neutral-light))] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[hsl(var(--zenvi-dark))] font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;