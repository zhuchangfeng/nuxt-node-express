<template>
  <div class="campus-nav">
    <div class="campus-nav-container">
      <div class="campus-nav-logo nav-lPT">
        <nuxt-link to="/zhihu" class="campus-logo-bg" title="知乎"></nuxt-link>
      </div>
      <div class="campus-link nav-rPT">
        <ul class="link-ul">
          <li
            :class="['link-li',routeInfo==item.id?'active':'']"
            v-for="(item,index) in linkData"
            :key="index"
          >
            <nuxt-link :to="'/zhihu/campus?anchorName='+item.id">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <div class="campus-login">
          <span class="login-button" @click="login">登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:"CampusTitle",
  data() {
    return {
      linkData: [
        {
          name: "首页",
          id: "0005551"
        },
        {
          name: "About Us",
          id: "0005552"
        },
        {
          name: "职位列表",
          id: "0005553"
        },
        {
          name: "一些暖心的福利",
          id: "0005554"
        },
        {
          name: "办公环境一览",
          id: "0005555"
        },
        {
          name: "CEO 寄语",
          id: "0005556"
        }
      ]
    };
  },
  computed: {
    // 获取状态仓库的batch
    ...mapGetters("campus", {
      routeInfo: "getRouteInfo"
    })
  },
  methods: {
    login() {
      this.$showLogin();
    }
  }
};
</script>
<style lang="less" scoped>
.campus-nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 1001;
  .campus-nav-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .nav-lPT,
    .nav-rPT {
      display: inline-block;
      height: 100%;
      vertical-align: top;
    }
    .campus-nav-logo {
     margin-top: 30px;
      height: 60px;
      float: left;
      .campus-logo-bg {
        width: 200px;
        display: inline-block;
        height: 48px;
        line-height: 52px;
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-repeat: no-repeat;
        background-position: 0 center;
        color: rgba(0, 0, 0, 0.8);
        background-image: url("https://public-cdn.mokahr.com/77510d06-de95-46fd-a184-bff7fe94b50b.jpg?x-oss-process=image/resize,m_lfit,w_200,h_48");
      }
    }
    .campus-link {
      width: 1000px;
      position: relative;
      font-size: 15px;
      height: 90px;
      padding-top: 22px;
      box-sizing: border-box;
      .link-ul {
        position: relative;
        height: 68px;
        line-height: 68px;
        overflow: hidden;
        list-style-type: none;
        display: inline-block;
        .link-li {
          display: inline-block;
          margin-left: 20px;
          vertical-align: top;
          border-bottom-width: 4px;
          border-bottom-style: solid;
          height: 100%;
          text-align: center;
          border-color: transparent;
          box-sizing: border-box;
          & > a {
            color: rgba(0, 0, 0, 0.6);
            display: block;
            padding: 0 10px;
          }
          &.active {
            border-color: #0c8cf6;
            & > a {
              color: #0c8cf6;
            }
          }
        }
      }
      .campus-login {
        float: right;
        line-height: 68px;
        .login-button {
          padding: 0 17px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #fff;
          border-radius: 2px;
          cursor: pointer;
          background-color: #0c8cf6;
          display: inline-block;
          transition: ease-in all 0.2s;
          &:hover {
            background-color: #35b5ff;
          }
        }
      }
    }
  }
}
</style>