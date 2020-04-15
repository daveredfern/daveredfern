---
title: "NPM and Bower: When to use each"
date: "2015-08-10"
---

[Gulp](http://gulpjs.com/) was my first experience of using package managers. A quick search and you'll probably notice that [NPM](https://www.npmjs.com/) and [Bower](http://bower.io/) are the popular choices.

## Which do you use?

Surprisingly the answer is both. NPM is used for gulp packages - things that do all the crunching such as processing the [Sass](http://sass-lang.com/). Bower is used for website assets - things that will be served to the user such as jQuery.

## Why use both NPM and Bower?

There is logic behind the madness. It’s all about how each handle their package dependencies.

If we were to use a carousel sxuch as [bxSlider](https://github.com/stevenwanderski/bxslider-4) (everyone squirm on the count of three…) it would require jQuery to work. jQuery is therefore a dependency of bxSlider. For bxSlider to work it requires jQuery. So jQuery is a dependency of bxSlider.

Both NPM and Bowers use dependencies but where they store them differs.

### How NPM handles dependencies

When installing a package from NPM it will create a folder inside the root of node\_modules. Any dependencies will be downloaded inside of that package. If we take the example of [gulp-sass](https://www.npmjs.com/package/gulp-sass), you would have a folder structure like this:

node\_modules/gulp-sass
node\_modules/gulp-sass/node\_modules/gulp-util

If another module requires [gulp-util](https://www.npmjs.com/package/gulp-util), it will download that dependency again into it’s own folder. Each package is isolated from one another.

Initially this sounds crazy but it is actually very useful. By each package having their own dependencies and not sharing it stops any conflicts with different versions. No matter what you install, it will work.

The nodes\_module folder can get very large. But since we only use NPM for gulp packages we don’t care.

### How Bower handles dependencies

When installing a package with Bower it will download all the dependencies to the root folder of bower\_components. Taking the earlier example of bxSlider, it would give you the following folder structure:

bower\_components/bxslider
bower\_components/jquery

Unlike NPM, Bower installs dependencies in the root folder. If we then decide to install another package that relies on jQuery it will use the pre-existing package.

Bower is more prone to conflicts with packages requiring different version of other packages. This may feel annoying but it’s very useful, who wants 3 versions of jQuery on one site?

Bower works much more like the JavaScript would on a website, using only one version of each script. This is why Bower lends itself better for assets that will be used on the website.
