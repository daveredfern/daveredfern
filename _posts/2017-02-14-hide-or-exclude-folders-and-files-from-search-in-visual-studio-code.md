---
title: "Hide or Exclude Folders and Files From Search in Visual Studio Code"
date: "2017-02-14"
---

I love [Visual Studio Code](https://code.visualstudio.com/). I never thought I'd be saying that my favourite application was developed by Microsoft! One of it's best features is the ability to customise almost anything using user settings.

Here is a a snippet that hides folders or excludes them from search. Handy for removing those core files that shouldn't be edited anyway. It also helps with performance. These are mine for WordPress. Just add them to preferences > settings.

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
