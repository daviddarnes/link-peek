# `link-peek`

A Web Component for…

**[Demo](https://daviddarnes.github.io/link-peek/demo.html)** | **[Further reading](https://darn.es/link-peek-web-component/)**

## Examples

General usage example:

```html
<script type="module" src="link-peek.js"></script>

<template id="link-peek-template">
  <figure>
  <figcaption>
    <a data-key="data.title, link"></a>
    <p data-key="data.description"></p>
    <img data-key="data.logo.url" />
    <small data-key="data.publisher"></small>
  </figcaption>
  <img data-key="data.image.url" />
</figure>
</template>

<link-peek api="https://api.microlink.io/?url=${link}">
  <a href="https://darn.es">David Darnes</a>
</link-peek>
```

## Features

This Web Component allows you to:

- Check for…

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/link-peek): `npm install @daviddarnes/link-peek`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/link-peek/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="link-peek.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/link-peek@1.0.0/link-peek.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/link-peek@1.0.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/link-peek)
