# GrapesJS Lory Slider


Slider component by using [lory](https://github.com/meandmax/lory)


## Requirements
* GrapesJS v0.12.58 or higher


## Summary

* Plugin name: `grapesjs-lory-slider`
* Components
  * `lory-slider`
* Blocks
  * `lory-slider`





## Options

| Option | Description | Default |
|-|-|-
| `option1` | Description option | `default value` |





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
