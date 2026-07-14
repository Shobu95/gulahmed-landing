# Gul Ahmed Landing — "Ideas Men Try On"

A demo menswear landing page inspired by Gul Ahmed's **Ideas** brand, built to showcase AI virtual try-on on a real-feeling storefront.

The page renders a product grid (unstitched fabric, waistcoats, suits) using live images from `gulahmedshop.com`, and lets a visitor upload their own photo, pick a garment, and generate an AI try-on image in a modal.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- [`@gradio/client`](https://www.npmjs.com/package/@gradio/client) — calls a Hugging Face Space for the try-on generation

## How Try-On Works

`src/app/api/try-on/route.ts` is a single API route that:

1. Accepts a human photo upload, a garment image URL, and a garment description
2. Connects to the public Hugging Face Space [`yisol/IDM-VTON`](https://huggingface.co/spaces/yisol/IDM-VTON) via `@gradio/client`
3. Returns the generated try-on image URL to the client

No database or CMS — product data is hardcoded in `src/app/page.tsx`, and product images are hotlinked from `gulahmedshop.com`.

## Project Structure

```
src/
  app/
    layout.tsx        # root layout, fonts, metadata
    page.tsx           # hero, product grid, try-on modal (vanilla DOM scripting)
    globals.css
    api/
      try-on/route.ts  # POST endpoint that proxies to the Hugging Face try-on Space
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables are required — the try-on API route talks to a public Hugging Face Space with no auth.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Notes

This is a demo/prototype, not an official Gul Ahmed property — product imagery is pulled from the public Gul Ahmed shop CDN for demonstration purposes only.
