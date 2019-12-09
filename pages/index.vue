<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt_dome</h1>
      <h2 class="subtitle">My breathtaking Nuxt.js project</h2>
      <div class="links">
        <nuxt-link to="/zhihu">知乎</nuxt-link>
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        <nuxt-link to="/user">个人中心</nuxt-link>
      </div>
      <input type="file" name="file" multiple="multiple" value ref="upload" />
      <button @click="uploadimg">提交</button>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { getStudent, postUser, getUser, getStatic, upload } from "~/api/api";
export default {
  components: {
    Logo
  },
  methods: {
    uploadimg() {
      const files = this.$refs.upload.files[0];
      var formData = new FormData();
      formData.append("file", files);
      console.log(formData);
      upload({ data: formData }).then(r => {
        console.log(r);
      });
    }
  },
  mounted() {
    getStudent().then(r => {
      console.log(r);
    });
    postUser({
      method: "POST",
      params: {
        name: "555",
        age: "666"
      }
    }).then(r => {
      console.log(r);
    });
    getUser().then(r => {
      console.log(r);
    });
    getStatic({
      url: "/test.json"
    }).then(r => {
      console.log(r);
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
