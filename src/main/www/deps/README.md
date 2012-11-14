# Dependencies, these are public libraries that we won't customize

Each of the dependencies here provides specific functionality to optimize the development approach for these examples.
They aren't meant to spark a debate about the pro's and con's of the many available frameworks available on the internet,
they're just there to do for us what JavaScript/HTML/CSS wasn't born with.

If you want to dig into a comparison of frameworks, check out the many flavours of TodoMVC here:
https://github.com/addyosmani/todomvc

## Require.js

JavaScript can't even load more JavaScript without the help of the DOM, it's not a particularly self sufficient language.
JavaScript also can't manage dependencies very well, again, without assistance, this is all done via the order of scripta
 tags in the DOM.

Require.js is a dependency injection framework that allows developers to tell require what a particular block of code
needs to function properly and Require.js will ensure that the code is loaded before the current script is executed.

Once the application has been built, it can be optimized (there are several methods, from using Node to do it, to Maven
and Brew) into a single JavaScript file and minified, which drastically improves load time performance.

Require also supports plugins which can be really handy, text and use are included in this example, but you can find
many more out there, or you can roll your own.

Read more about Require.js at http://requirejs.org

## jQuery

jQuery is a DOM manipulation framework that also abstracts the differences between browsers and simplifies development.

Often imitated and duplicated, it's still one of the most popular frameworks on the net.

Read more about jQuery at http://jquery.com

## Underscore

Does some of the same stuff that jQuery does, and some other stuff that's OK, but not fantastic.  But it's a dependency
of Backbone, and so here it is.

Read more about underscore.js at http://underscorejs.org

## Backbone

This example uses a version of Backbone with a modified inheritance implementation.  You can read more about it here:
https://github.com/pollensoft/backbone/commit/1e22fd572859d42ceed25cefa47c40a0e02f4ec4

Some people call it an MVC framework, its really just a Model-Presenter framework with some service oriented features.
It's handy, and provides some good functionality but it's missing a proper controller.  It handles some dependency
injection by mapping views to the DOM.  There are still some more creative frameworks out there that don't have
a dependency on underscore.js.

Read more about Backbone at http://backbonejs.org

## Bootstrap

Bootstrap is a nice, tidy UI framework built by some Ex-Twitter people.  It has some neat features and pretty good
documentation, and reflows without assistance for devices and small screens.

Read more about Bootstrap at http://twitter.github.com/bootstrap/