# vue2-demo

### 关于demo的一些例子

- 下拉分页远程搜索 `/src/components/remoteSelect.vue`，详情：[在vue中封装多功能select，支持分页查询，远程搜索以及数据反显！](https://juejin.cn/post/7131988369428447269).

  - 关于后端接口

    - 目前可把git上的项目clone到本地运行查看效果，暂不支持在线预览。

  - 接口配置

    - 下拉框使用方法参照示例，接口需支持分页查询以及模糊查询即可。

      ```js
      // 接口返回示例
      {
        code: 0,
        data: [
          {optionCode: "bj", optionName: "北京", id: 1},
          {optionCode: "sh", optionName: "上海", id: 2},
        	{optionCode: "bj", optionName: "北京", id: 1},
        	{optionCode: "sh", optionName: "上海", id: 2},
        	{optionCode: "gz", optionName: "广州", id: 3},
        	{optionCode: "hz", optionName: "杭州", id: 4},
        	{optionCode: "tj", optionName: "天津", id: 5},
        	{optionCode: "sjz", optionName: "石家庄", id: 6},
        	{optionCode: "bd", optionName: "保定", id: 7},
        	{optionCode: "qhd", optionName: "秦皇岛", id: 8},
        	{optionCode: "ts", optionName: "唐山", id: 9},
        	{optionCode: "ty", optionName: "太原市", id: 10},
      	],
        records: 169
      }
      ```

      

- ...

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
