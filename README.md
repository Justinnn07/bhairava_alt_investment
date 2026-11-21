# Bhairava Alternative Investment Trust — website

Single-page Next.js 15 (App Router) site. Fully static, so it deploys to Vercel, Netlify or any Node host.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Structure
- `app/page.tsx` — all sections (Hero, About, Bhairava I LVF, Allocation, Approach, Team, Contact, Disclaimer, Footer)
- `app/globals.css` — design system (palette, type, layout, motion, responsive)
- `lib/content.ts` — shared facts (registration no., email, address, disclaimer text)
- `components/` — Gate (disclaimer modal), Header, Counter, Person, Reveal, Parallax, Logo

## Design tokens
| Token | Hex | Use |
|---|---|---|
| ink | #1C2B35 | text, dark surfaces |
| night | #141F27 | footer |
| blue | #1C5A81 | brand, links, allocation panel |
| mist | #D9E7F7 | pale feature panels |
| rule | #D4D5D6 | hairlines, section numerals |

Type: EB Garamond (display/body) + Jost (labels/nav), loaded with next/font.

## Disclaimer gate
Shown once per browser session (sessionStorage key `bhairava-disclaimer-accepted`). Please have compliance check the confirmation wording in `components/Gate.tsx`.

## Photography (Unsplash licence: free for commercial use)
- hero.jpg (client-supplied version), range.jpg, sky.jpg: Julius Zetzsche
- ridge.jpg: Ashish Kumar Senapati
- peak.jpg: Anujah Bosman
- valley.jpg: Bhanuj Jain

## Content edits made to the supplied copy
- Team section: "Investment Manager to **Samriddhi** Alternative Investment Trust" changed to **Bhairava** Alternative Investment Trust.
- "follows research driven process" changed to "follows a research-driven process".
- Added "Mr." to Ghanshyam Thakur's bio for consistency, and used Indian/British spelling ("organisations").
