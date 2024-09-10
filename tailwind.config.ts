import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
                'geist-mono': ['var(--font-geist-mono)', 'monospace'],
                'fira-code': ['var(--font-fira-code)', 'monospace'], // Add FiraCode here
            },
        },
    },
    plugins: [],
};

export default config;
