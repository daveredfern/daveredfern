---
title: "I Spent an Hour Choosing a Class Name"
date: "2015-07-20"
tags: [CSS, "Web Design", "Front End Development"]
---

There, I said it. It’s not procrastination, it’s planning and there is a big difference!

Modal, flag, media block, popup, drawer, overlay, suggestive search, breadcrumb, follow us icons, pagination, sort by, list item, facets, filters, widgets, newsletter, title, heading, social share, nav, nav dropdown, buttons, forms, inline forms, banners, carousels, tabs, accordions, tabs to accordions, toggles. I could go on…

## What’s in a name?

Well actually a lot!

The beauty of CSS is it’s simplicity but it's also open to interpretation. This is great for creativity, terrible for large projects.

Planning the structure and naming conventions of your CSS is critical for a successful project. Remembering to document everything as you go along. The goal is for anyone to be able to jump onto a project and understand what’s happening.

## How to name classes

Here are a few pointers I use when naming my CSS classes.

### 1\. A class should have one function.

Don’t over complicate things. Classes should only perform one task. As well as simplifying the naming process it creates a reusable style that can be applied anywhere. It's okay to use multiple classes on a single HTML element. The goal is to create flexible, lean and usable code; not attractive code.

### 2\. Name what it’s doing, not what it contains.

The same layouts or styles could be applied to lots of different content. Name your classes after what they do and not what they contain. We don't want to be duplicating CSS down the road or even worse, giving things the wrong classes.

### 3\. Use BEM - Block Element Modifier.

[BEM](https://en.bem.info/) is a naming convention that uses double underscores and dashes. BEM allows you to see the relationship between styles without delving into the CSS. Double underscore represents a reliance on part of the name that prepends it. A double dash distinguishes it as a modifier of the default functionality.

A good example is an article that contains a title and content with some being sticky. [Here is an example](https://gist.github.com/daveredfern/23a34d8d67ba2b0d8e49) of BEM in use.

Last November [I presented a talk about BEM](https://staffswebmeetup.co.uk/2014/10/24/staffs-web-meetup-november-2014/) at [Staffs Web Meetup](http://staffswebmeetup.co.uk/). Harry Roberts also wrote an [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) on his blog.

### 4. Use namespaces

CSS doesn’t only apply aesthetic styles but also JavaScript or temporary states. Prepending your classes with js-, is-, has- or u- makes the function of that selector much more transparent. Again [Harry Roberts wrote a great article](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) on using namespaces.

### 5\. A partner in crime.

There is nothing better than talking things over with a [colleague](https://twitter.com/gazjoy). This will help focus your ideas while getting the perspective from someone who may eventually work on the code you're writing.

I spent an hour deciding a class name and I’ll do it again.
