import { LanguageProvider } from "@/contexts/LanguageContext";
import Gallery from "../Gallery";

export default function GalleryExample() {
  return (
    <LanguageProvider>
      <Gallery />
    </LanguageProvider>
  );
}
