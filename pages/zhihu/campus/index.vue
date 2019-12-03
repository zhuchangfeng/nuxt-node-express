<template>
  <div class="campus_apply">
    <div class="campus_apply-index a" id="0005551">
      <div class="apply-banner"></div>
    </div>

    <!--  About Us  -->
    <div class="campus_apply-about model-2csMz a" id="0005552">
      <div class="campus_apply-module">
        <div class="title-box">
          <div class="module-title">
            About Us
            <div class="module-underline"></div>
          </div>
          <div class="module-subtitle">知乎印象</div>
        </div>
      </div>
      <div class="mission-box">
        <div class="item-text-js5S2 pic-item-3rhx1">
          <p>知乎，国内知名的综合性社区平台，以「让每个人高效获得可信赖的解答」为品牌使命和北极星。自 2010 年成立以来，知乎凭借认真、专业、友善的社区氛围，独特的产品机制，以及结构化、易获得的优质内容，聚集了中文互联网科技、商业、影视、时尚、文化等领域最具创造力的人群，已成为综合性、全品类，在诸多领域具有关键影响力的社区平台，构建起了以广告和会员为主的商业模式。</p>
          <p>
            <br />
          </p>
          <p>截至 2019 年 1 月，知乎已拥有超过 2.2 亿用户，共产出 1.3 亿个回答，人均日访问时长 62 分钟。知乎的用户结构也发生了大幅变化，大量二三线城市的用户在知乎进行讨论、分享和交流。</p>
          <p>
            <br />
          </p>
          <p>目前，知乎已经覆盖「问答」社区、全新会员服务体系「盐选会员」、机构号、热榜等一系列产品和服务，并建立了包括音频、视频在内的多元媒介形式。</p>
          <p>
            <br />
          </p>
          <p>2019 年 3 月 21 日，知乎推出全新会员服务体系「盐选会员」，标志着知乎在广告投放之外的商业模式从单一的知识付费向更多元化的会员经济迈进。「盐选会员」推出之后，知乎会员规模和付费收入总量都有快速上升。 会员业务与商业广告业务一起构成了知乎在商业上的双引擎。</p>
        </div>
      </div>
      <div class="about-video module-container-2ELoA">
        <span class="video-play"></span>
      </div>
    </div>

    <!-- 职位列表 -->
    <div class="campus_apply-job model-2csMz a" id="0005553">
      <div class="campus_apply-module">
        <div class="title-box wrapper-vqubX">
          <div class="module-title">
            职位列表
            <div class="module-underline"></div>
          </div>
          <div class="module-subtitle"></div>
        </div>
      </div>
      <div class="module-container-2ELoA">
        <div class="job-block">
          <ul class="job-ul">
            <a
              :href="'/zhihu/campus/jobs?zhineng='+item.count"
              v-for="(item,index) in cityData"
              :key="'city'+index"
            >
              <li class="job-li">
                <div class="job-name">{{item.name}}</div>
                <span class="jion-count">共{{item.count}}个职位</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>

    <!-- 一些暖心福利 -->
    <div class="campus_apply-welfare model-2csMz a" id="0005554">
      <div class="campus_apply-module">
        <div class="title-box">
          <div class="module-title">
            一些贴心的福利
            <div class="module-underline"></div>
          </div>
          <div class="module-subtitle">从工作到生活，想为你提供更多</div>
        </div>
      </div>

      <div class="pic-item-3rhx1">
        <div class="welfare-content">
          <div class="content-l t-c">
            <img
              src="https://public-cdn.mokahr.com/054ff77f-3899-414a-8f2e-07eb4f015a75.png?x-oss-process=image/resize,m_lfit,h_360,w_540"
              alt
            />
          </div>
          <div class="content-r">
            <div class="content-title">
              工作
              <div class="content-underline"></div>
            </div>
            <div class="item-text-js5S2 pre-line">
              <ul>
                <li>上班时间：10:00 ~ 18:00</li>
                <li>人体工学椅</li>
                <li>MacBook、iMac</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="pic-item-3rhx1">
        <div class="welfare-content">
          <div class="content-l">
            <div class="content-title">
              险金与健康
              <div class="content-underline"></div>
            </div>
            <div class="item-text-js5S2 pre-line">
              <ul>
                <li>五险、一金（全额）</li>
                <li>商业补充医疗：0 元起付，100% 报销</li>
                <li>子女补充医疗：0 元起付，100% 报销</li>
                <li>工作居住证 / 落户指标</li>
              </ul>
              <p>
                <br />
              </p>
              <ul>
                <li>年度体检</li>
                <li>附近健身 7× 24 小时免费</li>
                <li>指定游泳馆免费</li>
              </ul>
            </div>
          </div>
          <div class="content-r t-c">
            <img
              src="https://public-cdn.mokahr.com/f387d9ff-627c-41b8-837d-f5607bdaee9a.png?x-oss-process=image/resize,m_lfit,h_360,w_540"
              alt
            />
          </div>
        </div>
      </div>

      <div class="pic-item-3rhx1">
        <div class="welfare-content">
          <div class="content-l t-c">
            <img
              src="https://public-cdn.mokahr.com/936ce49a-bd97-4fec-8d03-19114f464666.png?x-oss-process=image/resize,m_lfit,h_360,w_540"
              alt
            />
          </div>
          <div class="content-r">
            <div class="content-title">
              假期与团建
              <div class="content-underline"></div>
            </div>
            <div class="item-text-js5S2 pre-line">
              <ul>
                <li>法定年假 + 额外奖励年假</li>
                <li>带薪病假</li>
                <li>小团队月度团建基金</li>
                <li>大部门年度团建基金</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="pic-item-3rhx1">
        <div class="welfare-content">
          <div class="content-l">
            <div class="content-title">
              就餐
              <div class="content-underline"></div>
            </div>
            <div class="item-text-js5S2 pre-line">
              <ul>
                <li>公司提供福利早饭、午饭、加班晚饭</li>
                <li>公司附近多家餐厅、饭店就餐享受折扣 8 折起</li>
              </ul>
            </div>
          </div>
          <div class="content-r t-c">
            <img
              src="https://public-cdn.mokahr.com/2361d060-1db3-4144-a50b-67a3225b65d7.png?x-oss-process=image/resize,m_lfit,h_360,w_540"
              alt
            />
          </div>
        </div>
      </div>

      <div class="pic-item-3rhx1">
        <div class="welfare-content">
          <div class="content-l t-c">
            <img
              src="https://public-cdn.mokahr.com/76a5d7ff-3c1a-4635-852e-13924e2d769a.jpg?x-oss-process=image/resize,m_lfit,h_360,w_540"
              alt
            />
          </div>
          <div class="content-r">
            <div class="content-title">
              购物
              <div class="content-underline"></div>
            </div>
            <div class="item-text-js5S2 pre-line">
              <ul>
                <li>自如租房服务费折扣</li>
                <li>全国 Apple 官方直营店产品折扣</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 办公环境一览 -->
    <div class="campus_apply-office model-2csMz a" id="0005555">
      <div class="campus_apply-module">
        <div class="title-box wrapper-vqubX">
          <div class="module-title">
            办公环境一览
            <div class="module-underline"></div>
          </div>
          <div class="module-subtitle">文艺？自由？有趣？你想要的环境，我们都尽力打造给你</div>
        </div>
        <div class="module-container-2ELoA">
          <div class="office-img" v-for="(item,index) in officeImg" :key="index">
            <img :src="item.src" width="200" height="200" alt />
          </div>
        </div>
      </div>
    </div>

    <!-- ceo -->
    <div class="campus_apply-ceo model-2csMz a" id="0005556">
      <div class="campus_apply-module">
        <div class="title-box wrapper-vqubX">
          <div class="module-title">
            CEO 寄语
            <div class="module-underline"></div>
          </div>
          <div class="module-subtitle pic-item-3rhx1">周源，致知乎团队的全体信-- 2010 年 10 月</div>
          <div class="item-text-js5S2">
            <p>
              <span
                style="color:rgb(51, 51, 51);"
              >我们相信一点，在垃圾泛滥的互联网信息海洋中，真正有价值的信息是绝对的稀缺品，知识──被系统化、组织化的高质量信息──都还存在于个体大脑中，远未得到有效的挖掘和利用。知乎提供了一个产生、分享和传播知识的工具，我们鼓励每个人都来分享知识，将每个人的知识都聚集起来，并为人人所用。</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      cityData: [
        {
          name: "技术类",
          count: 55
        },
        {
          name: "运营类",
          count: 66
        },
        {
          name: "产品类",
          count: 777
        },
        {
          name: "管理类",
          count: 8818
        },
        {
          name: "设计类",
          count: 55
        },
        {
          name: "市场类",
          count: 747
        },
        {
          name: "职能类",
          count: 772
        }
      ],
      officeImg: [
        {
          src:
            "https://public-cdn.mokahr.com/fe1fe043-7db3-4e14-b75a-0c7f73fe545b.png?x-oss-process=image/resize,m_fill,h_200,w_200"
        },
        {
          src:
            "https://public-cdn.mokahr.com/d079e2f3-f6e0-4f8b-a4eb-2262929cf90a.png?x-oss-process=image/resize,m_fill,h_200,w_200"
        },
        {
          src:
            "https://public-cdn.mokahr.com/28fcada2-0a0d-4a46-9282-96446be09bac.png?x-oss-process=image/resize,m_fill,h_200,w_200"
        },
        {
          src:
            "https://public-cdn.mokahr.com/d2d6fabc-9268-4db5-8458-0e0a7b703492.png?x-oss-process=image/resize,m_fill,h_200,w_200"
        },
        {
          src:
            "https://public-cdn.mokahr.com/5a68a5b4-459c-4ba4-830f-df7b8adbbdcc.jpeg?x-oss-process=image/resize,m_fill,h_200,w_200"
        },
        {
          src:
            "https://public-cdn.mokahr.com/05f20b41-d3a6-4eb9-b577-05637ba69b28.jpeg?x-oss-process=image/resize,m_fill,h_200,w_200"
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      this.goPosition(to);
    }
  },
  methods: {
    ...mapMutations("campus", ["CHANGE_INFO"]),
    goPosition(path) {
      if (path.query.hasOwnProperty("anchorName")) {
        const name = path.query.anchorName;
        if (/^[0-9]*$/.test(name)) {
          if (document.getElementById(name)) {
            const offsetTop = document.getElementById(name).offsetTop;
            window.scrollTo(0, offsetTop);
          }
        }
        return;
      }
      window.scrollTo(0, 0);
    },
    IntersectionObserverFun() {
      let that = this;
      if (window.IntersectionObserver) {
        var observer = new IntersectionObserver(
          function(entries) {
            entries.forEach(entry => {
              if (
                entry.target.getBoundingClientRect().top - 90 <= 0 &&
                entry.target.getBoundingClientRect().bottom - 90 >= 0
              ) {
                if (entry.target.id != that.routeInfo) {
                  that.CHANGE_INFO(entry.target.id);
                }
              }
            });
          },
          {
            threshold: [0],
            root: document.getElementsByClassName("zhihu-pd")[0]
          }
        );
        for (const iterator of document.getElementsByClassName("a")) {
          observer.observe(iterator);
        }
      } else {
        // IE下有两像素的偏差因为坐标点取点问题(2,2)
        for (const iterator of document.getElementsByClassName("a")) {
          if (
            iterator.getBoundingClientRect().top - 92 <= 0 &&
            iterator.getBoundingClientRect().bottom - 92 >= 0
          ) {
            if (iterator.id != that.routeInfo) {
              that.CHANGE_INFO(iterator.id);
            }
          }
        }
      }
    }
  },
  mounted() {
    this.goPosition(this.$route);
    this.IntersectionObserverFun();
    window.addEventListener(
      "scroll",
      this._throttle(this.IntersectionObserverFun, 180),
      true
    );
  },
  destroyed() {
    window.removeEventListener("scroll", this.IntersectionObserverFun, true);
  }
};
</script>

<style lang="less" scoped>
.campus_apply {
  margin-top: 90px;
  .model-2csMz {
    padding-bottom: 80px;
    padding-top: 60px;
  }
  .wrapper-vqubX {
    margin-bottom: 40px;
    text-align: center;
  }
  .pic-item-3rhx1 {
    margin-bottom: 60px;
  }
  .module-container-2ELoA {
    max-width: 1200px;
    margin: 0 auto;
  }
  .item-text-js5S2 {
    display: inline-block;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    &.pre-line {
      white-space: pre-line;
    }
  }
  .campus_apply-module {
    min-width: 1200px;
    overflow: hidden;
    text-align: center;
    margin-bottom: 40px;
    .title-box {
      max-width: 960px;
      display: inline-block;
      .module-title {
        position: relative;
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 45px;
        .module-underline {
          position: absolute;
          left: 50%;
          bottom: -20px;
          margin-left: -40px;
          width: 80px;
          height: 2px;
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
      .module-subtitle {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
      }
    }
  }
  .campus_apply-index {
    min-width: 1200px;
    .apply-banner {
      height: 444px;
      cursor: auto;
      pointer-events: all;
      background: #dddfe3
        url(https://public-cdn.mokahr.com/5ad1916c-e291-456f-a02d-e78ce2211810.jpg)
        no-repeat center center;
      background-size: cover;
      max-height: 640px;
      min-height: 110px;
    }
  }
  .campus_apply-about {
    .mission-box {
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      color: rgba(0, 0, 0, 0.4);
    }
    .about-video {
      width: 1200px;
      height: 460px;
      cursor: auto;
      background: #dddfe3
        url(http://puui.qpic.cn/qqvideo_ori/0/u0861apvvtf_496_280/0) no-repeat
        center center;
      background-size: cover;
      margin-bottom: 30px;
    }
  }
  .campus_apply-job {
    .job-ul {
      text-align: center;
      .job-li {
        display: inline-block;
        overflow: hidden;
        margin: 12px;
        width: 220px;
        height: 160px;
        background-color: #fff;
        text-align: center;
        .job-name {
          margin-top: 36px;
          margin-bottom: 18px;
          font-size: 20px;
          line-height: 28px;
        }
        .jion-count {
          font-size: 14px;
          line-height: 20px;
          padding: 5px 17px;
          background-color: #0c8cf6;
          color: rgba(249, 249, 250, 1);
        }
      }
    }
  }
  .campus_apply-welfare {
    background-color: #fff;
    .pic-item-3rhx1 {
      margin-bottom: 60px;
      .welfare-content {
        height: 360px;
        max-width: 1200px;
        margin: 0 auto;
        .content-title {
          position: relative;
          margin-top: 30px;
          margin-bottom: 60px;
          line-height: 33px;
          font-size: 24px;
          text-align: left;
          .content-underline {
            position: absolute;
            left: 0;
            bottom: -20px;
            height: 2px;
            width: 60px;
            background-color: rgba(0, 0, 0, 0.05);
          }
        }
        img {
          width: auto;
          height: auto;
          display: inline-block;
        }
        li {
          list-style: disc;
          color: rgba(0, 0, 0, 0.4);
        }
        p {
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        .content-l {
          width: 50%;
          float: left;
        }
        .content-r {
          width: 50%;
          float: left;
        }
      }
    }
  }
  .campus_apply-office {
    background-color: #fff;
    .office-img {
      width: 200px;
      height: 200px;
      display: inline-block;
      &:hover {
        transform: scale(1.2);
        object-fit: cover;
        box-shadow: 6px 6px 6px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .campus_apply-ceo {
    background-color: #fff;
  }
}
</style>