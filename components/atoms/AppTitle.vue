<template>
  <h1
    :class="classObject"
    :style="styleObject"
  >
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    isCentered: {
      type: Boolean,
      default: false
    },
    isMarker: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: "1.2rem"
    }
  },
  computed: {
    classObject() {
      return {
        "is--centered": this.isCentered,
        "is--marker": this.isMarker
      };
    },
    styleObject() {
      return {
        "font-size": this.fontSize
      };
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  padding: 0 1rem;
}

.is--centered {
  text-align: center;
}

.is--marker {
  background: linear-gradient(transparent 70%, #95efd8 70%);
  display: inline-block;
  padding: 0 1rem;
  margin-bottom: 1rem;
}
</style>

