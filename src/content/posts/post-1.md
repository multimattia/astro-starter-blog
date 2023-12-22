---
title: "My Broken Blog Post"
author: Matt Chan
pubDate: 2023-12-19
description: "This is the first post of my Astro blog."
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["astro"]
---

Here's a new blog that I'm finally getting around to doing! It's going to replace to replace my old Gatsby blog (that never really had any content) over at mattchan.xyz, that I never updated after completing the initial tutorial back in 2020. Maybe I'll have something more to say now (I do).

## What I've accomplished

1. **Installed and deployed Astro**: Deployed this thing on [Cloudflare Pages](https://pages.cloudflare.com/). Much, much easier than I thought it would be! I like to put things out there as soon as I can so I can suss out issues with the deployment pipeline (so long as I'm not doing anything related to auth or private APIs). That said, I do need to look into how Cloudflare is rerouted my wildcard domain. I had configured it earlier on Porkbun -- I'm not entirely sure how they figured that out on the Cloudflare side. Maybe I did some configurating that I have simply forgotten. The SSL was nice. Really nice! Easily beats fuddling around with [LetsEncrypt](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal) and [nginx .conf](https://www.nginx.com/resources/wiki/start/topics/examples/full/) files for a few hours.

2. **Making Pages**: I'm learning about Astro's file router by following along in their docs. They're well done! Maybe a bit too easy for me (I'm actually kidding, the questions and objective tracker were S tier). I'm just very afraid of tutorial hell, which is why I'm using my brain to write this instead of copy-pasting from the docs! Progress.

3. **Making Blog Posts**: And this is the progress that I was _just_ talking about. So much fun. Just typing away on my little puter. Maybe I'll start another post for the fun of it.

4. **Making dynamically generated HTML**: This was great fun to implement! Astro's abstraction made a lot more sense on first glance when compared to Next.js. App Router this, Page Router that, there was a lot for my brain to hold onto with Next.js. I'm still not 100% on if I'm going to commit to the App Router since it includes features, like [RSC](https://www.joshwcomeau.com/react/server-components/), that are still throwing some professionals in a loop. I don't want to be wrestling around with an abstraction of an abstraction where everything seems like magic in a bad way. Astro, on the other hand, seems to just get out of your way, in that I can reason about it, try to see if something works _this_ way and it just does! That might just be because of the multiple methods in which you can pass props around components. You can even use Layouts in other Layouts, which is super cool.

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this area for a blog of a blog about a yet another Rust based text editor! And also my collaborative Next.js project. And also my QMK config (thanks Oryx and ZSA! You were more or less worth the money).
