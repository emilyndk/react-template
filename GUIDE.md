# Min React + Tailwind v4 + GSAP Starter

## 1. Sådan skifter du fonte (3 måder)

### Metode A: Google Fonts (Hurtigst)

1. Find dine fonte på https://fonts.google.com -> klik **Get font** -> **Get embed code** -> vælg **@import**.
2. Udskift `@import url(...)`-linjen øverst i `src/index.css`.
3. Opdater `--font-sans` og `--font-display` inde i `@theme` i `src/index.css`.

### Metode B: Egne downloadede font-filer (.woff2 / .ttf / .otf)

1. Læg din font-fil ind i mappen `public/fonts/` (f.eks. `public/fonts/MinFont.woff2`).
2. Udkommentér `@font-face`-blokken i toppen af `src/index.css` og ret filnavn samt `font-family`.
   - Har du både Regular og Bold, så lav to `@font-face`-blokke med samme `font-family`, men med `font-weight: 400` og `font-weight: 700`.
3. Sæt `--font-display: "MinFont", sans-serif;` inde i `@theme`.

### Metode C: Lokale Google Fonts via npm (Fontsource)

1. Installer fonten: `npm install @fontsource-variable/inter`
2. Importer den øverst i `src/main.jsx`: `import "@fontsource-variable/inter";`

---

## 2. Sådan tilpasser du dit designsystem

Rediger farver og tokens inde i `@theme` i `src/index.css`:

- `--color-brand` -> bruges som `bg-brand`, `text-brand`, `border-brand`
- `--color-surface` -> bruges som `bg-surface`
- `--color-ink` -> bruges som `text-ink`
- `--font-display` -> bruges som `font-display`
- `--radius-card` -> bruges som `rounded-card`

---

## 3. Sådan bruger du GSAP i en komponent

```jsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MinKomponent() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div className="box">Animeret element</div>
    </div>
  );
}
```
