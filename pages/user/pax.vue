<template>
  <div class="user-pax">
    <span>常用乘客</span>
    <NuxtLink v-if="page > 1" :to="'?page=' + (page - 1)">&lt; Prev</NuxtLink>
    <a v-else class="disabled">&lt; Prev</a>
    <span>{{ page }}/{{ totalPages }}</span>
    <NuxtLink v-if="page < totalPages" :to="'?page=' + (page + 1)">Next &gt;</NuxtLink>
    <a v-else class="disabled">Next &gt;</a>
    <ul>
      <li v-for="user in users" :key="user.id">
        <img :src="user.avatar" class="avatar" />
        <span>{{ user.first_name }} {{ user.last_name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pax",
  // Watch for $route.query.page to call Component methods (asyncData, fetch, validate, layout, etc.)
  watchQuery: ["page"],
  // Key for <NuxtChild> (transitions)
  key: to => to.fullPath,
  //   // Called to know which transition to apply
  //   transition(to, from) {
  //     if (!from) {
  //       return "offsetY";
  //     }
  //     return +to.query.page < +from.query.page ? "offsetY" : "offsetY";
  //   },
  async asyncData({ query }) {
    const page = +query.page || 1;
    const data = await fetch(`https://reqres.in/api/users?page=${page}`).then(
      res => res.json()
    );

    return {
      page: +data.page,
      totalPages: data.total_pages,
      users: data.data
    };
  }
};
</script>

<style scoped>
a {
  display: inline-block;
  margin: 0 1em;
  color: #34495e;
  text-decoration: none;
}
a.disabled {
  color: #ccc;
}
ul {
  margin: auto;
  padding: 0;
  width: 100%;
  max-width: 400px;
  padding-top: 40px;
}
li {
  list-style-type: none;
  width: 400px;
  border: 1px #ddd solid;
  overflow: hidden;
  text-align: center;
  height: 100px;
  line-height: 100px;
}
li img {
  float: left;
  width: 100px;
  height: 100%;
}
li span {
  text-transform: uppercase;
}
</style>
