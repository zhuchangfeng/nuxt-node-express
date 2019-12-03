<template>
  <div class="exchange">
    <span class="exchange-title">兑换码</span>
    <div class="exchange-box">
      <span class="exchange-button b-c">兑换</span>
      <div class="exchange-input">
        <input type="text" placeholder="请输入兑换码" name="exchange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.exchange {
  background-color: #fff;
  padding: 40px;
  .exchange-title {
    margin-bottom: 10px;
    font-size: 18px;
    display: inline-block;
  }
  .exchange-box {
    .exchange-input {
      margin-right: 115px;
      height: 51px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      input {
        width: 100%;
        height: 100%;
        border: 0;
        text-indent: 20px;
      }
    }
    .exchange-button {
      width: 55px;
      display: block;
      float: right;
      color: #fff;
      text-align: center;
      padding: 15px 30px;
    }
  }
}
</style>