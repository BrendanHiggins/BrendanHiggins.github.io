---
title: "StateRank"
excerpt_separator: "<!--more-->"
categories:
  - Technology
classes: wide
---

<!--more-->

---
# COVID-19 Hobbies

During the peak of COVID-19, something fun started to happen with everyone quarantining/stuck indoors more than ever before -- random COVID-19 hobbies! Things like streaming movies/TV shows, reading, and board/video games make sense when you're stuck inside. There were the "viral" hobbies as well like for whatever reason every other person attempted to make sourdough bread.

I didn't start any new hobbies per se (if anything it killed my hobby in Jiu-Jitsu!) but I did get together with a close friend of mine and attempted to start a _website_. The idea was to practice coding, learn some new web technologies, and possibly monetize  the site.

# staterank<span>.</span>us
We purchased the `staterank.us` domain name and began development on July 29th, 2020. The last code commit to our GitHub repository was on Sept 13th, 2020. We left the site running until July 2023.
![gdomains](/assets/images/staterank/gdomains.PNG "gdomains")

I no longer own the domain so I can't promise what the domain is/will be in the future.
![forsale](/assets/images/staterank/forsale.PNG "forsale")

The concept behind the website was to build a tool that helped users make decisions about what state to move to based on their preference for certain _aspects_ of life that some states are "better" at than others. 

For example, someone may be a Democrat who values high-quality healthcare and a state with rich outdoor activities to participate in. Which states are ideal for them given these preferences? Alternatively, someone else may be a Republican who values low crime rates and low cost of living. Is the state they'd prefer to live in different? Probably. Let's help them figure it out with data.

Perhaps a better explanation can come straight from the "about" section we wrote for the site:
![about](/assets/images/staterank/about.PNG "about")

We thought the idea was good...maybe our execution wasn't so great because in three years we left the site operational it only had 143 users. However we also totally abandoned/stopped updating the site after 2 months of development.
![analytics](/assets/images/staterank/analytics.PNG "analytics")

# The Site
![splash](/assets/images/staterank/splash.PNG "splash")

We used fairly standard tech to get it all up and running with the most notable and important thing being [D3](https://d3js.org/).

![techstack](/assets/images/staterank/techstack.PNG "techstack")

In this case, here is what someone's map could look like after adjusting the sliders:
![map](/assets/images/staterank/map.PNG "map")

We also allowed users to disable data all at once, or one-by-one if they totally wanted to disregard a particular category.
![disabled](/assets/images/staterank/disabled.PNG "disabled")

For example, here is a map with everything disabled except temperature data with a preference for colder states.
![temp_data_only](/assets/images/staterank/temp_data_only.PNG "temp_data_only")

And here are two examples of the UI the user would interface with to generate their maps:
![using_map](/assets/images/staterank/using_map.gif "using_map")

![using_map2](/assets/images/staterank/using_map2.gif "using_map2")

We attempted to put explanations and tooltips on everything we could to help make the experience of adjusting the data as easy as possible. 

You could also click on an individual state and get a metric-by-metric breakdown and compare it to "your" preferences/ratings.
![per_state_metrics](/assets/images/staterank/per_state_metrics.PNG "per_state_metrics")

However, at the end of the day, we were only able to scrape so much public data in two months, and we couldn't validate the quality or accuracy of any of that data.

The only interesting feature left is the "Share Map" button which generates a share code:
![share](/assets/images/staterank/share.PNG "share")


```
/index.html?share=ipsnonnnnqmkmvnnm&name=QnJlbmRhbk1hcA==#map
```

The first parameter "share" was somewhat complicated but mapped each slider value (0.0 - 0.75) to unique alphanumeric characters that the javascript could then parse out and update all the slider values. We could have encoded this more simply, but this weird alphabet method made for a "prettier" URL.

The easy parameter was "name" which is just bas64 for whatever the user types in:
```
QnJlbmRhbk1hcA== --> b64 -> BrendanMap
```

This base 64 also had robust regex for dropping curse words and XSS patterns for security.

We left a few ideas on the Trello as well...
![trello](/assets/images/staterank/trello.PNG "trello")

So with that, I've at least documented the project. Success or failure aside, it was something fun to do with a friend. In total, it cost us several hours and earned us -$50.

``` ¯\_(ツ)_/¯ ```
