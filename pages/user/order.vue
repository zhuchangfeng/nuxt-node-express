<template>
  <div class="user-order" @click="commentFn(null)">
    <div class="user-order-nav">
      <span class="f-s">
        <nuxt-link to="/user">个人中心</nuxt-link>
      </span>
      <span>一</span>
      <span class="user-order-position">我的订单</span>
    </div>

    <div class="user-order-tabbar">
      <ul>
        <li v-for="(item,index) in tabData" :key="index">
          <nuxt-link
            :class="[($route.params.state?$route.params.state:0)==index?'active':'']"
            :to="{ path: '/user/order/'+index}"
          >{{item.name}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="user-order-box">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "user-order",
  data() {
    return {
      tabData: [
        {
          name: "全部订单"
        },
        {
          name: "未付款订单"
        },
        {
          name: "已付款订单"
        },
        {
          name: "已完成订单"
        }
      ]
    };
  },
  computed: {
    // 获取状态仓库的batch
    ...mapGetters("order", {
      hoverIndex: "getIndex"
    }),
    ...mapState({
      test: state => state.counter
    })
  },
  methods: {
    ...mapMutations("order", ["CHANGE_INDEX"]),
    ...mapActions("order", ["actionIndex"]),
    commentFn(key) {
      this.actionIndex(key);
    }
  },
};
</script>

<style lang="less">
.user-order {
  .user-order-nav {
    font-size: 12px;
    .user-order-position {
      font-size: 14px;
      color: black;
      font-weight: 700;
    }
  }
  .user-order-tabbar {
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
          &.active {
            border-bottom: 4px solid #248888;
            color: #248888;
          }
        }
      }
    }
  }
  .user-order-box {
    margin-top: 20px;
  }
}
</style>