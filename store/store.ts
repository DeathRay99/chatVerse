import { create } from "zustand";
import { Subscription } from "@/types/Subscription";
export type LanguagesSupported =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "hi"
  | "ja"
  | "la"
  | "ru"
  | "zh"
  | "ar";
export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  de: "German",
  fr: "French",
  es: "Spanish",
  hi: "Hindi",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  ar: "Arabic",
};
interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}
const LANGUAGES_IN_FREE = 2;

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}
export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  // if user is pro, return all supported languages
  getLanguages: (isPro: boolean) => {
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

    //If not pro, return only the first two languages
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return []; //No unsupported languages for "pro" users
    return Object.keys(LanguagesSupportedMap).slice(
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[]; //Excluding the first two supported languages
  },
}));
export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
