# css only screen size tracker

Just a proof of concept of tracking the browser screen size for browsers with JavaScript disabled.

[See it in action](https://itslenny.github.io/css-size-proof-of-concept/)

## How does it work?

The js file is used to generate a css file with a media query for every possible width and height.

These files are loaded dynamically from a server. Currently they just 404 because I'm not actually tracking anything, but it'd be trivial to set up a server to log the image requests.

## Why does it matter?

Information like this can be used for tracking you online even when you are not using javascript and using VPN/Tor.