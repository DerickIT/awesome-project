# Astro 5 Best Practices (2026 Edition)

## Core Philosophy
1.  **Zero JavaScript by Default**:
    - Ship only HTML and CSS.
    - Use `client:*` directives sparingly (only for interactive islands).
    - Prefer `client:visible` for below-the-fold interactivity.

2.  **Islands Architecture**:
    - Isolate interactive components.
    - Keep the "shell" static.
    - Use **Server Islands** for dynamic/personalized content (cached shell + dynamic holes).

## Performance Optimization
-   **Content Layer**: Use the Content Layer API for type-safe, high-performance content loading (5x faster builds).
-   **Image Optimization**: Always use `<Image />` component or `astro:assets`.
    -   Use `fetchpriority="high"` for LCP images (hero).
    -   Use modern formats (AVIF/WebP).
-   **Type-Safe Env**: Use `astro:env` for managing secrets and config.
-   **Prefetching**: Enable prefetching for faster navigation (`prefetch` attribute).

## Architecture Patterns
-   **Static-First**: Pre-render everything possible (`output: 'static'`).
-   **Hybrid Rendering**: Use `prerender = false` only for specific dynamic pages.
-   **Middleware**: Use middleware for cross-cutting concerns (auth, headers).
-   **Actions**: Use Astro Actions for type-safe backend logic without API routes.

## Code Quality
-   **Strict TypeScript**: Enable strict mode in `tsconfig.json`.
-   **Zod Schemas**: Validate all content and data with Zod.
-   **Modular Components**: Keep components small and focused.
