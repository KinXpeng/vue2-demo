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
          id: 1,
          selected: false,
          name: '备选项1'
        },
        {
          id: 2,
          selected: false,
          name: '备选项2'
        },
        {
          id: 3,
          selected: false,
          name: '备选项3'
        },
        {
          id: 4,
          selected: false,
          name: '备选项4'
        },
        {
          id: 5,
          selected: false,
          name: '备选项5'
        },
        {
          id: 6,
          selected: false,
          name: '备选项6'
        },
        {
          id: 7,
          selected: false,
          name: '备选项7'
        },
        {
          id: 8,
          selected: false,
          name: '备选项8'
        },
        {
          id: 9,
          selected: false,
          name: '备选项9'
        },
        {
          id: 10,
          selected: false,
          name: '备选项10'
        },
        {
          id: 11,
          selected: false,
          name: '备选项11'
        },
        {
          id: 12,
          selected: false,
          name: '备选项12'
        },
        {
          id: 13,
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


