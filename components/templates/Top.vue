<template>
  <div>
    <top-body :data="data" />
  </div>
</template>

<script>
import TopBody from "~/components/organisms/TopBody";
export default {
  components: {
    TopBody
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss">
</style>
