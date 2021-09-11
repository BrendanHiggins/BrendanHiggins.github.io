---
title: "The 82 Year Old CTF: D'Agapeyeff Cipher"
excerpt_separator: "<!--more-->"
categories:
  - Cyber Security
  - Technology
---
I've been reading the dictionary in my free time.

<!--more-->

# Cipher Discovery
One night while browsing Wikipedia's List of [Unsolved Problems](https://en.wikipedia.org/wiki/Lists_of_unsolved_problems) I stumbled across an intresting page -  [List of ciphertexts](https://en.wikipedia.org/wiki/List_of_ciphertexts).  A lot of the information on the page wasn't particularly new to me: Beale, Enigma, Kryptos, etc.

But one did catch my eye that I had not heard of - 
| Year of origin | Ciphertext | Decipherment status |
| --- | --- | --- |
| 1939 |	<a href="https://en.wikipedia.org/wiki/D%27Agapeyeff_cipher" target="_blank">D'Agapeyeff Cipher</a> |	Unsolved |

An unsolved 20th century cipher? For the last 82 years? That's interesting...

> The D'Agapeyeff cipher is an as-yet unbroken cipher that appears in the first edition of _Codes and Ciphers_, an elementary book on cryptography published by the Russian-born English cryptographer and cartographer Alexander D'Agapeyeff in 1939. 

> Offered as a "challenge cipher" at the end of the book, the ciphertext is:
```
75628 28591 62916 48164 91748 58464 74748 28483 81638 18174
74826 26475 83828 49175 74658 37575 75936 36565 81638 17585
75756 46282 92857 46382 75748 38165 81848 56485 64858 56382
72628 36281 81728 16463 75828 16483 63828 58163 63630 47481
91918 46385 84656 48565 62946 26285 91859 17491 72756 46575
71658 36264 74818 28462 82649 18193 65626 48484 91838 57491
81657 27483 83858 28364 62726 26562 83759 27263 82827 27283
82858 47582 81837 28462 82837 58164 75748 58162 92000
```

An ELEMENTARY book? That doesn't add up. I had to check this out myself.

![Amazon](/assets/images/dagapeyeff/amazon.png)

That seems lame. Let's go for the original, 1st edition. Thanks, ebay.

![Amazon](/assets/images/dagapeyeff/ebay.png)

![Cover](/assets/images/dagapeyeff/cover.jpg)

![Unsovled-Page](/assets/images/dagapeyeff/cipher_real.jpg)

It's a really neat book. Especially for a Cyber/Cipher nerd like myself. Even if I'm not a particularly talented or well-versed cryptologist.

It even has that musky, mildly sweet-organic deomposistion scent that books seem to develop over time. 

<small>I spent more time smelling it than I'd like to admit.</small>

# Lets Assume It's Possible

Some folks online seem think this cipher is impossible because it was created with underlying errors so severe that it cannot be solved.

> It was not included in later editions, and D'Agapeyeff is said to have admitted later to having forgotten how he had encrypted it. 

Many use this admission as proof for that. However, in all my research I can't actually find a source for this quote. Not even wikipedia has a reference. At this point, it just seems like hearsay passed down through the ages, but maybe the direct quote is buried in some older text that I can't locate on the internet. (I didn't try _that_ hard).

For the sake of this post, let's assume D'A (D'Agapeyeff) was no dummy - he actually did create valid plaintext, and encrypted it with one or more known encryption/encipherment methods for the era (1939). Furthermore, on page 145 of the 1939 edition he warns
> It is very common in deciphering to come across mistakes ... by the encipherer ... 

Would he include a challenge cipher without solving it once himself to prove it was mistake free? Was a mistake added on purpose to increase the challenge? Did he not even realize his mistake and somehow "solve" it in a proof-check while incorporating his same mistake twice? _Maybe_...

Although, it seems reasonable to me that D'A devised a scheme for his challenge and subsequently lost the solution after publishing. This was 1939, there was no cloud storage provider to back up the solution to. Paper is lost, soiled, destroyed, etc. It's also worth noting...WWII ran from 1939-1945. For all I know his house blew up in a [German air raid](https://en.wikipedia.org/wiki/The_Blitz)? Probably not, but you likely see my point. Additionally, he was getting older and would eventually pass away in 1955. Old people...forget stuff? Maybe...I'm stretching a bit.

What if its a [one-time pad](https://en.wikipedia.org/wiki/One-time_pad)? I would argue, why would D'Agapeyeff purpously include something he knew would be unsolvabe? This was an _elemetary_ book afterall...maybe everyone has just overthought the problem so far? Supposedly D'A was quite the generalist when it came to the subject of _codes and ciphers_.

Some people say it was added as a "Hoax" but somehow, on the eve of WWII, I don't think D'Agapaffeye was in a joking mood? Especially with the topic of ciphers being exponentially more relevant on the world stage.

There is the oustanding question as to why the ciper was removed in copies of the book after the 1949 edition (1952+), though. I guess we may never know. So let's just assume it's possible? It's more fun that way anyway. 

# General Cipher Analysis
The cipher is delimited into numeric groups of 5 digits. All said, there's 79 groups in an 8x10 grid with the final 5 digit grouping missing. That makes 395 individual digits.

Here's a frequency analysis of the 5 digit groupings where count > 1
|5 Digit Sequence:| 81638 | 75748 | 28462 | * | 
| ---| --- | --- | ---| --- |
| **Frequency:** | 2 | 2 | 2 | 1 | 

 Lets break this thing up into pairs and do a frequency analysis.
```
75 62 82 85 91 62 91 64 81 64 91 74 85 84 64 74 74 82 84 83 81 63 81 81 74 74 82 62 64 75 83 82 84 91 75 74 65 83 75 75 75 93 63 65 65 81 63 81 75 85 75 75 64 62 82 92 85 74 63 82 75 74 83 81 65 81 84 85 64 85 64 85 85 63 82 72 62 83 62 81 81 72 81 64 63 75 82 81 64 83 63 82 85 81 63 63 63 04 74 81 91 91 84 63 85 84 65 64 85 65 62 94 62 62 85 91 85 91 74 91 72 75 64 65 75 71 65 83 62 64 74 81 82 84 62 82 64 91 81 93 65 62 64 84 84 91 83 85 74 91 81 65 72 74 83 83 85 82 83 64 62 72 62 65 62 83 75 92 72 63 82 82 72 72 83 82 85 84 75 82 81 83 72 84 62 82 83 75 81 64 75 74 85 81 62 92 00 0
```

| Digit Pair | 81 | 75, 62, 82, 85 | 64 | 83 | 74 | 63, 91 | 84, 65 | 72 | 92 | 93 | 04, 94,71,00,0|
| --- | --- | --- | ---| ---| ---| ---| ---| ---| ---| ---| ---|
| **Frequency:** | 20 | 17 | 16 | 15 | 14 | 12 | 11 | 9 | 3 | 2 | 1

Breaking the pairs down further for frequency of each digit pair:
| First Digit| 6 | 7 | 8 | 9 | 0 |  Second Digit | 1 | 2 | 3 | 4 | 5 | 0 | 
| --- | --- | --- | --- |--- | --- |  --- | --- | --- | --- |--- | --- | --- | 
| **Frequency:** | 56 | 41 | 80 | 18 | 3 | **Frequency:** | 33 | 46 | 29 | 43 | 5 | 1 |




With the exception of 0, there is no overlap between first and second digits. Here's what that looks like with a regex applied. Certainly weird, with the only outliers being: 04, 00, 0

![Regex1](/assets/images/dagapeyeff/numberRegex1.png)

Triplets:
![Regex2](/assets/images/dagapeyeff/numberRegex2.png)

Doublets:
![Regex3](/assets/images/dagapeyeff/numberRegex3.png)

# Initial Analysis
After some analysis and reading the book itself it seems to me the possible cipher may be:
* [Book Cipher](https://en.wikipedia.org/wiki/Book_cipher)
    * Numeric codes align to page/line/word or letter within a given text
    * Discussed toward the end of the book, aligns nicely with the final unsolved challenge cipher and even looks a bit like the examples given
    * What book? The book itself or the dictionary mentioned in the text?
    * On page 127 D'A calls these "highly specialized forms of substitution"
* [Substituted](https://en.wikipedia.org/wiki/Substitution_cipher) [Transpostion](https://en.wikipedia.org/wiki/Transposition_cipher)
    * So many permutations with this...really difficult, but often referenced with D'A analysis online
* Other Ciphers
    * [Nihillist Cipher](https://en.wikipedia.org/wiki/Nihilist_cipher)
        * Is a numeric based symemetric key cipher
        * If you load the cipher into [CryptoCrack](https://sites.google.com/site/cryptocrackprogram) the initial analysis points to possible Nhillist
        * Background -
            * D'A _was_ born in Russia...maybe this is a nationalistic callback for him?
            * The dust jacket states "D'Agapeyeff was an intelligence officer in the First World War...in the Baltic until 1921 where he gained a knowledge of espionage and counter-espionage activites between Germany and Russia
    * Mirabeau Cipher
        * A strange lack of informaiton regaurding this cipher on the web. Supposedly, [this french guy](https://en.wikipedia.org/wiki/Honor%C3%A9_Gabriel_Riqueti,_comte_de_Mirabeau) used a simple numeric subsistion system involving grouping seemingly arbitrary letters into groups of 5 and assigning a group # of a letter # within the group to create two digit pairs which were then sent out as the cipher.
    * [Vigenère](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)
    * D'A was in WWI? Maybe [ADFGVX](https://en.wikipedia.org/wiki/ADFGVX_cipher)?
    * [MONOME-DINOME](https://www.cryptogram.org/downloads/aca.info/ciphers/MonomeDinome.pdf) seems vaugely numeric looking...
    * Tridigital
    * Morbit

A few disadvantages of these more obscure ciphers is that, to my knoweldge, they are not mentioned in the book. So without the modern advantage of wikipedia, it's difficult to know if D'A would even know of their existence?

__Some outstanding questions:__
* Why intervals of 5 digits?
* What are the 0's purpose in the code? Do they have any significant at all, or are they null characters?
* What strcture forms the interesting 6-9/1-5 pattern we see in the two digit pairs?

# Dictionary (Book) Cipher
One of the more obvious suggestions from the book is to use an actual dictionary to map the number of words to the sequence.
In this case, the highest number in the sequence is 92857 and the lowest is 16463.

And on page #129
> One of the ways in which ordinary dictionaries can be used is first to agree on a certain edition, say, for instance, the _Concise Oxford Dictionary_, current edition, by Fowler and Le Mesurier...

This could explain why the ciper was apparently removed from the book in 1952. The consise oxford english dictionary 3rd edition came out in 1934, and was updated to 4th edition in 1951. Hm...well we're going to need a dictionary from 1934-1939? That's not ideal...

ebay? Yep - $9.
![dictionary](/assets/images/dagapeyeff/dictionary_cover.jpg)

So this dictionary from 1938 is a mere 1507 pages long. Well that certainly qualifies for our 5 digit numer pairs, right? Unfortunately, the individual words are not numbered.

Let's take the same approach as before.
```
75628 28591 ... 92000
```

Houston, we have a problem. There's no way this 1500 page book has over 90,000 words in it. 

As noted in the book, page #154
> Even in the largest dictionaries 60,000 to 65,000 words are quite common. 

Assuming calling out this "consice" version of the dictionary was on puprose, why do we have so many numbers above 65 in our unsolved cipher? 62, 63,  64, 65, 72, 75, 81, 82, 83, 84, 91, 92...well over half the cipher leads with digit pairs beyond the scope of this dictionary. 

Page 153
> ... Mr. Mansfield ... calculated dictionary progressive lists, giving numbers of words beginning with any two letters in dictionaries of 10, 20, 30, 40, 50, 60, 80, and 100 thousand words.

Hold up, a dictionary with 100,000 words? That would cover my 92000 problem. Were there dictionaries in the 1930s that had 100,000 words in them? Seems like the answer is [obviously](https://public.oed.com/history/#one-step-at-a-time). So is the "clue" simply that you need a dictionary with 100k words?

hm...
![extra](/assets/images/dagapeyeff/dictionary_extra.png)
Okay, I literally have to stop spending money on ebay. Maybe I can convince my wife they're for decoration in the living room as "Vintage" books? Blue matches the uh...wall...paint? 

So hypotethically, even if I bought this $100 dictionary...what would I find? Words, pressuabmly. However, I have no intention of counting nearly 100,000 words by hand.

 Maybe we can do what Mr. Mansfield did and use some statistics. If there are ~100k words in the book, and I was to go to word 92000, where would be be in the Alphabet? X? Y? Z?
 
I know the [frequency of characters](https://en.wikipedia.org/wiki/Letter_frequency) in [english words](https://en.m.wikipedia.org/wiki/Etaoin_shrdlu), but is there a different frequency for the letters that _start_ words? Eg. There's a lot of the letter "E" in the English language, but are there that many words that start with the letter "E"? First letter frequency?

[Thank God For Wikipedia](https://en.wikipedia.org/wiki/Letter_frequency#Relative_frequencies_of_the_first_letters_of_a_word_in_the_English_language). Turns out, no. While "E" is the most common letter in a word (13%), "T" is the most common first letter in a word (17%). However, in dictionaries, the most common letter is "S" (11%). Weird facts.

So with this, can I perform a very rough mathmatical model for a dictionary of 100,000 words? Sure.
```
A would be 5700 / 100000 words
B would be 6000 / 100000 words
C would be 9400 / 100000 words
...
X would be 50 / 100000 words
Y would be 360 / 100000 words
Z would be 240 / 100000 words
```

So on and so forth...
So, I wrote a script fucntion that takes the % of a first letter word in the dictionary, and maps it to an arbitrary # of words within a dictionary to find the approximate "Letter" for a given range. Then I took the 5 digits providied by the cipher, ran them through the "range finder" and here's the output:
```
R A E P A K T N R A 
E S A C A D S A L R 
A G S A G S A C A J 
U A J R A G S A M P 
A M A G S A C S A C 
P N P A K A J S A L 
P A D U A C R A J A 
G R A E S A C P A L 
U N A E S A E P A D 
S A E S A E A K S A 
E S N R N U
```

Well...it's a start maybe? Seems like a really long cipher if each character here represents the beginning of a whole word. 

Additonally, we need a slightly more accurate range mapping - while the first letter is interesting, having the range also determine the frequency of the second letter would help narrow things down.

It's good to know that 75628 might be a word starting with "R" but without the second letter its a large pool...I downloaded a random dictionary of about ~25k words from Github, and it came with 1,442 words that start with "R"...far too many to just randomly guess from.

Here's what that would look like with 100% random words from the dictionary
```
recommended exercises photographed killer troupe nagging rows ego slightly clockwork reacted duration shoots left robotic gallon superheroes grooming swerving coat residence janitorial unbelievable jackpot regal geography slams metric plaything mistook rebirth governess sandbar corporation skirmishes coals prognosis neglected positioned kitties urgent jasper smith lucky physique drowsy unwarranted cooking ratio jungle ratio gor rustle enact staffers cool pigtails launcher utmost networks saintly evidence super estimates panicked display settle evaporated summers empire sweets knots stardom edges seasoned nixed rehab natured unbalanced
```

There are no repeating letters, though. These frequencies may be off slightly, if the frequency of first letter words in dictionaries changed over time (1933-2021) which they almost certainly have as new words showed up in the global vocabulary...like _[yeet](https://www.dictionary.com/browse/yeet)_.

Plus, who can be bothered to _accurately_ count to 92,000 words? Nobody. Perhaps this cipher has never been solved simply because the solution is too tedious and prone to human dicpherment (or encipherment...) error? Unfortunately, online I can't find anyone who was crazy enough to say "yes, I counted to 92,000 and here's what I found."

# Book Cipher Continued: Making The Cipher "Fit"
Before we go too deep down the "longer versions of the 1933 dictionary" rabbit hole, can we make the current cipher "fit" into our Concise dictionary instead?

As noted on the wikipedia page, on page 111 D'A says
> The cipher is of course easily made out, but if every third, fourth, or fifth letter, as may be previously arranged, is a dummy inserted after a message has been put into cipher, it is then extremely difficult to decipher unless you are in the secret

Okay, so what if we treat some numbers in our cipher text as "Null"? If we assume our dictionary has about ~65k words, then we should look to trim numbers > 6 + maybe that pesky 0?

We can go from this...
```
75628 28591 62916 48164 91748 58464 74748 28483 81638 18174
74826 26475 83828 49175 74658 37575 75936 36565 81638 17585
75756 46282 92857 46382 75748 38165 81848 56485 64858 56382
72628 36281 81728 16463 75828 16483 63828 58163 63630 47481
91918 46385 84656 48565 62946 26285 91859 17491 72756 46575
71658 36264 74818 28462 82649 18193 65626 48484 91838 57491
81657 27483 83858 28364 62726 26562 83759 27263 82827 27283
82858 47582 81837 28462 82837 58164 75748 58162 92000
```

To this...
```
52251 21414 14544 44243 13114
42245 32415 45355 53355 13155
55422 25432 54315 14545 45532
22321 12143 52143 32513 33441
11435 45455 24225 15141 25455
15324 41242 24113 52444 13541
15243 35234 22252 35223 22223
25452 13242 23514 54512 2
```

The 5x5 column was picked to sort of arbitrarily fit into a polybius square. Well, although it does seem sort of arbitrary to remove so many numbers from the grid it also fits the pattern thath we explored with regular expressions earlier.

The neat thing about this arbitrary solution is that you can technically keep the 0's if you want...
```
52251 21414 14544 44243 13114
42245 32415 45355 53355 13155
55422 25432 54315 14545 45532
22321 12143 52143 32513 33044
11143 54545 52422 51514 12545
51532 44124 22411 35244 41354
11524 33523 42225 23522 32222
32545 21324 22351 45451 22000
```

And still have a perfectly organized grid. However, the difference between 5 digit pairs created after entry #14 are significant when shifted by that singular 0, similar to how the difference between word 2 and word 22000 is fairly large. One additional "advantage" of this approach is that the cipher got a lot smaller. Specifically, we go from 79 potential words in the dictionary to 40. No surprises there on the math.

One unfortunate aspect of these two grids is that none of the 5 digit grouping repeat. This is sort of counter to what we might expect when compared to the dictionary cipher provided in the book where 55381 was repeated 5 times (4 times) for "the".

Regardless, it is possible to have sentences without using the same word twice. Perhaps D'A avoided repeating a simple word like "the" several times to make the cipher more difficult to solve on purpose?

In the book, D'A gives a book cipher example using a dictionary (pressuabmylt he concise edition) where he starts by ordeirng his 5 digit pairs in acending order, and maps words within the ranges provided (Eg. Word 55381 in the Dictionary) to their associated word pair, perhaps "T"...and then those word pairs, maybe the range associated with "TH" is mapped to the digits 55381, to help build a setnence.

Fortunately...D'Agapeyeff throws us a bone...maybe. 
> Now we can find in the dictionary the word 'the' (55381). This we can count back about twenty words for 55366 (th). 

Assuming me and my boy D'A are looking at the same Dictionary, I can confirm that the word "the" shows up on page 1270. If I count back 15 words...I sort of have the same span of words that D'A notes 
> 'thane', 'thank', 'that', 'thatch' ...

But I think D'A was paraphrasing a bit here, if he was on "the" 55381 and goes back to word 55366 - that's a difference of 15 words not 4. So my "span" seems reasonable, I end up with words like: thaw, thatch, that, thanksgiving, thankless, thankful, thank, than, thallium, thalamus, etc...all leading up to "-th." ...literally just "th" like he says in the book...which is, depending how you count subdefinitions or variations of words (like thank/thankful) about 15 words away...so maybe this is litearlly the same version of the dictionary that he was using? That's a good sign at least?

D'A gives us the solution to the Dictionary Cipher presented
> The reconnaissance of the route to the sea has revealed that the aeroplane(s) defensive was over the town.

![mistake](/assets/images/dagapeyeff/mistake_cipher.jpg)

There's technically a mistake in this section of the book, which isn't inspiring. If word 55381 is "the" then why is the 4th posistion of the cipher _44381_ ? And if you literally just count the occurances of 55381, it only occurs 4 times, not 5. Anyway...

So if 55381 was "The" then 42872 must be "reconnaissance"? That shows up on page 975...but we have a real problem, Houston. I only really noticed after a bit of flipping through the pages.

Great, let's take our modified "null replaced" cipher and take the groupings of 14 words prior to our "0 condumdrum" which are unchanged and see if we can figure them out:
```
12143,13114,13155,14544,14545,21414,22321,25432,32415,32513,42245,44243,45355,45532,52143,52251,53355,54315,55422
```

If we take this list, and compare each number to every "known" word/number pair in the already provided solution we can end up with some interesting data.

| Cipher Word | Word Diff | Known Word | Known Word # | Known Word # Page #| 
| ------------- | ------------------------- | ------------------------- | -------------------- | -------------------------| 
| 52143         |                     -3223 | that                      | 55366                | 1269                     | 
| 52251         |                     -3115 | that                      | 55366                | 1269                     | 
| 32415         |                     -2869 | of                        | 35284                | 787                      | 
| 32513         |                     -2771 | of                        | 35284                | 787                      | 
| 53355         |                     -2011 | that                      | 55366                | 1269                     | 
| 21414         |                     -1757 | has                       | 23171                | 526                      | 
| 54315         |                     -1051 | that                      | 55366                | 1269                     | 
| 22321         |                      -850 | has                       | 23171                | 526                      | 
| 42245         |                      -627 | reconnaissance            | 42872                | 975                      | 
| 44243         |                         9 | revealed                  | 44234                | 1006                     | 
| 55422         |                        41 | the                       | 55381                | 1270                     |
| 12143         |                        93 | defensive                 | 12050                | 297                      | 
| 45355         |                       181 | route                     | 45174                | 1030                     | 
| 45532         |                       358 | route                     | 45174                | 1030                     | 
| 13114         |                      1064 | defensive                 | 12050                | 297                      | 
| 13155         |                      1105 | defensive                 | 12050                | 297                      | 
| 25432         |                      2261 | has                       | 23171                | 526                      | 
| 14544         |                      2494 | defensive                 | 12050                | 297                      | 
| 14545         |                      2495 | defensive                 | 12050                | 297                      |

In this case, our cipher has the number 44243, and the cipher text solved in the book as an example has word 44234. If we simply count 9 words up from 44234 "975" on page 1006 we should arrive at word 44233. Counting to just 9.

That gives us...
```
0 reval(ed)
1 reveille
2 revel
3 revelation
4 revelationist
5 revenant
6 revendication
7 revenge
8 revenue
9 reverbreate
10 revere
11 reverence
```

Depending on how you "count" words you might land on "revenue" or "revenge" which are both interesting. However, we don't really need to count that exactly, with a seletion of ~10 potential words we could pretty easily brute force solutions until a sentence forms that makes gramatical/logical sense...right?

So counting 9 is easy. However, we still have numbers too large to count accurately. I consider that anything over 500.

Thankfully, we can make some solid estimates, though. Dealing with a maximum of ~3200 words is a lot better than dealing with numbers > 10k. So we can _probably_ start guessing some diphthongs/"probable first two letters" to each of our tables. The farther away from a "known" word we get, the fuzzier our definition may be. 

Afterall, as D'A says himself on page 156
> ...application of the law of probability to dictionary codes is very interesting.

I may keep exploring this in the future.

# I also bought this other old book...
Yes..._ebay_, again...
![1922](/assets/images/dagapeyeff/old_book.jpg)
I mostly just thought it was cool...but it's also a reference in the bibliography in D'A's Codes and Ciphers. So I thought I'd read it to see if there was anything interesting. Especially considernig it's one of the more "recent" references (1922) that also happened to be in English.

Turns out I didn't need to buy it though, since the whole thing is scanned into the [internet archive](https://archive.org/details/cryptographylang00lang/mode/2up). So you can read it for free!

![1922-inside](/assets/images/dagapeyeff/old_book_inside.jpg)

Apparently the book I bought was used by a "Lt. Kenneth Anderson Coler" who was looking for Rum Runner's in Alabama during prohibition. Unfortunately whoever wrote that in pencil didn't date it. Maybe it's [this guy](https://www.newspapers.com/clip/57035134/obituary-for-kenneth-anderson-coler/)? Also apparently sometime after Lt. Coler's use in Alabama the book got transfered to the "Intelligence Unit" of New York City? Interesting history for this 99 year old book.

Outside of the interesting history, this book launches straight into discussion of dictionary (book) codes by page 35 (It's about 180 pages long). With an example of "a dictionary of 25,000 numbered words" 

Considering we know for a fact that D'A _read_ this book as a reference before/during his own authorship of C&C there's some really uninspiring quotes in here about dictionary ciphers
> Great patience will be required to ferret out the whole of the message...

> ...in practice such documents are not often found with the numbers written in this straightforward way. Usually the figures are transposed and all sorts of complications interspered

> A common method is to rearrange the order of the figures in each group upon a prearranged plan...thus 24133, 21682 ... are transofmred into 13432, 62182 ... the difficulty here is to discover the normal order of the figures in each number, and to restore them to their primitive form ... it is a case of bailing the ocean!

Jeesh...this really goes back to my point about this being unsolved due to the obscure/tedious nature of of the possible solution. Considering I just guessed about this book being relevant before I purchased it, it was surprisingly on point with what I hoped it contained, though.

Interestingly, Langie/Macbeth gives us a "Test Message In Cipher" on page 190 and goes on to explain that it will be painful and difficult to solve, and if nobody solves it in "a reasonable time" he'll publish the solution later. Apparently the solution was provided, since it's clearly not listed on the "Unsolved Ciphers" wikpedia page and supposedly is a ["two-step cipher based upon a Playfair"](https://www.tandfonline.com/doi/abs/10.1080/0161-117991853891?journalCode=ucry20). I can't seem to find the actual plaintext, however. Then again, the original publishing was in _French_ so maybe I'm just not googling in French good enough.

One interesting parallel here is that:
Langie/Macbeth spend the pages preceding the "test" cipher discussing Playfair, and then provide the reader with an unsolved playfair as a challenge.

In D'A's C&&C he spends the pages preceidng his "challenge" cipher discussing Dictionary codes, and then provides the reader with an unsovled cipher as challenge.  If D'A was intetionally mirroring the previous work, then he may have also intentionally preceded his cipher with a chapter on the type of cipher that he used (eg. Dictionary/Book Cipher)? Just a Thought.

Also, D'A is almost more known as a catrographer and the author of "Maps" more than he is known as a cryptologist. So isn't it interestingly coinsidental that in this book published 17 years prior says in reference to book ciphers
> the first thing to do - and it is not easy - is to determine the exact meaning of the two numbers ... as when preapring a survey map of a country it is first necessary to calculate with the utmost accuracy the height and distance of two given points, to form a base on which the triangulation of the whole region may be effected...

## Transpostion of Dictionary Posistions
This book got me thinking though, removing the 6,7,8,9,(0) _was_ a bit arbitrary in the sense that we were just guessing, and as D'A himself notes using nulls to throw people off really only works if youre "in the secret" which we are firmly not. He does spend some time discussing transpostion ciphers prior to his dictionary...what if we treat each 5 digit number as a full sequence, but in the wrong order? How many permuations of each letter pair are there, and what happens to the full sequence if the same transpositional rules are applied to each sequence? Which number has the least permuations?

I _think_ the answer to that final question is 92000, the last number in the sequence. Using some quick scripting I found that there's 20 unique permutations of the number 92000: 
```
00029,00092,00209,00290,00902,00920,02009,02090,02900,09002,09020,09200, 20009,20090,20900,29000,90002,90020,90200,92000
```
In this case, we can probably ignore anything above 90000 so really the squence is only 16 unique characters long. We can also use the previous technique of finding the nearest "word" which we know the page/plaintext of. Also, this sequence ends up with some pretty small numbers. It's not totally unreasonable to figure out words <500.

For example, word 00029 is almost certainly in the "AB" range of words, and its not too hard to count to 29. As always, sort of depends how you count but possibly: abbey, abbot, abbreviate, abdicate, etc. Assuming D'A kept with his military theme, none of these jump out to me. This was just a test though, we have to run the permutation sequence that leads to "00092" (shift all numbers over 2 posistions) to _every_ digit in the sequence and see what makes sense. Before I script this, what I'm really looking for is a higher # of repeat groups. In both book cipher examples given in the two books they find a sequence used several times and map it to a common word as starting point, either "the" or "of" or some other very common word. Maybe we can brute for the permutations that lead to the highest repeat digit group and/or has matches for already "known" plaintext examples from the example in C&C?

Checking all numbers, we find a fairly unsurprising pattern:
|Count|Name | Group|
|-----|---- | -----|
|   26|120  | 75628, 28591, ... |
|   37|60   | 62916, 48164, ... |
|    9|30   | 74748, 37575, ... |
|    6|20   | 83828, 81848, ... |
|    1|10   | 48484 |

Any 5 digit number with 5 unique characters can form a high number of permuatations, 120. As the unique number of letters decrease, the fewer permutations we get. Is this useful? I'm not sure, probaly not. Other than we can narrow down to only 10 dictionary words what word 48484 could be, rather than 120 words for the most "noisy" of the bunch.

So assuming we have a maxium of 120 permutations of certain characters, can we generate all 120 by using this technique?

|A|B|C|D|E|->|A|B|C|E|D|
|----|----|----|----|----|----|----|----|----|----|----|
| 7 | 5  | 6 | 2 | 8 |->| 7 | 5  | 6 | 8 | 2 | 

In this case, treat the cipher as a single column of 5 digit pairs. Then map each first digit with A, second digit with B, etc. Then permuate ABCDE into its 120 versions, and bring each "column" of the underying cipher with

Anyway, a bit of scripting later and here we have them.
```
Permutation ABCDE (1)
75628 28591 62916 48164 91748 58464 74748 28483 81638 18174 
74826 26475 83828 49175 74658 37575 75936 36565 81638 17585 
75756 46282 92857 46382 75748 38165 81848 56485 64858 56382 
72628 36281 81728 16463 75828 16483 63828 58163 63630 47481 
91918 46385 84656 48565 62946 26285 91859 17491 72756 46575 
71658 36264 74818 28462 82649 18193 65626 48484 91838 57491 
81657 27483 83858 28364 62726 26562 83759 27263 82827 27283 
82858 47582 81837 28462 82837 58164 75748 58162 92000

Permutation ABCED (2)
75682 28519 62961 48146 91784 58446 74784 28438 81683 18147 
74862 26457 83882 49157 74685 37557 75963 36556 81683 17558 
75765 46228 92875 46328 75784 38156 81884 56458 64885 56328 
72682 36218 81782 16436 75882 16438 63882 58136 63603 47418 
91981 46358 84665 48556 62964 26258 91895 17419 72765 46557 
71685 36246 74881 28426 82694 18139 65662 48448 91883 57419 
81675 27438 83885 28346 62762 26526 83795 27236 82872 27238 
82885 47528 81873 28426 82873 58146 75784 58126 92000

Permutation ABDEC (3)
75286 28915 62169 48641 91487 58644 74487 28834 81386 18741 
74268 26754 83288 49751 74586 37755 75369 36655 81386 17855 
75567 46822 92578 46823 75487 38651 81488 56854 64588 56823 
72286 36812 81287 16634 75288 16834 63288 58631 63306 47814 
91189 46853 84566 48655 62469 26852 91598 17914 72567 46755 
71586 36642 74188 28624 82496 18931 65266 48844 91388 57914 
81576 27834 83588 28643 62267 26625 83597 27632 82278 27832 
82588 47825 81378 28624 82378 58641 75487 58621 92000

...
<116 More Permutations>
...

Permutation EDCBA (120)
82657 19582 61926 46184 84719 46485 84747 38482 83618 47181 
62847 57462 82838 57194 85647 57573 63957 56563 83618 58571 
65757 28264 75829 28364 84757 56183 84818 58465 85846 28365 
82627 18263 82718 36461 82857 38461 82836 36185 03636 18474 
81919 58364 65648 56584 64926 58262 95819 19471 65727 57564 
85617 46263 81847 26482 94628 39181 62656 48484 83819 19475 
75618 38472 85838 46382 62726 26562 95738 36272 72828 38272 
85828 28574 73818 26482 73828 46185 84757 26185 00029

```

Unfortunately, I'm not entirely sure why I did this. Sure, this gives me 120 "versions" of the cipher, and maybe 1/120 is the "right" version but I still have to map these to words in the dictionary...and I still don't want to count. Additionally, this type of transform operation doesn't actually create new pairings of repeats. So we still don't have our silver bullet "the" that happens 5 times in the cipher.

Still a neat way to look at it, I suppose.

# Dictionary Method: Page, Line, Letter?
On the page #129 in which D'A mentions the "Diciontary Code Systems", which is what we'd call a "Book CIpher" he talks about a different way to utilize a book like the Dictionary to encipher text.

> One of the ways in which ordinary dictionaries can be used is first to agree on a certain edition...then to  only give the number of the page, and the number of the word down the page..
> 100612 010417 129108

With 1006, 0104, and 1291 being page numbers and 12, 17, and 08 being words "down the page"

This would decode to
> Reunion Berlin Tomorrow

The neat part of this cipher is that Runion is indeed word ~12 on page 1006, and so on and so forth. So at least we've confirmed out dictionary version works?

Let's try that instead? Using these cipher pages...
```
75628 28591 ...
```

But how are these delimited?
* Page Number. Word Number.
* Page Number. Line Number. Word Number
* Page Number. Word Number. Letter Number.

p75.w628 - That can't be it, we won't fit 628 words on a page.

p756.w28 - Unlikely as page 756 does not have 28 words on it.  You could of course go to the "next page" but then why not just list something like 75704. I think it's safe to say almost no page in the dictionary will have >20 words on the page unless you get very lucky with a sequence of short definitions.

p7562.w8 - This can't work since we only have 1500 pages in the dictionary.

p75.l6.w28 - I don't like this method already because in his example when the page number fell below 1000 he padded with 0's. Additionally, we'd only be using page 16-92, which seems like a "waste" of the remaining 1400+ pages. Page 75 line #6 word 28 also doesn't make sense because once you get to line 6 28 words later is another line, so we've broken the order once again. Why not list the later line with a smaller word count.

p756.l2.w8 - Still does not abide by the "pad" <1k with 0 method, but it makes a bit more sense. Perhaps Line 2 could be "definiton 2" instead of line? In that case, defintion 2 is "neap" referring to a very low tide, and word 8 of that is "In"..maybe. Depends how you count. I suppose I can't discount this entirely, the cipher could start with the word "In..."

p75.w6.l62 & p75.w62.l8 - Neither of these make much sense since again, we'd be ignoring 1400 pages of text, and finding letter 62 of "word 6" is impossible, additionally letter 8 of the 62nd word seems like a frustratingly bad code. 

p756.w2.l8 - The second word on page 756 is once again "neap" and if we go to letter 8 we find uh... "a. & n., & v.t. &i. N. -tide or n., tide" See...these deifnitons are often trailed with a long sequence of definitions for if its a noun, etc. Do you count that? Letter 8 is "n" if you ignore all of that and focus on the actual definition of "tide soo**n** after the moon's first & third quarters..."

Needless to say, there's a lot of different ways you can mix this up. There are some limits, like page number. But this is sort of an infinite game without discussing in advance how to process the numbers. Maybe it's backwards and lists the word number, the deftinion number, then page number in acsending order instead of decending? I think it's safe to assume one of the numbers would be page number, but what after that? Line number? Letter/Character Number? Word Number" Number of **bolded** definitions? Maybe it's not even the whole word referenced, maybe it just wants you to take the first letter? Or the last...see, if you and your spy friend agree on a very specific sequence like

"Page.Definition #.Word# - always use the 1st letter if its in column 1, but use the last letter of that word if its in column 2..."

We'd never figure it out, and without a clue to that it would be pretty well impossible...maybe.

# Page, Line, Letter: The Book Itself 
Maybe we don't use a dictionary, but rather the book itself? 
| Page Number | Line Number | Letter Number| 
|---|---|---|
|75|6|28|
|28|5|91|
|92|0|00|

Page 75 is not entirely text. It has "Boy Scout Signs" injected halfway through the page, with a sub-title  and diagrams. Do you count sub titles as a line? How about diagrams that unevenly adjust page spacing? Maybe its 

If you treat every "Line" as a line, title or not, line #6 is "Australia" ... which does not have 28  letters to pick from. Maybe we ignotre the "Page Title", that pushes line #6 to "Boy Scout Signs"...that also doesn't have 28 letters to pick from. If we ignotre that line, since its a title we finally have something workable:
```
The four principal scout signs derived by Lord 
```
Which condensed to count the letters
```
ThefourprincipalscoutsignsderivedbyLord
```
Letter 28 is 'e' ...but there were a lot of assumptions about titles to arrive at this letter.

Let's check the next page #28...and its even worse. How do you even parse this by Line # and Letter?

![28](/assets/images/dagapeyeff/page28.png)

Okay, maybe page 92? Wait, what's line #0? What's Character #0? Is the code 0 indexed or  should I start count from 1? If I count from 0, then suddenly the first solution isn't 'e' it's 'r'...

Perhaps the book isn't the key. Seems too sloppy, too much guess work, and this book has non-standard formatting on nearly ever page.

However there are a lot of ways to slice the five digit number:
* Page, Line, Letter
  * 75,6,28 -- The only "Valid" split I can see.
  * 7,5,628 -- Well...we certainly won't find lines with 628 letters on them.
  * 7,56,28 -- Unfortunately most pages are only ~30 lines long, so not probable.
  * 7,562,8 -- Breaks reason with >30 line numbers.
  * 75,62,8 -- Breaks reason with >30 line numbers.

So any split where the first digit is <7 is unreasonable to apply. 

Example: 28591 page 2 isn't numbered, and if it were, it's an entirely blank page.

So none of the alternative splits make much sense, either?

## The Book Itself - "Hidden Alphabet"
When I was flipping through the book I noticed small upper case letters on certain pages. After some investigation, I discovered they were about every 8 pages. I did some research, and these are known as [Signature Marks](https://en.wikipedia.org/wiki/Signature_mark). These marks are related to a now outdated bookbinding technique that ensured the pages were bound in the right section/order when building (binding?) the book. This is also  known as "collating" or "designation marks" in bookmaking, apparently.

Sadly, I found [this person's](http://www.thekryptosproject.com/tjp/dagapeyeff.php) website later in my research. They have a whole word document from 2009 where they apparently got very excited over the discovery of the "little alphabet." As far as I can tell, they never figured out what the Signature Marks are. 

![kryptos_blog](/assets/images/dagapeyeff/kryptos_blog.png)

Although I do find it interesting that the collation does not include "J" for seemingly no reason? "A" makes sense, since it's essentially page 0. "V-Z" also make sense, because the book isn't that long, no need to go past U for the bookbinder. 

I don't think this is the solution to the cipher, nor the key. I don't think D'A would have had control over the way Oxford published the book. I also don't think D'A would have even thought twice about the signature mark being in the book, as he wasn't in the printing industry by trade.

Regardless, I guess I learned some random book trivia?

## The Book Itself - 1949 Edition
The cipher, unchanged, is included in the 1949 edition of the book. However, the 1949 edition is apparently slightly larger. Thus, the page numbers don't align anyway.

Here's a screenshot of page 57 from a 1949 edition I found listed on ebay.
![1949](/assets/images/dagapeyeff/1949ed.png)

The "African Drum" illistration and language graphic is on page 53 of the 1939 edition. We're way off. The book is likely not the key. 

I suppose you could argue that D'A had the cipher removed from the next print run of the book for this exact reason. "Oh dear, its not possible anymore!" ... I'm guessing not.

I also bought a 1952 edition (ebay), the one where the cipher is removed, and confirmed that once again, the page numbers shifted. How fun.

# Other Approaches

## Coincidences in Text Formatting

In writing, often times framing is very important. One framing technique is known as "bookending" or simply a "bookended story." These are stories where the very beginning of a work is paralleled in the ending to create a sense of closure, or a loop that has a satisfying resolution that harkens back to how the story began. 

So, I'm probably in a rabbit hole here, but the cipher in the original text is at the _very_ end of the book, so what's at the beginning? 

![dedication](/assets/images/dagapeyeff/dedication.jpg)

Why did this catch my eye at all? Well first, it's _suspiciously_ square. That sounds stupid.

 It's 8 rows with a sentence that happens to have 10 words? Unfortunately, this pattern changes between 8-5 words per sentence, and depends how you want to count words like "in-terest","co-operation","through-out"...So maybe this is just a coincidence of monospace font styling. 52 words total? Either way, it caught my eye for a few minutes. It felt like certain words were sort of arbitrarily hyphenated to the next line to fit a particular formatting. 
 
 Why not just change the font size or use slightly wider margins like they did in the 1952 edition where they removed the cipher? Oh...okay, not falling for that mental trap. The removal has nothing to do with the reformatting of the dedication page. _The removal has nothing to do with the reformatting of the dedication page._ <small>The removal has nothing to do with the reformatting of the dedication page.</small>
 ![dedication2](/assets/images/dagapeyeff/dedication2.jpg)

Joking aside, I don't presently think there's anything to this block of text. Also, sadly I was able to find no information on the Internet about "Geoffrey and Marjory Cass" or "Rachel Wood" for whoever they may have been to D'A.

## Squares n' Grids
This 14x14 grid (technically there's a spare row of 0's...) is a popular analysis tool. This is because if you discard the last three 0's as "null" values, you have 192 paired digits which leads to a very convenient 14x14 grid.

This grid has a green color scale applied from most frequent character, to least, with the top ten values having decreasing shades of green until the bottom frequency values all end near-white. 

This method is also vaguely supported by this snippet  on page 127
> Numeral ... Ciphers ... letters are replaced by numbers...A,B,C,D may stand for any numbers (preferably double) from 10 to 99.

<style>
.grid{ border:2px solid white;text-align:center;color:black;}
.grid th{ border:2px solid white;background-color:#000;text-align:center;color:white;}
</style>
<div class="div0">
<table class="grid" style="width: 100%;">
    <thead >
        <th>&nbsp;</th>
        <th style="">00</th>
        <th style="">02</th>
        <th style="">03</th>
        <th style="">04</th>
        <th style="">05</th>
        <th style="">06</th>
        <th style="">07</th>
        <th style="">08</th>
        <th style="">09</th>
        <th style="">10</th>
        <th style="">11</th>
        <th style="">12</th>
        <th style="">13</th>
        <th style="">14</th>
    </thead>
    <tbody style="">
        <tr>
            <th style="">00</th>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">84</td>
        </tr>
        <tr>
            <th style="">01</th>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#145A32;">81</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#1E8449;">62</td>
        </tr>
        <tr>
            <th style="">02</th>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#196F3D;border-top:2px solid red;border-bottom:2px solid red;border-left:2px solid red;">75</td>
            <td style="background-color:#196F3D;border-top:2px solid red;border-bottom:2px solid red;">75</td>
            <td style="background-color:#196F3D;border-top:2px solid red;border-bottom:2px solid red;border-right:2px solid red;">75</td>
            <td style="background-color:#E9F7EF;">93</td>
        </tr>
        <tr>
            <th style="">03</th>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#145A32;">81</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#E9F7EF;">92</td>
        </tr>
        <tr>
            <th style="">04</th>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#A9DFBF;">74</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#145A32;border-top:2px solid red;border-left:2px solid red;border-right:2px solid red;">81</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#27AE60;">85</td>
        </tr>
        <tr>
            <th style="">05</th>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#27AE60;">85</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#145A32;border-right:2px solid red;border-left:2px solid red;">81</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#52BE80;">64</td>
        </tr>
        <tr>
            <th style="">06</th>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#7DCEA0;">83</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#145A32;border-left:2px solid red;border-bottom:2px solid red;border-right:2px solid red;">81</td>
           <td style="background-color:#D4EFDF;border-top:2px solid red;border-bottom:2px solid red;border-left:2px solid red;">63</td>
           <td style="background-color:#D4EFDF;border-top:2px solid red;border-bottom:2px solid red;">63</td>
           <td style="background-color:#D4EFDF;border-top:2px solid red;border-bottom:2px solid red;border-right:2px solid red;">63</td>
            <td style="background-color:#E9F7EF;">04</td>
        </tr>
        <tr>
            <th style="">07</th>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#E9F7EF;">84</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#E9F7EF;">94</td>
        </tr>
        <tr>
            <th style="">08</th>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#E9F7EF;">71</td>
        </tr>
        <tr>
            <th style="">09</th>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#E9F7EF;">93</td>
        </tr>
        <tr>
            <th style="">10</th>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#E9F7EF;">91</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#A9DFBF;">74</td>
        </tr>
        <tr>
            <th style="">11</th>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#229954;;border-left:2px solid red;border-top:2px solid red;border-right:2px solid red">82</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#E9F7EF;">65</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#E9F7EF;">92</td>
        </tr>
        <tr>
            <th style="">12</th>
            <td style="background-color:#E9F7EF;">72</td>
           <td style="background-color:#D4EFDF;">63</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#229954;;border-left:2px solid red;border-right:2px solid red;border-right:2px solid red">82</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#229954;">82</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#7DCEA0;">83</td>
        </tr>
        <tr>
            <th style="">14</th>
            <td style="background-color:#E9F7EF;">72</td>
            <td style="background-color:#E9F7EF;">84</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#229954;border-left:2px solid red;border-bottom:2px solid red;border-right:2px solid red">82</td>
            <td style="background-color:#7DCEA0;">83</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#52BE80;">64</td>
            <td style="background-color:#196F3D;">75</td>
            <td style="background-color:#A9DFBF;">74</td>
            <td style="background-color:#27AE60;">85</td>
            <td style="background-color:#145A32;">81</td>
            <td style="background-color:#1E8449;">62</td>
            <td style="background-color:#E9F7EF;">92</td>
        </tr>
        <tr>
            <th style="">15</th>
            <td style="background-color:#E9F7EF;">00</td>
            <td style="background-color:#E9F7EF;">0</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
            <td style="background-color:#E9F7EF;">&nbsp;</td>
        </tr>
    </tbody>
</table>
</div>

The triplet sets highlighted in red are interesting from a frequency standpoint...otherwise there are several pairs of pairs within the set and not worth highlighting. The "spare" row of 0's bugs me, null or not. 

## Page 113: Army Cipher
This page discusses an army signal cipher
It breaks it up into "sets of five" set apart by / to be grouped. Additionally, the messages ends in AAA 
> One should note that AAA signifies the end of the message.

This is similar to the cipher which has groups of 5, and it ends in 000  (AAA). Is it possible one of the repeating characters in the groups of 5 represents a delineation slash? 

I used the idea on page 113 to break up the text on possible repeating delimiters (Eg. /). Unfortunately, the average length of a word in English is only 5 letters. Unsurprisingly, the sequence with the highest frequency, 81, produced the smallest word lengths -- but even so the length is 17! Way beyond the expected value produced by English.

| Delimiter | Words | Avg. Word Length | Max Word Length | Min Word Length | 
| --- | --- | --- | --- | --- |
| 00| 2| 196| 392 | 1|
| 04| 2| 196| 199 | 194|
| 62| 18| 20| 62 | 2|
| 63| 13| 29| 130 | 6|
| 64| 17| 21| 58 | 2|
| 65| 12| 31| 82 | 4|
| 71| 2| 196| 250 | 143|
| 72| 10| 38| 150 | 6|
| 74| 15| 24| 74 | 6|
| 75| 18| 20| 82 | 2|
| 81| 21| 17| 62 | 2|
| 82| 18| 20| 80 | 4|
| 83| 16| 23| 74 | 4|
| 84| 12| 31| 70 | 4|
| 85| 18| 20| 72 | 2|
| 91| 13| 29| 132 | 2|
| 92| 4| 97| 222 | 3|
| 93| 3| 130| 194 | 82|
| 94| 2| 196| 222 | 171|

# References & Additional Reading
## Wikipedia
* https://en.wikipedia.org/wiki/D%27Agapeyeff_cipher

## Tools
* https://regexr.com/
* https://sites.google.com/site/cryptocrackprogram
* Excel, Powershell, Google

## Life Notes on Alexander d'Agapeyeff
* [Born 1902, St. Petersburg - Died 1955, Maugersbury](https://www.findagrave.com/memorial/32596707/alexander-e-d'agapeyeff)
