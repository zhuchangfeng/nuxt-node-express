<template>
  <div class="campus-pd">
    <div class="campus-jobs">
      <div class="jobs-box">
        <div class="jobs-l">
          <!-- 职位筛选标题 -->
          <div class="jobs-screen">
            <div class="screen-title">
              <span class="title-text">职位筛选</span>
              <span class="jobs-share" @mouseleave="leave">
                分享到
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                <div class="share-box">
                  <div class="share-title">扫码分享职位</div>
                  <div class="share-code">
                    <QRCode :text="url" width="180" height="180"></QRCode>
                  </div>
                  <div class="share-title">或使用链接分享</div>
                  <div class="share-copy">
                    <div class="copy-input">
                      <input type="text" name="copy" disabled :value="url" ref="copy-input" />
                    </div>
                    <div :class="['copy-button',isCopy?'copy':'']" @click="copyUrl"></div>
                  </div>
                </div>
              </span>
            </div>
            <!-- 搜索框 -->
            <div class="jobs-search">
              <div class="search-input">
                <input type="text" name="search-job" placeholder="输入职位关键字" />
              </div>
              <span class="search-button">搜索职位</span>
            </div>

            <div class="jobs-selector clearfix">
              <div class="selector">
                <Select placeholder="工作地点" @click="selectValue" keys="name"></Select>
              </div>
              <div class="selector">
                <Select placeholder="职能类型"></Select>
              </div>
              <div class="selector">
                <Select placeholder="部门"></Select>
              </div>
            </div>
          </div>
          <div class="jobs-post">
            <div class="jobs-HDK55" v-for="(item,index) in jobs" :key="index">
              <a :href="'/zhihu/campus/jobs/'+item.id" class="link-11ZhH">
                <div class="title-1X3Vf">
                  {{item.title}}
                  <span class="prior-31MtI" v-if="item.prior"></span>
                </div>
                <div class="status-3wqaa">
                  <span class="status-3wqaa-js55d">{{item.department.name}}</span>
                  <span class="status-3wqaa-js55d">{{item.zhineng.name}}</span>
                </div>
                <div class="locations-1ik3c">北京市·海淀区</div>
                <div
                  class="jobs-GGG565"
                >发布时间：{{new Date(item.createdAt).toLocaleDateString().replace(/\//g,"-")}}</div>
              </a>
            </div>
          </div>
        </div>
        <div class="jobs-r">
          <div class="jobs-new">
            <div class="new-title">
              <span class="title-text">最新职位</span>
              <span class="new-more">更多</span>
            </div>
            <div class="new-box">
              <div class="job-JS545S" v-for="i in 5" :key="i">
                <a href="javascript:void">科学领域运营实习生</a>
                <span class="prior-31MtI"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "~/components/QRCode.vue";
import Select from "~/components/Select.vue";
import { postJob, postUser,getJobD } from "~/api/api";
export default {
  validate({ query }) {
    // 必须是number类型
    return /^\d+$/.test(query.zhineng);
  },
  components: {
    Select,
    QRCode
  },
  data() {
    return {
      isCopy: false,
      url: "https://cn.vuejs.org/v2/api/#Vue-nextTick"
    };
  },
  async asyncData({ query }) {
    const { data } = await postJob({
      data: {
        zhinengId: query.zhineng,
        orgId: "zhihu",
        siteId: 3818
      }
    });
    return { jobs: data.data.jobs };
  },
  methods: {
    selectValue(value) {
      console.log(value);
    },
    copyUrl() {
      // 复制文字
      const that = this;
      if (!that.isCopy) {
        that.$nextTick(() => {
          that._inputSelect(that.$refs["copy-input"].value, function(state) {
            if (state) {
              that.isCopy = true;
            }
          });
        });
      }
    },
    leave() {
      if (this.isCopy) {
        this.isCopy = false;
      }
    }
  },
  mounted() {
    getJobD({
      params:{
        id:'58befa9c-aa68-4c37-86d3-574f199c088f'
      }
    })
  },
};
</script>

<style lang="less" scoped>
.campus-pd {
  padding-top: 90px;
  .campus-jobs {
    margin-top: 30px;
    min-width: 1200px;
    overflow: hidden;
    .jobs-box {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      max-width: 1200px;
      height: 100%;
      .jobs-l {
        float: left;
        max-width: 75%;
        width: 75%;
        padding-right: 0.5rem;
        .jobs-screen {
          position: relative;
          padding: 0 30px;
          padding-bottom: 28px;
          margin-bottom: 10px;
          background-color: #fff;
          .screen-title {
            height: 56px;
            font-size: 16px;
            color: #222831;
            line-height: 56px;
            .title-text {
              float: left;
            }
            .jobs-share {
              float: right;
              z-index: 2;
              font-size: 12px;
              cursor: pointer;
              color: #9a9fac;
              position: relative;
              &:hover {
                .share-box {
                  display: block;
                  cursor: auto;
                }
              }
              .share-box {
                position: absolute;
                background-color: #fff;
                z-index: 1;
                box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
                width: 180px;
                padding: 10px;
                box-sizing: content-box;
                left: -118px;
                line-height: initial;
                display: none;
                .share-title {
                  font-size: 12px;
                  color: #9a9fac;
                  margin: 15px 0;
                }
                .share-code {
                  width: 100%;
                  height: 180px;
                  background-color: #ccc;
                }
                .share-copy {
                  height: 30px;
                  line-height: 30px;
                  position: relative;
                  box-sizing: border-box;
                  .copy-input {
                    height: 100%;
                    margin-right: 60px;
                    border: 1px solid #000;
                    border-right: 0;
                    padding: 5px;
                    input {
                      width: 100%;
                      height: 100%;
                      border: 0;
                      vertical-align: top;
                      outline: none;
                      &:disabled {
                        background-color: #fff;
                      }
                    }
                  }
                  .copy-button {
                    background-color: #000;
                    color: #fff;
                    text-align: center;
                    width: 60px;
                    position: absolute;
                    top: 0;
                    z-index: 1;
                    right: 0;
                    cursor: pointer;
                    transition: ease-in all 0.1s;
                    &:after {
                      content: "复制链接";
                      display: block;
                      width: 100%;
                      height: 100%;
                    }
                    &.copy::after {
                      transition: ease-in all 0.5s;
                      content: "已复制";
                      display: block;
                      width: 100%;
                      height: 100%;
                      color: #fff;
                      background-color: #797979;
                    }
                    &:hover {
                      background-color: rgb(78, 86, 90);
                    }
                  }
                }
              }
            }
          }
        }
        .jobs-search {
          line-height: 36px;
          height: 36px;
          position: relative;
          .search-input {
            height: 100%;
            margin-right: 102px;
            input {
              width: 100%;
              height: 100%;
              .input-placeholder();
              outline: none;
              border: 1px solid #dddfe3;
              border-right: none;
              padding: 0 14px;
              font-size: 12px;
              color: #a2a4a8;
              transition: ease-in all 0.2s;
              vertical-align: top;
              &:focus {
                border: 1px solid #9a9fac;
                border-right: none;
              }
            }
          }
          .search-button {
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgb(34, 40, 49);
            color: #fff;
            text-align: center;
            width: 102px;
            font-size: 14px;
            cursor: pointer;
            transition: ease-in all 0.1s;
            &:hover {
              background-color: rgb(78, 86, 90);
            }
          }
        }
        .jobs-selector {
          margin-top: 15px;
          .selector {
            width: 33.333%;
            float: left;
            padding: 0 6px;
            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              padding-right: 0;
            }
          }
        }
        .jobs-post {
          background-color: #fff;
          margin-bottom: 30px;
          min-height: 220px;
          .jobs-HDK55 {
            padding: 0 20px;
            &:hover {
              background-color: #f9f9fa;
            }
            .link-11ZhH {
              padding: 20px 0;
              width: 100%;
              display: inline-block;
              border-bottom: 1px solid #eee;
              position: relative;
              .title-1X3Vf {
                display: inline-block;
                max-width: 350px;
                font-size: 16px;
                line-height: 22px;
                color: #222831;
                margin-bottom: 10px;
                .prior-31MtI {
                  display: inline-block;
                  width: 16px;
                  height: 18px;
                  background-image: url("https://static.mokahr.com/images/apply_web/prior-icon.svg");
                  background-size: 100%;
                  vertical-align: middle;
                  margin-left: 10px;
                }
              }
              .status-3wqaa {
                font-size: 14px;
                line-height: 20px;
                color: #a2a4a8;
                .status-3wqaa-js55d {
                  padding-right: 12px;
                  margin-right: 12px;
                  border-right: 1px solid #f4f4f6;
                }
              }
              .locations-1ik3c {
                margin-top: 10px;
                white-space: pre;
                color: #5c6170;
                font-size: 14px;
              }
              .jobs-GGG565 {
                position: absolute;
                right: 0;
                bottom: 20px;
                color: #a2a4a8;
                font-size: 12px;
              }
            }
          }
        }
      }
      .jobs-r {
        float: right;
        width: 25%;
        max-width: 25%;
        padding-left: 0.5rem;
        .jobs-new {
          background-color: #fff;
          .new-title {
            height: 56px;
            font-size: 16px;
            color: #222831;
            line-height: 56px;
            padding: 0 20px;
            .title-text {
              float: left;
            }
            .new-more {
              float: right;
              font-size: 12px;
              cursor: pointer;
              color: #9a9fac;
            }
          }
          .new-box {
            padding-left: 20px;
            min-height: 120px;
            .job-JS545S {
              position: relative;
              padding: 16px 62px 16px 0px;
              line-height: 20px;
              font-size: 14px;
              border-bottom: 0.5px dashed #eee;
              & > a {
                color: #5c6170;
              }
              &:last-child {
                border-bottom: 0;
              }
              .prior-31MtI {
                position: absolute;
                top: 16px;
                right: 19px;
                width: 16px;
                height: 18px;
                background-image: url("https://static.mokahr.com/images/apply_web/prior-icon.svg");
                background-size: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>