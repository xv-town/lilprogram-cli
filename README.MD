install

```
npm install lilprogram-cli
```

use

#### build:

```
lil-cli build(b)
```

#### watch:

```
lil-cli watch(w)
```

#### config

conf.lil.js (default)

```js
module.exports = {
  options: {
    rawDefine: {
    }
  },
  dirs: [
    {
      src: './**/*.styl',
      dist: './'
    }
  ]
};
```