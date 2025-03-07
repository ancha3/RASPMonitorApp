import { Slot } from "expo-router";
import { SessionProvider } from "@/contexts/authentication";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
