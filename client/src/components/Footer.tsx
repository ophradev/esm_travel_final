import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-card-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            {t("copyright")}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t("footerTagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
