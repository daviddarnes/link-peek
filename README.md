# `link-peek`

A Web Component to unfurl regular links into rich previews.

**[Demo](https://daviddarnes.github.io/link-peek/demo.html)** | **[Simple demo](https://daviddarnes.github.io/link-peek/demo-simple-example.html)** | **[Further reading](https://darn.es/link-peek-web-component/)**

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

In the above example we're utilising the [microlink](https://microlink.io) API to retrieve metadata of the linked page and then using the marked up template to present that data.

_Note that there are no defaults set for the API or template being used. `link-peek` operates agnostically of these APIs for great control and independance. This also means we cannot assume a default built in template_

## Features

This Web Component allows you to:

- Use public APIs to return and present metadata on a linked web page
- Create custom templates for your 'unfurled' link previews using a `<template>` element and `data-key="name"` data attributes
- Use a custom template for specific instances using the `template` attribute
- Use any public API to populate your 'unfurled' previews

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/link-peek): `npm install @daviddarnes/link-peek`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/link-peek/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

## Templating

Templates are created using the `<template>` element with an ID of `link-peek-template`. Within the template you can use regular HTML elements and to populate them you use the `data-key` attribute to name the data point you want it to use. For example if I want to use the data point `data.description` to render a line of text I would write within my template `<p data-key="data.description"></p>`.

Here's that same example in context:

```html
<script type="module" src="link-peek.js"></script>

<template id="link-peek-template">
  <p data-key="data.description"></p>
</template>

<link-peek api="https://api.microlink.io/?url=${link}">
  <a href="https://darn.es">David Darnes</a>
</link-peek>
```

You can also use different templates on the same page by using the template attribute to target `<template>` elements with a specific `id`:

```html
<template id="custom-template">
  <a data-key="data.description, data.url"></a>
</template>

<link-peek
  api="https://api.microlink.io/?url=${link}"
  template="custom-template"
>
  <a href="https://darn.es">David Darnes</a>
</link-peek>
```

_Note that for <a> and <img> elements the value won't be applied to it's content if the string being returned starts with http and instead will be applied to the href and src attributes respectively._

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
