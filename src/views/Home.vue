<template>
  <div class="home">
    <h3>1. 封装下拉分页远程搜索以及数据反显</h3>
    <RemoteSelect 
      :value="remoteValue"
      api="/test/select"
      optionName="optionName"
      :rows="10"
      :option="{ code: 'optionCode', name: 'optionName' }"
      @updateValue="(v) => (value = v)"
      @clear="() => (remoteValue = {})"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RemoteSelect from '@/components/remoteSelect.vue'

export default {
  name: 'Home',
  components:{
    RemoteSelect
  },
  data(){
    return {
      value:'',
      remoteValue: {
        // 配置需要反显的select
        code: "xa",
        name: "西安",
      },
    }
  },
}
</script>
