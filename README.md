# Matt's website/blog/portfolio

Made with Astro, and currently using Svelte and Giscus for likes/comments.
Initialize the development environment with:

```sh
pnpm install
pnpm run dev
```

There are two Astro content collections in this project, located in src/content. Only the posts collection has support
for likes/comments, but this should not be difficult to extend to the fiction collection if this is desired. The backend logic
for post likes is hosted on Cloudflare Workers' KV storage. Details of the implementation can be found in `Counter.svelte`, with 
the backend code to be open sourced with Wrangler config files at a later date.

To import components, please use import aliases as defined in tsconfig.json.

```js
import Tooltip from "@components/pizazz/Tooltip.astro";
```

The `pizazz` directory is used for experimental components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
