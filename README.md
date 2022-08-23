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

      

- 封装多用查询条件组件，可根据不同的 `type` 显示不同的组件，详情：[在vue中封装多用查询条件组件，根据不同的type显示不同的组件](https://juejin.cn/post/).

  - 封装项目目录：`/src/components/searchCondition.vue`

  - 使用方法：

    ```js
    // 引入组件并声明
    import SearchCondition from "@/components/searchCondition.vue";
    export default {
      components: {
        SearchCondition,
      },
    }
    ```

    ```html
    <!--  使用 --> 
    <p># input输入框</p>
    <SearchCondition v-model="inputValue" type="input" />
      
    <p># select下拉框</p>
    <SearchCondition
    v-model="selectValue"
    type="select"
    :options="options"
    :option="{ code: 'code', name: 'name' }"
    />
      
    <p># mul_select下拉框</p>
    <SearchCondition
    v-model="mulSelectValue"
    type="mul_select"
    :options="options"
    :option="{ code: 'code', name: 'name' }"
    />
      
    <p># time时间选择</p>
    <SearchCondition v-model="timeValue" type="time" />
      
    <p># date日期选择</p>
    <SearchCondition v-model="dateValue" type="date" />
      
    <p># datetime日期时间选择</p>
    <SearchCondition v-model="dateTimeValue" type="datetime" />
    ```

  - 1

- 111

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
