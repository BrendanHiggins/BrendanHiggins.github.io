---
title: "Code Node: Vibe Coding A Cipher Tool"
description: "Like CyberChef but not"
date: 2025-06-11
tags: Cyber
layout: posts.njk
---

![code-node-banner](/static/images/code-node/code-node-banner.png "code-node-banner")

At this point in my life, "free time" is less a reality and more a mythical creature, fleetingly appearing between my day job, hobbies, housework, friends, and family. Yet, I recently managed to whip up what I consider a pretty fun and useful single-page web application focused on building and cracking classic pen-and-paper ciphers. No, I didn't magically find an extra 40 hours in the week. I gave the increasingly popular [vibe coding](https://en.wikipedia.org/wiki/Vibe_coding) a real try with Gemini. And yeah, that means you might find some unpolished edges or bugs – I totally expect those given the nature of this project.

# My Schedule vs. My Ambition
I've got a long-standing fascination with ciphers, stemming from my security work and general interest in [the unknown](https://brendanhiggins.dev/posts/dagapeyeff/). I've written a solid handful of Python-driven Jupyter notebooks with the intent of solving/breaking ciphers, and with my general expertise in Splunk Query language the | eval capabilities of SPL are particularly close to my heart.

However, one thing that always felt like it could be a useful tool was a [node graph based](https://en.wikipedia.org/wiki/Node_graph_architecture) application for solving these older style ciphers. An app like that would be interactive, visual, and powerful I figured. 

The problem? The sheer time commitment. Building a web application from scratch takes a lot of time, and I'm not a web developer by trade. The implementation of a large variety of cipher-related functions, and the design of an intuitive node-based UI is no small feat. It's the kind of project that usually gets relegated to a "someday" list for me. I'd even compiled a list of 'possible' libraries: BaklavaJS? litegraph? reactflow? rete? Where would I even begin?

# Enter Vibe Coding: My AI Co-Developer
This is where "vibe coding" came in. It's not some new programming language or framework. It's simply the iterative, conversational process of developing code with an LLM (I used Gemini). Think of it as having an incredibly fast, endlessly patient, and highly knowledgeable co-developer sitting right beside you. It's basically cheating, I'd never claim I 'coded' this application. More accurately, I guided it's creation into existence by directing the AI to do the things I wanted it to do with the app.

Amusingly, the process is a bit tedious since the scope of your queries tends to be limited, the code generation time is not instant, and bugs still come up that need to be thought through so you can prompt engineer the LLM to fix it 'correctly' ... so with that in mind, it's not that vibe coding is completely skill-less; it's just less of a skill than actually coding the whole thing from scratch yourself. 

Essentially, instead of taking hours or even days making mistakes, googling solutions, and meticulously hammering out every line of HTML, CSS, and JavaScript (or wrestling with the nuances and my lack of knowledge of newer HTML, CSS, and JavaScript syntaxes), I could just describe what I wanted to achieve. 

> "Give me a Caesar cipher node" ... "Can we add a button that duplicates a node?" ... "Seems like the save/load function has a bug where the loaded nodes cannot be deleted, can we fix that?"

This approach fundamentally changed the development timeline:

* Rapid Prototyping: Ideas went from concept to functional code snippets in minutes, not hours. I could test theories, throw away bad ideas, and iterate at the speed of an LLM.
* Offloaded Brainpower: Gemini handled the boilerplate, the syntax, the common patterns. My brain was free to focus on the unique logic, the user experience, and the overall architecture. No need to google the docs, Gemini's already read em'

# My Cipher Node App: Beyond the Linear Recipe
So, what did this vibe coding produce? A single-page web application designed for building and cracking classic pen-and-paper ciphers. It's got a robust set of features, allowing users to chain operations and see the flow of data.

You can dive right in and check it out here: **[code-node.net](https://brendanhiggins.dev/code-node/)**

Now, some of you might be thinking, "Isn't that what [CyberChef](https://gchq.github.io/CyberChef/) does?" And you're not wrong, CyberChef is an absolute beast – the "Cyber Swiss Army Knife" indeed. It uses a "recipe" model where you chain operations sequentially: 
```input -> operation 1 -> operation 2 -> output```

While CyberChef is incredibly powerful for creating linear pipelines, and does have some 'Flow Control' operators, handling complex, branching inputs and outputs between different 'recipes' isn't as visually straightforward as a true node graph. Code-Node is built to excel at that.

Another issue, although it's a bit of a minor gripe, is that CyberChef blends ancient techniques like ROT-13 (Caesar Cipher) with very modern techniques like a SHA-256 hashing, or straight up advanced forensic functions. Although you might find a CTF that uses both of these modern and pre-computing concepts together, one of the more famous [unsolved ciphers](https://en.wikipedia.org/wiki/List_of_ciphertexts) will likely predate a lot of these newer, digital, and often much more secure methods. With that in mind, including them can produce a degree of visual clutter if you are focused on non-digital methods.

This new application, code-node, thanks to its true node-based programming model, offers something slightly different, particularly valuable for exploratory cipher analysis:

**Visual Parallel Processing:** you can see a multitude of distinct operations running side-by-side on your canvas, allowing for immediate visual comparison and parallel exploration of different attack vectors. CyberChef, while capable, doesn't easily lay out and run things in this visually parallel fashion within a single workflow.

**Flexible Input/Output Flow:** This is key. The output of one node isn't just destined for the next node in a linear chain. It can be visually connected as input to multiple other nodes. This means you can create complex branching paths and converge them later. This makes building intricate, multi-step analysis workflows incredibly intuitive and visually clear.

Finally, code-node also has a lot of very basic string manipulation functions that are useful for pen-and-paper ciphers that CyberChef doesn't currently support. This visual graph approach provides a clearer mental model for complex scenarios, especially when you're trying several different decryption attempts or pre-processing steps on the same data concurrently.

# Conclusion
Building this cipher app was a testament to how AI, specifically LLMs like Gemini, can transform the development process. It's not about replacing developers; it's about augmenting us, allowing us to tackle more ambitious projects in less time, and to focus our creative energy on the unique problems we're trying to solve. Do I think this app will be the key to solving an unbroken cipher? Probably not, but it's fun to use either way.

So, if you've got a complex project on your "someday" list, and your "free time" is feeling elusive, maybe it's time to try a little vibe coding. You might be surprised at what you can build. I'm looking forward to updating the app with the help of AI going forward to see how good it can get.

----

# code-node screenshots, examples
Using [Kryptos](https://en.wikipedia.org/wiki/Kryptos) here's some examples to give you an idea of what the app looks like without using it.

![k1-screenshot](/static/images/code-node/k1-screenshot.png "k1-screenshot")

![k2-screenshot](/static/images/code-node/k2-screenshot.png "k2-screenshot")

![k3-screenshot](/static/images/code-node/k3-screenshot.png "k3-screenshot")

![k4-screenshot](/static/images/code-node/k4-screenshot.png "k4-screenshot")
