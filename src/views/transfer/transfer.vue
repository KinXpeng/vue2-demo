<template>
  <div class="box">
    <TransferBox v-model="list" :groupLength="4" :groupNames="names" />
  </div>
</template>

<script>
import TransferBox from '@/components/transferBox.vue'
export default {
  components: {
    TransferBox
  },
  data() {
    return {
      inputValue: '',
      list: [
        {
          selected: false,
          name: '备选项1'
        },
        {
          selected: false,
          name: '备选项2'
        },
        {
          selected: false,
          name: '备选项3'
        },
        {
          selected: false,
          name: '备选项4'
        },
        {
          selected: false,
          name: '备选项5'
        },
        {
          selected: false,
          name: '备选项6'
        },
        {
          selected: false,
          name: '备选项7'
        },
        {
          selected: false,
          name: '备选项8'
        },
        {
          selected: false,
          name: '备选项9'
        },
        {
          selected: false,
          name: '备选项10'
        },
        {
          selected: false,
          name: '备选项11'
        },
        {
          selected: false,
          name: '备选项12'
        },
        {
          selected: false,
          name: '备选项13'
        },
      ],
      names: ['分组1', '分组2', '分组3', '分组4']
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 580px;
  // height: 1000px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>


