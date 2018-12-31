<template>
  <section class="hero is-fullheight is--wrapper_main">

    <b-modal
      :active.sync="showModal"
      :can-cancel="['x']"
      has-modal-card
      class="is--wrapper_modal"
    >
      <app-modal>
        <template slot="header-content">
          It's a match!
        </template>
        <template slot="body-content">
          あけましておめでとうございます。<br>
          今年も宜しくお願い
        </template>
        <template slot="footer-content">
          <app-button
            is-inverted
            has-shadow
            @click="showModal = false"
          >
            します
          </app-button>
          <app-button
            is-inverted-green
            has-shadow
            @click="goToAvgle()"
          >
            しません
          </app-button>
        </template>
      </app-modal>
    </b-modal>

    <div class="hero-body">
      <div class="container">
        <stack-content :images="images" />
      </div>
    </div>

  </section>
</template>

<script>
import StackContent from "~/components/molecules/StackContent";
import AppModal from "~/components/atoms/AppModal";
import AppButton from "~/components/atoms/AppButton";

import { mapGetters } from "vuex";

export default {
  components: {
    StackContent,
    AppModal,
    AppButton
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      images: null,
      showModal: false
    };
  },
  computed: {
    ...mapGetters("util", ["currentCount"])
  },
  watch: {
    currentCount() {
      if (this.currentCount === 0) {
        this.showModal = false;
      } else {
        this.showModal = this.currentCount % 16 === 0 ? true : false;
      }
    }
  },
  async created() {
    const tinderImages = this.data["tinderImages"]["images"];
    const toPassArray = tinderImages.map((elm, index) => {
      return {
        html: `<img src="${elm.fields.file.url}" alt="${index}">`
      };
    });
    this.images = this.shuffleArray(toPassArray);
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
      return array;
    },
    goToAvgle() {
      location.href = "https://avgle.com/";
    }
  }
};
</script>

<style lang="scss" scoped>
.is--wrapper_main {
  background: #ff7979;
}
.is--wrapper_modal {
  z-index: 40000 !important;
}
</style>
