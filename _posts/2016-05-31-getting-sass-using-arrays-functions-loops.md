---
title: "Getting the most out of Sass using arrays, functions and loops"
date: "2016-05-31"
---

Sass is a great way to organise your CSS and especially so for large projects. The ability to use variables, include files inside one another and create reusable nuggets of code (or [mixins](https://www.sitepoint.com/sass-basics-the-mixin-directive/)) has revolutionised how I write CSS. Until recently all I used were variables, imports, mixins and a few built-in functions such as `darken` and `lighten`. I suspect many other front end developers are the same, but it can help us much more.

At [iWeb](https://www.iweb.co.uk/), we have an [open source front end framework called Chop Chop](https://github.com/getchopchop/chopchop) we use to build new websites. It’s designed to be a simple but feature rich base to help everyone work more consistently, removing any "ownership" of projects.

We're continuously developing Chop Chop and one of the best ways to improve is by taking inspiration from others. The stereotypical comparison people make is with [Bootstrap](http://v4-alpha.getbootstrap.com/). So, we thought why not have a nose at their Sass? After all, they do some great work and lots of thought has gone into every aspect of it.

While buried in Bootstrap's Sass I noticed they were using a lot of [@each loops](http://thesassway.com/intermediate/if-for-each-while) to generate repetitive CSS such as grids and visibility classes. After sharing this with the rest of the team, we only use the basic features of a much more powerful language.

## Choosing when to use them

Keeping things simple isn’t a bad thing. It means the barrier to entry is low and moving from CSS to Sass is a small leap. Two years on and all the team are competent using Sass so we can look at using more powerful features.

A front end framework is touched by many people – designers, front end developers, developers and external teams such as SEO agencies. So even though our team are proficient with Sass and basic coding concepts others who still need to use Chop Chop may not be. Striking a balance between efficient code and ease of use is something we're continuously debating with every change we make to our framework. For those who are not familiar with basic coding concepts it could be overwhelming if we start introducing arrays, functions and loops everywhere.

We started by introducing arrays, functions and loops to places that have lots of repetitive CSS. We decided this was where the biggest gains were to:

- **Reduce the amount of **Sass** written.** Previously these were all large amounts of CSS, looping an array can achieve the same output with just a few lines.
- **More reliable Sass.** By looping through arrays to generate code we can reduce human error.
- **Automate **Sass**.** Originally everything was a manual task. If there was a new colour you had to create a variable and add the utility class for that colour. Everyone is lazy and the utility classes often fell out of date. Using arrays meant we could automatically generate these classes when a new value is created.

Utilities are high level classes that add simple properties to a HTML element. These include text colours, background colours, grids, spacing. We thought these would be good places to start because they rarely need changing per site and have lots of repetitive code. For more information on utilities I recommend [reading Harry Roberts article on namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

## What are arrays, functions and loops?

In this post I'll show how we used arrays, functions and loops to our benefit but first we should clarify what they are.

### Arrays

Arrays are collections of values grouped together. If you already use variables you'll probably be able to see how they could be grouped together - colours, screen sizes, font sizes etc. We can group these into an array. This doesn't actually do much for us, in fact it makes it harder to use the variables elsewhere but in combination with functions and loops becomes extremely beneficial.

### Functions

You might already use functions in Sass. Sass has lots of predefined functions we can utilise such as [lighten](https://robots.thoughtbot.com/controlling-color-with-sass-color-functions) and [darken](https://robots.thoughtbot.com/controlling-color-with-sass-color-functions). In functions we feed one or more values into them, these values are then manipulated and a different value is returned. In the case of darken, we provide the darken function a colour and percentage to darken by, the function does it's work and returns the value of a darker colour.

Don’t complicate functions with mixins. Mixins are reusable snippets of CSS whereas functions handle logic. I differentiate them by saying mixins add CSS whereas functions manipulate it.

### Loops

@each loops allow us to take a collection of values, or array, and run through each item. This means we can write the CSS once and it will output each iteration.

An @each loop is a Sass control directive. There are four types available for us to use in Sass: @if, @for, @each and @while. We’ll be using @if and @each for the example below. For more information and examples of Sass control directives I [recommend reading this article](http://thesassway.com/intermediate/if-for-each-while) on the official website.

## Practical example

In our front end framework we have a collection of colour variables. These can then be used throughout the CSS. We also have a collection of classes that apply either a background or text colour to the HTML element the class is added to.

We want to convert the variables to a single array and then for the collection of classes to be automatically generated from that array.

### Creating arrays

Originally we had a simple collection of variables similar to below. We have greys, brand colours and social colours (such as Facebook and Twitter) but for the example we’ll reduce them to five.

```
$light-grey: #999;
$grey: #666;
$dark-grey: #333;
$pink: #ff69b4;
$blue: #0000ff;

```

These work fine but it’s hard to automatically loop through all colours when they’re separate variables. That’s where arrays come in handy. If we convert them to an array we can easily automate the generation of CSS, such as the background and text colour classes.

So here are the same colours as part of an array.

```
$colors: (
  grey: (
    dark: #444,
    base: #666,
    light: #999
  ),
  brand: (
    pink: #ff69b4,
    blue: #0000ff
  )
)

```

In the above example we have converted the colours into a nested array. Where you see `(` it signifies the start of an array. Where there is `)` it’s the end. So we have gone from five variables to one that includes other arrays, one for each colour grouping.

You might have noticed we have introduced base inside the grey array. This is so we are able to set a default option when using functions to retrieving one from the array.

### Creating functions

When colours were separate variables we could use them like this `background-color: $grey`. As you can imagine, this no longer works. This is where we wrote a function.

```
@function color($color, $tone: 'base') {
  @return map-get(map-get($colors, $color), $tone);
}

```

We’re using a core function called [`map-get`](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method). The function allows us to return a value from an array. For example `map-get($variable-containing-array, 'key-value')`. The problem is we have nested arrays. That is fine because we can also nest `map-get`, as you can see in our example. We could write that each time we need a value but it’s a little long. So we created this custom function as a shortcut.

Our function accepts two options. The first (`$color`) is the high level array (e.g. grey or brand). The second (`$tone`) is optional and for the key value of the nested array. This has a default value of base but can change this with light or dark for example.

Here is three examples that use our custom function:

```
background-color: color(grey);
background-color: color(grey, light);
background-color: color(brand, pink);

```

In the first example we are retrieving the base grey colour from the array. You can see we only passed one value into the function and therefore assumes the second value should be base. The second and third example has two values and we're retrieving the light grey and pink respectively.

### Using loops

So far we have an array of colours and a function to retrieve any value inside it. We've not really done anything that couldn't be achieved by using simple variables.

Now we want to create some utility classes for background and text colours. We previously did this manually but a framework should help us as much as possible. Generating these with a loop means we have one less thing to think about while reducing the amount of Sass and making it more robust.

I’ll first show you the @each loop we use to generate a class that applies a background colour for each item in the array. This example could be tweaked for text colour.

```
@each $color-key, $color-value in $colors {
  @each $tone-key, $tone-value in $color-value {
    @if $tone-key == base {
      .u-fill-#{$color-key} {
        background-color: $tone-value !important;
      }
    } @else {
      .u-fill-#{$color-key}-#{$tone-key} {
        background-color: $tone-value !important;
      }
    }
  }
}

```

In the example we have two nested loops. One to loop through the high level array items (grey, brand) and another inside to loop through those items (for example light, base and dark for the grey array).

We are using an @if statement to check if the current item is base. Base is our default setting so we don't want the class name to include that. We want `.u-fill-grey` and not `.u-fill-grey-base`. For the others we do want to append the array key to the end. E.g. `u-fill-grey-light`.

Here is the CSS output of the above code:

```
.u-fill-grey-light {
  background-color: #999 !important;
}
.u-fill-grey {
  background-color: #666 !important;
}
.u-fill-grey-dark {
  background-color: #333 !important;
}
.u-fill-brand-pink {
  background-color: #ff69b4 !important;
}
.u-fill-brand—blue {
  background-color: #0000ff !important;
}

```

You might notice there is `!important` added to the end of each property. We’re not terrible people, it’s recommended for utilities. I’ll reiterate how good [Harry Roberts article on namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) is on this topic.

## More examples

You can see the full Sass for our [colours utility](https://github.com/getchopchop/chopchop/blob/master/src/scss/utility/_color.scss) on Github. We've also started to experiment on Chop Chop using the four control directives. You can see more examples for [visible utilities](https://github.com/getchopchop/chopchop/blob/master/src/scss/utility/_visible.scss), [grid layouts](https://github.com/getchopchop/chopchop/blob/master/src/scss/utility/_grid.scss) and [functions](https://github.com/getchopchop/chopchop/blob/master/src/scss/mixin/_function.scss).

There is so much more you can also achieve with Sass. Here are a few of my favourite articles:

- [How to dynamically change text color based on a background color](http://thesassway.com/intermediate/dynamically-change-text-color-based-on-its-background-with-sass)
- [Advanced SCSS](https://gist.github.com/jareware/4738651)
- [5 reasons you should be using Sass today](http://www.webdesignerdepot.com/2014/08/5-reasons-you-should-be-using-sass-today/)

If you have any questions or suggestions for ways we can improve our Sass please [tweet](https://twitter.com/daveredfern) or [email me](mailto:dave@daveredfern.com).

Happy experimenting!
