# 📘 Next.js Revision Notes

## 📦 1. Static Site Generation (SSG)
- **Definition:** HTML is generated **at build time**.
- **Use when:** Data doesn't change frequently.
- **Syntax:**
  ```js
  export async function getStaticProps() {
    const data = await fetchData();
    return { props: { data } };
  }
  ```
- **Optional: getStaticPaths()**  
  Used with dynamic routes.

---

## 🌐 2. Server-Side Rendering (SSR)
- **Definition:** HTML is generated **on each request**.
- **Use when:** Data needs to be fresh or user-specific.
- **Syntax:**
  ```js
  export async function getServerSideProps(context) {
    const data = await fetchData();
    return { props: { data } };
  }
  ```

---

## 🔁 3. Incremental Static Regeneration (ISR)
- **Definition:** Static pages are updated **in the background** at a set interval **without rebuilding the whole site**.
- **Use when:** Mix of performance (SSG) and freshness (SSR).
- **Syntax:**
  ```js
  export async function getStaticProps() {
    const data = await fetchData();
    return {
      props: { data },
      revalidate: 60 // Regenerate page every 60 seconds
    };
  }
  ```

---

## 🧱 4. Layout in Next.js

### App Router (new, `/app` folder)
- Create layout with `layout.js` or `layout.tsx`
- Automatically wraps nested routes.

```tsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Pages Router (older, `/pages` folder)
- Use `_app.js` for shared layout.

```js
// pages/_app.js
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
```

---

## ✅ Tips

| Feature | Build Time | Request Time | Good For |
|--------|------------|--------------|----------|
| SSG    | ✅          | ❌           | Blogs, Docs |
| SSR    | ❌          | ✅           | Dashboards |
| ISR    | ✅ + ♻️     | ❌ + ♻️       | News, E-commerce |

---

> **Next Step:** Practice creating pages using these methods, and experiment with layouts in both App Router and Pages Router.
