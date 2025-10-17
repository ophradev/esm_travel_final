import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@assets/stock_images/vibrant_african_mark_cd082864.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center"
          data-testid="text-about-title"
        >
          {t("aboutTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-8 backdrop-blur-sm bg-card/80">
              <p className="text-base md:text-lg text-card-foreground leading-relaxed mb-4">
                {t("aboutText1")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                {t("aboutText2")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("aboutText3")}
              </p>
            </Card>
          </div>

          <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={aboutImage}
              alt="Marché africain coloré"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
