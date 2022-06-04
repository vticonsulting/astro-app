---
title: Pages
description: Pages contain components and are optionally wrapped inside Layouts and are the "landing page" for a given URL (a URL like /articles/hello-world will map to one page and /contact-us will map to another).
layout: ../../layouts/main-layout.astro
---

## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from '../../../../composables'
```

now, you can use

```ts
import { isDark } from '~/composables'
```