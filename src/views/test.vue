<template>
  <div class="test">
    1111
    <button @click="handleEmit">触发</button>
  </div>
</template>

<script>
// import event from '../utils/bus'
export default {
  data() {
    return {}
  },
  methods: {
    handleEmit() {
      console.log(111);
    }
  },
  created() {
  },
}
</script>
<style lang="scss" scoped></style>


