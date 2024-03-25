a library package to convert object like nano.flag to key-val string of oneline

## File size

file | size | gzip | brotli
:---- | :---- | :---- | :----
dist/main.cjs | 1.58kb | 0.67kb | 0.56kb
dist/main.js | 1.40kb | 0.60kb | 0.50kb
dist/main.min.cjs | 1.15kb | 0.56kb | 0.48kb
dist/main.min.js | 0.98kb | 0.50kb | 0.43kb
dist/main.umd.cjs | 1.99kb | 0.80kb | 0.67kb
dist/main.umd.min.cjs | 1.19kb | 0.64kb | 0.55kb

~~note: files with 'min' label do not upload.~~

## Background

There has been such a requirement: for some reason, the application needs to move from schema A to schema B, which needs to use single-line key-value pair text as operation input, which will be converted to json configuration internally. Most of the internal code in Architecture A is a simple json configuration like nano.flag . To make it easier to reuse json configurations, you need to convert these simple json configurations into single-line key-value pairs of text.

Here, one of the core functions of extraction converts a simple json configuration to single-line key-value pair text.

## Features

-  convert object like nano.flag to key-val string of oneline

## User installing

- You can import directly via npm cdn
```html
<!-- unpkg.com/:package@:version/:file -->
<script src="https://unpkg.com/nano-kvso@1.0.0/dist/main.js"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/nano-kvso@1.0.0/dist/main.js"></script>

<!-- unpkg.zhimg.com -->
```

- You can install it via the npm library tool

```bash
yarn add nano-kvso
```

```bash
pnpm add nano-kvso
```

```ts

import {kvsoify,callPreset} from "nano-kvso"
// {a:'b',c:1} => 'a=b;c=1'
kvsoify({a:'b',c:1},'=;')

// {a:'b',c:1} => 'a=b&c=1'
kvsoify({a:'b',c:1},'=&')

// {a:'b',c:1} => 'a:b,c:1'
kvsoify({a:'b',c:1},':,')

// {a:'b',c:1} => 'a=b c=1'
kvsoify({a:'b',c:1},'= ')

let data = {a:'b',c:'d',wd:'d'}
callPreset(data,{modeStyle:'cli'}) //'-a=b -c=d --wd=d'
```


## Product Closed Loop

Small, single function, only do one thing - convert object like nano.flag to key-val string of oneline

## Product operation and maintenance

Because the function is simple, it determines its development speed, update speed, problem speed will not be slow

## Product plans

Because the function is simple, the function has been basically completed. In the later stage, small patches will be updated mainly according to the needs of binary packages or other library packages. There will be no major changes in functions. The architecture may change with the update of technology.

## License certificate

You can do anything with it, but please do not violate the laws of your area. I will not accept any responsibility for your actions.


## Concluding remarks

> I am proud to be a programmer, and although I don't leave home, I have the power to change the world (maybe a little big) at my fingertips. Even if it can't be achieved, it's a good goal to strive for. -- from lencx

It is a blank sheet of paper, you have any ideas, you can directly code out, how to compile, how to set the rules, you decide.

