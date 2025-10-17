import { LanguageProvider } from "@/contexts/LanguageContext";
import ChatBubble from "../ChatBubble";

export default function ChatBubbleExample() {
  return (
    <LanguageProvider>
      <ChatBubble />
    </LanguageProvider>
  );
}
