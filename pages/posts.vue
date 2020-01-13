<template>
  <div id="posts">
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  layout: "campus",
  head() {
    return {
      title: "这是一个测试",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  async asyncData({ req, res }) {
    //  console.log(req);
    //  console.log(res);
  },
};
</script>
<style lang="less">
#posts {
  h1 {
    color: #00ff00;
  }
}
</style>
