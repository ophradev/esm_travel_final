import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  icon: string;
  titleKey: string;
  descKey: string;
  index: number;
}

function ServiceCard({ icon, titleKey, descKey, index }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <Card
      className="hover:-translate-y-2 transition-all duration-300 border-l-4 border-l-primary shadow-md"
      data-testid={`card-service-${index}`}
    >
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <i
              className={`${icon} text-3xl text-primary`}
              aria-hidden="true"
            ></i>
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-card-foreground">
            {t(titleKey)}
          </h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground leading-relaxed">
          {t(descKey)}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "fas fa-map-marked-alt",
      titleKey: "customTravels",
      descKey: "customTravelsDesc",
    },
    {
      icon: "fas fa-hotel",
      titleKey: "accommodation",
      descKey: "accommodationDesc",
    },
    {
      icon: "fas fa-user-friends",
      titleKey: "expertGuides",
      descKey: "expertGuidesDesc",
    },
    {
      icon: "fas fa-shield-alt",
      titleKey: "assistance",
      descKey: "assistanceDesc",
    },
    {
      icon: "fas fa-users",
      titleKey: "groupPackages",
      descKey: "groupPackagesDesc",
    },
    {
      icon: "fas fa-globe-africa",
      titleKey: "culturalDiscovery",
      descKey: "culturalDiscoveryDesc",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center"
          data-testid="text-services-title"
        >
          {t("servicesTitle")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {t("servicesSubtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
