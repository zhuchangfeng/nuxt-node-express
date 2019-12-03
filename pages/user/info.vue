<template>
  <div class="user-info">
    <div class="user-info-nav">
      <span class="f-s">
        <nuxt-link to="/user">个人信息</nuxt-link>
      </span>
      <span>一</span>
      <span class="user-info-position">个人资料</span>
    </div>
    <span class="user-title">您的信息</span>
    <div class="user-info-box p-r">
      <div class="user-info-list" v-for="i in 9" :key="i">
        <span>手机号码:</span>
        <span>15816792255</span>
      </div>
      <span class="user-info-edit f-b" title="编辑">编辑</span>
    </div>
    <span class="user-title">我的收藏</span>
    <div class="user-info-box">
      <div class="user-recommend" v-for="(item,index) in recommendData" :key="index">
        <div class="user-recommend-bg">
          <div class="user-recommend-img"></div>
          <div class="user-recommend-detail">
            <div class="user-recommend-label">
              <span v-for="(value,key) in item.label" :key="key">
                {{value}}
                <span v-if="item.label.length>key+1">/</span>
              </span>
            </div>
            <div class="user-recommend-title">
              <span>广州塔</span>
              <span class="user-recommend-time">
                <span>6晚5夜</span>
                <span>周六·周四</span>
              </span>
            </div>
            <span class="user-recommend-price m">{{item.price}}</span>起/人
          </div>
        </div>
      </div>
    </div>
    <span class="user-title">我的评论</span>
    <span class="user-title f-r f-s">更多评论</span>
    <div class="user-info-box" v-for="i in 3" :key="i">
      <div class="user-comment">
        <div class="user-comment-img"></div>
        <div class="user-comment-box">
          <div class="user-comment-info f-l"></div>
          <div class="user-comment-info f-r"></div>
          <div class="user-comment-content">
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
            我是符合司法司法和司法是释放后杀死ishi会死hi坏死后似乎是覅后是覅后是覅后反思后
          </div>
          <div class="user-comment-info f-r"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendData: [
        {
          label: ["广州", "天河", "东圃", "前进街道", "石溪村"],
          place: "广州塔",
          time: "6晚5夜",
          week: "周六·周四",
          price: "5,500"
        },
        {
          label: ["广州", "天河", "东圃", "前进街道", "石溪村"],
          place: "广州塔",
          time: "6晚5夜",
          week: "周六·周四",
          price: "5,500"
        },
        {
          label: ["广州", "天河", "东圃", "前进街道", "石溪村"],
          place: "广州塔",
          time: "6晚5夜",
          week: "周六·周四",
          price: "5,500"
        },
        {
          label: ["广州", "天河", "东圃", "前进街道", "石溪村"],
          place: "广州塔",
          time: "6晚5夜",
          week: "周六·周四",
          price: "5,500"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.user-info {
  .user-info-nav {
    font-size: 12px;
    .user-info-position {
      font-size: 14px;
      color: black;
      font-weight: 700;
    }
  }
  .user-title {
    font-size: 18px;
    margin-top: 20px;
    display: inline-block;
  }
  .user-info-box {
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    min-height: 75px;
    .user-info-list {
      width: 50%;
      padding-bottom: 20px;
      float: left;
    }
    .user-info-edit {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
    .user-recommend {
      width: 25%;
      float: left;
      padding: 0 10px 10px 10px;
      box-sizing: border-box;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
      .user-recommend-bg {
        height: 100%;
        background-color: #fff;
        font-size: 12px;
        .user-recommend-img {
          height: 140px;
          background-color: #ccc;
        }
        .user-recommend-detail {
          padding: 10px;
          box-sizing: border-box;
          background-color: #fff;
          .user-recommend-label {
            margin-bottom: 10px;
          }
          .user-recommend-title {
            margin-bottom: 10px;
            .user-recommend-time {
              margin-left: 5px;
            }
          }
          .user-recommend-price {
            color: red;
            font-size: 18px;
            margin-right: 5px;
            font-weight: bold;
          }
        }
      }
    }
    .user-comment {
      padding: 0 10px 10px 10px;
      box-sizing: border-box;
      width: 100%;
      background-color: #fff;
      .user-comment-img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #ccc;
        position: absolute;
      }
      .user-comment-box {
        margin-left: 65px;
        .user-comment-info {
          width: 50%;
          height: 25px;
          background-color: antiquewhite;
          margin-bottom: 10px;
          &:nth-child(odd) {
            background-color: #248888;
          }
          &:last-child{
            margin-top: 10px;
            margin-bottom: 20px;
          }
        }
        .user-comment-content {
          width: 100%;
          word-break: break-all;
          font-size: 14px;
        }
      }
    }
  }
}
</style>