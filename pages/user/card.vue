<template>
  <div class="user-card">
    <div class="user-card-nav">
      <span class="f-s">
        <nuxt-link to="/user">个人中心</nuxt-link>
      </span>
      <span>一</span>
      <span class="user-card-position">我的卡券</span>
    </div>
    <div class="user-card-tabbar">
      <ul>
        <li v-for="(item,index) in tabData" :key="index">
          <nuxt-link :to="{ path: '/user/card/'+item.path}">{{item.name}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="user-card-box">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { getJson } from "~/api/api";
export default {
  name: "user-card",
  data() {
    return {
      hoverIndex: null
    };
  },
  async asyncData() {
    const { data } = await getJson({
      url: "/api/orderList"
    });
    return data;
  },
  methods: {
    showExplain(index) {
      this.hoverIndex != null
        ? (this.hoverIndex = null)
        : (this.hoverIndex = index);
    }
  }
};
</script>

<style lang="less" scoped>
.user-card {
  .user-card-nav {
    font-size: 12px;
    .user-card-position {
      font-size: 14px;
      color: black;
      font-weight: 700;
    }
  }
  .user-card-tabbar {
    margin-top: 20px;
    ul {
      li {
        display: inline-block;
        margin-right: 60px;
        cursor: pointer;
        a {
          border-bottom: 4px solid transparent;
          padding-bottom: 10px;
          display: block;
          &.nuxt-link-exact-active {
            border-bottom: 4px solid #248888;
            color: #248888;
          }
        }
      }
    }
  }
  .user-card-box {
    margin-top: 20px;
  }
}
</style>