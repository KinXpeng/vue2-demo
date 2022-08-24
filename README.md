# vue2-demo

### [演示地址](https://kinxpeng.github.io/vue2-demo)

### 关于 demo 的一些例子

- 下拉分页远程搜索 `/src/components/remoteSelect.vue`，详情：[在 vue 中封装多功能 select，支持分页查询，远程搜索以及数据反显！](https://juejin.cn/post/7131988369428447269).

  - 关于后端接口

    - 目前可把 git 上的项目 clone 到本地运行查看效果，暂不支持在线预览。

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

- 封装多用查询条件组件，可根据不同的 `type` 显示不同的组件，详情：[在 vue 中封装多用查询条件组件，根据不同的 type 显示不同的组件](https://juejin.cn/post/7134991654309593101).

  - 封装项目目录：`/src/components/searchCondition.vue`

  - 使用方法：

    ```js
    // 引入组件并声明
    import SearchCondition from '@/components/searchCondition.vue';
    export default {
      components: {
        SearchCondition,
      },
    };
    ```

    ```html
    <!--  使用 -->
    <p># input输入框</p>
    <SearchCondition v-model="inputValue" type="input" />

    <p># select下拉框</p>
    <SearchCondition v-model="selectValue" type="select" :options="options" :option="{ code: 'code', name: 'name' }" />

    <p># mul_select下拉框</p>
    <SearchCondition v-model="mulSelectValue" type="mul_select" :options="options" :option="{ code: 'code', name: 'name' }" />

    <p># time时间选择</p>
    <SearchCondition v-model="timeValue" type="time" />

    <p># date日期选择</p>
    <SearchCondition v-model="dateValue" type="date" />

    <p># datetime日期时间选择</p>
    <SearchCondition v-model="dateTimeValue" type="datetime" />
    ```

  - 1

- tinymce富文本编辑器

  - 前言：`TinyEditor` 封装为单独的组件，无需过多配置，在`src/components`中可见该组件（tinyEditor.vue），组件使用示例详见 `views/modulePage/richEditor.vue`。

  - 插件安装

    ```js
    npm install tinymce@5.10.5 -S // 6以上的版本会报错
    ```

    ```js
    npm install @tinymce/tinymce-vue@3.2.8 -S  // 此版本vue2可用
    ```

  - 注意事项

    - 确保 `public`目录下有tinymce文件夹及其中的langs和skins目录，分别为语言环境和皮肤。

    - 确保在`src/components`中有该组件（tinyEditor.vue）。

  - 使用方法

    - 在需要使用的vue文件中(宽高可根据需要配置)，引入组件：

      ```js
      // 注册富文本编辑器
      import TinyEditor from '@/components/tinyEditor.vue';
      
      components:{
        TinyEditor
      }
      ```

      ```vue
      /* template中 */
      <el-button type="primary" size="mini" @click="handleClearContent">清空</el-button>
      <el-button type="primary" size="mini" @click="handleSaveContent">保存</el-button>
      <TinyEditor ref="editor" v-model="value" width="100%" height="400" @input="handleInput" />
      
      /* data中 */
      data() {
        return {
        	value: "",
        };
      },
      
      /* methods中 */
      // 输入
      handleInput(value) {
      	this.value = value;
      },
      
      // 清空
      handleClearContent() {
      	this.$refs.editor.clear("");
      },
      
      // 保存
      handleSaveContent() {
      	console.log(this.value);
      },
      ```

    - 上述中的清空和保存事件需单独配置按钮来支持。

  - 关于图片上传，目前默认为base64格式。

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
