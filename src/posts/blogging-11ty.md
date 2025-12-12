---
title: "Personal Blogging"
description: "Migrating from Jekyll to 11ty"
date: 2025-12-08
tags: Tech
layout: posts.njk
---

## Personal Blogging

In June 2020, I found myself with a surplus of free time (we all know why). To fight the boredom, I decided to finally start a blog.

It sounded simple enough, but what started as a quick project turned into a multi-year journey through the landscape of web development tools.

## Ghost CMS
Initially, I spun up an instance of [Ghost](https://ghost.org/).

Don't get me wrong, Ghost is an awesome framework. It offers a sleek writing experience and excellent features right out of the box. But for a simple personal blog, it felt like absolute overkill.

It was too heavy. Too commercial. Potentially too expensive. I abandoned it in less than a week.

## Jekyll
To strip things down, I moved to Jekyll. I did this in part because I needed something much more lightweight, and I was inspired by a friend of mine who had [one](https://loganbrown.dev/).

This was my introduction to the world of Static Site Generators (SSG). The logic was refreshing: you write Markdown files, run a build command, and the computer spits out raw HTML, CSS, and JS files. No database, no backend, just files you can host anywhere for free. I picked [GitHub Pages](https://docs.github.com/en/pages) to host mine.

Jekyll served me well for over 5 years (2020-2025). It’s kind of the grandfather of SSGs and has a massive ecosystem. However, I don't feel any particular attachment to it. I spun up the same template my friend was using called [Minimal Mistakes](https://mademistakes.com/work/jekyll-themes/minimal-mistakes/) and just sort of went with it. I also don't know Ruby at all. So much of the underlying framework of Gemfiles, etc. are a mystery to me. 

## Current Stack: PEA

I'm sure someone else has invented this but I decided to go with my own stack: **PEA**
* [Pico CSS](https://picocss.com/)
* [Eleventy (11ty)](https://www.11ty.dev/)
* [Alpine.js](https://alpinejs.dev/)

Today, this blog runs on this exact stack. 

11ty is a simpler, faster alternative written in JavaScript. It creates zero-client-side JavaScript by default and compiles your site incredibly fast. It feels flexible in a way other generators don't—it doesn't force a specific structure on you.

To style it, I decided to avoid the more common Tailwind or Boostrap and went with Pico CSS. 

Pico CSS is a minimal CSS framework for semantic HTML. It styles standard HTML elements (\<h1>, \<p>, \<button>) beautifully without requiring me to add a half dozen classes to my markup. It keeps the code clean and readable.

The combination of 11ty + Pico CSS is the perfect balance for me: speed, efficiency, simplicity.

Finally, adding Alpine.js gives me javascript in a lightweight package. Allowing for things like this incredible, powerful ... incrementer. I don't actually have a need for any JS yet, but if/when I do this is what I have loaded up for it.

<div x-data="{ count: 0 }">
    <button x-on:click="count++">Increment Me: <span x-text="count"></span></button>
</div>