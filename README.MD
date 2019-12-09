install

```
npm install lilprogram-cli
```

use

build:

```
lil-cli build(b)
```

watch:

```
lil-cli watch(w)
```

conf.lil.js (default)

```js
module.exports = {
  options: {
    rawDefine: {
      blank: '#ffffff'
    }
  },
  dirs: [
    {
      src: 'example/**/*.styl',
      dist: 'example'
    }
  ]
};
```