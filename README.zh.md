一个类库包，用于在 js 中 将类似 nano.flag 的对象转换为 单行键值对文本

## 文件大小

file | size | gzip | brotli
:---- | :---- | :---- | :----
dist/main.cjs | 1.58kb | 0.67kb | 0.56kb
dist/main.js | 1.40kb | 0.60kb | 0.50kb
dist/main.min.cjs | 1.15kb | 0.56kb | 0.48kb
dist/main.min.js | 0.98kb | 0.50kb | 0.43kb
dist/main.umd.cjs | 1.99kb | 0.80kb | 0.67kb
dist/main.umd.min.cjs | 1.19kb | 0.64kb | 0.55kb

~~备注： 带有 min 标志的文件未上传~~

## 项目背景

曾经完成过这样的一个需求：由于某些原因，应用需要从架构A转到架构B，架构B 需要使用 单行键值对文本作为操作输入，操作内部会将其转换为 json 配置 。架构A 内部代码大多数的是简单的 json 配置，类似 nano.flag 。为了更简单的复用json配置，需要将这些简单的json配置转换为 单行键值对文本。

此处，提取核心功能之一 将简单的 json 配置 转换为单行键值对文本。

## 当前功能

- 在 js 中 将类似 nano.flag 的对象转换为 单行键值对文本

## 用户安装

- 您可以通过npm cdn 直接引入
```html
<!-- unpkg.com/:package@:version/:file -->
<script src="https://unpkg.com/nano-kvso@1.0.0/dist/main.js"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/nano-kvso@1.0.0/dist/main.js"></script>

<!-- unpkg.zhimg.com -->
```

- 您可以通过类库安装工具安装
```bash
npm i nano-kvso
```

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

## 产品闭环

很小，功能单一，只做一件事—— 在 js 中 将类似 nano.flag 的对象转换为 单行键值对文本

## 产品运维

因为功能简单，决定了它的开发速度，更新速度，问题速度不会很慢

## 产品计划

因为功能单一，功能已经基本完成，后期主要根据命令包或其他类库包的需要，更新小补丁，不会有功能大改的情况出现，架构可能会随着技术的更新而有变化

## 许可证书

您可以使用它做任何事，但是请不要违发您所在地区法律。我不会为您的行为承担任何责任。

## 结束语

> 身为一名程序员我很自豪，虽然足不出户，指尖却有着可以改变世界 (可能有点大了) 自己的力量。即使不能实现，将其作为努力的目标也不错。———— 摘自 lencx

它就是一张白纸，您有什么设想，可以直接编码出来，怎么编，规则怎么定，有您决定。