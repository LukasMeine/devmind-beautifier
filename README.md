![](https://cloud.githubusercontent.com/assets/20716798/19286874/c1c9d9ca-8fd5-11e6-93da-ab5dcfb6d6dc.png)


[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/LukasMeine/devmind-beautifier/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/LukasMeine/devmind-beautifier/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/LukasMeine/devmind-beautifier/badges/build.png?b=master)](https://scrutinizer-ci.com/g/LukasMeine/devmind-beautifier/build-status/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/fbdee4ec0fa24f6f53f3/maintainability)](https://codeclimate.com/github/LukasMeine/devmind-beautifier/maintainability)

## Devmind.io code beautifier now in Atom

Makes your code look better. Available for php, javascript, golang, json, scss, less, typescript, css, clojure, ruby and html. No configuration needed, use straightaway.

## Installation

**Installation is not needed** because this package uses the [Devmind.io](https://devmind.io) API, which uses the [universal code beautifier](https://github.com/LukasMeine/universal-code-beautifer) project, that's why you don't need to configure anything.

But if you want to host it yourself, go to https://github.com/LukasMeine/universal-code-beautifer and follow the instructions.

After you have it up and running, you will need to change the url that devmind beautifier uses to serve your beautified files.

So, go to the [/lib/devmind-beautifier.js](/lib/devmind-beautifier.js) file and replace the following line of code for your own url

```
var url = "https://beautifier.devmind.io/format"; //change that to your own url
```

Proudly released under MIT license

### Before
![screen1](https://cloud.githubusercontent.com/assets/20716798/19285847/ff876b82-8fd1-11e6-8cca-c2cc767f99a8.png)

### After
![screen2](https://cloud.githubusercontent.com/assets/20716798/19285848/ff8ae9d8-8fd1-11e6-804c-12e8d7a06ddc.png)
