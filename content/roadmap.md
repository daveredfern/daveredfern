---
title: "Roadmap for my website"
tags: [Personal]
---

I’m [working with the garage door up](/work-with-the-garage-door-up/). The following is my roadmap for this website.

## Bugs that need fixing

If you spot anything, please [let me know](/contact/).

- **Unable to create new tags for pages.** I added a global tag system that allows all articles and pages to be part of the tagging. At the moment, new tags can’t be used inside of pages. The tag must already exist and be part of an article. Right now, this isn’t an issue but it will be worth fixing at some point.

## Roadmap

The following is a list of prioritized tasks for my website prioritized using the following formula:

> **Priority =**<br />
> **Ease of implementation × Ease of maintenance × Impact to the website**

- **(648=8×9×9) Update the footer of each page to focus on related content**. 
Combine the “where to go next” and “about me” sections together. Emphasis the “linked reference” section with a fallback for content that doesn’t have any.
- **(504=8×9×7) Make the website look more personal**. I’ll start with changing the fonts. Ones I like are Source Sans Pro and Inter. [Harry Robert’s](https://csswizardry.com/2020/05/the-fastest-google-fonts/) has a good guide for delivering fast fonts using Google Fonts although I may wish to host them locally.
- **(400=10×10×4) Make the repository for my website public.** I’d like to share the code I use for this website in case it’s useful for other people. Before making the repository public, I need to make sure there is no private information inside of it.
- **(32=2×8×2) Migrate to Hugo.** The site is currently using Jekyll. I have other websites using Hugo so consolidating to one platform would be helpful.

### Require prioritization

The following to-dos haven’t been prioritized yet. Some of them might be incoherent or quick notes to myself as a reminder.

- **Implement a 8 point grid.** Lots of websites use it including [Github](https://github.com/). It’s something I’d like to learn more about too.
- **Left align the website.** I’ve done this many times using Chrome Dev Tools and there is something I like about it.
- **Improve anchor links for heading.** They work well at the moment but they can often wrap strangle. Also, Google’s Lighthouse flags them for not including a descriptive name. Some of the anchor links are also flagged for having a small touch area.

## Completed tasks

### 2020-06-18

- **Added Global tag system.** All pages and tags can now be tagged. Previously, it was just articles which didn’t make sense since lots of good content is outside of those page types.

### 2020-06-16

- **Added headers to the service worker file.** Previously, it didn’t clear the cache when the site was updated. Not declaring any headers it uses the browser defaults which is to cache the file for up to 24 hours.
