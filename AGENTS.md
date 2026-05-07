# Naturella Landing Page

## Dev Commands

- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` / `npm run lint:fix` - ESLint
- `npm run format` / `npm run format:check` - Prettier

## Project Structure

- Next.js 16 App Router (src/app/)
- Pages: `/` (home), `/sobre` (about)
- Components in `src/app/components/`
- Icons in `src/app/icons/`

## Before Commit

Run: `npm run lint && npm run build`

## Customization

- Tailwind config uses brand colors: `green (#41521F)`, `yellow (#FFF3E3)`
- Font: Poppins (defined in tailwind.config.ts)
- Custom color variants in `tailwind.config.ts`: `gray1` to `gray5`

## Notes

- No test suite configured
- Uses Framer Motion for animations
- Vercel Analytics enabled
