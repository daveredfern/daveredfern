---
title: "Achieving 100/100 on Google Page Insights using WordPress"
date: "2016-04-12"
tags: ["Web Design", "Front End Development"]
---

A few at work set a challenge, to get 100/100 on [Google Page Insight](https://developers.google.com/speed/pagespeed/insights/). Both [Andy](https://www.smartiehastheanswer.co.uk/achieving-100-out-of-100-on-google-pagespeed-insights-using-jekyll.html) and [Jake](https://jake.cobe.ly/2016/03/achieving-100-out-of-100-on-google-pageSpeed-insights/) use Jekyll and have written posts (which I highly recommend reading) on what they did.

So, is it possible to achieve 100/100 on Google Page Insights using WordPress? {Insert drum roll} Yes, at least most of the time, [go check here](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.daveredfern.com%2F). Here are the steps I took to achieve it.

## Design for performance

It’s [no good designing a website](http://www.lingscars.com/) without considering the performance impacts on everything you do. It’s a sure way to fail. Custom fonts, images, styles, amount of content, fancy JavaScript – everything has a cost to performance.

[Lots](http://danielmall.com/articles/how-to-make-a-performance-budget/) [of](https://timkadlec.com/2014/11/performance-budget-metrics/) [people](http://bradfrost.com/blog/post/performance-budget-builder/), much cleverer than me, have wrote about performance budgets. I’d highly recommend implementing one if you care about the speed of your website (which of course you do).

## Avoid external assets

If you’re loading any external assets, stop. Whether it’s a custom font or JavaScript library, you either need to bring them in-house (i.e. host it yourself) or bin them. Don't rely on others to deliver your assets quickly. I add the caveat that using the right [content delivery network (CDN)](https://www.cloudflare.com/features-cdn/) can improve your score, but it can also cripple it.

## Render blocking

When a browser loads a page it looks for assets that are required before it can display the content. These can include CSS, JavaScript and custom fonts. The more render blocking you have, the more it will impact your Page Insights score.

The simple fix is to stop using them. Luckily my site doesn’t use any JavaScript (it’s relatively simply, by design) and the CSS is less than 5KB. This means I can move my CSS inline instead of linking to a separate file.

For most websites this isn’t a realistic approach. For CSS you can place some of inline and then load the rest using JavaScript. [Here is a great article](https://css-tricks.com/authoring-critical-fold-css/) on CSS Tricks on how to decide which CSS should inline and how to load the rest without render blocking.

## Reduce images and smush the ones left

Removing images sorts this problem quickly. Only joking, kind of.

It is possible to achieve 100/100 with images on the page but is harder than it first seems. We obviously need to optimise our images both in pixel and file size and there are lots of tools to [accomplish this](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=en).

Unfortunately things get a little tricky when your website is responsive. Responsive web design means we often load in higher resolution images so when the browser changes size the image scales up without becoming blurry. Using [responsive images](http://alistapart.com/article/responsive-images-in-practice) will help alleviate this problem but still isn't a perfect match. The browser will choose the most optimised images but that still could be larger than we'd like.

I'd highly recommend auditing all the images on your website, especially if they’re not part of the content. See if they are 1) required in the first place and 2) optimised both in pixel and file size.

For images that are part of the content you can use a plugin called [WP Smushit](https://en-gb.wordpress.org/plugins/wp-smushit/). This plugin will automatically optimise your images when you upload them to your admin area. It can make a big saving on your files size and is a no brainer to install. You can add new image sizes to WordPress using [their built in functions](https://developer.wordpress.org/reference/functions/add_image_size/).

Many recommend [JetPack](https://jetpack.com/) for image optimisation. It not only hosts your images on a CDN but adds all the responsive image magic required. I don't use it because of the additional JavaScript it adds to the page which damages your score because it's render blocking.

## Minify everything

If you see a file that doesn't look like gobbledigook, minify it. Minify HTML, CSS and JavaScript. You can do this either manually or using a WordPress plugin. I use [Autoptimize](https://en-gb.wordpress.org/plugins/autoptimize/), it’s simple to setup and does everything I want.

## Use server caching

[Caching](https://en.wikipedia.org/wiki/Cache_(computing)) takes a snapshot of your dynamic page and stores it as a static asset. This means when there is a new request for a page instead of it grabbing the information dynamically using a database (which can be slow) it uses the snapshot instead.

There are lots of caching plugins for WordPress. [Automattic](https://automattic.com/) (the people behind WordPress) have released one called [WP Super Cache](https://en-gb.wordpress.org/plugins/wp-super-cache/). It's simple to install and requires no setup (although you can improve it if you know what you're doing).

Depending on your hosting provider, you might not need a caching plugin. Some hosting companies are starting to provide server caching through WordPress "optimised" packages.

If your hosting company mentions any of these terms, you’re probably onto something good.

- Nginx
- PHP-FPM
- Nginx Fast-CGI cache
- ngx\_pagespeed
- Memcached

I’m not going to kid myself. I only have basic understanding of these terms but any good hosting company should be able to give you a helping hand setting up caching on your WordPress website.

## Leverage browser caching

Once an image, CSS or JavaScript file has been downloaded by a visitor, we want the browser to keep it for a while. Generally these files rarely change so you don't need the visitor to download it multiple times. [Browser caching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching) lets the browser know it can hold onto that file for a period of time without downloading it again.

Some WordPress caching plugins handle both server and browser caching. The quick way to check is if it has added some additional lines to your .htaccess file. It should contain [something like this](https://www.siteground.com/kb/leverage-browser-caching/).

## Change hosting companies

Not all hosting companies are equal, especially when it comes to performance. I have moved my site between three different hosting companies before Google stopped penalising my score based on server response time. If you do get this message I'd recommend contacting your hosting provider to see if they can help. If they can't, you'll need to move to another hosting provider. Before jumping to the next cool kid, make sure you do your research else you'll be jumping around like nobody's business – like me!

## To recap

- Design with speed in mind.
- Remove everything you don’t need, especially external scripts.
- Minify and smush any file that you come in contact with.
- Cache everything. Everything.
- Check your hosting provider cares as much about speed as you.

Achieving 100/100 on Google Page Insights is possible but also not really feasable for most websites, and that's ok! Even my site sometimes blips down to 99 and it's mostly text and a small amount of CSS.

John and Jane Doe who visit your website don’t care what score you get on a page speed test, they just want the content fast. Sure these tools are useful to give you tips on improving your page, but not the be all and end all. Keep in mind it’s the [perceived speed](http://blog.teamtreehouse.com/perceived-performance) of your website, not just the actual speed.

Some might call me defeatist at not achieving 100/100 every second of the day but I'll call it being realistic :).

Happy optimising!
