<template>
  <div
    class="modal-card"
    style="min-width: 40vw"
  >
    <header class="modal-card-head">
      <app-title>
        <!-- header content -->
        <slot name="header-content" />
      </app-title>
    </header>

    <section class="modal-card-body">
      <!-- body content -->
      <slot name="body-content" />
    </section>

    <footer class="modal-card-foot">
      <!-- footer content -->
      <slot name="footer-content">
        <app-button @click="onClick($event)">
          CLOSE
        </app-button>
      </slot>
    </footer>

  </div>
</template>

<script>
import AppButton from "~/components/atoms/AppButton";
import AppTitle from "~/components/atoms/AppTitle";

export default {
  components: {
    AppButton,
    AppTitle
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style>
</style>
