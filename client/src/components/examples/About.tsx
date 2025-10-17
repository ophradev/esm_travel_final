import { LanguageProvider } from "@/contexts/LanguageContext";
import About from "../About";

export default function AboutExample() {
  return (
    <LanguageProvider>
      <About />
    </LanguageProvider>
  );
}
