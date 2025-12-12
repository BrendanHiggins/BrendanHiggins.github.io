---
title: "Instagram: A Journey of Misleading User Controls, Dark UX, and Generally Bad Decisions."
description: "A personal experience with poor/dark UX on Instagram and its potentially damaging effects"
date: 2020-04-10
tags: Cyber
layout: posts.njk
---

I use Instagram more than any other social media app.
Twitter is interesting, but it seems like a great place to lose your job. Facebook was cool in 2009. I don't personally count YouTube as social media. Snapchat is for teenagers. Etc.

Instagram is okay. The theory is good - It's just pictures. 
I can get behind that. However, it also has a Direct Message feature. So maybe it's more similar to Twitter/Snapchat than I'd like to admit.

From what I remember, my family and I began using a group Direct Message (DM) with one another sometime in 2015. The feature was introduced in late 2013ref., so it's possible it was sometime before that, though.

Today, in the middle of COVID-19 quarantine we ran into what I can only describe as a strange, edge-case issue, but one that can have some potentially nasty ramifications and leaves users of the app in a situation with seemingly no good solution. This is only made worse by Instagram's use of Dark UX/Dark Patterns around their DM settings, and Help Support page.

# The Setup

As I lay down in bed around 12:30 AM, my fiancé said,
\> "Hey did you see all the people your brother added on Instagram chat?"
\> "No.."
I checked the app.

My brother, Redacted in <span style="color:Chartreuse;">Lime Green</span> in the screenshot below had randomly added 17 people to our private, family DM. I jokingly respond with a hilarious gif. My initial reaction was that his 2 year old daughter had gotten a hold of his phone and managed to mass-add a bunch of people. I've seen stranger things happen to phones that children fiddle with.

Regardless, this needed to be fixed. So I sent my brother some fairly detailed text messages, and went to sleep.

>I do take some personal responsibility here. As the 'tech' guy of the family, who also happens to be an experienced cybersecurity engineer, I should have called him immediately after I didn't get a response from my barrage of late night text messages. However, after further investigation I'm not sure if it would have made a difference. The damage was already done. More on that later.

![initial_discovery_02_redacted.png](/static/images/instagram/initial_discovery_02_redacted.png "initial")

![warning_shot_redacted.png](/static/images/instagram/warning_shot_redacted.png "warning")

I woke up around 7AM for work and noticed my Sister-in-law, the admin of the group chat I referenced in the text message, had 'Ended' the chat at 5:55 AM.

Rubbing the sleep from my eyes, I confirmed that she had indeed 'Ended' the chat. She also confirmed to me that she 'Deleted' the chat and could no longer locate it within the DM tab of the app. It had indeed, prompted her to proceed with the 'deletion'. It was the natural and logical UX choice for her to take.

![del.png](/static/images/instagram/del.png "delete")
>You'll notice I'm single quoting each of these actions - 'End','Remove','Delete'
>This is because the name of these actions is (in my opinion) incredibly misleading. <sup>More on that later.</sup>

At this point, it was obvious I still had access to the entire group + history. I (and everyone else) had simply lost the ability to make a new post message.

My sister-in-law was under the assumption that ending the chat removed access.
\> Nope.
When it prompted her to delete the chat, she assumed it meant delete it for everyone.
\> Nope.

Instagram also didn't automatically shift admin rights of the ended/deleted chat to anyone else. My sister-in-law was still the admin, of a chat she no longer could access due to deletion. At this point I informed everyone that the only way to remove the users from being able to read our 4+ year family chat history was by block each user individually.
![block_list_redacted.png](/static/images/instagram/block_list_redacted.png "block_list_redacted")

In this case, the # of users added illicitly had dropped from 17 users to 15. Some of the accounts were legitimate friends of my brother's. They had no issue personally removing the group chat (when my brother asked) and didn't care about our chat history.

Unfortunately, there were 4 accounts in the group that were downright suspicious looking. My cyber-senses tingled.

> I needed a cup of coffee. <i class="fas fa-mug-hot"></i>

In the redacted screenshot above, all the yellow accounts are accounts that are legit (my brothers followers, etc.). The four red accounts I suspect are compromised/malicious accounts (likely tied to China, based on profile images + literal Chinese characters in their bios). I've already reported all four and won't post their legitimate account id's but here's basically what they were:

* 77777
* 77777777777777777777777777h
* chanyi77777
* jcl777777

And no, the repeating digits are not me making it up. Across all four accounts the digits were the same (not 7, but you know, 1-9).
During this flurry of systematic blocking from my entire family My brother also quickly discovered that his Instagram informed him he had an unusual logon from Los Angeles on a Pixel 3a. His old phone is a Pixel 3A that's been off and sitting in a drawer for the last two weeks.

I'm still not sure still not sure how this occurred, but I suspect a brute force attack. He admitted to having a weak password, and changed it as soon as Instagram informed him of the logon from an alternate location. Kudos to Instagram for at least giving the users a heads up of this activity. 

To make things worse, my sister-in-law and mother had already deleted the group DM (again per the natural UX option presented after the group was 'Ended'). So in order to locate and block the users, I had to screenshot them from my 'undeleted' version of the ended chat, send them the names and have them search for them, and block them.

At this moment, the blocking from my family should be 100% across all suspicious accounts, and the legitimate users that folks can't block (My sister-in-law isn't going to block her friends, etc.) are slowly deleting the chat.

Mitigation achieved, albeit perhaps too late.

# Cyber Considerations
My brother changed his Instagram password to something much more secure. I also told him to 'burn' that password for anything that the password was reused for. He said it was unique to Instagram, fortunately.

I changed my Netflix, Disney+, and Hulu passwords to be safe, since I often shared those passwords with family over the years via the group chat (We share streaming services...but who doesn't?). I also know streaming services are common low-hanging fruit attackers try to harvest credentials for to sell online.

Password reuse and password sharing are a major threat vector - even for those of us who follow best practices. There wasn't a chance my streaming services passwords would be brute forced. Each service had a unique password. However, in cyber security we all share risk. When my brother was compromised, it lead to a compromise for all of us (think 3rd party/supply chain risk here!).

I wasn't concerned about the passwords, though. I'm more upset about the private family photos and conversations the group chat contained. In the timespan we were sleeping & blocking the user accounts - the attackers theoretically could have been archiving/auditing the group chat history for information.

Think about location data. Names. Dates. Pictures of my family's young children. Political conversations. Maybe some shit talking? All in all, it just felt like a gross invasion of privacy. None of us are political targets, and blackmail is very unlikely to be in our future based on the probably super, duper lame conversations we had in that DM.

Yes, we have nothing major to hide in that chat. It's more than likely the attackers joined in, did a preliminary scan of the type of conversation and left. (Plus, scrolling through 4+ years of messages, videos, and photos probably seemed daunting to tackle for an automated operation - or a least I hope).

So we're lucky. We noticed fairly quickly. We blocked the users. We had nothing overly sensitive in the group chat.
But some people do.
Some people use Instagram to share intimate photos.

>On a final 'cyber' note - It could be a coincidence, but literally today Instagram added DM to the web browser ref. As far as automated attacks go, browser access certainly helps over mobile automation. Again, maybe a coincidence, or maybe not. There's unfortunately no way to tell. My brother has informed me his app no longer shows him the suspicious logon when he checks the Security settings on the app and he didn't think to screenshot it.

>Instagram also kindly offers three options for logon, including public usernames:
>![3-choices.JPG](/static/images/instagram/3-choices.JPG "3-choices")

>Minimum password reset length for Instagram in 2020 is...
>![6len.JPG](/static/images/instagram/6len.JPG "6len")

>I threw a quick Burp Suite Intruder against my own account, and hit a 403 fairly quickly ~10 attempts in. So brute force is still just a guess.
>![time_throttle.JPG](/static/images/instagram/time_throttle.JPG "time_throttle")

# A Nightmare Scenario, For..Someone?
Mary is an attractive young lady.

She sends her boyfriend, Richard, a few tasteful nude photographs to her boyfriend on an Instagram direct message.

She choses not to send the picture as a 'disappearing photo', as she trusts him.

Next week Mary and Richard get into a big fight. Mary breaks up with Richard, he's a total dick.

Richard, being a total dick, adds several of his good friends to the Instagram DM Mary sent him containing her nude photographs.

She wasn't even aware of the DM setting for 'Approval Required to Join.'

Mary, in a panic, opens the DM settings and see's the option to 'End The Chat'
![leave_end.JPG](/static/images/instagram/leave_end.JPG "leave-end")

Embarrassed and upset, she selects the option. Barely noticing the fine print.

![leave_end_warn.JPG](/static/images/instagram/leave_end_warn.JPG "leave-warning")

The group DM disappears from her DM menus. She breaths a sigh of relief. Closes the app. Richard is such a dick. Mary feels uncertain...what did those pop-up messages say again? Mary reopens the app. The group message is back.
![del.png](/static/images/instagram/del.png "delete")

Okay..? Mary Deletes it. She swears she already deleted it by ending it, but maybe not? The DM is gone now. She double checks several times by closing and reopening the app.

Who were those guys Richard added to the message? Mary didn't recognize half of them. Maybe his coworkers or his cousins? Gross. She wishes she could block them so none of them try to contact her, but she can't really remember their Instagram names. Either way, at least Mary acted quickly. There's a lower chance those creeps were able to save the pictures via screenshot.

Two hours later Mary gets a text from Richard.
**"Nice try ending the chat."**

# Exploring Your Options
These options Instagram gives you are bad. Like, really bad.
I put together a handy chart of what these options actually do for you + documented the current UI options/warnings Instagram provides in these critical selections.

**Objective:**
Remove someone from a DM group chat.

* Ensure they cannot see DM group History.
* Ensure they cannot see future group DMs.
* Ensure they cannot send new DM messages.

Here is a nice overview of the options Instagram provides you:
![insta.png](/static/images/instagram/insta.png "insta-flowchart")

Gee, Thanks...? 4/6 of these options are terrible.
After blocking at least 1 user from a group chat, the app will essentially force you to delete the chat, otherwise the block does absolutely nothing:
![MUST_DELETE.png](/static/images/instagram/MUST_DELETE.png "must-delete")

Instagram's Official Help Page for Removal & Deletion for DMs as of 04/10/2020:
![source1](/static/images/instagram/source1.JPG "source1")

![source2](/static/images/instagram/source2.JPG "source1")

![source3](/static/images/instagram/source3.JPG "source3")

# Dark UX / Dark Patterns
To make things even more annoying - I thought about contacting Instagram support to see if they could actually delete the chat. Like really delete it. Not fake delete it. As far as I can tell...there is no option to request a DM to be removed from all recipients of a DM.

The Instagram Help Page is awful.

It's full of things you can read up on in the style of a Q&A. That probably helps for most situations, but our situation was fairly unique, and the app didn't give us any ability to 'fix' the issue ourselves.

I could not find an effective email address to reach Instagram support with. I found no phone number (expected, to be honest). Most options took me in loops or ended in an unsatisfactory result (Not accurate/detailed enough for our current situation).

When you combine this maze of a support/report system with the entirely misleading DM user controls that do nothing to help you and actively mislead you we have to wonder if this is all intentional.

This is bad UX (User Experience).
This is borderline Dark UX / Dark Patterns.

I expect to find that on an unsubscribe page. The last place I want to see it is on a page where I'm trying to get help, or in features that are supposed to empower to me to control who sees my messages/photos/videos.

# Bottom Line
<i class="fab fa-instagram"></i> Instagram.
You are a billion dollar app company owned by Facebook.
Do better.

Official Response From Instagram:
![response](/static/images/instagram/response.PNG "response")

Here's How Instagram Can Fix This

1.) Make The Admin Control Option to 'Authorize New Users' a default option. Currently, it's off by default.

2.) Allow administrators to permanently delete a group chat for ALL members. Including History!

3.) Allow individuals to open 'ended' and 'deleted' group chats from a Trash/Recycle Bin for which they are administrators of to facilitate retrieval of potential blocks via a 'participant list'. "Ended" may preserve history, while "deleted" removes history (See point #2).

4.) When a user is removed from a DM by an administrator, also revoke access to the groups history, and delete the DM from their DM listing.

5.) Temporarily disable the ability to utilize DM features from a new logon, at a geographically different location than a previous, still active logon location for 24 hours. Allow a bypass of this via text message or email confirmation code.

6.) Give users the ability to bulk 'unsend' 100% of their messages from a specific DM.