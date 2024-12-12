<script setup lang="ts">
  import Header from './header.vue';
  import { useCssModule, ref } from 'vue';
  const styles = useCssModule();
  console.log(styles);
  const isScrolled = ref(false);

  const handleScroll = (event: Event & { target: HTMLElement }) => {
    isScrolled.value = event.target.scrollTop > 0;
    console.log(event.target.scrollTop);
  };
</script>
<template>
  <div :class="styles.page" @scroll="handleScroll">
    <Header
      :class="[styles.header, { [styles['header-scrolled']]: isScrolled }]"
    />
    <main :class="styles.main">
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
      <div>滚动内容</div>
    </main>
  </div>
</template>

<style module>
  .page {
    /*
     * 模拟全局变量
     */
    --color-primary: #1b1b1f;
    --color-fontColor: #fff;
    --size--headerHeight: 60px;
  }

  .page {
    background-color: var(--color-primary);
    color: var(--color-fontColor);
    height: 100vh;
    overflow-y: auto;
  }

  .main {
    margin-top: var(--size--headerHeight);
  }
  .header {
    height: var(--size--headerHeight);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transition: all 0.4s ease;
  }
  .header-scrolled {
    backdrop-filter: blur(5px);
    background-color: color-mix(in srgb, var(--color-primary) 85%, black 20%);
    border-bottom: 2px solid
      color-mix(in srgb, var(--color-primary) 80%, white 20%);
  }
</style>
