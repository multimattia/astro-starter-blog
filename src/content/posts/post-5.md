---
title: The Formattening is Complete!
author: Matt Chan
description: This post was written two minutes after I was satisfied with the state of my blog!
pubDate: 2023-12-21
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "Yet another thumbnail of the same Astro rays."
tags: ["astro", "trying too hard", "web development"]
---

This post should show up with other posts very soon thanks to Astro.glob()! Is that short for glob like blob, or global? There's only one way to find out... To the docs we go!

I'm quite happy with the [progress I made](https://github.com/multimattia/astro-starter-blog/commits/main/). There's a ways to go before I'm fully satisfied with it, however. Here's a list of things I'd like to get done:

- Annoy my friends with a GitHub actions discord webhook.

- ~~Figure out a better way to get the `<title>` tags to propagate~~ oh my GOD I've been nesting my `<BaseLayout>` components, which already contain the `<head>` tags, inside another layer of `<head>` tags. So much for sending less code to the user. That's fixed now. And the titles should be correct now. Small wins.

- Get some **images** done right. I'm not sure how I can get this finished without pre-processing it myself -- Cloudflare's Astro adapter doesn't seem to have support for the Image component, and Cloudflare's pre-processing step requires some kind of payment... We'll see what happens!

- List my **blogs as components**. I want to be able to separate them by year. On the same page, but as separate lists... Maybe pass it as two props, one as value the other as the key to match? Also this component will likely `map()` another smaller component if we want to be real neat about it

- Get some super rudimentary **auth** going for my super secret posts. Just a simple password to share with friends -- maybe hash it up to serve the posts as a new route using a [Hono](https://hono.dev) server on [Val.town](https://www.val.town/)? (can you see I like to overcomplicate things)

Now that the things I want to get done is out there on the internet, I'm going to call that a soft obligation. I'm not going to confirm a date, though.
