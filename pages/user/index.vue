<template>
  <div class="user-center">
    <span class="user-title">用户信息</span>
    <div class="user-box clearfix">
      <div class="user-box-info">
        <div class="user-box-bg clearfix">
          <h4 class="f-s">用户信息</h4>
          <div class="user-box-list" v-for="(item,index) in userData" :key="index">
            <span>{{item.name}}</span>
            <span>{{userInfo[item.tag]}}</span>
          </div>
          <span>绑定微信号：{{userInfo.weChat}}</span>
          <span class="operation f-b" title="解除绑定">解除绑定</span>
        </div>
      </div>
      <div class="user-box-info">
        <div class="user-box-bg clearfix">
          <h4 class="f-s">您已成功将您的星梦会员绑定，你的会员：</h4>
          <div class="user-box-list" v-for="(item,index) in MemberData" :key="index">
            <span>{{item.name}}</span>
            <span class="f-b">{{MemberInfo[item.tag]}}</span>
          </div>
          <div class="clearfix"></div>
          <div class="f-b refresh" title="刷新">刷新</div>
        </div>
      </div>
      <div class="clearfix"></div>
      <span class="user-title">航行推荐</span>
      <div class="user-box clearfix">
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
      <span class="user-title">提醒信息</span>
      <div class="user-box">
        <div class="user-remind">
          <div class="user-remind-bg">
            <p class="f-s remind-title">交易信息</p>
            <p class="f-b">待支付订单</p>
          </div>
        </div>
        <div class="user-remind">
          <div class="user-remind-bg">
            <p class="f-s remind-title">消息提醒</p>
            <p class="f-b">可用优惠券</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        phone: 15816792255,
        name: "Felix",
        sex: "男",
        email: "652165177@qq.com",
        weChat: "i652165177"
      },
      MemberInfo: {
        name: "15816792255",
        grade: "钻石",
        integral: 5555
      },
      MemberData: [
        {
          name: "会员：",
          tag: "name"
        },
        {
          name: "会员等级：",
          tag: "grade"
        },
        {
          name: "会员积分：",
          tag: "integral"
        }
      ],
      userData: [
        {
          name: "手机：",
          tag: "phone"
        },
        {
          name: "姓名：",
          tag: "name"
        },
        {
          name: "性别：",
          tag: "sex"
        },
        {
          name: "邮箱：",
          tag: "email"
        }
      ],
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

<style lang="less">
.user-center {
  .user-title {
    font-size: 18px;
  }
  .user-box {
    margin-top: 10px;
    width: 100%;
    .user-box-info {
      width: 50%;
      box-sizing: border-box;
      float: left;
      margin-bottom: 40px;
      &:first-child {
        padding-right: 10px;
      }
      &:last-child {
        padding-left: 10px;
      }
      .user-box-bg {
        background-color: #fff;
        height: 100%;
        padding: 20px;
        font-size: 14px;
        h4 {
          padding-bottom: 10px;
          font-weight: inherit;
        }
        .user-box-list {
          padding-bottom: 10px;
          box-sizing: border-box;
          width: 50%;
          float: left;
        }
        .operation {
          margin-left: 10px;
          cursor: pointer;
        }
        .refresh {
          cursor: pointer;
        }
      }
    }
    .user-recommend {
      width: 25%;
      float: left;
      padding: 0 10px;
      box-sizing: border-box;
      margin-bottom: 40px;
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
    .user-remind {
      width: 50%;
      float: left;
      background-color: #fff;
      padding: 20px;
      font-size: 14px;
      box-sizing: border-box;
      .remind-title {
        margin-bottom: 10px;
      }
    }
  }
}
</style>