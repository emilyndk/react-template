# Min React + Tailwind + GSAP Starter

## 1. Sådan skifter du fonte

1. Find dine fonte på https://fonts.google.com -> klik **Get font** -> **Get embed code** -> vælg **@import**.
2. Udskift `@import url(...)`-linjen allerøverst i `src/index.css`.
3. Opdater `--font-sans` og `--font-display` inde i `@theme` i `src/index.css`.

### Lokale fonte (Fontsource)

Hvis du vil installere en font lokalt via npm:
`npm install @fontsource-variable/inter`
Og importer den i toppen af `src/main.jsx`:
`import "@fontsource-variable/inter";`

## 2. Sådan tilpasser du dit designsystem

Rediger farver og tokens inde i `@theme` i `src/index.css`:

- `--color-brand` -> bruges som `bg-brand`, `text-brand`, `border-brand`
- `--color-surface` -> bruges som `bg-surface`
- `--color-ink` -> bruges som `text-ink`
- `--font-display` -> bruges som `font-display`

## 3. Sådan kobler du en backend (Express / json-server) på

Tilføj en `proxy` i `vite.config.js`:

```js
server: {
  proxy: {
    '/api': '[http://127.0.0.1:3000](http://127.0.0.1:3000)'
  }
}
```
