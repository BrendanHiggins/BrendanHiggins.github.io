---
title: "Chrome Extension: Amazon Order Hider"
description: "When a website removes a useful feature..."
date: 2025-06-19
tags: Tech
layout: posts.njk
---

## Amazon Archived The Archive Feature

My wife and I share an Amazon account. This isn't exactly a controversial take; we share a house, a last name, and money. So sharing a Prime subscription on my Amazon account is an obvious choice. For years, this has never caused an issue. The only "problem" was what to do with the purchase of a gift. Whether it was a birthday, an anniversary, or Christmas if we found something on Amazon we wanted to buy one another, we could go for it thanks to one feature - the humble and crucial "Archive Order" button. This little button was the guardian of gifting. It was a simple, effective solution. Of course, you could peek at the archived orders anytime you wanted...but we had a mutual agreement that we wouldn't do so.

Sadly, the feature is no longer available.
![amazon-9](/static/images/amazon-hide-order/amazon-9.png "amazon-9")

Amazon quietly euthanized the archive feature. It's gone. Vanished. 
Now, sadly, all orders are visible at all times, with no option to hide them. 

Amazon suggested, instead, that you setup an "Amazon Household" account.
![amazon-8](/static/images/amazon-hide-order/amazon-8.png "amazon-8")

Which honestly...? This probably works well but ... I don't **_want_** to do that. I want to be able to hide the occasional gift order from within my account. 

So, being stubborn...

### The Extension
The solution, of course, is a chrome extension. It's a client-side fix, essentially a digital piece of duct tape. Sadly, this fix won't work on the mobile app, so it is an imperfect solution, but a solution nonetheless.

The extension is as simple as it looks, you can punch in an amazon order # and after refreshing the page, the order will be _gone_. The whole order element is designated ```display: none;```.

![amazon-2](/static/images/amazon-hide-order/amazon-2.png "amazon-2")

This extension is so minor and silly I'm not actually going to bother to upload it to the Chrome Web Store, etc. But you can download it [here on my github](https://github.com/BrendanHiggins/amazon-order-hider).

To install it, clone the the git repo somewhere locally on your PC. Then, head to ```chrome://extensions/``` and turn on developer mode.

![amazon-7](/static/images/amazon-hide-order/amazon-7.png "amazon-7")

Once you're in developer mode you can "Load Unpacked" and select the folder containing the code.

![amazon-5](/static/images/amazon-hide-order/amazon-5.png "amazon-5")

![amazon-1](/static/images/amazon-hide-order/amazon-1.png "amazon-1")

And you're done!

Of course, this extension might break if the format of the amazon order page changes in the future. So I may have to update it with each change to the orders page, and I may do that, or I may not. Either way, it was fun to make an extension which I had never done before.

### In Conclusion...

Sometimes, for the customer, simplicity is best. Or, in a weird way, [worse is better](https://en.wikipedia.org/wiki/Worse_is_better). Software (in this case, a website) that has simple, but rich features is better for the user. 

In some ways, removing archive did make Amazon more simple. One less button for the customers to think about, right? I'm sure Amazon had a reason for removing it, for example by nudging users toward the "Household" account system, the platform can likely build a more personalized experience based on individual profiles (ads). Additionally, perhaps the separate profiles can more easily hide things like search history which is one way a gift could be ruined. 

But like I said, I don't **_want_** to do that.

RIP Archive 🪦, I'll miss you. 