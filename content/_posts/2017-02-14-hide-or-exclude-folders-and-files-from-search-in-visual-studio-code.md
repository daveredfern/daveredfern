---
title: "Hide or Exclude Folders and Files From Search in Visual Studio Code"
date: "2017-02-14"
tags: ["Web Design", "Front End Development"]
---

I love [Visual Studio Code](https://code.visualstudio.com/). I never thought I'd be saying that my favorite application was developed by Microsoft! One of it's best features is the ability to customize almost anything using user settings.

Here is a a snippet that hides folders or excludes them from search. Handy for removing those core files that shouldn't be edited anyway. It also helps with performance. These are mine for WordPress.

Go to `Preferences > Settings` and search for “exclude”. Here you’ll see three exclude sections. One for files, one for glob patterns, and one for searches. For this article, we’ll focus on files although all the others work in the same way.

I add the following patterns:

```
*/**/node_modules/
wp-includes/
wp-admin/
wp-*.*
wp-config.*
xmlrpc.php
.vscode/
*/**/cache/
*/**/uploads/
*/**/infinitewp/
*/**/.github/
*/**/build/
```

Behind the scenes, the pretty preference page updates a JSON file. To edit the file directly, use the shortcut `CMD+Shift+P` and search for `Preferences: Open Keyboard Shortcuts (JSON)`. In that file you can copy and paste the following:

```
"files.exclude": {
    "*/**/node_modules/": true,
    "wp-includes/": true,
    "wp-admin/": true,
    //"wp-*.*": true,
    "wp-config.*": false,
    "xmlrpc.php": true,
    ".vscode/": true,
    "*/**/cache/": true,
    "*/**/uploads/": true,
    "*/**/infinitewp/": true,
    "*/**/.github/": true,
    //"*/**/build/": true
},
"search.exclude": {
    "build/": true,
},
```

[More tip and tricks can be found here](https://github.com/Microsoft/vscode-tips-and-tricks).
