import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: t("messageSent"),
      description: t("messageResponse"),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: "fab fa-twitter", name: "X (Twitter)", url: "#", color: "hover:text-[#1DA1F2]" },
    { icon: "fab fa-tiktok", name: "TikTok", url: "#", color: "hover:text-[#000000] dark:hover:text-[#FE2C55]" },
    { icon: "fab fa-instagram", name: "Instagram", url: "#", color: "hover:text-[#E4405F]" },
    { icon: "fab fa-facebook", name: "Facebook", url: "#", color: "hover:text-[#1877F2]" },
    { icon: "fab fa-skype", name: "Skype", url: "#", color: "hover:text-[#00AFF0]" },
    { icon: "fab fa-discord", name: "Discord", url: "#", color: "hover:text-[#5865F2]" },
    { icon: "fab fa-reddit", name: "Reddit", url: "#", color: "hover:text-[#FF4500]" },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center"
          data-testid="text-contact-title"
        >
          {t("contactTitle")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {t("contactSubtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <h3 className="font-heading text-2xl font-bold text-card-foreground">
                {t("sendMessage")}
              </h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t("yourName")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t("yourEmail")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t("yourMessage")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  data-testid="button-submit"
                >
                  {t("sendButton")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="font-heading text-2xl font-bold text-card-foreground">
                  {t("contactInfo")}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-2xl text-primary"></i>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("email")}</p>
                    <a
                      href="mailto:contact@esmtravel.com"
                      className="text-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      contact@esmtravel.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-2xl text-primary"></i>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("phone")}</p>
                    <a
                      href="tel:+2289XXXXXXX"
                      className="text-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +228 9X XXX XXX
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="font-heading text-2xl font-bold text-card-foreground">
                  {t("followUs")}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-all hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                      data-testid={`link-social-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
