<template>
  <div class="zhihu-nav">
    <div class="zhihu-nav-container">
      <div class="zhihu-nav-logo nav-lPT">
        <a class="zhihu-logo-bg" href="javascript:void" title="知乎"></a>
      </div>
      <div class="zhihu-link nav-rPT">
        <ul class="link-ul">
          <li
            :class="['link-li',routeInfo==item.id?'active':'']"
            v-for="(item,index) in linkData"
            :key="index"
          >
            <nuxt-link :to="'/zhihu?anchorName='+item.id">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <div class="zhihu-join">
          <nuxt-link to="/zhihu/campus" class="zhihu-button">校园招聘</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:"IndexTitile",
  data() {
    return {
      linkData: [
        {
          name: "首页",
          id: "0005551"
        },
        {
          name: "加入知乎",
          id: "0005552"
        },
        {
          name: "关于使命",
          id: "0005553"
        },
        {
          name: "与看山一起的日子",
          id: "0005554"
        },
        {
          name: "一些贴心的福利",
          id: "0005555"
        },
        {
          name: "选你喜欢的城市",
          id: "0005556"
        }
      ]
    };
  },
  computed: {
    // 获取状态仓库的batch
    ...mapGetters("zhihu", {
      routeInfo: "getRouteInfo"
    })
  }
};
</script>

<style lang="less" scoped>
.zhihu-nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 1001;
  .zhihu-nav-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .nav-lPT,
    .nav-rPT {
      display: inline-block;
      height: 100%;
      vertical-align: top;
    }
    .zhihu-nav-logo {
      padding-top: 30px;
      height: 60px;
      float: left;
      .zhihu-logo-bg {
        width: 200px;
        display: inline-block;
        height: 48px;
        cursor: default;
        line-height: 52px;
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-repeat: no-repeat;
        background-position: 0 center;
        color: rgba(0, 0, 0, 0.8);
        background-image: url("https://public-cdn.mokahr.com/a6c18d04-4e5c-4d0c-957a-b2daa2388e59.png?x-oss-process=image/resize,m_lfit,w_200,h_48");
      }
    }
    .zhihu-link {
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
      .zhihu-join {
        float: right;
        line-height: 68px;
        .zhihu-button {
          border: 1px solid #0c8cf6;
          color: #0c8cf6;
          padding: 0 17px;
          line-height: 30px;
          display: inline-block;
          font-size: 15px;
          &:hover {
            color: #35b5ff;
            border-color: #35b5ff;
          }
        }
      }
    }
  }
}
</style>