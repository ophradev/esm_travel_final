import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "../LanguageToggle";

export default function LanguageToggleExample() {
  return (
    <LanguageProvider>
      <LanguageToggle />
    </LanguageProvider>
  );
}
