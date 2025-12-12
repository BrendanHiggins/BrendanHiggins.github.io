---
title: "COVID-19 Vaccination Cards"
description: "If you're going to do something wrong, do it big!"
date: 2021-08-20
tags: Misc
layout: posts.njk
---

<div>
  <small style="text-align:justify;font-weight:bold;color:#FFE46B">The material and information contained on this page are for general information and educational purposes only. The author of this page does not support or promote the illegal production, distribution, or use of any fraudulent documents.</small>
</div>
<hr>

![Google News](/static/images/covid-cards/news_story.png)

# Fake Vaccine Cards
With the rise of "Vaccine Passports" being required in various cities for basic services, so too comes the all too predictable rise of the fraudulent COVID-19 Vaccine Record Cards found in the wild. 

This got me thinking, why did they make the card so simple? Why did they make it _so easy_ to forge?

<div style="text-align: center;">
  <b>Wait, is it actually easy?</b>
  <br>
  <em>No way to know without trying it.</em>
</div>
<br>

# Committing A Felony?
> If You Make or Buy a Fake COVID-19 Vaccination Record Card, You Endanger Yourself and Those Around You, and You Are Breaking the Law ...

> Additionally, the unauthorized use of an official government agency's seal (such as HHS or the Centers for Disease Control and Prevention (CDC)) is a crime and may be punishable under Title 18 United States Code, Section 1017, and other applicable laws ...

> ...we recommend you do not post photos of your vaccine card to social media websites—your personal information could be stolen to commit fraud.

\- [FBI Public Service Announcement I-033021-PSA](https://www.ic3.gov/media/y2021/psa210330)

> Whoever fraudulently or wrongfully affixes or impresses the seal of any department or agency of the United States, to or upon any ... with wrongful or fraudulent intent, uses, buys, procures, sells, or transfers to another any such ... paper, to which or upon which said seal has been so fraudulently affixed or impressed, shall be fined under this title or imprisoned not more than five years, or both.

\- [18 U.S. Code § 1017](https://www.law.cornell.edu/uscode/text/18/1017)


Okay, so not really, though. I have no intent to fraudulently use, distribute, or sell any fake COVID-19 cards.

But - I am legitimately curious how hard it is to make one. Also, someone somewhere in the government thought simple black-and-white paper cards were a good idea. So let's do what we do in cybersecurity and test for vulnerabilities and discuss mitigations. 

# Making A Fake 

### Adobe Products
I'm fairly convinced the CDC/HHS produced the master template for the real and authentic COVID-19 card in an Adobe program, but since I have very little real in-depth knowledge of the full [Adobe Creative Suite](https://en.wikipedia.org/wiki/Adobe_Creative_Suite), I couldn't pinpoint which one.

#### Microsoft Word / Google Docs
I didn't waste my time trying to remake the card in Microsoft Word or Google Docs, but I'm sure it's possible if you're dedicated enough. For me, this project wasn't about testing every possible method of reproduction, and banging my head into document programs didn't sound like any fun.

#### LaTeX 
I thought this would be a cool opportunity to finally teach myself [LaTeX](https://en.wikipedia.org/wiki/LaTeX)

I was right! It was a perfect time for me to learn how complex LaTeX can be, and that I had absolutely no desire to recreate the fake card in this language. 

![LaTeX](/static/images/covid-cards/latex.png)
I'm comfortable sharing this image because...
1. It looks terrible
2. It's at least 50% incomplete, and the lower half of the table is certainly the most complex part to reproduce
3. If someone knows LaTeX or is motivated enough to bootstrap the bit of code in the image and turn it into the full card, they don't need this post to help them

So my adventures in LaTeX came to an end, but I will consider making a LaTeX resume in the future. 

#### HTML & CSS
This was the best method I found for producing what I would consider a high-quality fake. 

When I showed my HTML/CSS created fake to my wife she replied, "Wow this is creepy." Unfortunately, the fake card only took me approx. 4 hours to produce, and I'm by no means a particularly experienced or talented web designer.

I even used stupid tools, like a Digital Caliper (anytime I find an excuse to use calipers I take it) to measure the real card. I did that because it was fun, and I don't own a flatbed scanner...but lots of people do. If I had owned a flatbed scanner, that would have been a much smarter option for identifying spacing sizes. 

To calibrate my fake, I had to print it 3 or 4 times to see how my cheap Brother Laser printer handled it in reality as opposed to my pixel-based monitor. HTML and CSS calibration adjustments were made between each run. Each of these fraudulent copies was subsequently blacked out with my handy Miseyo Identity Theft Protection Roller Stamp, and fed into my Amazon Basics Micro-Cut Paper Shredder (two other tools I always find excuses to use). This was probably unnecessary, but I didn't want my local garbage man to come across my handiwork.

The result is, in my opinion, a surprisingly convincing card. I wasn't going for perfect here since I have no intention of using the fake card (it's already been shredded). However, if you printed even this imperfect replica on some 80-110lbs card stock, and made sure to get your 90-degree angle cuts precisely lined up with something like a paper guillotine...

...back to the point, why did the CDC/HHS make this **_so_** easy to forge?

Below is a picture of my real (and censored) vaccine card, and my blank, fake card. ( ͡° ͜ʖ ͡°) 
![Cards Compared](/static/images/covid-cards/vax_edited_real.png)
This image was taken at an odd angle/blurred/censored for a reason. Taking a screenshot and reproducing this card should not be worth the effort as a result, especially when thousands of higher quality images exist online from major news articles, and from everyone who ever took a ["Vaccine Card Selfie"](https://www.nytimes.com/2021/02/06/health/covid-vaccination-card.html) in the last 8 months. The worst is when the card has the "Patient Number" field filled out (mine does not) with a valid Medical Record Number (MRN) - a perfect way to unintentionally leak your PII.

Here's what the "final" product looked like in my browser, ready to print (The black background was ignored unless I selected "Background graphics" on my print dialog).

For this screenshot, I added a giant red "FAKE" watermark, and purposely left the card at its "native" size to prevent someone from trying to copy the card from this post.
![HTML Cards](/static/images/covid-cards/html.png)

But then again, I'm not sure why I'm bothering with so much opsec around the card images because it's a joke with how easy it is to find high-resolution images of the card. If only everyone had followed that FBI advice.
![Google Cards](/static/images/covid-cards/google_images.png)

# Papers, Please
![Papers Please](/static/images/covid-cards/papers_please.png)

I guess I'm not the only one disappointed in the paper cards' ease of duplication. Some states are working on a digital solution to combat this, for better, and worse. We'll talk about that later on.

For now, let us not disrespect our age-old friends: paper, ink, and printers -- they have more tricks up their sleeves than some may expect.

#### COVID-19 Card Security Measures Taken:
Non-Standard Paper Grammage (Paper "Weight") and page size.

The vaccine verification could have easily been a piece of 20lb A4 printer paper that was handed to you after a successful injection. The CDC/HHS at least seemed to find that 4x3" card stock was a more convenient and, possibly unintentionally, more difficult format to reproduce.
* [Paper Grammage](https://en.wikipedia.org/wiki/Grammage) / [Card Stock](https://en.wikipedia.org/wiki/Card_stock) / [Paper Sizes](https://en.wikipedia.org/wiki/Paper_size#A_series)

The only other "feature" the card really has is unique spacing/margins around certain elements. Perhaps there are other more discrete features that I'm oblivious to?

#### Techniques Not Utilized
##### [Machine Identification Code](https://en.wikipedia.org/wiki/Machine_Identification_Code)

I'm fairly sure Machine Identification Codes are not being used. However, I don't have a microscope to truly verify on my real card. On the bright side, I feel like if they _were_ present, someone else smarter than me would have already posted about it on the internet.

There is some interesting text in the bottom right and left corners of the back of the card (which I didn't bother reproducing in my HTML forgery) that I'm not clear what the purpose is. However, given that the purpose is vague/unclear - any layman validating a card to be "real" or "fake" wouldn't know what to look for in those fields other than data approximately similar to other cards seen.

I even checked my real card under a blacklight. I didn't see any secret fluorescent Illuminati codes, so that was a real disappointment. (╯°□°)╯︵ ┻━┻

##### [Microprinting](https://en.wikipedia.org/wiki/Microprinting)

Would it have been difficult for the CDC/HHS to have utilized microprinting in the production of the cards? No. Have you ever seen [a dollar bill](https://www.uscurrency.gov/sites/default/files/download-materials/en/CEP_Dollars_In_Detail_Brochure.pdf)? US currency is heavily microprinted. We have the technology at the federal level.

One benefit of this approach is that virtually nobody except pre-existing illegal counterfeiting operations, and nation-state actors, would be able to reproduce this level of detail. Even then, the counterfeit operations have easier ways to **make** money than to try and sell COVID cards to random people. <span style="color:green;">\[̲̅\$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅\$̲̅]</span>

##### [Paper Embossing](https://en.wikipedia.org/wiki/Paper_embossing)

Would it have been difficult for the CDC/HHS to have distributed an official CDC/HHS embossing seal to "validate" the document? No, not at all. The utilization of "raised seals" on vital records documents like Birth/Marriage certificates has been the norm for years. Commercial solutions for custom stamps/seals already exist, and would be difficult to reproduce for the average fraudster.

##### [Literally Just Fancy Paper](https://en.wikipedia.org/wiki/Stationery)
Plain white paper is without question the most common paper owned by people. I can't believe I just wrote that sentence, but there it is.

Even making the card a randomly chosen color, like a nice light pink...maybe with some fancy curly blue borders. Ooo! Or maybe blue and green! Where have I seen that before? 

![CDC Font](/static/images/covid-cards/car-titles.png)

Breaking Development: it's called _stationery_, it comes from tree pulp, and people buy it for wedding invitations. ಠ_ಠ

##### [Unique Font](https://en.wikipedia.org/wiki/Font)

I'm not 100% sure, but the font used on the cards is...[Open Sans](https://fonts.google.com/specimen/Open+Sans?preview.text=COVID-19&preview.text_type=custom). 
Underwhelming, all I did was inspect the font used on the title of the [CDC's Social Media Toolkit](https://www.cdc.gov/coronavirus/2019-ncov/communication/vaccination-toolkit.html). From what I can tell, the same font used on the card is also used on their Digital Resources.

Also, throwing in a few [homograph](https://en.wikipedia.org/wiki/IDN_homograph_attack) characters would have been pretty cool for forensics.

![CDC Font](/static/images/covid-cards/siteFont.png)

### Why?
Perhaps the powers to be wanted to make the cards easy to produce so they could get millions of them out to the thousands of CVS/Wallgreens/Hospitals/Ad-hoc vax sites across the country?

That's believable, but if the target was 75% of the country, that means the Federal Government would have to produce ~300 million "secure" 4x3" cards to distribute. That doesn't seem like a tall order considering 

To put this into comparison, this week the #1 book on Amazon is Stephen King's "Billy Summers", which was released on August 3rd. According to [Publishers Weekly](https://www.publishersweekly.com/pw/nielsen/top100.html), "Billy Summers" has sold at least 146,000 units YTD. Let's assume that number is accurate, and doesn't account for E-Book Sales, for the sake of the example (and given that the novel has only been out for 2 weeks.)

```
528 pages * 146,000 units sold = 77,088,000
```

One book, 2 weeks, 77 million full-size pages printed and bound. The excuse is that the government couldn't produce 300 million cards index cards. If the govt. can commission the F-35, and they can commission a few pieces of fancy paper.

Finally, none of the emergency use authorizations (EUA) for our USA Vax came as a surprise to the CDC/HHS, so they had plenty of lead time to think about the formatting, physical characteristics, and logistic distribution of the cards. 


# Digital "Cards"

A few states are pursuing vaccination cards as a "passport" to engage with society at large more seriously than most. Of those, NY and CA seem the most invested, and even put resources into digital vaccination verification systems. Let's take a look at those!

## New York (City)

#### How It's Supposed to Work:
![NYC](/static/images/covid-cards/NYC_covid_safe.jpg)

#### What People Did With it:
<div style="display: flex;">
  <div style="flex: 50%;border:1px solid black;">
    <img src="/static/images/covid-cards/NYC_lol0.jpg" style="width:100%">
  </div>
  <div style="flex: 50%;border:1px solid black;">
    <img src="/static/images/covid-cards/NYC_lol1.png" style="width:100%">
  </div>
</div>

#### Trying It Myself
I had to download this to try it myself.

<img src="/static/images/covid-cards/NYC_lol2.png" style="width:40%">

Okay, clearly the app takes _literally_ any picture you give it and puts a checkmark on it.
That's okay because I think the theory is you show the picture on the app to a human with eyes who validate that it _looks_ like a vaccine card. Unfortunately, the picture is probably less reliable than the real thing since the app seemingly had nowhere to validate the back of the card - where lots of very specifically formatted information is.

The app is no better than just having a picture of a card in your phone's default photo app.
The silly app is silly. Let's move on to something more well-thought-out.

## New York (State) & California
Both California with their ["Digital COVID-19 Vaccine Record"](https://myvaccinerecord.cdph.ca.gov/) and New York with their ["Excelsior Pass"](https://epass.ny.gov/home) are utilizing what's called ["SMART Health Cards"](https://smarthealth.cards/). NY clearly put a little more marketing into their naming concept than CA.

### But How Does It Work?

You can dig through the SmartHealth [FAQ](https://smarthealth.cards/faq.html) and won't find a single piece of interesting information about the actual technology, but there is a link to their [Technical Specifications](https://spec.smarthealth.cards/).

<script async src="https://unpkg.com/mermaid@8.11.5/dist/mermaid.min.js"></script>
<div class="mermaid"> 
graph TD; 
subgraph START
A[You go get your shot]-->B; 
B[Healthcare provider reports the shot to the state public health officials]-->C;
B-- You request a digital vaccination status -->D[State health officials digitally sign a SMART Card Vax Verification for you]
C[Reports to CDC/HHS]
D-->E[You use it to get into concerts or something.]
end
style A fill:#FFE46B,stroke:#333,stroke-width:4px
style B fill:#FFE46B,stroke:#333,stroke-width:4px
style C fill:#FFE46B,stroke:#333,stroke-width:4px
style D fill:#FFE46B,stroke:#333,stroke-width:4px
style E fill:#FFE46B,stroke:#333,stroke-width:4px
linkStyle 0,1,2,3 stroke-width:2px,stroke:#000
style START fill:#fff,opacity:0.5,stroke:#000,stroke-width:1px
</div>

Okay but the interesting bit here is this box, so lets dig in a little bit.
<div class="mermaid"> 
graph TD; 
A[State health officials digitally sign a SMART Card Vax Verification for yo]
style A fill:#FFE46B,stroke:#333,stroke-width:4px
</div>

The state generates a vaccine [HL7 FHIR SMART Health Card](https://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig/index.html) "FHIR validation profile"...basically a [json blob]() of information that looks like this:
```
{
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "fullUrl": "resource:0",
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "family": "Doe",
            "given": [
              "John"
            ]
          }
        ],
        "birthDate": "2001-12-25"
      }
    },
    {
      "fullUrl": "resource:1",
      "resource": {
        "resourceType": "Immunization",
        "status": "completed",
        "vaccineCode": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/cvx",
              "code": "212"
            }
          ]
        },
        "patient": {
          "reference": "resource:0"
        },
        "occurrenceDateTime": "2021-07-04",
        "lotNumber": "XXXXXXX",
        "performer": [
          {
            "actor": {
              "display": "CVS Pharmacy, Inc. #12345"
            }
          }
        ]
      }
    }
  ]
}
```

The blob may have two "Immunization" resources if you opted for Moderna/Pfizer. Each vaccine is also given a [FHIR standard](https://build.fhir.org/valueset-vaccine-code.html) "[code](https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx)" assigned:
* Moderna (207)
* Pfizer (208)
* Janssen/J&J (212)

Once this blob of data is generated, the state official signs the blob with an ES256 JWK Key. (Below is the sample key provided by the organization for demos)
```
{
  "kty": "EC",
  "kid": "3Kfdg-XwP-7gXyywtUfUADwBumDOPKMQx-iELL11W9s",
  "use": "sig",
  "alg": "ES256",
  "crv": "P-256",
  "x": "11XvRWy1I2S0EyJlyf_bWfw_TQ5CJJNLw78bHXNxcgw",
  "y": "eZXwxvO1hvCY0KucrPfKo7yAyMT6Ajc3N7OkAB6VYy8",
  "d": "FvOOk6hMixJ2o9zt4PCfan_UW7i4aOEnzj76ZaCI9Og"
}
```

In this case, per JSON Web Token (JWT) [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519), the "d" variable is private to the state signing official. Unless you know how to reverse Ellipitcal Curve Digital Signing Algorithms, you're out of luck in reproducing your own cryptographically verifiable key.

Once this is signed, the JWT protocol takes over and minifies the payload, deflates to base64, appends a JWS header, cryptographically signs itself, numerically encodes it and pipes out a neat QR code.

The result is a big string of "Smart Health Card" data"
```
shc:/5676290952432060346029243740446031222959532654603460292540772804336028702864716745222809286133314564376531415906402203064504590856435503414245413640370636654171372412363803043756220467374075323239254334433260573601574529315312745825284350767259640975563242057211533129292563426267252663525944327361326407642421716130335033121070385768360562705307232375776227436226252022060332360959315470746622762224391005302739702276631125036711244253362624673861005859200670073670700011040512694571714077361065702462664305255621073605590050645750606971452165585224006912342639335212413324085676273672626404532455102334362761720340366512322109564054456209555869500736002924073155412441612759671270716634070429077726070340711143347723453826107520276771225352096636341126573038343737090512566200217157047237072606742373605607712300043024747224302440456707543435386038540466400333066965567465096441205525604212243920215641387565353456574429097755760574617606545071046960223034445464445361636072674129383062704369717228406143304371520628457760265872610752726612553307577667392742423643426365250728282956557421642756391265322575763106523409332464530650423760286508566043673739054045620432265508045637413941617107715737273458377173211250425905362712030668374554605962552307550430627452292652734308090533770674597059771265640470676054114307716207551067555065651121015709006824435532075332530772343227766375705811291161716063647452423771644326405927677228623431077175096666042970614470292877680756046363733030450337631050632867670873071274
```

And a QR code for your smartphone:

![Demo QR](/static/images/covid-cards/demo_qr.png)

All of this can be reversed and validated with the provided online resources: 
* https://demo-portals.smarthealth.cards/VerifierPortal.html
* https://demo-portals.smarthealth.cards/DevPortal.html
* https://github.com/dvci/health-cards-walkthrough

### Digital "Cards" Conclusion
So in general...these are pretty well done systems. The end result is generally tamper-resistant and is built on proven web technology/encryption standards. However, it does assume an individual has access to a smartphone and is technologically competent enough to download and operate an app.

# Ever Heard Of Plastic?
When I was doing helpdesk/field tech work as an intern, I somewhat commonly found myself fixing [FARGO  HID ID Card Printers](https://www.hidglobal.com/products/id-card-and-badge-printing/fargo). They broke more often than I'd have liked, but you know what they did? They printed full-color plastic ID cards.

A huge barrier to entry for vax card fraud would be \$500- \$1500 card printers. The only reason I can imagine this very "Driver's License" approach was rejected was due to a potential cost overrun.

It would have been convenient to be mailed a nice plastic card with my picture, name, and a unique identifying digital hash/QR that matches state/federal vaccination records updated digitally in a centralized database to track initial vaccine, subsequent boosters, etc.

That all sounds a little dystopian, perhaps...but I might take a functional, well-thought-out system over the dysfunction and unreliability that we have currently. 

# This Blog Post Isn't The Problem

Someone might read this and think, "Oh boy, this guy out here giving away the keys to the kingdom on making fake cards!" 

First, this blog post is 100% open-source information, and the "fake" vax cards I made were obfuscated and subsequently destroyed. I only made them to prove a point.

As proven in the article, the ease with which the current card is forged is an incredibly low bar. To prove it, I spent a few hours on 4chan /pol/ ಥ_ಥ. [/pol/](https://en.wikipedia.org/wiki//pol/) is an image board titled "Politically Incorrect", and is a true cesspool for quickly discovering the hottest trends and discussions on some of the most obscene, distasteful, racist, and generally fringe/conspiratorial ideas percolating across the surface web's underbelly at any given moment.

With this fun description in mind, It did not take long to come up with loads of fake COVID card information, and high-resolution templates. I attached a collage of my findings, slightly blurred to meet my own re-hosting ethics. 

![4chan](/static/images/covid-cards/4chan-blurred.png)

And finally, in a hilarious finale...the original PDF is pretty much just on the internet anyway. It doesn't take an OSINT genius to find it. There are plenty more examples than just poor Florida.


Google Dork:
```
"COVID 19 Vaccination Record Card" filetype:pdf
```

![Demo QR](/static/images/covid-cards/its_literally_on_the_internet.png)


# Real Cards: Insider Threat
Despite all this, the easiest way to fake a vax is to be somebody or know somebody in healthcare.

![insider](/static/images/covid-cards/nurses_insider_threat.png)

Just like in cybersecurity, sometimes your biggest threat comes from within. Some Nurses are anti-vax mandate and probably could gain access to the stack of blank, authentic COVID-19 cards. Obviously, this would depend greatly on the operational/physical security procedures and operations at each specific healthcare location. Some may have better procedures than others.

It only [takes one](https://www.webmd.com/vaccines/covid-19-vaccine/news/20210812/german-nurse-suspected-giving-saline-instead-of-covid-vaccine) insider to do some wild stuff.
> Aug. 12, 2021 -- A nurse in Germany is suspected of giving saline solution rather than the COVID-19 vaccine to more than 8,500 people at a vaccination center this year.

# The Problem Is The Execution
The problem isn't exclusively the fakes - it's the initial execution of the cards themselves.

Nobody should be expected to use an ill-conceived paper card to gain entry to a business or engage in society.

All of this makes me wonder if we would have been better off never introducing the concept of "cards" at all, especially if we had foresight with just how poorly they would be executed to begin with. Sadly, at this point, the Pandora's Box of Vax validation trinkets have already been opened.
