<template>
  <a
    :class="classObject"
    class="button is--basic"
    @click="callback($event)"
  >
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    isInverted: {
      type: Boolean,
      default: false
    },
    isInvertedGreen: {
      type: Boolean,
      default: false
    },
    isGradation: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    hasShadow: {
      type: Boolean,
      default: false
    },
    hasRadius: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isTagButton: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
    };
  },
  computed: {
    classObject() {
      return {
        "is--inverted": this.isInverted,
        "is--inverted-green": this.isInvertedGreen,
        "is--gradation": this.isGradation,
        "is--white": this.isWhite,
        "has--shadow": this.hasShadow,
        "has--radius": this.hasRadius,
        "is--tag-button": this.isTagButton,
        "is-loading": this.isLoading,
      }
    }
  },
  methods: {
    callback(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style>
a.button {
  margin: 0;
}

.is--basic {
  padding: 0 1.2rem !important;
  font-weight: bold !important;
  -webkit-transition: all 0.3s ease !important;
  -moz-transition: all 0.3s ease !important;
  -o-transition: all 0.3s ease !important;
  transition: all 0.3s ease !important;
}

.is--inverted {
  color: var(--main-color) !important;
  border-color: var(--main-color) !important;
  background-color: white !important;
}

.is--inverted:hover {
  color: #fff !important;
  background-color: var(--main-color) !important;
  border-color: var(--main-color) !important;
}

.is--inverted-green {
  background-color: var(--main-color) !important;
  color: #fff !important;
  border-color: transparent !important;
}

.is--inverted-green:hover {
  background-color: #fff !important;
  color: var(--main-color) !important;
  border-color: transparent !important;
}

.is--gradation {
  border: none !important;
  color: #fff !important;
  font-size: 0.9rem !important;
  padding: 1.5rem 4rem !important;
  background: linear-gradient(135deg, #2af598 0%, #009efd 100%) !important;
}

.is--gradation:hover {
  color: #fff !important;
  opacity: 0.6 !important;
}

.is--white {
  border-color: transparent !important;
  font-size: 0.9rem !important;
  padding: 1.5rem 4rem !important;
}
.is--white:hover {
  color: #fff !important;
  background-color: var(--main-color) !important;
  border-color: var(--main-color) !important;
}

.has--shadow {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) !important;
}

.has--radius {
  border-radius: 100px !important;
}

.is--tag-button {
  border-color: transparent !important;
  /* padding: 0.3rem 3rem !important; */
  width: 10rem;
  margin: 0.5rem 0.3rem;
}
.is--tag-button:hover {
  border-color: transparent !important;
  background-color: var(--main-color) !important;
  color: #fff !important;
}
</style>
