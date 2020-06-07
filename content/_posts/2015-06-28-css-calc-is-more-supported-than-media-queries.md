---
title: "CSS calc is more supported than media queries"
date: "2015-06-28"
tags: [CSS, "Web Design", "Front End Development"]
---

[Calc is awesome](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

If you've not come across it in CSS, it allows you to do calculations. The big benefit is you can calculate across different units. It's handy when building responsive websites. There are often times you need to calculate things like 20% - 1rem, well now you can! [Here is an example](https://gist.github.com/daveredfern/7c597beb6281c5ab9092).

The best bit is the support. [Calc has better support](http://caniuse.com/#search=calc) than [media queries](http://caniuse.com/#feat=css-media-resolution), yes you read that right. Every browser including back to IE9 support it apart from Opera Mini.

## Using SASS variables in Calc

You might try to include SASS variables inside calc and find they don't work. The output in the CSS file with print exactly what was inside the calc function. If you include one it will print the variable name, not the value. After some digging I found you can wrap your variables so they work like anywhere else. It feels a little hacky but hey, [it works](https://gist.github.com/daveredfern/4f4f48146ab7b9ffa636)!

## Just one word of caution

When using it with pre-processors such as SASS or LESS you may start getting calc happy. Keep in mind if you're calculating two values with the same units you can us your pre-processor. This will create cleaner and faster CSS. Just use calc when calculating two values with different units.

UPDATED 03/07/2015: Added using SASS variables inside calc
