---
title: "Using Netlify redirects with Jekyll"
categories: [Jekyll, Netlify]
date: "2020-04-05"
---

By default, [Netlify redirects](https://docs.netlify.com/routing/redirects/) won’t work when using Jekyll. This is because the `_redirects` file needs to be in the root of the public folder of your website. For Jekyll, this is the `_site` folder. Unfortunately, that folder is dynamically generated during the build process.

The simple fix is to append the following to your [build command](https://docs.netlify.com/configure-builds/get-started/) in Netlify.

```
&& cp _redirects _site/_redirects
```

This command will copy your `_redirects` file into the `_site` folder during the build process.

Here’s an example of the entire build command:

```
jekyll build && cp _redirects _site/_redirects
```
