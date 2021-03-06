---
title: "Style guide"
---

My goals is to make this website lean, fast, and user-friendly. If you have any suggestions or improvements that could help me reach that goal, please [get in touch](/contact/).

## Behind the scenes

See my [uses page](/uses/) for the technology I use for this website.

I keep a [roadmap page](/roadmap/) that contains a list of features and ideas I’m currently working on.

My [inspiration page](/inspiration/) includes links and resources that have helped me design and build this website.

## Typography

I use [Source Serif Pro](https://github.com/adobe-fonts/source-serif-pro) by Adobe Fonts. I locally host the font because it’s faster than Google Fonts and Google Fonts doesn’t contain the italic versions. The fallback is the standard serif used by browsers.

## Colors

<ul>
    <li style="color: var(--primary-color)"><strong>Blue</strong> in light mode and <strong>pink</strong> in dark mode.</li>
</ul>

## Headings

# Page heading (h1)

## Page heading (h2)

### Page heading (h3)

#### Page heading (h4)

##### Page heading (h5)

###### Page heading (h6)

<br />

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

This <code>.inline-list</code> is primarily used for navigation on the website.

<ul class="inline-list">
    <li><a href="#">This</a></li>
    <li><a href="#">is</a></li>
    <li><a href="#">an</a></li>
    <li><a href="#">inline</a></li>
    <li><a href="#">list</a></li>
</ul>

## Search chip

<a href="#" class="search-chip">Search chip</a>

A search chip indicates that the content can be filtered by a category. These are primarily used on the <a href="/blog/">blog</a> pages.

Use the <code>.search-chip</code> class on any link.

If you’re filtering content on the same page, you can add the <code>.is-active</code> class to indicate the search chip is active.

## Media embed

A <code>.media-embed</code> forces an element to maintain a ratio of 16:9. It’s primarily used for embedding iFrame content such as YouTube where, by default, they don’t resize responsively.

<div class="media-embed"><div class="media-embed__body"><iframe width="560" height="315" src="https://www.youtube.com/embed/2XX14tfsk4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>

To make the ratio 4:3, add a modifying class of <code>.media-embed--43</code> to it.

## Media object

An `.media-object` is a two column layout which is designed to have some media on the left and some copy on the right. I primarily use it at the bottom of each page to introduce myself.

<div class="media-object">
    <div class="media-object__media">
        <img src="/assets/images/profile.jpg" alt="A photo of Dave Redfern" class="round" />
    </div>
    <div class="media-object__body">
        <p><strong>Hi. I’m Dave Redfern.</strong> I work with some of the world’s most sophisticated companies, helping to design and develop user-centered experiences that deliver measurable returns. <a href="/about/">Read more about me</a>.</p>
    </div>
</div>

## Utilities

<p class="lead">Use the <code>.lead</code> class to increase the size of an element.</p>

<p class="micro">Use the <code>.micro</code> class to decrease the size of an element.</p>

## Layout

<p>Use the <code>.spacing</code> class to add large space to the top and bottom of the element.</p>

<p>Use the <code>.no-spacing</code> class to remove the top and bottom margin from ana element.</p>