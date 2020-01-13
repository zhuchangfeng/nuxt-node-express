<template>
  <div class="jobs_pd">
    <div class="jobs_tp">
      <div class="jobs-box">
        <div class="jobs-l">
          <div class="container_2YVRu">
            <div class="job_details_3a_UI">
              <div class="heading_2Ychq">
                <div class="job_info_sCGWE">
                  <div class="job_info_time">
                    <span class="f-l">发布时间：2019-10-31</span>
                    <span class="f-r" @mouseleave="leave">
                      分享到
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      <div class="share-box">
                        <div class="share-title">扫码分享职位</div>
                        <div class="share-code">
                          <QRCode :text="url" width="160" height="180"></QRCode>
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
                  <div class="clearfix"></div>
                  <div
                    class="job_info_title"
                  >{{job.title}}</div>
                  <div class="job_info_tag">
                    <span class="job_tag_item">{{job.department.name}}</span>
                    <span class="job_tag_item">{{job.commitment}}</span>
                    <span class="job_tag_item">{{job.zhineng.name}}</span>
                  </div>
                  <div class="job_info_location">
                    <span>北京市·海淀区</span>
                    <span class="job_info_apply button_3iuEw">申请职位</span>
                  </div>
                </div>

                <div class="list_k05pg">
                  <div class="title_241qv">
                    <span>职位描述</span>
                  </div>
                  <div v-html="job.jobDescription"></div>
                </div>

                <div class="footer_2pCJe">
                  <span class="footer_2pCJe_apply button_3iuEw">申请职位</span>
                </div>
              </div>
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
import { getJobD } from "~/api/api";
export default {
  validate({ params }) {
    // 必须是number类型
    return /[\S]+/.test(params.id);
  },
  components: {
    QRCode
  },
  data() {
    return {
      isCopy: false,
      url: "https://cn.vuejs.org/v2/api/#Vue-nextTick"
    };
  },
  async asyncData({ params }) {
    const { data } = await getJobD({
      params: { id: params.id }
    });
    return { job: data.data };
  },
  methods: {
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
  }
};
</script>

<style  lang="less" scoped>
.jobs_pd {
  padding-top: 90px;
  .jobs_tp {
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
        .container_2YVRu {
          background-color: #fff;
          font-size: 14px;
          .job_details_3a_UI {
            position: relative;
            width: 100%;
            padding: 0 16px;
            padding-bottom: 83px;
            .heading_2Ychq {
              padding: 20px 20px 0 20px;
              .job_info_sCGWE {
                position: relative;
                padding-bottom: 16px;
                .job_info_time {
                  color: #89909e;
                  font-size: 12px;
                  .f-r {
                    cursor: pointer;
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
                      left: -118px;
                      line-height: initial;
                      display: none;
                      .share-title {
                        font-size: 12px;
                        color: #9a9fac;
                        padding: 15px 0;
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
                .job_info_title {
                  display: inline-block;
                  position: relative;
                  margin-top: 6px;
                  font-size: 20px;
                  line-height: 28px;
                  color: #222831;
                  margin-right: 120px;
                  .ellipsis(1);
                }
                .job_info_tag {
                  margin-top: 15px;
                  color: #89909e;
                  .job_tag_item {
                    padding: 0 10px;
                    &:first-child {
                      padding-left: 0;
                      border-right: 1px solid #dddfe3;
                    }
                  }
                }
                .job_info_location {
                  margin-top: 6px;
                  color: #575d6a;
                  overflow: hidden;
                  .job_info_apply {
                    line-height: 33px;
                    padding: 0 23px;
                    font-size: 12px;
                    float: right;
                  }
                }
              }
              .list_k05pg {
                word-break: break-word;
                font-size: 14px;
                padding-top: 5px;
                .title_241qv {
                  margin-bottom: 19px;
                  color: #222831;
                  font-size: 16px;
                  position: relative;
                  height: 24px;
                  line-height: 24px;
                  span {
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    z-index: 1;
                    padding-right: 12px;
                    background-color: #fff;
                  }
                  &::after {
                    content: "";
                    display: block;
                    height: 1px;
                    background-color: #f4f4f5;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    z-index: 0;
                  }
                }
              }
              .footer_2pCJe {
                margin-top: 20px;
                margin-bottom: 27px;
                text-align: center;
                .footer_2pCJe_apply {
                  line-height: 36px;
                  padding: 0 30px;
                  font-size: 14px;
                  text-align: center;
                }
              }
            }
            .button_3iuEw {
              text-align: center;
              color: #fff;
              cursor: pointer;
              .border-radius(2px);
              display: inline-block;
              background-color: rgb(34, 40, 49);
              transition: background-color 0.3s;
              &:hover {
                background-color: rgb(78, 86, 90);
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