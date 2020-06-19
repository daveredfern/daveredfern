---
title: "Style guide"
---

My goals is to make this website lean, fast, and user-friendly. If you have any suggestions or improvements that could help me reach that goal, please [get in touch](/contact/).

## Behind the scenes

See my [uses page](/uses/) for the technology I use for this website.

I keep a [roadmap page](/roadmap/) that contains a list of features and ideas I’m currently working on.

My [inspiration page](/inspiration/) includes links and resources that have helped me design and build this website.

## Typography

I uses system fonts. On Mac and iPhone you’ll see [San Francisco](https://developer.apple.com/fonts/), on Android you’ll see [Roboto](https://github.com/google/roboto), and on Windows you’ll see [Segoe UI](https://www.microsoft.com/typography/fonts/family.aspx?FID=331). I first saw it at [Ampersand Conference](http://2015.ampersandconf.com/) in 2015 when [Marcin Wichary](http://2015.ampersandconf.com/speakers#marcin) from Medium demonstrated it.

## Colors

<ul>
    <li class="highlight"><strong>Blue</strong> in light mode and <strong>pink</strong> in dark mode.</li>
    <li><strong>Black</strong> in light mode and <strong>white</strong> in dark mode.</li>
    <li class="mute"><strong>Light grey</strong> in light mode and <strong>dark grey</strong> in dark mode.</li>
</ul>

## Headings

# Page heading (h1)

## Page heading (h2)

### Page heading (h3)

#### Page heading (h4)

##### Page heading (h5)

###### Page heading (h6)

## Paragraphs and lists

"Ah," said he, "I forgot that I had not seen you for some weeks. It is a little souvenir from the King of Bohemia in return for my assistance in the case of the Irene Adler papers."

* "Some ten or twelve, but [none which present](#) any feature of interest.
* They are important, you understand, without being interesting.
* Indeed, I have found that it is usually in unimportant matters that there is a field for the observation, and for the quick analysis of cause and effect which gives the charm to an investigation.
* The larger crimes are apt to be the simpler, for the bigger the crime the more obvious, as a rule, is the motive.

1. In these cases, save for one rather intricate matter which has been referred to me from Marseilles, there is nothing which presents [any features of interest]().
2. It is possible, however, that I may have something better before very many minutes are over, for this is one of my clients, or I am much mistaken."
He had risen from his chair and was standing between the parted blinds gazing down into the dull neutral-tinted London street.
3. I saw that on the pavement opposite there stood a large woman with a heavy fur boa round her neck, and a [large curling red feather]() in a broad-brimmed hat which was tilted in a coquettish Duchess of Devonshire fashion over her ear.

## Blockquote

> "It was from the reigning family of Holland, though the matter in which I served them was of such delicacy that I cannot confide it even to you, who have been good enough to chronicle one or two of my little problems."

## Code

This is an example of a code block.

```
.hello-world {
    display: block;
}
```

There is also styling available for <code>inline code</code>.

## Forms

<form>
    <label>
        <div><strong>Input field</strong></div>
        <div class="micro">Additional instructions that might help the user fill in the field goes here.</div>
        <input>
    </label>
    <label>
        <div><strong>Textarea</strong></div>
        <div class="micro">Additional instructions that might help the user fill in the field goes here.</div>
        <textarea></textarea>
    </label>
    <button>Submit button</button>
</form>

## Horizontal line

<hr />

## Button

<a href="#" class="button">This is a button</a>

## Inline list

<ul class="inline-list">
    <li>This</li>
    <li>is</li>
    <li>an</li>
    <li>inline</li>
    <li>list</li>
</ul>

## Tag

A <span class="tag">Tag</span> can be created by wrapping content insdie of a span with the class <code>.tag</code> applied to it.

## Search chip

<a href="#" class="search-chip">Search chip</a>

A search chip indicates that the content can be filtered by a category. These are primarily used on the <a href="/blog/">blog</a> pages.

Use the <code>.search-chip</code> class on any link.

If you’re filtering content on the same page, you can add the <code>.is-active</code> class to indicate the search chip is active.

## Media embed

A <code>.media-embed</code> forces an element to maintain a ratio of 16:9. It’s primarily used for embedding iFrame content such as YouTube where, by default, they don’t resize responsively.

<div class="media-embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/2XX14tfsk4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

To make the ratio 4:3, add a modifying class of <code>.media-embed--43</code> to it.

## Icons

When using an icon, add the class <code>.icon</code> to the SVG to set the size correctly.

When an SVG is used inside of a link, an SVG element won’t have an underline like text does. This can look odd so to overcome this, instead of using a space, add the class <code>.space-left</code> which adds the equivelant of one space.

## Media object

An `.media-object` is a two column layout which is designed to have some media on the left and some copy on the right. I primarily use it at the bottom of each page to introduce myself.

<div class="media-object">
    <div class="media-object__media">
        <img src="/assets/images/profile.jpg" alt="A photo of Dave Redfern" />
    </div>
    <div class="media-object__body">
        <p><strong>Hi. I’m Dave Redfern.</strong> I work with some of the world’s most sophisticated companies, helping to design and develop user‑centered experiences that deliver measurable returns. <a href="/about/">Read more about me</a>.</p>
    </div>
</div>

## Utilities

<p class="lead">Use the <code>.lead</code> class to increase the size of an element.</p>

<p class="micro">Use the <code>.micro</code> class to decrease the size of an element.</p>

<p class="highlight">Use the <code>.highlight</code> class to make an element blue.</p>

<p class="mute">Use the <code>.mute</code> class to make an element light grey.</p>

<p>Use the <code>.hidden</code> class to hide an element.</p>

## Layout

<p>Use the <code>.container</code> class to cap with width of the content.</p>

<p>Use the <code>.spacing</code> class add large space to the top and bottom of the element.</p>