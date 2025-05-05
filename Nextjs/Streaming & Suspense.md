<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Streaming \& Suspense

- **Streaming** lets you break down HTML into smaller chunks that load progressively rather than waiting for all data.
- **React Suspense** enables streaming by letting you specify fallback UI while components load.
- **Benefits**:
    - Reduces Time To First Byte (TTFB) and improves First Contentful Paint (FCP)[^11]
    - Shows critical UI faster while less important parts load in background[^11]
    - Improves Time to Interactive (TTI), especially on slower devices[^11]

**Implementation**:

```jsx
// Example: Streaming a dashboard with different loading priorities
export default function Dashboard() {
  return (
    &lt;&gt;
      <h1>Dashboard</h1>
      {/* Critical UI loads first */}
      &lt;Suspense fallback={&lt;StatsLoading /&gt;}&gt;
        &lt;Stats /&gt;  {/* Fetches important data */}
      &lt;/Suspense&gt;
      
      {/* Less critical UI can load later */}
      &lt;Suspense fallback={&lt;ChartsLoading /&gt;}&gt;
        &lt;Charts /&gt;  {/* Fetches slower visualization data */}
      &lt;/Suspense&gt;
    
  );
}
```


## Route Groups

- **Route Groups** are folders in parentheses `(folderName)` that organize routes without affecting URLs[^7][^15]
- **Uses**:
    - Organizing routes by section, team, or functionality[^7]
    - Creating separate layouts for different sections[^15]
    - Logical code organization

**Examples**:

```
app/
  (marketing)/      # Routes for public site
    layout.js       # Marketing-specific layout
    page.js         # Homepage
    about/
      page.js       # /about route
  (dashboard)/      # Routes for logged-in users
    layout.js       # Dashboard-specific layout
    page.js         # /dashboard route
```


## URL \& Path Handling

### useSearchParams

- **Purpose**: Client Component hook to access URL query parameters[^8][^13]
- **Benefits**:
    - Bookmarkable/shareable URLs (preserves search state)[^1]
    - Server-rendering friendly[^1]
    - Built-in analytics tracking[^1]

**Usage**:

```jsx
'use client'
import { useSearchParams } from 'next/navigation';

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query'); // Gets '?query=value'
  
  // Update search params
  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    params.set('query', term);
    router.replace(`${pathname}?${params.toString()}`);
  }
}
```


### usePathname

- **Purpose**: Client Component hook to read the current URL pathname[^9][^10]
- **Use cases**:
    - Active link highlighting
    - Conditional rendering based on route
    - Navigation tracking

**Usage**:

```jsx
'use client'
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    &lt;nav&gt;
      <a href="/">Home</a>
      <a href="/about">About</a>
    &lt;/nav&gt;
  );
}
```

**Note**: Both `useSearchParams` and `usePathname` must be used in Client Components with the "use client" directive[^8][^9].

<div style="text-align: center">⁂</div>

[^1]: image.jpg

[^2]: image.jpg

[^3]: https://nextjs.org/learn/dashboard-app/streaming

[^4]: https://www.wisp.blog/blog/mastering-react-suspense-in-nextjs-15-a-developers-guide

[^5]: https://reetesh.in/blog/streaming-components-in-next.js-using-suspense

[^6]: https://nextjs.org/docs/app/getting-started/project-structure

[^7]: https://dev.to/shawon/mastering-route-groups-in-nextjs-14-1oae

[^8]: https://nextjs.org/docs/app/api-reference/functions/use-search-params

[^9]: https://www.restack.io/docs/nextjs-knowledge-nextjs-usepathname-guide

[^10]: https://nextjs.org/docs/app/api-reference/functions/use-pathname

[^11]: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming

[^12]: https://nextjs.org/docs/app/building-your-application/routing

[^13]: https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

[^14]: https://nextjs.org/docs/app/building-your-application/rendering/server-components

[^15]: https://dev.to/amankumar/how-to-skip-the-applayouttsx-file-for-layout-in-nextjs-app-routing-56mb

[^16]: https://www.robinwieruch.de/next-search-params/

[^17]: https://www.pronextjs.dev/what-is-streaming-in-the-app-router

[^18]: https://stackoverflow.com/questions/79286229/nextjs-app-router-client-component-with-data-fetching-inside-a-suspense-bounda

[^19]: https://www.reddit.com/r/nextjs/comments/1btpbiu/whats_the_difference_between_a_loading_file_and/

[^20]: https://dev.to/cuongnp/exploring-streaming-in-nextjs-enhancing-performance-and-user-experience-273

[^21]: https://www.youtube.com/watch?v=KtTR8Seld98

[^22]: https://blog.logrocket.com/using-next-js-react-suspense-create-loading-component/

[^23]: https://www.wisp.blog/blog/suspense-vs-use-client-understanding-the-key-differences-in-nextjs-15

[^24]: https://bsorrentino.github.io/bsorrentino/web/2024/03/05/how-to-stream-data-in-nextjs.html

[^25]: https://app-router.vercel.app/streaming

[^26]: https://www.reddit.com/r/nextjs/comments/1bkjps0/is_it_possible_to_have_suspense_inside_client/

[^27]: https://meje.dev/blog/suspense-in-nextjs

[^28]: https://www.youtube.com/watch?v=9REGGiU8hck

[^29]: https://www.thisdot.co/blog/next-js-route-groups

[^30]: https://nextjs.org/docs/app/building-your-application/routing/route-groups

[^31]: https://www.reddit.com/r/nextjs/comments/1dc17tv/best_practice_for_folder_structure_in_nextjs_app/

[^32]: https://www.youtube.com/watch?v=auXXk38rGgk

[^33]: https://nextjs.org/docs/app/api-reference/components

[^34]: https://www.youtube.com/watch?v=Tpo5wBuk3po

[^35]: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

[^36]: https://stackoverflow.com/questions/76214501/nextjs-13-folder-structure-best-practice

[^37]: https://www.reddit.com/r/nextjs/comments/14xmq8t/any_recommended_strategies_to_group_components/

[^38]: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

[^39]: https://github.com/vercel/next.js/discussions/47583

[^40]: https://nextjs.org/docs/app/api-reference/functions/use-params

[^41]: https://www.youtube.com/watch?v=Lxapi5QrMEU

[^42]: https://stackoverflow.com/questions/78559480/next-js-usesearchparams-usepathname-and-userouter-issue

[^43]: https://www.youtube.com/watch?v=qPsY4AKFlnM

[^44]: https://stackoverflow.com/questions/58022046/get-url-pathname-in-nextjs

[^45]: https://dev.to/peterlidee/5-mocking-usepathname-usesearchparams-and-userouter-with-jest-in-next-15-3coh

[^46]: https://www.youtube.com/watch?v=2B9l-IMk0KQ

[^47]: https://nextjs.org/docs/app/api-reference/functions/use-router

[^48]: https://stackoverflow.com/questions/74580728/get-url-params-next-js-13

[^49]: https://nextjs.org/docs/app

[^50]: https://upsun.com/blog/avoid-common-mistakes-with-next-js-app-router/

[^51]: https://github.com/TanStack/query/discussions/7596

[^52]: https://www.youtube.com/watch?v=wEMu9HWKrkk

[^53]: https://www.dhiwise.com/post/ultimate-guide-to-organizing-your-nextjs-components-folder

[^54]: https://www.youtube.com/watch?v=X9_XqeqWBR0

[^55]: https://dev.to/peterlidee/using-searchparams-usesearchparams-and-userouter-in-next-13-4623

[^56]: https://dev.to/ferdianarid/using-usesearchparams-in-nextjs-14-1737

[^57]: https://stackoverflow.com/questions/78330149/nextjs-app-router-get-all-query-parameters-in-string

