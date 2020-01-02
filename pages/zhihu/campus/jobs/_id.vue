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
                    <span class="f-r">
                      分享到
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="job_info_title">合同管理实习生</div>
                  <div class="job_info_tag">
                    <span class="job_tag_item">会员事业部</span>
                    <span class="job_tag_item">管理类</span>
                  </div>
                  <div class="job_info_location">
                    <span>北京市·海淀区</span>
                    <span class="job_info_apply">申请职位</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jobs-r" id="right">
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
export default {};
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
          min-height: 600px;
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
                margin-bottom: 16px;
                .job_info_time {
                  color: #89909e;
                  font-size: 12px;
                  overflow: hidden;
                }
                .job_info_title {
                  display: inline-block;
                  position: relative;
                  margin-top: 6px;
                  font-size: 20px;
                  line-height: 28px;
                  color: #222831;
                  margin-right: 120px;
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
                    color: #fff;
                    cursor: pointer;
                    text-align: center;
                    .border-radius(2px);
                    background-color: rgb(34, 40, 49);
                    float: right;
                    transition: background-color 0.3s;
                    &:hover {
                      background-color: rgb(78, 86, 90);
                    }
                  }
                }
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