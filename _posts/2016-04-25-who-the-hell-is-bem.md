---
title: "Who the hell is BEM?"
date: "2016-04-25"
---

Naming things is hard. Really hard. Having a convention for how to name things within a team helps everyone understand the code. It allows everyone who works on the project, from front end developers to programmers, to work on a project with the understanding of how things are organised.

Digging around CSS to find out how something is made can be a pain. Naming things correctly allows anyone to inspect the HTML and immediate understand why something is styled like it is.

BEM to the rescue! BEM is a class naming convention that helps promote growth and scale, reusability, increase productivity and team work. It uses double underscores and double dashes to signify where something belongs and what it is reliant on.

BEM stands for block, element and modifier.

- **Block** represents a high level component. For example a news item could be `.news`.
- **Element** represents a descendant of a block element. It is signified by a double underscore. For example a title of a news item could be `.news__title`.
- **Modifers** allow for things to be styled in a different state. For example a featured news item could be `.news__sticky`.

## Slides

This talk explains the basic concepts of BEM with some examples.

https://speakerdeck.com/daveredfern/who-the-fuck-is-bem

## Further reading

If you're interested in learning more about BEM I recommend the following articles.

- [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by Harry Roberts.
- [Official BEM website](https://en.bem.info/)

## Events

- [Staffs Web Meetup – October 2014](http://lanyrd.com/2014/staffswebmeetup/)
