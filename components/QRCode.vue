<template>
  <div :id="IDName" @click="changeCode" :ref="IDName"></div>
</template>

<script>
export default {
  name: "qrcode",
  props: {
    width: {
      type: String,
      default: "40",
      require: false
    },
    height: {
      type: String,
      default: "40",
      require: false
    },
    text: {
      type: String,
      required: true,
      validator: function(value) {
        return /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/.test(value);
      }
    },
    Level: {
      //容错级别，可设置为：(低到高)
      type: String,
      require: false,
      default: "L",
      validator: function(value) {
        const level = ["L", "M", "Q", "H"];
        return level.indexOf(value) != -1;
      }
    },
    IDName: {
      type: String,
      require: false,
      default: "qrcode" + +new Date()
    }
  },
  watch: {
    text: function(newValue, oldValue) {
      if (newValue != oldValue) {
        this.replaceCode();
      }
    }
  },
  methods: {
    qrcode() {
      const QRCode = require("qrcodejs2");
      new QRCode(this.IDName, {
        width: this.width,
        height: this.height,
        text: this.text, // 二维码地址
        colorDark: "#000",
        colorLight: "#fff",
        render: "canvas",
        correctLevel: QRCode.CorrectLevel[this.Level]
      });
    },
    changeCode() {
      //更新二维码
      this.$emit("click");
    },
    replaceCode() {
      if (this.$refs[this.IDName]) {
        this.$refs[this.IDName].innerHTML = "";
        this.qrcode();
      }
    }
  },
  mounted() {
    this.qrcode();
  }
};
</script>
<style lang="less">
  div[id*=qrcode]{
    &>img{
      display: none !important;
    }
    &>canvas{
      display: block !important;
    }
  }
</style>