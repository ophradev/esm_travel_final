import { LanguageProvider } from "@/contexts/LanguageContext";
import Services from "../Services";

export default function ServicesExample() {
  return (
    <LanguageProvider>
      <Services />
    </LanguageProvider>
  );
}
