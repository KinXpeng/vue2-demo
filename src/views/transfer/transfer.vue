<template>
  <div class="box">
    <TransferBox v-model="list" :groupLength="4" />
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
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 480px;
  // height: 1000px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>


