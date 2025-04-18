---
layout: post
title: 'Global Symposium 2025'
image: /assets/images/global_sumposium2025.png
tags:
  - Colaboración
  - Construcción de comunidad
---

el [Global Symposium 2025](https://msuglobaldh.org) If you like it please think on supporting my job:

<a href="https://www.buymeacoffee.com/achacon" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

![imagen2]({{ '/assets/images/globalsymposium2.jpg' | relative_url }})




## Description

Wind is a clean, minimalistic Jekyll theme designed to offer a delightful blogging experience. With a focus on simplicity and aesthetics, Wind brings an elegant touch to your blog or personal website.

## Sites Using It (If you have a site using this theme please send me a PR including it here)

- <https://estabien.cl>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Responsive Design:** Wind offers a thoughtfully crafted responsive design that ensures your blog looks stunning and functions flawlessly on a variety of devices, including desktops, tablets, and smartphones. Your content remains accessible and visually appealing, no matter how your audience chooses to engage with it.

2. **Blog-Centric Focus:** Wind is tailored for bloggers, putting the spotlight on your content. Its clean and minimalistic design highlights your articles, providing readers with an uncluttered and immersive reading experience.

## Installation

To use the Wind Jekyll theme as a Ruby Gem in your Jekyll site, follow these steps:

1. **Add Wind Gem to your Gemfile:** Open your Jekyll project's `Gemfile` and add the following line to the `jekyll_plugins` group:

```ruby
gem "wind-theme"
```

1. **Use the layouts provided by the theme:** open your index.md or index.markdown page of your jekyll site and put it on the Front Matter section:

```
---
layout: home
---

```

5. **Local Development:** Run the following command to preview your Jekyll site locally:

```
bundle exec jekyll serve
```

#### Gallery Layout

This Layout needs a data file with the name `_data/gallery.yml` and the following structure:

```
photos:
  - url: path/to/your/photo.png
    description: Alt for the image
    quote: text on hover
```

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

- `disqus_comments.html` &mdash; Code to markup disqus comment box.
- `footer.html` &mdash; Defines the site's footer section.
- `head.html` &mdash; Code-block that defines the `<head></head>` in _default_ layout.
- `custom-head.html` &mdash; Placeholder to allow users to add more metadata to `<head />`.
- `header.html` &mdash; Defines the site's main header section. By default, pages with a defined `title` attribute will have links displayed here.
- `navbar.html` &mdash; Defines the site's navbar section. By default, `title` is used in the left section and main pages are displayed in the rigth section.
- `up_button.html` &mdash; Includes the code related to the up button.


e.g., to override the [`_includes/head.html`](_includes/head.html) file to specify a custom style path, create an `_includes` directory, copy `_includes/head.html` from minima gem folder to `<yoursite>/_includes` and start editing that file.

### Footer

To customize the text in the footer:

1. Declare your site language in the `_config.yml` file:

    ```yaml
    language: "your_language_code"
    ```

2. Customize the footer variables in the language data file:

        ```yml
        footer:
          title: "Mantengamosnos conectados"
          description: "Puesdes encontrarme en cualquiera de estos canales:"
          pages: "Paginas"
        ```

    Adjust the values of title, description, and pages as needed.
