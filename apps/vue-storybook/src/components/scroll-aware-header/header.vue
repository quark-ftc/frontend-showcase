<script lang="ts"></script>
<script setup lang="ts">
  import { useCssModule } from 'vue';
  const styles = useCssModule();
</script>
<template>
  <header :class="styles.header">Header</header>
</template>

<style lang="css" module>
  .header {
    display: flex;
    align-items: center;

    background-color: #fff;
  }
</style>
