import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import ghanaBeach from "@assets/stock_images/west_african_beach_c_fc27b6e4.jpg";
import ghanaKakum from "@assets/stock_images/ghana_kakum_national_41ae64f9.jpg";
import ghanaCastle from "@assets/stock_images/ghana_cape_coast_cas_5bbe3729.jpg";
import senegalBeach from "@assets/stock_images/west_african_beach_c_05dbc12e.jpg";
import senegalGoree from "@assets/stock_images/senegal_goree_island_3c110ca3.jpg";
import senegalPinkLake from "@assets/stock_images/senegal_pink_lake_la_bf878839.jpg";
import beninArchitecture from "@assets/stock_images/traditional_west_afr_6c63a303.jpg";
import beninGanvie from "@assets/stock_images/benin_ganvie_stilt_v_9076ce84.jpg";
import beninPortoNovo from "@assets/stock_images/benin_porto_novo_roy_8e3ece9d.jpg";
import ivoireArchitecture from "@assets/stock_images/traditional_west_afr_40315882.jpg";
import ivoireAbidjan from "@assets/stock_images/ivory_coast_abidjan__55ddc3cb.jpg";
import ivoireGrandBassam from "@assets/stock_images/ivory_coast_grand_ba_2fabc4c1.jpg";
import togoMarket from "@assets/stock_images/togo_lome_grand_marc_a4e04e97.jpg";
import togoKoutammakou from "@assets/stock_images/togo_koutammakou_tra_3feb536c.jpg";
import wildlife1 from "@assets/stock_images/african_wildlife_sav_50acccc7.jpg";
import wildlife2 from "@assets/stock_images/african_wildlife_sav_23ba0e68.jpg";
import burkinaCascade from "@assets/stock_images/burkina_faso_banfora_86e45b22.jpg";
import burkinaCulture from "@assets/stock_images/burkina_faso_traditi_383b8242.jpg";
import mosque from "@assets/stock_images/west_african_mosque__bf107339.jpg";
import maliDjenne from "@assets/stock_images/mali_djenne_great_mo_4614c615.jpg";
import maliDogon from "@assets/stock_images/mali_dogon_country_c_abc498ff.jpg";
import waterfall from "@assets/stock_images/african_waterfall_tr_a3248378.jpg";
import culture from "@assets/stock_images/west_african_cultura_2bca2a8e.jpg";
import safari from "@assets/stock_images/african_safari_lands_0ebde75b.jpg";

interface GalleryImage {
  src: string;
  country: string;
  title: string;
  titleEn: string;
}

export default function Gallery() {
  const { t, language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<string>(t("all"));
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { src: ghanaBeach, country: "Ghana", title: "Plages du Ghana", titleEn: "Ghana Beaches" },
    { src: ghanaKakum, country: "Ghana", title: "Parc National Kakum", titleEn: "Kakum National Park" },
    { src: ghanaCastle, country: "Ghana", title: "Château de Cape Coast", titleEn: "Cape Coast Castle" },
    { src: senegalBeach, country: "Sénégal", title: "Côtes du Sénégal", titleEn: "Senegal Coasts" },
    { src: senegalGoree, country: "Sénégal", title: "Île de Gorée", titleEn: "Gorée Island" },
    { src: senegalPinkLake, country: "Sénégal", title: "Lac Rose", titleEn: "Pink Lake" },
    { src: beninArchitecture, country: "Bénin", title: "Architecture du Bénin", titleEn: "Benin Architecture" },
    { src: beninGanvie, country: "Bénin", title: "Village de Ganvié", titleEn: "Ganvié Village" },
    { src: beninPortoNovo, country: "Bénin", title: "Palais de Porto-Novo", titleEn: "Porto-Novo Palace" },
    { src: ivoireArchitecture, country: "Côte d'Ivoire", title: "Patrimoine Ivoirien", titleEn: "Ivorian Heritage" },
    { src: ivoireAbidjan, country: "Côte d'Ivoire", title: "Skyline d'Abidjan", titleEn: "Abidjan Skyline" },
    { src: ivoireGrandBassam, country: "Côte d'Ivoire", title: "Grand-Bassam", titleEn: "Grand-Bassam" },
    { src: togoMarket, country: "Togo", title: "Grand Marché de Lomé", titleEn: "Lomé Grand Market" },
    { src: togoKoutammakou, country: "Togo", title: "Koutammakou UNESCO", titleEn: "Koutammakou UNESCO" },
    { src: burkinaCascade, country: "Burkina Faso", title: "Cascades de Banfora", titleEn: "Banfora Waterfalls" },
    { src: burkinaCulture, country: "Burkina Faso", title: "Culture Traditionnelle", titleEn: "Traditional Culture" },
    { src: wildlife1, country: "Burkina Faso", title: "Faune Burkinabè", titleEn: "Burkinabe Wildlife" },
    { src: wildlife2, country: "Togo", title: "Nature du Togo", titleEn: "Togo Nature" },
    { src: maliDjenne, country: "Mali", title: "Grande Mosquée de Djenné", titleEn: "Great Mosque of Djenné" },
    { src: maliDogon, country: "Mali", title: "Pays Dogon", titleEn: "Dogon Country" },
    { src: mosque, country: "Mali", title: "Architecture Islamique", titleEn: "Islamic Architecture" },
    { src: waterfall, country: "Burkina Faso", title: "Cascades Tropicales", titleEn: "Tropical Waterfalls" },
    { src: culture, country: "Ghana", title: "Danses Traditionnelles", titleEn: "Traditional Dances" },
    { src: safari, country: "Sénégal", title: "Safari au Coucher du Soleil", titleEn: "Sunset Safari" },
  ];

  const countries = [t("all"), "Ghana", "Sénégal", "Bénin", "Côte d'Ivoire", "Burkina Faso", "Togo", "Mali"];

  const filteredImages =
    selectedCountry === t("all")
      ? images
      : images.filter((img) => img.country === selectedCountry);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center"
          data-testid="text-gallery-title"
        >
          {t("galleryTitle")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {t("gallerySubtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((country) => (
            <Button
              key={country}
              variant={selectedCountry === country ? "default" : "outline"}
              onClick={() => setSelectedCountry(country)}
              className="rounded-full"
              data-testid={`button-filter-${country.toLowerCase()}`}
            >
              {country}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-md"
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={language === "fr" ? image.title : image.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold">{language === "fr" ? image.title : image.titleEn}</p>
                  <p className="text-sm text-white/80">{image.country}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95">
          <DialogClose className="absolute top-4 right-4 z-50">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <X className="h-6 w-6" />
            </Button>
          </DialogClose>

          {selectedImage !== null && (
            <div className="relative">
              <img
                src={filteredImages[selectedImage].src}
                alt={language === "fr" ? filteredImages[selectedImage].title : filteredImages[selectedImage].titleEn}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {language === "fr" ? filteredImages[selectedImage].title : filteredImages[selectedImage].titleEn}
                </h3>
                <p className="text-white/80">
                  {filteredImages[selectedImage].country}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                data-testid="button-prev-image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                data-testid="button-next-image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
