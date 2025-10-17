import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@assets/stock_images/dramatic_sunset_over_adab379f.jpg";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          {t("heroTitle")}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
          {t("heroSubtitle")}
        </p>
        <Button
          onClick={scrollToGallery}
          size="lg"
          className="bg-primary text-primary-foreground hover:scale-105 transition-transform text-lg px-8 py-6 rounded-full"
          data-testid="button-discover"
        >
          {t("discoverDestinations")}
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}
