---
title: "When to use which units in CSS"
date: "2016-04-22"
---

When I started building websites, around 10 years ago, all I used was pixels. Percentages were reserved for only daring occasions.

Now I find myself using a combination of pixels, percentages, ems, rems, vh, vw and unitless values. It sounds insane but there is logic behind the madness.

## Pixels

Pixels have become a bystanders. The only time I use pixels is when I need to tell the browser to make an element an exact size. The good use case is borders. Using relative widths for borders could mean they're uneven and blurry. This is because the browser does it's best convert a relative measurement to pixels. Declaring a pixel value makes sure they look tidy.

## Percentages

I use percentages in two places.

The first is declaring the font size on the HTML tag. This is the base font size to set all other fonts. I don’t use percentages for other font sizes. Instead I opt to use ems because they help scale other CSS attributes, more on that here.

The second place I use percentages is for horizontal sizing. The classic example is for column widths for grids. We want these to be completely fluid to the users browser so percentages work well.

## Ems

If you're not familiar with ems, or even if you are, I recommend [reading my post on them](/2016/you-should-be-using-ems/). It will help you understand my thought process behind using them so much.

I use ems a lot. For all font sizes and most paddings and margins. This is because it scales with font size. A good example is padding on buttons and icons that are next to text.

My rule of thumb is if the margins or paddings are related to that element, they should be ems. If they’re global sizes they should be rems.

## Rems

Rems are just like ems but they only use the font size on the HTML tag to scale, rather than their parents. Rems are useful for things you want to remain constant across the website, regardless of it's content.

The only time I use rems is for global spacing between sections. This could be vertically or horizontally. It helps create a consistent look to a website.

## vh and vw

Vh and vw stand for viewport height and viewport width. They allow you to apply heights to elements based off the browser size. I rarely use these because generally you want elements to adapt to their contents.

The only times I have used them is for fullscreen video and overlays. It's an easy way to make sure the element fills the entire screen.

A word of warning. iOS and Android calculate vh from the height of the browser excluding the address bar. This means when you first visit the page, before scrolling, the element will appear taller then expected. When you scroll the height is corrected because the address bar disappears. [More information on this here](https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html).

## Unitless

The last unit is, well, unitless. I only use these for line heights. It’s recommended not to add units to line heights because the child elements inherit the raw number value, rather than the computed one. Adding units to line heights will often mean you need to overide them each time you change the font size.

I’d be interested in hearing how others use units when building there website. Or, if you think there is a better way to do something please let me know!
