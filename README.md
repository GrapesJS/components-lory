# GrapesJS Lory Slider


Slider component by using [lory](https://github.com/meandmax/lory)

[Demo](http://grapesjs.com/demo.html)


## Requirements
* GrapesJS v0.12.60 or higher


## Summary

* Plugin name: `grapesjs-lory-slider`
* Components
  * `lory-slider`
  * `lory-slides`
  * `lory-slide`
  * `lory-frame`
  * `lory-prev`
  * `lory-next`
* Blocks
  * `lory-slider`




## Options

| Option | Description | Default |
|-|-|-
| `sliderBlock` | Object to extend the default slider block, eg. `{ label: 'Slider', attributes: { ... } }` | `{}` |
| `sliderProps` | Object to extend the default slider properties, eg. `{ name: 'My Slider', draggable: false, ... }` | `{}` |
| `frameProps` | Object to extend the default slider frame properties | `{}` |
| `slidesProps` | Object to extend the default slides properties | `{}` |
| `slideProps` | Object to extend the default slide properties | `{}` |
| `prevProps` | Object to extend the default previous nav properties | `{}` |
| `nextProps` | Object to extend the default next nav properties | `{}` |
| `slideEls` | Default slides | `<div class="gjs-lory-slide"></div>...` (3 slides) |
| `prevEl` | Previous nav element string (eg. HTML string) | `<svg...` (left arrow svg icon) |
| `nextEl` | Next nav element string (eg. HTML string) | `<svg...` (right arrow svg icon) |
| `classFrame` | Class name for the slider frame | `gjs-lory-frame` |
| `classSlides` | Class name for slides container | `gjs-lory-slides` |
| `classSlide` | Class name for slide container | `gjs-lory-slide` |
| `classPrev` | Class name for slider previous control | `gjs-lory-prev` |
| `classNext` | Class name for slider next control | `gjs-lory-next` |
| `script` | Script to load dynamically in case no `lory` instance was found | `https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js` |





## Download

* CDN
  * `https://unpkg.com/grapesjs-lory-slider`
* NPM
  * `npm i grapesjs-lory-slider`
* GIT
  * `git clone https://github.com/artf/grapesjs-lory-slider.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-lory-slider.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-lory-slider'],
      pluginsOpts: {
        'grapesjs-lory-slider': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-lory-slider.git
$ cd grapesjs-lory-slider
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
