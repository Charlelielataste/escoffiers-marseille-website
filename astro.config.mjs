// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from "node:path"

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve("./src"),
            },
        },
    },
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
        routing: {
            prefixDefaultLocale: false,
        }
    }
});
