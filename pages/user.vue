<template>
  <div id="user">
    <div class="user-left">
      <ul>
        <li
          v-for="(item,index) in userData"
          :key="index"
          :class="[
          $route.matched[$route.matched.length==3?$route.matched.length-2:$route.matched.length-1].path==item.fullPath
          ||'/'+$route.name==item.fullPath
          ?'active':''
          ]"
        >
          <nuxt-link :to="item.fullPath">
            <img
              src="../assets/image/dream_en.svg"
              alt
              srcset
              v-if="$route.matched[$route.matched.length==3?$route.matched.length-2:$route.matched.length-1].path==item.fullPath
          ||'/'+$route.name==item.fullPath"
            />
            {{item.name}}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="user-right">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [
        {
          name: "个人中心",
          fullPath: "/user"
        },
        {
          name: "我的信息",
          fullPath: "/user/info"
        },
        {
          name: "我的订单",
          fullPath: "/user/order"
        },
        {
          name: "常见乘客",
          fullPath: "/user/pax"
        },
        {
          name: "我的卡券",
          fullPath: "/user/card"
        },
        {
          name: "重要通知",
          fullPath: "/user/notice"
        }
      ],
    };
  }
};
</script>

<style lang="less">
@left_box: 180px;
@box: 1100px;
@interval: 20px;
#user {
  width: @box;
  margin: 40px auto 0 auto;
  .user-left {
    width: @left_box;
    float: left;
    background-color: #fff;
    box-sizing: border-box;
    font-size: 12px;
    padding: 0 10px;
    ul {
      user-select: none;
      li {
        display: block;
        line-height: 45px;
        border-bottom: 1px solid #cccc;
        &:last-child {
          border-bottom: 0;
        }
        &.active a {
          color: #248888;
        }
        a {
          display: block;
          img {
            display: inline-block;
            width: 35px;
            height: 35px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .user-right {
    margin-left: @left_box + @interval;
    height: 550px;
  }
}
</style>