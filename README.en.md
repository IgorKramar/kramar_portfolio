<div align="center">

# Igor Kramar · Portfolio

**English** · [Русский](README.md)

**Frontend architecture, reusable UI and considered interaction design.**

Next.js · React · TypeScript · Tailwind CSS

</div>

---

A personal portfolio website built as a small frontend product: typed components, reusable layout primitives, content separated from presentation, keyboard-friendly interactions and restrained motion.

**Status:** source code is available. The website has not yet been published; this repository is the code sample, not a live-site link.

## What to explore

| Area | Where to look | Engineering focus |
| :--- | :--- | :--- |
| UI primitives | [`src/components/ui`](src/components/ui) | Component contracts and reusable building blocks |
| Layout | [`src/components/layout`](src/components/layout) | Shared page structure rather than repeated markup |
| Page sections | [`src/components/pages/home`](src/components/pages/home) | Composition of the portfolio's main sections |
| Shared elements | [`src/components/shared`](src/components/shared) | Reused contact and interaction components |
| Content | [`src/data`](src/data) | Contact/navigation data separate from UI |
| Hooks | [`src/hooks`](src/hooks) | Interaction behaviour, including reduced-motion preferences |

The implementation includes focus-visible styles, keyboard navigation, a skip link and handling of `prefers-reduced-motion`. These are implementation choices, not a claim of an independent accessibility audit.

## Run locally

With Node.js and pnpm installed:

```sh
pnpm install
pnpm dev
```

Build and run the production build locally:

```sh
pnpm build
pnpm start
```

Consult [`package.json`](package.json) and [`pnpm-lock.yaml`](pnpm-lock.yaml) for the current dependencies. The project uses the Next.js App Router, React, TypeScript, Tailwind CSS and Biome; animations are implemented with the dependencies declared in the package manifest.

## Edit the content

- Contacts: `src/data/contacts.ts`
- Navigation: `src/data/navigation.ts`
- Homepage sections: `src/components/pages/home/`

## Scope

This is a frontend architecture and UI implementation sample. It is not presented as a production service with traffic metrics, nor as a completed automated accessibility or end-to-end testing programme. The original [Russian README](README.md) describes the structure and possible next steps in more detail.

---

**Igor Kramar · Senior Fullstack Engineer**  
[GitHub](https://github.com/IgorKramar) · [Email](mailto:i@ikramar.ru) · [Telegram](https://t.me/spider_HH_jerusalem)
