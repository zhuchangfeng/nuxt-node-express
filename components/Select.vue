<template>
  <div class="Select" @click="inputFocus">
    <input type="text" :name="name" ref="input" @focus="showItem=true" @blur="inputBlur" />
    <span class="Select-placeholder" v-show="!selectValue">{{placeholder}}</span>
    <span class="Select-value">{{selectValue}}</span>
    <span  :class="['Select-arrow ',showItem?'active':'']"  title="Select-arrow">
      <i class="fa fa-chevron-down" aria-hidden="true"></i>
    </span>
    <span
      class="Select-clear"
      title="Select-clear"
      @click.stop="clearValue"
      v-show="!isEmpty(selectValue)"
    >×</span>
    <div class="Select-box" v-show="showItem">
      <div
        :class="['Select-item',selectValue==item[keys]?'hover':'']"
        v-for="(item,index) in value"
        :key="index"
        @click.stop="selectOne(index)"
      >{{item[keys]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "请选择对应的内容",
      required: false
    },
    name: {
      type: String,
      default: "Select",
      required: false
    },
    value: {
      type: Array,
      default: function() {
        return [
          {
            name: "4444"
          },
          {
            name: "55555"
          },
          {
            name: "5551111111155"
          }
        ];
      },
      required: false
    },
    keys: {
      type: String,
      default: "name",
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      selectValue: this.label ? this.label : "",
      showItem: false
    };
  },
  methods: {
    inputFocus() {
      this.$refs.input.focus();
    },
    inputBlur() {
      this.timer = setTimeout(() => {
        this.showItem = false;
      }, 180);
    },
    clearValue() {
      //清除数据
      if (!this.isEmpty(this.selectValue)) {
        this.selectValue = "";
        this.$emit("clear-change");
      }
    },
    selectOne(index) {
      // 选择某项
      const data = this.value[index];
      if (this.getType(data) == "object") {
        data.index = index;
        this.selectValue = data[this.keys];
        this.$emit("click", data);
      }
    }
  },
  watch: {
    showItem: function(news, old) {
      if (news) {
        this.$emit("show-change", news);
      } else {
        this.$emit("visible-change", news);
      }
    }
  },
  destroyed() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
};
</script>

<style lang="less" scoped>
.Select {
  height: 36px;
  line-height: 36px;
  background-color: #fff;
  border: 1px solid #bcbfc8;
  border-radius: 2px;
  color: #090a0b;
  padding: 0 12px;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  user-select: none;
  &:hover {
    border-color: #0c8cf6;
  }
  input {
    appearance: none;
    margin: 0;
    background-color: transparent;
    border: 0 none;
    box-shadow: 0 none;
    display: block;
    outline: none;
    cursor: default;
    width: 100%;
    height: inherit;
    position: absolute;
    left: 0;
    padding: 0 12px;
    z-index: 1;
  }
  .Select-placeholder {
    color: #a2a4a8;
    margin-left: -9px;
    padding: 0 12px;
    position: absolute;
    top: 0;
    z-index: 0;
  }

  .Select-value {
    margin-left: -9px;
    position: absolute;
    top: 0;
    left: 20px;
  }
  .Select-clear {
    margin-right: 5px;
    color: #a2a4a8;
    height: 100%;
    position: absolute;
    right: 30px;
    top: 0;
    z-index: 1;
    &:hover {
      color: #0c8cf6;
    }
  }
  .Select-arrow {
    cursor: default;
    transform: rotate(0deg) scale(0.6);
    color: #a2a4a8;
    position: absolute;
    top: 0;
    right: 12px;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    &.active {
      transform: rotate(180deg) scale(0.6);
    }
  }
  .Select-box {
    position: absolute;
    width: 100%;
    left: -1px;
    background-color: #fff;
    border: 1px solid #f1f1f1f1;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
    max-height: 180px;
    overflow: auto;
    border-radius: 2px;
    z-index: 1;
    top: 40px;
    .Select-item {
      padding-left: 10px;
      color: #a2a4a8;
      &:not(.hover) {
        &:hover {
          background-color: hsla(216, 3%, 65%, 0.123);
        }
      }
      &.hover {
        color: #0c8cf6;
        background-color: hsla(197, 100%, 88%, 0.671);
        &::before {
          content: "√";
          margin-right: 5px;
        }
      }
    }
  }
}
</style>