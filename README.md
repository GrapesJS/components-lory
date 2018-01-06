# GrapesJS Tiny Slider


Slider component with [tiny-slider](https://github.com/ganlanyuan/tiny-slider) as a dependency




## Summary

* Plugin name: `grapesjs-tiny-slider`
* Components
  * `new-component1`
  * `new-component2`
* Blocks
  * `new-block1`
  * `new-block1`
...





## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|





## Download

* CDN
  * `https://unpkg.com/grapesjs-tiny-slider`
* NPM
  * `npm i grapesjs-tiny-slider`
* GIT
  * `git clone https://github.com/artf/grapesjs-tiny-slider.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-tiny-slider.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-tiny-slider'],
      pluginsOpts: {
        'grapesjs-tiny-slider': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-tiny-slider.git
$ cd grapesjs-tiny-slider
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
