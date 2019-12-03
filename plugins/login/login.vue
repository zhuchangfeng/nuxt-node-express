<template>
  <div class="login" @click.self="hide">
    <div class="login-box" v-if="type==='phone'">
      <div class="login-title">
        <span>手机号登录</span>
      </div>
      <span class="login-colse" @click="hide">×</span>
      <div class="login-phone">
        <div class="phone-label">
          <span>+86</span>
          <span class="hr"></span>
        </div>
        <input type="text" value placeholder="请输入手机号" name="phone" />
      </div>

      <div class="login-code">
        <div class="code-input">
          <input type="text" value placeholder="请输入验证码" name="code" />
        </div>
        <div class="code-button text-jsl55">
          <span>获取验证码</span>
        </div>
      </div>
      <div class="login-icon" @click="changemode">
        <img
          src="https://app.mokahr.com/images/apply_web/qrcode_login_icon.png"
          title="切换扫码登录"
          alt="切换扫码登录"
        />
      </div>
      <div class="login-button text-jsl55">登录</div>
    </div>

    <div class="login-box t-c" v-if="type==='qrcode'">
      <div class="login-title">
        <span>手机微信扫码，安全登录</span>
      </div>
      <span class="login-colse" @click="hide">×</span>
      <div class="login-icon" @click="changemode">
        <img
          src="https://app.mokahr.com/images/apply_web/phone_login_icon.png"
          title="切换手机登录"
          alt="切换手机登录"
        />
      </div>
      <div class="qrcode-box">
        <div class="qrcode-code">
          <QRCode
            :text="url"
            width="120"
            height="120"
            Level="H"
            IDName="qrcode1"
            @click="changeCode"
          ></QRCode>
        </div>
      </div>
      <div class="scan-info">
        <div class="open-phone">
          打开
          <span>手机微信</span>
        </div>
        <div>扫一扫登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "../../components/QRCode.vue";
export default {
  name: "login",
  data() {
    return {
      type: "phone", //默认是phone 属性 phone||qrcode
      url: "" //二维码地址
    };
  },
  components: {
    QRCode
  },
  methods: {
    hide() {
      this.$hideLogin();
    },
    changemode() {
      this.type = this.type === "phone" ? "qrcode" : "phone";
      if (this.type === "qrcode") {
        this.url =
          "https://app.mokahr.com/campus_apply/zhihu/3818#/?_k=" + +new Date();
      }
    },
    test(){
      console.log("object");
    },
    changeCode() {
      this.url =
        "https://app.mokahr.com/campus_apply/zhihu/3818#/?_k=" + +new Date();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  background-color: rgba(64, 68, 79, 0.35);
  z-index: 9998;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  &:after {
    display: inline-block;
    content: "";
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
  .login-box {
    width: 500px;
    background-color: #fff;
    box-shadow: 5px 10px 30px 0px rgba(0, 0, 0, 0.33);
    border-radius: 10px;
    display: inline-block;
    vertical-align: middle;
    padding: 30px;
    position: relative;
    box-sizing: border-box;
    .login-colse {
      position: absolute;
      top: -40px;
      left: 0;
      color: #fff;
      width: 20px;
      height: 20px;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
      font-family: cursive;
      font-weight: 700;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        top: 20px;
        left: 10px;
        width: 1px;
        height: 20px;
        background-color: #fff;
      }
    }
    .text-jsl55 {
      font-size: 14px;
      font-weight: 600;
      color: #292c32;
      cursor: pointer;
    }
    .login-title {
      height: 45px;
      font-size: 20px;
      font-weight: bold;
      color: #5c6170;
      position: relative;
      text-align: left;
      &::after {
        position: absolute;
        display: inline-block;
        content: "";
        width: 40px;
        height: 2px;
        background-color: #747474;
        left: 0;
        bottom: 0;
      }
    }
    .login-phone {
      margin-top: 30px;
      height: 40px;
      border: 1px solid #bcbfc8;
      border-radius: 2px;
      position: relative;
      .phone-label {
        margin-left: 12px;
        display: inline-block;
        color: #5c6170;
        position: absolute;
        left: 0;
        height: 100%;
        &:after {
          display: inline-block;
          content: "";
          width: 0;
          height: 100%;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
        .hr {
          display: inline-block;
          height: 1px;
          width: 16px;
          background: #ddd;
        }
      }
      input {
        height: 100%;
        border: 0;
        outline: none;
        padding-left: 70px;
        box-sizing: border-box;
        width: 100%;
      }
    }
    .login-code {
      height: 40px;
      margin-top: 40px;
      font-size: 0;
      .code-input {
        font-size: 14px;
        display: inline-block;
        padding: 0px;
        width: 284px;
        border: 1px solid #bcbfc8;
        padding-left: 12px;
        border-radius: 2px;
        height: 100%;
        input {
          height: 100%;
          border: 0;
          outline: none;
          width: 100%;
        }
      }
      .code-button {
        line-height: 40px;
        height: 100%;
        width: 131px;
        margin-left: 8px;
        border-radius: 2px;
        border: 1px solid #bcbfc8;
        display: inline-block;
        text-align: center;
      }
    }
    .login-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      display: inline-block;
      height: 50px;
      width: 50px;
      cursor: pointer;
    }
    .qrcode-box {
      height: 218px;
      background: url("~assets/image/bg.png") no-repeat;
      background-size: cover;
      background-position: top center;
      margin-top: 10px;
      .qrcode-code {
        display: inline-block;
        margin-top: 30px;
      }
    }
    .scan-info {
      display: inline-block;
      color: #5c6170;
      font-size: 14px;
      padding-left: 45px;
      line-height: 1.6;
      background: url("~assets/image/scan.png") no-repeat;
      background-position: left center;
      text-align: left;
      .open-phone {
        span {
          font-weight: normal;
          color: #ff8054;
        }
      }
    }
    .login-button {
      width: 100%;
      height: 40px;
      margin-top: 40px;
      line-height: 40px;
      border-radius: 2px;
      text-align: center;
      background-color: #0c8cf6;
    }
  }
}
</style>