import { LanguageProvider } from "@/contexts/LanguageContext";
import Contact from "../Contact";

export default function ContactExample() {
  return (
    <LanguageProvider>
      <Contact />
    </LanguageProvider>
  );
}
