---
title: "Style guide"
---

My goals is to make this website as lean, fast, and user-friendly as possible. If you have any suggestions or improvements that could help me reach that goal, please [get in touch](/contact/).

## Behind the scenes

This site is built with [Jekyll](https://jekyllrb.com/) and deployed to [Netlify](https://www.netlify.com/). The forms are managed and processed by [Netlify Forms](https://www.netlify.com/products/forms/).

## Typograph

This website uses system fonts. On Mac and iPhone you’ll see [San Francisco](https://developer.apple.com/fonts/), on Android you’ll see [Roboto](https://github.com/google/roboto), and on Windows you’ll see [Segoe UI](https://www.microsoft.com/typography/fonts/family.aspx?FID=331). I first saw it at [Ampersand Conference](http://2015.ampersandconf.com/) in 2015 when [Marcin Wichary](http://2015.ampersandconf.com/speakers#marcin) from Medium demonstrated it.

## Colors

<ul>
    <li class="highlight"><strong>Blue</strong> in light mode and <strong>pink</strong> in dark mode.</li>
    <li><strong>Black</strong> in light mode and <strong>whit</strong>e in dark mode.</li>
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
        <div><strong>Textares</strong></div>
        <div class="micro">Additional instructions that might help the user fill in the field goes here.</div>
        <textarea></textarea>
    </label>
    <button>Submit button</button>
</form>

## Button

<a href="#" class="button">This is a button</a>

## Notification

<div class="notification">
    <p>This is a notification. It adds a box around content to make it more prominent.</p>
</div>

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

## Utilities

<p class="lead">Use the <code>.lead</code> class to increase the size of an element.</p>

<p class="micro">Use the <code>.micro</code> class to decrease the size of an element.</p>

<p class="highlight">Use the <code>.highlight</code> class to make an element blue.</p>

<p class="mute">Use the <code>.mute</code> class to make an element light grey.</p>

<p>Use the <code>.hidden</code> class to hide an element.</p>

## Layout

<p>Use the <code>.container</code> class to cap with width of the content.</p>

<p>Use the <code>.spacing</code> class add large space to the top and bottom of the element.</p>