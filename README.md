# Learning-algorithm

学习 数据结构与算法

## mocha 使用

- 在 ts 项目中引入 mocha 的过程，使用 chai 作为断言库、sinon 作为 mock 工具、nyc 生成覆盖率报告

## 安装

```shell
npm i -D @types/chai @types/mocha @types/node @types/sinon
npm i -D mocha chai cross-env nyc sinon ts-node tsconfig-paths
```

## mocha 配置

- 打开 package.json，新增 `mocha` 字段并添加新的 scripts 命令
- ts-node/register 用于执行 ts 测试代码
- tsconfig-paths/register 则用于解析 tsconfig 里配置的路径别名

```json
{
  "name": "algorithm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "cross-env TS_NODE_PROJECT='test/tsconfig.test.json' mocha test/**/**.test.ts",
    "cover": "nyc --reporter=html npm run test"
  },
  "mocha": {
    "require": [
      "ts-node/register",
      "tsconfig-paths/register"
    ],
    "ui": "bdd"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/chai": "^4.3.0",
    "@types/mocha": "^9.0.0",
    "@types/node": "^17.0.5",
    "@types/sinon": "^10.0.6",
    "chai": "^4.3.4",
    "cross-env": "^7.0.3",
    "mocha": "^9.1.3",
    "nyc": "^15.1.0",
    "sinon": "^12.0.1",
    "ts-node": "^10.4.0",
    "tsconfig-paths": "^3.12.0"
  }
}

```

## 配置测试环境 tsconfig

- 新建 test 文件夹，之后的测试用例都可以写在这里，然后新建 tsconfig.test.json 并填入如下内容

```json
{
  "extends": "../tsconfig.json",
  "ts-node": {
    "transpileOnly": true
  }
}

```

## 参考

[JavaScript版数据结构与算法1-15完整版](https://www.youtube.com/playlist?list=PLwIrqQCQ5pQmjH6YyFvH2A9FYL6bBB4Ra)
