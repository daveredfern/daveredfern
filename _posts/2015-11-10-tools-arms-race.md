---
title: "Tools arms race"
date: "2015-11-10"
---

Job titles are a good reflection of how complex the web industry has become. Only a few years ago we would call ourselves web designers, now we see titles such as UX designers and front-end engineers.

At the core of the web very little has changed. HTML, CSS and JavaScript still exists - sure there are some new selectors but the principles are the same. Complexity has been added on top of these in the form of tools. It’s now reached a point where many tools are considered a prerequisite to working on a website.

When was the last time you worked on a project that didn’t use jQuery? For me, a long time ago. It’s now assumed that you have an understanding of it to be able to work on a project.

We even have tools to run multiple tools. Codekit is a fantastic piece of software but it almost confirms complexity and over engineering of many of our projects and workflows.

## Tools are good

Don’t get me wrong, tools are pretty damn awesome. People far smarter than me have built them to overcome a specific problem. They’ve helped me automate many of the mundane tasks leaving me to focus on the parts I enjoy working on.

Let’s take Gulp autoprefixer as an example. No one enjoys writing half a dozen browser prefixes to support gradients in every browser - hell, I’m not sure I could even remember them! Gulp autoprefixer solves this problem.

It’s not the tools but the implementation that is the problem. Continuing the example of Gulp autoprefixer - it has lots of options and understanding where it gets information and how it works is crucial to properly setting it up.

## Choice anxiety

Fully understanding all of these tools takes a significant amount of time. It’s a big investment so you want to make sure you make the right decision.

A frenzy of panic ensues each time I need to choose a tool. Is this the best option? How difficult is it to learn? Will this be around in a years time? What is the most popular choice?

Take the example of Bootstrap vs Foundation. On the face of it they are very similar. They are both very mature tools and offer lots of functionality. Choosing one of these is a hard choice, whichever you choose has a significant learning curve to fully understand.

A quick Google of “Bootstrap vs Foundation” reveals how passionate people are around tools. Often it comes to down a matter of opinion or preference. They both do the job just fine. Like the authors of these tools, they have strong opinions on how they work, which creates cult followings.

Choose the tool that best suits the project and your requirements. Don’t choose based on the group who shouts the loudest.

## Learning curve

Learning new tools is time consuming, it can take weeks to fully understand some. When working in an agency it’s very important to consider this when trying to implement new tools. The time to learn is multiplied exponentially.

Regardless of how useful a tool is, it’s completely useless unless the entire team fully understands how it works. Creating black boxes where code is thrown in leads to poor or even broken production code.

This is one of the problems with using tools. Because it takes so long to learn how to use them, we have a tendency to use them on every project - regardless of whether it’s required for that project.

I have fell into this trap myself. Using Sass and Gulp on the smallest of projects where plain old HTML and CSS have stood the test of time, work perfectly well.

## Technical debt

Technical debt is the overhead for a project. The technologies, tools and information you need to know before you can work on it.

Let’s take the small project I recently worked on. For a small website using HTML, CSS and some JavaScript the technical debt is very low. Adding Gulp, Sass, imageoptim and bower\_components to that project has increased the barrier to entry exponentially.

The technical debt of projects has never been more apparent than working in an agency full of designers, front-end developers, programmers and dev ops. The wide variety of people and skills opens your eyes to how complex some projects have become. Sometimes necessarily but often for the sake of complexity or self importance.

We need to be conscious of the learning curve involved to work on each project. Considering not just if but how each tool can help us. Keeping in mind the people who are working on the project, both now and in the future.

## Scaring talented people away

There are lots of articles out there complaining that the web is starting to look the same. Regardless of whether you agree or disagree (and whether tools are to blame), we can all agree putting new people off joining the web industry is never a good thing.

Designers, students, hobbyists and new people to the industry must be overwhelmed by the sheer complexity, where to start and what to learn.

In reality all you need is a text editor and you could build a website. Searching Google and it’s buzzword bingo - Sass, Angular, Ember, Less, Gulp, Grunt, Bootstrap and the list goes on. None of these are required to get going, yet some encourage learning these from the outset. This results in learning tools rather than concepts and underlying languages.

## Focusing too much on tools

How many of us have sat in front of our computers, on the verge of punching the screen because of an error compiling something? I definitely have and unfortunately it’s a common occurrence.

We have a habit of focusing on the process of building a website rather than the website itself. All this time spent writing and perfecting our processes means less time spent on the final website. I can’t help but think we’re neglecting the thing we’re trying to create in the first place.

## Late to the game

I was very late to the game when it came to using CSS-preprocessors. Some people still don’t use them and that’s not a bad thing.

If you’re on the cutting edge you end up using new tools that are sometimes buggy and not ready to use in a production environment. In an agency environment this is a very dangerous place to be. Taking a step back and only introducing tools when you’re confident means you can avoid a lot of the pain that comes with these new tools.

Take Less vs Sass as an example. Many started using Less and have since switched to Sass which has become the more popular choice. Coming in later has meant we can skip this battle and learn just one tool, saving hundreds of hours in training the entire company.

Another example is compiling Sass using Compass and now Gulp. Compass was slow, very slow! Holding back on implementing new tools until we’re confident it can benefit us meant we could jump straight into using Gulp instead of going through the pain of 10 second (or more) compile times with Compass.

## Tool legacy

Using tools are all well and good. They will help you now but what about in a couple years time. The web is a fast paced industry. Tools that are relevant now might be in a couple years.

Going back to the example of Less vs Sass. A few years ago Less was the dominant force, now Sass is. Soon even Sass will have it’s day being replaced by CSS pre processing. This is great for the progress of the web, terrible for working on legacy projects.

Not only do you have to learn the new tools, you have to remember all the old ones incase you ever need to work on those projects in the future.

It’s important to consider the legacy of a project in your technical debt. It’s possible that the tools you choose at the beginning will be the ones that remain attached to that project throughout the lifespan of the website. Are you happy to continue using these tools in a couple years time even if they’re no longer relevant?

## Keep it lean and focus on the final product

It’s time to keep our projects lean and focus on the importants parts - the website. Consider every tool to make sure the benefits out way the technical overhead they bring. Educate everyone on the team how to use not just the new tools but the underlying languages they use. Don’t implement any tools unless everyone who will work on the project is happy to use them.
