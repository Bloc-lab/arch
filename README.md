# Nase CMS — demo veřejný web

Malý statický web (Vite + React), který ukazuje napojení na **Nase CMS**:

- `GET {API_URL}/api/v1/content?lang=cs|en` s hlavičkou **`X-API-KEY`**
- volitelně `GET {API_URL}/api/v1/public/site-info` (branding podle **Host**, bez API klíče)

## Lokální spuštění

```bash
npm install
npm run dev
```

## Proměnné prostředí

V kořeni vytvořte soubor **`.env`** (nepřidávejte ho do veřejného repozitáře s reálným klíčem):

```env
# Base URL backendu bez koncového lomítka
VITE_PUBLIC_CMS_API_URL=https://vase-api.domena.cz

# API klíč tenanta (veřejný read-only klíč pro tento demo web)
VITE_CMS_API_KEY=vas-tenant-api-key
```

Alternativně můžete použít prefix `PUBLIC_` místo `VITE_` — projekt má v `vite.config.ts` nastavené `envPrefix` pro oba tvary.

## Build

```bash
npm run build
npm run preview
```

## Stránky

| Cesta   | CMS pageId | Typické klíče v JSON      |
|---------|------------|---------------------------|
| `/`     | `main`     | `hero.*`, `services.*`, `contact.*` |
| `/o-nas`| `about`    | `about.text`              |

Branding v hlavičce: `admin.siteName`, `admin.logo` (nebo název/logo z `site-info`).

## Obsah a CMS metadata

| Co | Kde |
|----|-----|
| Texty na webu (fallback) | `src/content/arch-cs.json`, `arch-en.json` |
| Labely polí, sekce a nápovědy v administraci | `weby/cms/packages/shared/src/arch-cms-config.ts` |

V tomto repu **není** kopie `arch-cms-config` — admin bere metadata jen ze shared balíčku v CMS monorepu.
