<template>
  <div class="zhihu">
    <indexTitile></indexTitile>
    <div class="zhihu-pd">
      <div class="zhihu-index a" id="0005551">
        <div class="index-box">
          <div class="index-search">
            <div class="search-input">
              <input
                type="text"
                name="search-job"
                placeholder="输入职位关键字"
                v-model="inputValue"
                @keyup="keyupFN()"
              />
            </div>
            <span class="search-button">搜索职位</span>
          </div>
        </div>
      </div>
      <div class="zhihu-jion model-2csMz a" id="0005552">
        <div class="zhihu-module">
          <div class="title-box wrapper-vqubX">
            <div class="module-title">
              加入知乎
              <div class="module-underline"></div>
            </div>
            <div class="module-subtitle">在知乎选择一个适合的职位，发现更好的自己！</div>
          </div>
          <div class="city-box">
            <ul class="city-ul">
              <nuxt-link
                :to="'/zhihu/campus/jobs?zhineng='+item.count"
                v-for="(item,index) in cityData"
                :key="'city'+index"
              >
                <li class="city-li">
                  <div class="city-name">{{item.name}}</div>
                  <span class="jion-count">共{{item.count}}个职位</span>
                </li>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>

      <div class="zhihu-mission model-2csMz a" id="0005553">
        <div class="zhihu-module">
          <div class="title-box">
            <div class="module-title">
              关于使命
              <div class="module-underline"></div>
            </div>
            <div class="module-subtitle">认真创造价值</div>
          </div>
        </div>
        <div class="mission-box">
          <div class="item-text-js5S2">
            <p>
              <strong style="color:rgb(0, 0, 0);">我们相信：</strong>
              <span style="color:rgb(0, 0, 0);">每个人都有值得分享的知识，每个认真分享知识的人都应该被尊重。</span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style="color:rgb(0, 0, 0);">知乎，可信赖的问答社区。</span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style="color:rgb(0, 0, 0);">以让每个人高效获得可信赖的解答为使命。</span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span
                style="color:rgb(0, 0, 0);"
              >凭借认真、专业和友善的社区氛围，结构化、易获得的优质内容，基于问答的内容生产方式和独特的社区机制，吸引、聚集了各行各业中大量的亲历者、内行人、领域专家、领域爱好者，将高质量的内容透过人的节点来成规模地生产和分享。用户通过问答等交流方式建立信任和连接，打造和提升个人影响力，并发现、获得新机会。</span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span
                style="color:rgb(0, 0, 0);"
              >未来，知乎将持续打造以知识分享为核心的生态，建设可持续发展的内容和专家网络，用以帮助人们实现生活、工作、学习和创新场景中的需求，并对相关的行业有深刻的影响和积极的改变。</span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span
                style="color:rgb(0, 0, 0);"
              >截止 2018 年 3 月，知乎注册用户数已达 1.4 亿，以 18-35 岁人群为主，平均日活跃用户量超过 3400 万，人均日访问时长 1 小时，月累计页面访问量达到 230 亿，累计产生提问数 2300 万，回答数近 1 亿。</span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span
                style="color:rgb(0, 0, 0);"
              >目前，知乎为用户提供核心功能「问答」社区，此外知乎还提供短内容分享功能「想法」、付费咨询功能「值乎」、在线互动分享会「Live 小讲」 、「私家课」、「读书会」、「有声书」、「电子书」、等一系列知识产品和服务，为您带来更多专业，可信赖的知识分享，让知识分享变得有价值，让学习变得有意思。</span>
            </p>
          </div>
        </div>
      </div>

      <div class="zhihu-tour model-2csMz a" id="0005554">
        <div class="zhihu-module">
          <div class="title-box">
            <div class="module-title">
              与看山一起的日子
              <div class="module-underline"></div>
            </div>
            <div class="module-subtitle">一起哭过笑过，委屈过自豪过，所有的日子都值得纪念；无论你过去从哪来，以后要到哪去，我们的情谊一年更胜一年。</div>
          </div>
        </div>
      </div>

      <div class="zhihu-welfare model-2csMz a" id="0005555">
        <div class="zhihu-module">
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
                src="https://public-cdn.mokahr.com/7f8f7592-b3d7-48a7-817c-414802fccf51.jpg?x-oss-process=image/resize,m_lfit,h_360,w_540"
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
                src="https://public-cdn.mokahr.com/cd62b78a-f439-4173-ac60-ce623bf402ad.jpg?x-oss-process=image/resize,m_lfit,h_360,w_540"
                alt
              />
            </div>
          </div>
        </div>

        <div class="pic-item-3rhx1">
          <div class="welfare-content">
            <div class="content-l t-c">
              <img
                src="https://public-cdn.mokahr.com/caac72a5-95d3-44a8-80a7-3c4d38dd5b51.jpg?x-oss-process=image/resize,m_lfit,h_360,w_540"
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
                src="https://public-cdn.mokahr.com/0dd1a327-2648-4b2b-aceb-33f5ad5e199d.jpg?x-oss-process=image/resize,m_lfit,h_360,w_540"
                alt
              />
            </div>
          </div>
        </div>

        <div class="pic-item-3rhx1">
          <div class="welfare-content">
            <div class="content-l t-c">
              <img
                src="https://public-cdn.mokahr.com/c018a90e-885d-47c7-a1e2-532e1eac78cb.jpg?x-oss-process=image/resize,m_lfit,h_360,w_540"
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

      <div class="zhihu-city model-2csMz a" id="0005556">
        <div class="zhihu-module">
          <div class="title-box">
            <div class="module-title">
              选你喜欢的城市
              <div class="module-underline"></div>
            </div>
            <div class="module-subtitle">从北京成都上海广州到全世界……</div>
            <div class="item-text-js5S2 text-c">
              <p>
                北京市海淀区学院路甲 5 号 768 创意园
                <u>A 座</u>/
                <u>B 座</u>
              </p>
              <p>上海市徐汇区虹桥路 3 号港汇恒隆二座 1906 室</p>
              <p>广州市天河区体育东路 136 号金利来数码网络大厦</p>
              <p>成都市高新区益州大道北段 777 号中航国际交流中心 B 座 16 楼</p>
              <p>
                <br />
              </p>
              <p>&gt;&gt; 下一座城市在哪里……</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _debounce } from "~/plugins/VRFCT.js";
import { mapMutations } from "vuex";
import indexTitile from "~/components/indexTitile.vue";
export default {
  data() {
    return {
      cityData: [
        {
          name: "北京市",
          count: 55
        },
        {
          name: "上海市",
          count: 66
        },
        {
          name: "广州市",
          count: 777
        }
      ],
      inputValue: ""
    };
  },
  components: {
    indexTitile
  },
  methods: {
    ...mapMutations("zhihu", ["CHANGE_INFO"]),
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
                that.CHANGE_INFO(entry.target.id);
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
            that.CHANGE_INFO(iterator.id);
          }
        }
      }
    },
    goPosition(path) {
      if (path.query.hasOwnProperty("anchorName")) {
        const name = path.query.anchorName;
        if (/^[0-9]*$/.test(name)) {
          if (document.getElementById(name)) {
            const offsetTop = document.getElementById(name).offsetTop;
            window.scrollTo(0, offsetTop - 90);
          }
        }
      } else {
        window.scrollTo(0, 0);
      }
    },
    debounce: _debounce(function(that) {
      console.log(that.inputValue, "ddddddddd");
    }, 200),
    keyupFN() {
      this.debounce(this);
    }
  },
  watch: {
    $route(to, from) {
      this.goPosition(to);
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
    window.removeEventListener("scroll", this.IntersectionObserverFun);
  }
};
</script>

<style lang="less" scoped>
.zhihu {
  min-height: 100vh;
  .zhihu-pd {
    padding-top: 90px;
    .model-2csMz {
      padding-bottom: 80px;
      padding-top: 60px;
    }
    .wrapper-vqubX {
      margin-bottom: 40px;
      text-align: center;
    }
    .zhihu-module {
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
    .zhihu-index {
      min-width: 1200px;
      background: url(https://public-cdn.mokahr.com/dce25b19-26f8-4772-8601-64e957ed356f.jpg)
        no-repeat center center;
      pointer-events: all;
      background-size: cover;
      background-color: #fff;
      cursor: auto;
      .index-box {
        height: 444px;
        width: 80%;
        margin: 0 auto;
        max-height: 640px;
        min-height: 110px;
        position: relative;
        .index-search {
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 50%;
          top: 50%;
          line-height: 36px;
          height: 36px;
          .search-input {
            height: 100%;
            margin-right: 102px;
            position: relative;
            input {
              width: 100%;
              height: 100%;
              .input-placeholder();
              outline: none;
              border: 1px solid #dddfe3;
              border-right: none;
              box-sizing: border-box;
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
            background-color: rgb(12, 140, 246);
            color: #fff;
            text-align: center;
            width: 102px;
            font-size: 14px;
            cursor: pointer;
            transition: ease-in all 0.1s;
            &:hover {
              background-color: rgb(61, 163, 248);
            }
          }
        }
      }
    }
    .zhihu-jion {
      .city-box {
        .city-ul {
          .city-li {
            display: inline-block;
            overflow: hidden;
            margin: 12px;
            width: 220px;
            height: 160px;
            background-color: #fff;
            text-align: center;
            .city-name {
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
    }
    .zhihu-mission {
      background-color: #fff;
      .mission-box {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        color: rgba(0, 0, 0, 0.4);
      }
    }
    .zhihu-tour {
      background-color: #fff;
    }
    .zhihu-welfare {
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
    .zhihu-city {
      background-color: #fff;
      .module-subtitle {
        margin-bottom: 40px;
      }
      .text-c {
        color: rgba(0, 0, 0, 0.4);
        p {
          &:first-child {
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>