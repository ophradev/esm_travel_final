import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "../Navbar";

export default function NavbarExample() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}
