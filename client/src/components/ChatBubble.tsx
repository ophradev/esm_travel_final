import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ChatBubble() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-50 bg-primary text-primary-foreground hover:scale-110 transition-transform animate-pulse hover:animate-none"
        data-testid="button-chat-toggle"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 shadow-2xl z-40 animate-in slide-in-from-bottom-5">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <i className="fas fa-robot text-2xl"></i>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">
                  {t("chatAssistant")}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {t("chatHelp")}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-muted/50 rounded-lg p-4 mb-4 min-h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                {t("chatPlaceholder")}
                <br />
                <span className="text-sm">
                  {t("chatSubtext")}
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={t("typMessage")}
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground"
                disabled
                data-testid="input-chat"
              />
              <Button disabled data-testid="button-send-chat">
                <i className="fas fa-paper-plane"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
