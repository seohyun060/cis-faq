import { create } from 'zustand';

const useLangStore = create<{
    language: string;
    setLanguage: (lang: string) => void;
}>((set) => ({
    language: 'ko',
    setLanguage: (lang: string) => set((state) => ({ ...state, language: lang })),
}));

export default useLangStore;
