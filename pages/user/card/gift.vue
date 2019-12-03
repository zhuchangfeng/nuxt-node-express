<template>
  <table class="p-r">
    <thead>
      <tr>
        <th>类型</th>
        <th>券名称</th>
        <th>有效期</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody v-for="i in 5" :key="i">
      <tr>
        <td>礼物券</td>
        <td>
          <a href="javascript:;" class="f-b" @click="showExplain(i)">圣诞礼物买一送一哦亲来换一波还有机会获得大奖</a>
        </td>
        <td>2019/12一2020/02</td>
        <td>2</td>
        <td class="f-b">立即使用</td>
      </tr>
      <tr>
        <td colspan="5">
          <transition name="op">
            <div class="gift-box" v-show="i==hoverIndex">
              <div class="gift-box-l">
                <p class="price f-b unit">300</p>
                <p class="time f-b">2019/05一2019/06</p>
              </div>
              <div class="gift-box-r f-s">
                <p class="gift-title">圣诞礼物买一送一哦亲来换一波还有机会获得大奖</p>
                <p>使用说明:</p>
                <p>1.只能在圣诞单天是用采购设备只能在圣诞单天是用采购设备只能在圣诞单天是用采购设备只能在圣诞单天是用采购设备</p>
                <p>2.兑换时间要提前</p>
                <p>3.一人一个订单只能兑换一张</p>
                <p>4.需要实名认证</p>
                <p>5.最终解释权在XXX</p>
              </div>
            </div>
          </transition>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      hoverIndex: null
    };
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
table {
  width: 100%;
  thead {
    background-color: #248888;
    color: #fff;
    text-align: left;
    font-size: 14px;
    th {
      &:first-child {
        padding-left: 20px;
      }
      padding: 20px 20px 20px 0;
    }
  }
  tbody {
    font-size: 14px;
    &::before {
      content: "\0020";
      display: block;
      margin-top: 10px;
    }
    tr {
      background-color: #fff;
      &:first-child {
        td {
          padding: 40px 20px 40px 0;
          &:first-child {
            padding-left: 20px;
          }
          &.gift-box {
            position: absolute;
            width: 100%;
            left: 0;
          }
        }
      }
      .gift-box {
        padding: 0 40px 40px 40px;
        .gift-box-l {
          width: 160px;
          position: absolute;
          .price {
            font-size: 54px;
            margin-bottom: 20px;
            font-weight: 500;
          }
          .time {
            font-size: 14px;
          }
        }
        .gift-box-r {
          margin-left: 160px;
          padding-left: 40px;
          .gift-title {
            margin-bottom: 20px;
            color: #000;
          }
          p {
            &:not(.gift-title) {
              margin-bottom: 5px;
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>