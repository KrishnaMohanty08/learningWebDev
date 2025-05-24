## Benefits of Search with URL Params

- **Bookmarkable and shareable URLs:** Search state is stored in the URL, so users can bookmark or share the exact state of the app for later or with others[^1].
- **Server-side rendering:** URL params are available on the server, making it easy to render the correct initial state[^1].
- **Analytics and tracking:** Search queries in the URL make it easier to track/filter user behavior without extra client code[^1].

---

## Core Next.js Navigation Hooks

### 1. `useSearchParams`

- **Purpose:** Read the current URL’s query string (search params) in a Client Component[^3][^8].
- **Returns:** A read-only `URLSearchParams` object.

**Basic Usage:**

```jsx
'use client'
import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search'); // e.g., /dashboard?search=my-project

  return <div>Search: {search}</div>;
}
```

**Common Methods:**

- `get(key)` – returns the first value for `key`.
- `has(key)` – returns true if the param exists.
- `getAll(key)` – returns all values for `key`.
- `toString()` – returns the full query string[^3].

**Example:**

```jsx
const category = searchParams.get('category');
```


---

### 2. `usePathname`

- **Purpose:** Get the current URL’s pathname in a Client Component[^4][^6].
- **Returns:** The pathname as a string (e.g., `/dashboard/invoices`).

**Example:**

```jsx
'use client'
import { usePathname } from 'next/navigation';

export default function PathDisplay() {
  const pathname = usePathname();
  return <p>Current pathname: {pathname}</p>;
}
```


---

### 3. `useRouter`

- **Purpose:** Programmatically navigate, replace, or refresh routes in Client Components[^5][^7].
- **Common Methods:**
    - `router.push('/about')` – navigate to `/about`
    - `router.replace('/login')` – replace current history entry
    - `router.back()` – go back
    - `router.forward()` – go forward
    - `router.refresh()` – refresh the page
    - `router.prefetch('/dashboard')` – prefetch route[^5]

**Example:**

```jsx
'use client'
import { useRouter } from 'next/navigation';

export default function NavigationExample() {
  const router = useRouter();
  return (
    <div>
      &lt;button onClick={() =&gt; router.push('/about')}&gt;Go to About&lt;/button&gt;
      &lt;button onClick={() =&gt; router.replace('/login')}&gt;Redirect to Login&lt;/button&gt;
      &lt;button onClick={() =&gt; router.back()}&gt;Go Back&lt;/button&gt;
      &lt;button onClick={() =&gt; router.refresh()}&gt;Refresh Page&lt;/button&gt;
    </div>
  );
}
```


---

### 4. `useParams`

- **Purpose:** Access dynamic route parameters (e.g., `[id]` in `/blog/[id]`)[^6].
- **Returns:** An object with dynamic params.

**Example:**

```jsx
'use client'
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams(); // { id: '123' } for /blog/123
  return <div>Post ID: {params.id}</div>;
}
```


---

### 5. `useSelectedLayoutSegment` and `useSelectedLayoutSegments`

- **Purpose:** Access the active route segment(s) below the current layout. Useful for tabs, breadcrumbs, or highlighting navigation[^6].
- **Usage:** Returns the segment (string) or segments (array) for advanced UI logic.

---

## Example: Search Bar with URL Params

```jsx
'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (term) =&gt; {
    const params = new URLSearchParams(searchParams);
    params.set('search', term);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    &lt;input
      defaultValue={searchParams.get('search') || ''}
      onChange={e =&gt; handleSearch(e.target.value)}
      placeholder="Search..."
    /&gt;
  );
}
```


---

## Summary Table

| Hook | Purpose | Example Return/Usage |
| :-- | :-- | :-- |
| `useSearchParams` | Read query string | `searchParams.get('q')` |
| `usePathname` | Read current pathname | `/dashboard/invoices` |
| `useRouter` | Navigate programmatically | `router.push('/about')` |
| `useParams` | Access dynamic route params | `{ id: '123' }` |
| `useSelectedLayoutSegment(s)` | Access active layout segment(s) | `'tab1'` or `['tab1', 'tab2']` |


---

**Tip:** All these hooks require `"use client"` at the top of your file, as they only work in Client Components[^3][^4][^5][^6][^8].

<div style="text-align: center">⁂</div>

[^1]: image.jpg

[^2]: image.jpg

[^3]: https://nextjs.org/docs/app/api-reference/functions/use-search-params

[^4]: https://nextjs.org/docs/app/api-reference/functions/use-pathname

[^5]: https://dev.to/joodi/a-comprehensive-guide-to-userouter-in-nextjs-15-59bg

[^6]: https://dev.to/dirheimerb/mastering-nextjs-navigation-hooks-an-in-depth-review-3k61

[^7]: https://dev.to/peterlidee/using-searchparams-usesearchparams-and-userouter-in-next-13-4623

[^8]: https://dev.to/ferdianarid/using-usesearchparams-in-nextjs-14-1737

[^9]: https://github.com/vercel/next.js/discussions/47583

[^10]: https://www.propelauth.com/post/getting-url-in-next-server-components

[^11]: https://nextjs.org/docs/pages/api-reference/functions/use-router

[^12]: https://dev.to/dirheimerb/nextjs-navigation-hooks-a-deep-dive-into-useselectedlayoutsegments-22jj

[^13]: https://www.youtube.com/watch?v=2B9l-IMk0KQ

[^14]: https://www.youtube.com/watch?v=Lxapi5QrMEU

[^15]: https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating

[^16]: https://nextjs.org/learn/dashboard-app/navigating-between-pages

[^17]: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

[^18]: https://stackoverflow.com/questions/76455435/how-to-query-items-from-userouter-hock-in-case-im-using-nextjs-with-app-route

[^19]: https://blog.greenroots.info/how-to-navigate-between-routes-in-nextjs

[^20]: https://stackoverflow.com/questions/74584091/how-to-get-the-current-pathname-in-the-app-directory-of-next-js

[^21]: https://nextjs.org/docs/app/api-reference/functions/use-params

[^22]: https://stackoverflow.com/questions/78330149/nextjs-app-router-get-all-query-parameters-in-string

