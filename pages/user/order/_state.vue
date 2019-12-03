<template>
  <div class="order-state">
    <table>
      <thead>
        <tr>
          <th>类型</th>
          <th>订单号</th>
          <th>订单内容</th>
          <th>预定日期</th>
          <th>价格</th>
          <th>状态</th>
          <th width="66">操作</th>
        </tr>
      </thead>
      <tbody v-for="i in 5" :key="i">
        <tr>
          <td>航线</td>
          <td class="f-b">66302222222</td>
          <td>
            <a href="javascript:;">新加坡一香港 香港一新加坡</a>
            <a href="javascript:;">出发时间:2019-01-04</a>
          </td>
          <td>2019-05-14</td>
          <td class="m">8,888</td>
          <td>已支付</td>
          <td>
            <a href="javascript:;" class="f-b">查看详情</a>
            <a href="javascript:;" class="f-b">更改退订</a>
            <a href="javascript:;" class="f-b">购买商品</a>
            <a href="javascript:;" class="pay b-c">立即支付</a>
            <a href="javascript:;" class="f-b">再来一单</a>
            <a href="javascript:;" class="t-c f-b p-r" @click.stop="commentFn(i)">
              <span>评论</span>
              <transition name="op">
                <div class="comment-box" v-show="i==hoverIndex" @click.stop>
                  <span class="comment-title">行程评价</span>
                  <div class="comment-score">
                    <span class="comment-span">本次行程评分</span>
                    <div class="comment-score-icon">
                      <span class="score-star"></span>
                      <span class="score-star"></span>
                      <span class="score-star"></span>
                      <span class="score-star"></span>
                      <span class="score-star"></span>
                    </div>
                  </div>
                  <div class="comment-experience">
                    <span class="comment-span">您的体会</span>
                    <textarea name="experience" id="experience"></textarea>
                  </div>
                  <div class="comment-button">
                    <span class="cancel" @click="commentFn(null)">取消</span>
                    <span class="commit b-c">确定</span>
                  </div>
                </div>
              </transition>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "order-state",
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.state) || typeof params.state == "undefined";
  },
  computed: {
    // 获取状态仓库的batch
    ...mapGetters("order", {
      hoverIndex: "getIndex"
    })
  },
  methods: {
    ...mapMutations("order", ["CHANGE_INDEX"]),
    commentFn(key) {
      this.CHANGE_INDEX(key);
    }
  }
};
</script>

<style lang="less" scoped>
@gray: #868686;
.order-state {
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
        padding: 40px 20px 40px 0;
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
        td {
          padding: 20px 20px 20px 0;
          &:first-child {
            padding-left: 20px;
          }
          & > a {
            display: block;
            margin-bottom: 10px;
            &.pay {
              color: #fff;
              padding: 4px 3px;
              border-radius: 3px;
              display: block;
              text-align: center;
            }
            .comment-box {
              text-align: left;
              position: absolute;
              top: 0;
              background-color: #fff;
              z-index: 1;
              box-sizing: border-box;
              padding: 20px;
              left: -345px;
              width: 430px;
              border-radius: 5px;
              overflow: hidden;
              padding: 20px 30px 20px 30px;
              box-shadow: 2px 2px 8px 2px rgba(7, 17, 27, 0.281);
              cursor: default;
              .comment-title {
                font-size: 18px;
                color: #000;
                display: block;
                padding: 0 0 10px 0;
                cursor: text;
              }
              .comment-score,
              .comment-experience {
                cursor: text;
                .comment-score-icon {
                  display: inline-block;
                  vertical-align: middle;
                  margin-left: 10px;
                  .score-star {
                    background-color: #ccc;
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                  }
                }
                .comment-span {
                  padding: 10px 0;
                  font-size: 14px;
                  color: @gray;
                  display: inline-block;
                }
                textarea {
                  resize: none;
                  width: 100%;
                  height: 80px;
                  margin-bottom: 10px;
                  box-sizing: border-box;
                }
              }
              .comment-button {
                text-align: right;
                & > span {
                  display: inline-block;
                  padding: 5px 20px;
                  cursor: pointer;
                  &.cancel {
                    border: 1px solid @gray;
                    color: @gray;
                    box-sizing: border-box;
                    margin-right: 10px;
                  }
                  &.commit {
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>