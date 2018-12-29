<template>
  <section class="hero is-fullheight is--wrapper_main">
    <div class="hero-body">
      <div class="container">
        <stack-content :images="images" />
      </div>
    </div>
  </section>
</template>

<script>
import StackContent from "~/components/molecules/StackContent";

export default {
  components: {
    StackContent
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      images: null
    };
  },
  async created() {
    const tinderImages = this.data["tinderImages"]["images"];
    const toPassArray = tinderImages.map((elm, index) => {
      return {
        html: `<img src="${elm.fields.file.url}" alt="${index}">`
      };
    });
    this.images = this.shuffleArray(toPassArray)
    // this.images = toPassArray;
  },
  methods: {
    shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array
    }
  }
};
</script>

<style lang="scss" scoped>
.is--wrapper_main {
  background: #ff7979;
}
</style>
