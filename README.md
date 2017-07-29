# Marvel-library

The following steps to run local:

clone the repository in your pc

```
$ git clone https://github.com/Klauswk/marvellibrary.git
```

Move to folder, and install the packages

```
$ npm install
```

After the packages being install, you must configure your public and private key to access the marvel API, you may set on your global enviroment, or inside the `package.json`

For global enviroment, on linux you can use the following command,

```
export publicKey="your public key"
export privateKey="your public key"
```

Remeber, using `export` only works for the current shell, if you want to always use, prefer configuring on your `.zshrc` or `/etc/environment`.

For package.json, just add `config` object, 

```
 "scripts": {
    .....
  },
 "config": {
    "publicKey":"your public key",
    "privateKey":"your private key"
  },
  "repository": {
    .......
  }
```

To test the app, just use the default command, `npm test`, or for unit only test `npm run test:unit`, and integration test `npm run test:integration`.

APP URL : https://marvel-library.herokuapp.com

[![Build Status](https://travis-ci.org/Klauswk/marvellibrary.svg?branch=master)](https://travis-ci.org/Klauswk/marvellibrary)
