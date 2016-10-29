# React material icons

A collection of material design SVG icons, taken from the  [material-design-icon](https://github.com/google/material-design-icons) set.

## Usage
`npm install -s react-material-icons`

Then, in your react component:
```js
import IC_ADD_A_PHOTO_24PX from 'react-material-icons/ic_add_a_photo_24px';

render() {
    return <IC_ADD_A_PHOTO_24PX/>;
}
```

## Adding new images
Some utility functions exist to make it easier to add new SVG icons to the set.

### Add new SVGs
To add a new SVG, follow these steps:
1. Copy one or more .svg files into `utils/new-svgs`
2. Run `node utils/add-svg.js`
3. That's it! New components have been added to `src/` for each .svg file.

### Update demo page
There is also a demo page which shows all available SVG icons. When you add new SVGs you may wish to add to it, following these steps:
1. Run `node utils/update-demo.js`
2. Re-run webpack with `npm run build`
3. That's it! Two demo page files were updated, `demo.js` and `index.html`. Open `index.html` in your browser to see the new components.
