---
title: "Roadmap for my website"
tags: [Personal]
---

I’m [working with the garage door up](/work-with-the-garage-door-up/). The following is my roadmap for this website.

## Bugs that need fixing

If you spot anything, please [let me know](/contact/).

- **Unable to create new tags for pages.** I added a global tag system that allows all articles and pages to be part of the tagging. At the moment, new tags can’t be used inside of pages. The tag must already exist and be part of an article. Right now, this isn’t an issue but it will be worth fixing at some point.
- **Subfonts doesn’t support non-breaking hyphen.** I use subfonts to improve the speed of my website. Unfortunately, Source Serif Pro doesn’t have a non-breaking hyphen character. Normally, the browser defaults back to using a hyphen but when using subfonts, that character isn’t available. As a temporary hack, I’ve added a hidden element with the normal hyphen in so it renders properly (don’t hate me).

## Roadmap

The following is a list of prioritized tasks for my website prioritized using the following formula:

> **Priority =**<br />
> **Ease of implementation × Ease of maintenance × Impact to the website**

- **(32=2×8×2) Migrate to Hugo.** The site is currently using Jekyll. I have other websites using Hugo so consolidating to one platform would be helpful.

### Require prioritization

The following to-dos haven’t been prioritized yet. Some of them might be incoherent or quick notes to myself as a reminder.

- **Implement a 8 point grid.** Lots of websites use it including [Github](https://github.com/). It’s something I’d like to learn more about too.
- **Left align the website.** I’ve done this many times using Chrome Dev Tools and there is something I like about it.

## Completed tasks

The [Git repository is publicly available](https://github.com/daveredfern/daveredfern) but often contains lots of commits and quick fixes. That makes it difficult to follow the progression of the website and the reasoning behind key decisions.

The following is a list of major changes. The most recently changes are at the top. 

## 2020-07-05

- **Added a newsletter** where I will send a monthly digest of articles and links that I’ve found interesting.

### 2020-06-27

- **Moved tags to the bottom of each page.** This is part of my improvements to help visitors to browse similar articles. Tags were originally at the top of pages. Now they’re next to the “linked references” so when you finish reading an article, you can discover similar ones using tags or “linked references”.

### 2020-06-24

- **Removed all the custom JavaScript** that I was using on the website. Previously, I was using it instead of some Jekyll plugins. Shifting the cost to my build process over the users experience is an obvious quick win.

### 2020-06-23

- **Improved anchor links for heading.** On desktop they now sit on the left hand side of the page inline with the elements that under hang (bullets, quotes, etc).

### 2020-06-22

- **(648=8×9×9) Updated the footer of each page to focus on related content**. 
Combined the “where to go next” and “about me” sections together. Emphasized the “linked reference” section.
- **(504=8×9×7) Made the website look more personal**. I updated the font to Source Serif Pro.

### 2020-06-20

- **(400=10×10×4) Made my website’s repository public.** I want to share the code I use for this website in case it’s useful for others.

### 2020-06-18

- **Added Global tag system.** All pages and tags can now be tagged. Previously, it was just articles which didn’t make sense since lots of good content is outside of those page types.

### 2020-06-16

- **Added headers to the service worker file.** Previously, it didn’t clear the cache when the site was updated. Not declaring any headers it uses the browser defaults which is to cache the file for up to 24 hours.
