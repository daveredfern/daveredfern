---
title: "Use Sass placeholders and extend wisely – a cautionary tale"
date: "2017-02-02"
---

[Extends](https://css-tricks.com/the-extend-concept/) are probably one of the biggest selling points to use Sass. They allow you to say this selector has the same styling as this other element so they should share styles to reduce the size of the CSS. An extend will therefore append that selector to the other.

For example, this Sass:

```
.card {
    border: 1px solid #ccc; border-radius: 3px;
}

.flag {
    @extend .card;
}
```

Will create the following CSS:

```
.card,
.flag {
    border: 1px solid #ccc; border-radius: 3px;
}
```

Looks great right? Unfortunately it has caveats – or at least you need to be careful using it. The extend feature simply searches and appends the new selector anywhere it is found. This can lead to bloated CSS if misused.

Take this example in Sass:

```
.card {
    border: 1px solid #ccc;
    border-radius: 3px;
}

.card .card__body {
    padding: 10px;
}

.card-group .card {
    padding: 10px;
}

.flag {
    @extend .card;
}

```

You might expect the output in CSS to be this:

```
.card,
.flag {
    border: 1px solid #ccc;
    border-radius: 3px;
}

.card .card__body {
    padding: 10px;
}

.card-group .card {
    padding: 10px;
}

```

But it won’t be. Extend finds any use of that class and appends the new one, so the output in CSS would actually be this:

```
.card,
.flag {
    border: 1px solid #ccc;
    border-radius: 3px;
}

.card .card__body,
.flag .card__body {
    padding: 10px;
}

.card-group .card,
.card-group .flag {
    padding: 10px;
}

```

As you can see, things are getting messy in just a few lines of CSS. Now imagine this across an entire CSS file – things get our of control quickly.

Me and [Gareth Joyce](https://twitter.com/gazjoy) first noticed the issue on a recent site when the CSS grew two fold while integrating it into Magento. We realised that this was because of our bridge Sass file.

Bridge Sass files allow for small tweaks to the CSS to help integrate into CMS’s with difficult to modify HTML or older CSS. We first saw it mentioned at [Front End North Conference](http://frontendnorth.com/) when [Harry Roberts](https://csswizardry.com/) spoke. The idea is you isolate these tweaks to ensure the CSS remains clean.

When using platforms such as Magento and WordPress it can be difficult to edit some HTML to perfectly match up with our coding practices. For example here is something we commonly include in our WordPress bridge Sass file:

```
.alignleft {
    @extend .u-pull-left;
}

.alignright {
    @extend .u-pull-right;
}

.aligncenter {
    @extend .u-center;
}
```

The bridge files acts as a clean and simply way to link up the nasty HTML with the nice CSS.

So how do we stop our CSS becoming so bloated? The answer lies with placeholders.

## Using placeholders in Sass

Placeholders work the same as classes and ID’s but don’t create any CSS themselves. They serve as markers or reference points in CSS. They are represented by a percentage symbol. For example:

```
%u-center {
    margin-left: auto;
    margin-right: auto;
}
```

If we compile this it won’t create any CSS. But if we do this:

```
%u-center {
    margin-left: auto;
    margin-right: auto;
}

.aligncenter {
    @extend %u-center;
}
```

The output would be as follows:

```
.aligncenter {
    margin-left: auto;
    margin-right: auto;
}
```

This is really useful because it means we can add placeholders throughout our CSS where the actual styles exist and it will not create any bloated CSS.

If we go back to the earlier example but add a placeholder we would have this:

```
.card,
%card {
    border: 1px solid #ccc;
    border-radius: 3px;
}

.card .card__body {
    padding: 10px;
}

.card-group .card {
    padding: 10px;
}

.flag {
    @extend %card;
}
```

This time we would get the following output:

```
.card,
.flag {
    border: 1px solid #ccc;
    border-radius: 3px;
}

.card .card__body {
    padding: 10px;
}

.card-group .card {
    padding: 10px;
}
```

Extend is working in exactly the same way but because the placeholder is only used once in the document, it doesn’t add any additional selectors where they are not required.

## Rule of thumb

The rule of thumb we’ve come up with is wherever a class is first declared we add an placeholder. Then we use extends sparingly and when we do, we only reference the placeholder.

If you follow that you should end up with a relatively clean and bloat-free CSS file.
