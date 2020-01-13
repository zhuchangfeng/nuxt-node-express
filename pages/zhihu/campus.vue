<template>
  <div class="campus">
    <NuxtChild name="indexTitile" />
    <NuxtChild name="campusTitle" />
    <div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.campus {
  min-height: 100vh;
}
</style>