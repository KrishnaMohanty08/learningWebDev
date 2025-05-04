<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Rendering Types \& Prerendering in Next.js App Router

**Next.js App Router** supports multiple rendering strategies to optimize performance and user experience. Here’s a clear breakdown:

---

### **Rendering Types**

- **Server-Side Rendering (SSR)**
    - Pages are rendered on the server at request time.
    - Useful for dynamic data that changes per request or is personalized.
    - Achieved automatically if you use dynamic data fetching methods or set fetch options like `{ cache: 'no-store' }`[^1][^4][^6].
- **Static Site Generation (SSG) / Prerendering**
    - Pages are rendered to static HTML at build time.
    - Ideal for content that doesn’t change often.
    - Next.js automatically prerenders pages if all data is static and cached[^1][^2][^5].
    - These pages are fast and can be served from a CDN[^2][^5].
- **Automatic Static Optimization**
    - Next.js detects if a page can be prerendered (no dynamic data fetching at runtime) and optimizes it as static automatically[^2].
- **Client-Side Rendering (CSR)**
    - Some components (marked with `"use client"`) are rendered on the client, typically for interactivity and stateful logic[^1][^3][^6].

---

### **How Prerendering Works**

- If a route has only static data, Next.js builds and serves it as a static HTML file.
- If a route uses dynamic data or APIs, it’s rendered server-side on each request.
- Dynamic and static rendering can be mixed within a single app, and Next.js chooses the best strategy per route[^6].
- You control caching and revalidation to fine-tune when content updates[^5][^6].

---

### **Summary Table**

| Rendering Type | When Used | How Triggered | Benefits |
| :-- | :-- | :-- | :-- |
| SSR | Dynamic/personalized | Dynamic fetch, `no-store`, etc. | Fresh data per user |
| SSG/Prerender | Static content | No dynamic fetch, all data cached | Fast, CDN-friendly |
| CSR | Client-side interactivity | `"use client"` components | Rich UI, fast nav |


---

**In short:**
Next.js App Router intelligently chooses between static and dynamic rendering for each route, ensuring optimal performance and flexibility[^1][^4][^6].

<div style="text-align: center">⁂</div>

[^1]: https://nextjs.org/docs/app

[^2]: https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization

[^3]: https://stackoverflow.com/questions/76193533/server-side-rendering-with-dynamic-client-side-using-nextjs-app-router

[^4]: https://nextjs.org/docs/app/building-your-application/rendering

[^5]: https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering

[^6]: https://nextjs.org/docs/app/building-your-application/rendering/server-components

[^7]: https://www.dhiwise.com/post/nextjs-client-side-rendering-what-you-need-to-know

[^8]: https://www.youtube.com/watch?v=UgseormfMc4

[^9]: https://bejamas.com/hub/guides/choosing-the-best-rendering-strategy-for-your-next-js-app

[^10]: https://nextjs.org/learn/dashboard-app/partial-prerendering

[^11]: https://www.reddit.com/r/nextjs/comments/144lsbj/app_router_can_you_do_static_site_generation/

[^12]: https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering

[^13]: https://nextjs.org/docs/app/building-your-application/rendering/client-components

[^14]: https://ryanschiang.com/how-to-use-incremental-static-regeneration-isr-with-nextjs-14-app-router

[^15]: https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts

[^16]: https://github.com/vercel/next.js/discussions/58936

[^17]: https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation

[^18]: https://github.com/vercel/next.js/discussions/61982

[^19]: https://nextjs.org/docs/app/building-your-application/routing

[^20]: https://github.com/vercel/next.js/discussions/61699

