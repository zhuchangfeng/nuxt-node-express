<template>
  <div id="error">
    <div class="error-img">
      <img src="../../assets/image/3434d3e54c955e58.png" alt />
    </div>
    <span class="error-ip">页面被小怪兽吃了</span>
    <span class="error-ip">当前IP:{{ip}}</span>
    <!-- <div class="error-box">
      <div class="error-list" v-for="(item,index) in dataList.result.data" :key="index">
        <div class="error-list-img">
          <div class="error-list-scale">
            <img :src="item.albums[0]" alt="item.title" />
          </div>
          <span>{{item.title}}</span>
          <div class="error-list-tag">
            <span v-for="(tag,key) in item['tags'].split(';')" :key="key">{{tag}}</span>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: {
        resultcode: "200",
        reason: "Success",
        result: {
          data: [
            {
              id: "14",
              title: "红烧肉",
              tags: "家常菜;老年人;咸;半小时-1小时;青少年;白领;红烧;1-2人;炒锅",
              imtro: "加了鹌鹑蛋，祝大家岁岁平“鹌”。",
              ingredients: "五花肉,250g;萝卜,100g;鹌鹑蛋,20个",
              burden: "油,适量;盐,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/0/14_359794.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_706ca81e0bbecefe.jpg",
                  step: "1.带皮五花肉 ，鹌鹑蛋，白萝卜备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_dc89a7e8f2823202.jpg",
                  step: "2.配料备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_ae5efcd7698c7a51.jpg",
                  step: "3.鹌鹑蛋煮熟后去皮，备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_6246ae9cde95a443.jpg",
                  step: "4.白萝卜洗净，切大块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_fa36e18ba88ba812.jpg",
                  step: "5.五花肉，洗净切大块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_fb6017cd9ea66698.jpg",
                  step: "6.焯水后备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_79b1cc9fb722b4dd.jpg",
                  step: "7.油锅烧热，下入肉块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_0a45336653b0eb33.jpg",
                  step: "8.煎到微黄。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_cb483431930bb8cd.jpg",
                  step: "9.加入白糖。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_93eababb3d6f328a.jpg",
                  step: "10.炒到金黄色。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_b1672001decab1dc.jpg",
                  step: "11.加入料酒和老抽，炒均匀。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_03ce88cb45776456.jpg",
                  step:
                    "12.放入干红椒，生姜， 八角， 香叶，花椒，炒出香味后，后加入适量的水。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_5e067f35b2297a47.jpg",
                  step: "13.煮十几分钟后，加入萝卜和鹌鹑蛋。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/14_7f8a56f9b8498703.jpg",
                  step:
                    "14.再煮上十几分钟，肉和萝卜软烂，大火收汁加入适量的盐即可。"
                }
              ]
            },
            {
              id: "92",
              title: "红烧肉",
              tags: "家常菜;快手菜",
              imtro:
                "红烧肉，各地各家的做法稍有不同味道即大不一样，中餐的精妙在于食材随意性而产生的变化，南方习惯用酱油(老抽)调色，而北方则偏爱炒糖色。 女人不要为了保持好身材，刻意与美味的肉类食品绝缘哦。其实，很多科学证明，适当的吃肉并不会增加额外的脂肪。 猪肉经过小火煸炒出油后，炖出来的红炒肉是肥而不腻，软烂入味，非常的好吃美味，也非常适合咱们的健康理念，即少油，又解馋，又解腻，下面，为你推荐这种红烧肉的经典做法，不用一滴油就可以做出美味健康的红烧肉。",
              ingredients: "猪后臀尖,1000g",
              burden:
                "葱段,适量;八角,2个;干辣椒,4个;香叶,4片;桂皮,1块;鲜姜,1块;干山楂片,4片;黄油,适量;老抽,适量;生抽,适量;白糖,适量;开水,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/92_512827.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_472370e29b980b31.jpg",
                  step:
                    "1.猪肉清洗干净切成方块，冷水下锅，水开后撇去上面的浮沫。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_04f90c14513aa139.jpg",
                  step: "2.焯好的肉块捞出，用温水清洗干净。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_50af1fae3911794d.jpg",
                  step:
                    "3.准备好调料：干辣椒，桂皮，香叶，八角，（大蒜也可以不放）。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_12f839ee0920c03b.jpg",
                  step:
                    "4.做锅开小火，不放油，把肉块放入反复煸炒，煸炒至肉块有点焦香，有油渗出，关火把肉块捞出。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_bfdc35cde7da929b.jpg",
                  step:
                    "5.做锅，用肉块煸出的猪油烧热，放入八角，干辣椒，桂皮，香叶煸炒出香味。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_e21dddc1ffcad36b.jpg",
                  step: "6.放入肉块煸炒1-2分钟后捞出备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_89ba401801a762fe.jpg",
                  step:
                    "7.用锅中剩下的余油放入2勺白糖（这个量可以根据自己的喜好添加，喜欢吃甜一点的就多放点糖），开小火煸炒白糖。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_33f84ea85dcd11c9.jpg",
                  step: "8.这是糖色变化的过程"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_bbf69240b5f7211d.jpg",
                  step: "9.当糖起小泡，颜色变红就可以了。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_114bbdd5ef3d1255.jpg",
                  step: "10.这时快速烹上1勺热水，加入肉块煸炒至肉块颜色变红。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_831b33673ac8c507.jpg",
                  step:
                    "11.煸炒至猪肉块上色后，加入适量生抽，老抽（不可多放，放多了颜色就发黑了），黄酒煸炒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_a377c03180cb6b26.jpg",
                  step:
                    "12.加入开水（多放点水，最好一次加足，肉炖熟了可以大火收汤，水少了，中途加水就影响肉质的口感了），再把姜块，葱段，山楂片放入。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_127b81298ad6cf93.jpg",
                  step: "13.盖上锅盖，大火烧开，小火炖煮1个小时。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_59ebcf1a60e54619.jpg",
                  step:
                    "14.炖煮了一个小时了，汤汁也差不多剩一半了，这时加入6克盐（盐可以根据自己的口味添加，在还有汤的情况下，不要尝出咸味正好，等汤汁收浓就会咸了），小火继续炖煮。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_f4cbb0c04220428e.jpg",
                  step:
                    "15.当品尝到肉质软烂，就可以大火收汁，一锅肥而不腻，肉质酥烂，诱人食欲的红烧肉就炖好了，赶快就着小酒，大快朵颐的享受吧"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_372112ff28389c98.jpg",
                  step: "16.炎热的夏季，吃一顿少油，解腻，又美味的红烧肉大餐。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/1/92_1630281ff0350105.jpg",
                  step: "17.再来一张，想吃吗，那就赶紧动手吧，呵呵。"
                }
              ]
            },
            {
              id: "143",
              title: "红烧肉",
              tags: "家常菜;炒;红烧;炒锅",
              imtro:
                "对于红烧肉，大家都不陌生，想吃却又矛盾着，其实肉类总吃固然不好，但是平时多吃些油脂少的菜，偶尔吃一次红烧肉，对于健康是没有影响滴。现在这个季节天气渐渐变冷，做出一锅红烧肉，用来炖菜，做卤肉饭，都让人很难拒绝。其实红烧肉只要糖色熬好了，把油煸炒出去之后，离成功就不远了，今天我用了红糖熬的糖色，发现做出来的颜色更漂亮，口感也很好！",
              ingredients: "带皮五花肉,400g",
              burden:
                "食用油,少量;盐,少量;味精,适量;料酒,适量;姜汁,数滴;生抽,适量;老抽,适量;红糖,1勺;肉蔻,2个;桂皮,1根;川椒,2个;香叶,3片;八角,3个",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/143_372552.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/2/143_ed285de97eaf20b7.jpg",
                  step:
                    "1.带皮五花肉洗干净放人沸水锅中汆水片刻捞出（这样便于切块）"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/2/143_624b8a73be180c44.jpg",
                  step:
                    "2.切成大小适中的块状，再次放入沸水锅中汆去血水，捞出沥干水分"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/2/143_82e48f7919d91477.jpg",
                  step: "3.锅中少油，放入红糖、生抽、老抽中火熬到糖起泡"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/2/143_3afc0ce046df186f.jpg",
                  step: "4.放入葱段，倒入姜汁和料酒煸炒出香味"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/2/143_b0c9b3709bd47298.jpg",
                  step:
                    "5.倒入五花肉翻炒均匀至每块肉都上色，继续煸炒，要让五花肉的油脂煸出，将煸出的油倒出"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/2/143_7be96162740d3818.jpg",
                  step:
                    "6.锅中填入适量清水，将调料装入调料包放入锅中，香叶、桂皮也一起放入，撒少许盐大火烧沸，转小火烧1个半小时，待肉烧透汤汁浓稠，撒入味精出锅即可"
                }
              ]
            },
            {
              id: "220",
              title: "红烧肉",
              tags: "家常菜;半小时-1小时;咸鲜;红烧;1-2人;炒锅;体力劳动者",
              imtro:
                "提起红烧肉，我们自然不能忘记那位将吃红烧肉事业推向高峰的人－－苏东坡。 　　 正是由于他的努力，红烧肉才得以从基层走向了上层，从老百姓的菜锅走上了文人墨客的餐桌。 红烧肉是热菜菜谱之一，以五花肉为制作主料，红烧肉的烹饪技巧以砂锅为主，口味属于甜味。红烧肉是一道著名的本帮菜，充分体现了本帮菜“浓油赤酱”的特点。 第一次做，感觉还好，就是不怎么好看。",
              ingredients: "红烧肉,300g",
              burden: "油盐,适量;老抽,适量;料酒,适量;白糖,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/220_839244.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/220_3d569986929bf711.jpg",
                  step:
                    "1.把准备好的肉放入沸水中稍煮片刻，（肥肉变得将近透明）捞出。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/220_c33def95ff008168.jpg",
                  step:
                    "2.起锅热油，放肉加入老抽翻炒直到每块肉都均匀的上色为止，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/220_d00b2100cdeadf8d.jpg",
                  step: "3.加热水，料酒，白糖等开中火煮，直到剩余少量汤汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/220_8a63174d6b5599d4.jpg",
                  step: "4.装盘前可以试试味，然后依照个人口味加料。"
                }
              ]
            },
            {
              id: "231",
              title: "红烧肉",
              tags: "红烧;午餐;增强抵抗力;家常菜;白领",
              imtro:
                "昨晚下了一场小雨，早上起来就感觉冷了许多。天气一冷，人的食欲就大增，就想大口吃肉，这时候就把红烧肉做起来吧！",
              ingredients: "五花肉,250g",
              burden: "生姜,适量;秘制红烧汁,20g;盐,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/231_225409.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_941767931a3a7884.jpg",
                  step: "1.准备好材料"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_d613154848dd5b64.jpg",
                  step:
                    "2.五花肉切小块，烧一锅水，水开后放入切好的五花肉和3片姜一起飞水。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_99154f2d7cf20cf1.jpg",
                  step: "3.煮至五花肉断生后，捞起待用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_22ebf25569f2c62f.jpg",
                  step: "4.锅子烧热，放少许油，并放入剩下的姜片爆香。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_1fb50017ca11938c.jpg",
                  step: "5.倒入五花肉，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_10e806511d3a3acd.jpg",
                  step: "6.烧至微黄。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_5eb47ab44ee04ce8.jpg",
                  step: "7.倒入一碗开水，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_d3e174b1385e8f57.jpg",
                  step: "8.倒入适量的红烧汁，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_400e6399f4ae5362.jpg",
                  step:
                    "9.放入一小勺盐，试一下汤汁的味道，这时候的味道应该稍微淡一点，收汁后味道会变得重一下。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_ae026dd51e6f0d5a.jpg",
                  step: "10.盖上锅盖小火焖45分钟左右，软烂即可。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/3/231_c4ecf0fe7980d2bf.jpg",
                  step: "11.大火收汁，装碟即可。"
                }
              ]
            },
            {
              id: "468",
              title: "红烧肉",
              tags: "家常菜;老年人;咸;青少年;白领;红烧;1-2人;炒锅;1小时-2小时",
              imtro:
                "一直觉得大口喝酒大块吃肉，是作为人最豪迈的事情，好久没这么畅快的吃肉了，物价高，穷啊，只好不吃了，这不要过中秋节了吗，就是旧社会，也得想办法改善一下生活，俺也拼点银子，上街买块肉，回家煮给娃吃。于是呢，便有了今天的这道红烧肉。 红烧肉应当是一道全国人民都热爱的经典菜，各家有各家演绎的方法，虽然演绎方法不同，但却有相同的结果，那就是各家幸福和快乐的味道。",
              ingredients: "五花肉,500g",
              burden:
                "葱,适量;姜,适量;食盐,适量;食用油,适量;甜面酱,适量;鲜花椒,适量;大茴,适量;草果,适量;豆蔻,适量;桂皮,适量;香叶,适量;丁香,适量;白芷,适量;香沙,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/468_696872.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_02e6163c5b914835.jpg",
                  step: "1.五花肉洗净放在锅里，加入葱姜和料酒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_d05e8cc2ed923d00.jpg",
                  step:
                    "2.放在火上，煮15-20分钟左右。中途会有浮沫飘出，可以打开锅盖去掉。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_055d17ae30395b93.jpg",
                  step: "3.煮好的肉捞出晾凉备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_b4121227327513fa.jpg",
                  step: "4.将晾凉的五花肉切成大块备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_e71b67d627e2ca11.jpg",
                  step: "5.炒锅放入食用油，加入白糖炒糖汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_fa76b5406cafc32c.jpg",
                  step: "6.糖炒化后就可以了，注意不要炒的太老，影响口感。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_18e901d6a2a678d4.jpg",
                  step: "7.下入切好的五花肉块翻炒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_10a811b8f5d36c03.jpg",
                  step:
                    "8.让五花肉均匀粘上糖汁上色。等上糖色后，可以加少许老抽翻炒，使艳色更红艳。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_4c5b00dce98fa23b.jpg",
                  step: "9.加入葱姜翻炒根据需要加入食盐。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_0a16a2eb5ce0bfd1.jpg",
                  step: "10.最后放入一些甜面酱。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_2a1fd9353acc1db9.jpg",
                  step: "11.鲜花椒洗净备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_b4616b4609b1b209.jpg",
                  step: "12.香料放入清水里洗去灰尘。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_ec513101b05a07e0.jpg",
                  step: "13.锅内加入清水，放入洗好的香料。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_50143f7a3aba6435.jpg",
                  step: "14.将炒锅内的食材，移到电压力煲中。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/5/468_146ffd1a62acad69.jpg",
                  step: "15.直接选定肉类排骨，烹饪过程结束，排气后即可食用。"
                }
              ]
            },
            {
              id: "505",
              title: "红烧肉",
              tags: "家常菜;红烧;炒锅;冬季菜谱;狂欢之宴",
              imtro:
                "很多朋友都问我你咋不发红烧肉呀，白叫了这个名字了，逗死我了，哈哈。我确实是爱吃肉，不过我很少做红烧肉，我总觉得再瘦的红烧肉炖好了也显得肥的多似的，所以我不怎么做，鉴于老有朋友问我我还是做一次吧哈哈，要不该说我不会做了。最近下雪出门不方便，于是叫我家那位给我买回来的五花肉，哎呀那叫一个肥呀，不过也别埋怨了，白听戏别嫌挤哈，要不下次还不给你买了呢，凑合用吧哈。",
              ingredients: "五花肉,1000g",
              burden:
                "葱姜片,适量;盐,适量;老抽,适量;大料,适量;小茴香,适量;红糖,适量;腐乳,适量;料酒,适量;香叶,适量;山楂干,适量;开水,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/505_678976.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_55602b6cec1d0b27.jpg",
                  step: "1.首先用喷枪给肉皮烧黑"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_61850dfdaaee31c4.jpg",
                  step:
                    "2.然后给肉泡在冷水里一会儿，再拿出来用刀给黑的东西刮掉清洗干净"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_18bb471f9a8cbd20.jpg",
                  step: "3.将五花肉切小块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_cc7f7f51fe4bbf24.jpg",
                  step:
                    "4.准备好葱姜，香叶，大料，花椒，小茴香（香料装在调料盒里面）"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_8b5148915e39c176.jpg",
                  step: "5.准备一块腐乳捣碎"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_809d98cce6ca07c5.jpg",
                  step: "6.铸铁锅烧热"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_3d632c86f285436d.jpg",
                  step:
                    "7.不放油直接将切好的肉块放进去干煸，一直到五花肉煸出油来"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_b6c8072e632c8d16.jpg",
                  step: "8.然后加入红糖继续煸炒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_d0f3800d334ce24a.jpg",
                  step: "9.烹入料酒翻炒一会儿"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_0107ec061643d970.jpg",
                  step: "10.加入老抽继续煸炒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_2250024691458e27.jpg",
                  step: "11.再加入腐乳碎"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_9643205020b55b0a.jpg",
                  step: "12.加入葱姜和调料盒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_7cf33076c79bd525.jpg",
                  step: "13.加入开水跟肉平就行了"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_d256b30f474aca4b.jpg",
                  step: "14.再加几片山楂干"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_4464e0d7969946ba.jpg",
                  step: "15.等到水开以后敞开盖子煮15分钟（可以更好的去除腥气）"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_fdcdecbf3f711955.jpg",
                  step: "16.再盖盖子炖40分左右"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_e62e5fd9e6aec294.jpg",
                  step:
                    "17.看到汤汁耗的差不多了就加入盐，再炖一会儿汤汁收的差不多就可以出锅了"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/6/505_e5d848824ea9e836.jpg",
                  step: "18.盛入碗中开吃吧"
                }
              ]
            },
            {
              id: "686",
              title: "红烧肉",
              tags: "家常菜;儿童;肉;红烧;蛋白质;贴秋膘;中秋菜",
              imtro:
                "暑假，侄女和外甥女来我家小住，特别爱吃我做的红烧肉，来的头几天，天天是红烧肉当家。这是一道人人爱吃的家常菜，中秋不妨做上一盘。",
              ingredients: "五花肉,750g",
              burden:
                "油,适量;盐,适量;糖,适量;葱花,适量;姜,适量;蒜,适量;酱油,适量;料酒,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/686_950818.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_0bc701eee16ca218.jpg",
                  step: "1.肉刮去皮上脏物，洗净"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_0b996836d8e0f57b.jpg",
                  step: "2.把肉放锅里煎一下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_2803f380eb3b3540.jpg",
                  step: "3.切块儿"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_439b2f0d83fb0e26.jpg",
                  step: "4.热，下葱姜蒜煸香"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_5e7cec4e9c7c337d.jpg",
                  step: "5.下肉翻炒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_4ad431a6f1eb2bb3.jpg",
                  step: "6.倒入料酒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/7/686_70ab44615bb3abef.jpg",
                  step:
                    "7.再倒入酱油翻炒，最后加清水，中小火慢炖，直至汤汁将干，再放入糖，放糖时胆子要大点，玩命地放，最后炖至肉烂即可"
                }
              ]
            },
            {
              id: "786",
              title: "红烧肉",
              tags: "家常菜;热菜;儿童;老年人;咸香;红烧;贴秋膘",
              imtro:
                "热爱红烧肉，怎么样，这名字好听吧。群里姐妹的名号，名人。我借来一用。这肉上桌就没有了。吃的快，好吃没法想呀！这红烧肉的颜色完全是靠糖浆来上色，而我这回算是偷懒，还好家里有做月饼剩下的糖浆，所以熬的时候，比较省事，没有的亲，也可以试试，不是很难",
              ingredients: "五花肉,400g",
              burden:
                "油,适量;盐,适量;糖浆,适量;干辣椒,4个;生抽,适量;豆瓣酱,适量;姜,适量;蒜,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/786_116640.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_da0e0beab460787d.jpg",
                  step: "1.五花肉洗净，放锅里"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_9b9e033234c211ee.jpg",
                  step: "2.加入姜片"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_003382ad30fd8fae.jpg",
                  step: "3.加入料酒，煮"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_afe1afadb2d05057.jpg",
                  step: "4.撇去浮沫"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_ebecffd909976ef1.jpg",
                  step: "5.煮15分钟"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_681259452a205577.jpg",
                  step: "6.出锅立刻放到凉水里"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_015782002c6f8c47.jpg",
                  step: "7.切成稍大麻将块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_671a20f6495b9437.jpg",
                  step:
                    "8.将糖浆倒入锅中，我这是做月饼剩下的糖浆，今天用上了。如果没有，可以用糖加入油和水熬，熬到拉丝即可"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_9fe7cd85feceac64.jpg",
                  step: "9.熬到焦糖色即可，糖色直接决定肉的颜色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_614e2fd7461d3c6b.jpg",
                  step: "10.锅中倒入油，炸肉块，至金黄色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_0c457ddd1963f1dd.jpg",
                  step: "11.出锅沥油"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_30c0e207e2d610e9.jpg",
                  step: "12.将姜，蒜，干辣椒放锅里"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_7b8ad11808840aad.jpg",
                  step: "13.将肉倒入，加入料酒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_3dbc8d1f0121ccdf.jpg",
                  step: "14.加入水和糖浆"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_5b91df6889310eb8.jpg",
                  step: "15.加入豆瓣酱"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_6b3d56efb33c1611.jpg",
                  step: "16.加入味极鲜"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_bf52af7c44d7a038.jpg",
                  step: "17.加入生抽"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_7719ea3568fc056a.jpg",
                  step: "18.加入盐"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_686f21ea67841a5a.jpg",
                  step: "19.烧开后，小火煮20分钟，煮至肉软烂即可"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/8/786_3833bf5a964608f2.jpg",
                  step: "20.大火收汤，即可"
                }
              ]
            },
            {
              id: "861",
              title: "红烧肉",
              tags: "家常菜;炖;红烧;增强抵抗力",
              imtro:
                "红烧肉好吃，不过油脂比较多，吃多对身体不好，平常做菜不喜欢太多的肉，炒菜比较清淡，吃海鲜比较多一些，偶尔吃一次红烧肉，对于健康是没有影响的，做红烧不炒糖色，不炒糖色更健康，昨天请了亲戚，这道红烧肉是最受欢迎的，都好吃不得了.肥而不腻，做了一大盘，基本消灭了，呵呵。",
              ingredients: "带皮五花肉,1000g",
              burden:
                "盐,适量;八角,2个;葱,1段;姜,3大片;生抽,2勺;老抽,1勺;糖,1勺;料酒,2勺;香叶,3片;红腐乳汁,3勺;干辣椒,1个",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/861_528873.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_db2a18eb3871ded6.jpg",
                  step: "1.准备材料"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_7db9a26e8e1af136.jpg",
                  step: "2.猪肉切3厘米见方的块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_d6464d5464ac2436.jpg",
                  step: "3.锅放肉反复煸炒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_7a55c7561b438ad6.jpg",
                  step: "4.煸炒至金黄"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_a12cbecc31b2c19e.jpg",
                  step: "5.加葱姜、大料、香叶、干辣椒煸香，加料酒煸炒均匀"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_e4c3e2bc260bf34e.jpg",
                  step: "6.加老抽、生抽煸炒均匀"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_13731b5a777e3f24.jpg",
                  step:
                    "7.加水、糖、腐乳汁大火烧开，小火炖至肉软糯，加盐调味，继续炖5分钟"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/9/861_0dd59dd8ce10093c.jpg",
                  step: "8.大火收汁即可"
                }
              ]
            },
            {
              id: "20762",
              title: "红烧肉",
              tags: "家常菜;儿童;白领;午餐",
              imtro:
                "这个菜是我家的长菜，因为我从小到大都爱吃这口，现在我的老公和女儿也爱吃。这个肉我爸煮的是最好吃的，我深的及真传，做的也很不错哦。",
              ingredients: "红烧肉,1000g",
              burden:
                "油,适量;盐,适量;白砂糖,适量;料酒,适量;老抽,适量;味极鲜,适量;姜,适量;八角,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/21/20762_711058.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20762_31505bd62908b868.jpg",
                  step: "1.买来胖瘦相宜的五花肉。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20762_7f8d384c51ba7df9.jpg",
                  step: "2.切成块后，在热水中焯一下，在洗干净肉。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20762_e6d1b33ef29da7cd.jpg",
                  step:
                    "3.锅中放入大量的水，适量的盐、味极鲜、八角、料酒、糖、姜片，大火煮开后，该小火焖40分钟。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20762_732df791d6a25a85.jpg",
                  step: "4.收汁即可。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20762_cf9eb34c1ebd0bc5.jpg",
                  step: "5.很美味的哦。"
                }
              ]
            },
            {
              id: "20800",
              title: "红烧肉",
              tags: "下饭菜;午餐;家常菜;炖;白领",
              imtro:
                "红烧肉是热菜菜谱之一，以五花肉为制作主料，红烧肉的烹饪技巧以砂锅为主，口味属于甜味。红烧肉是一道著名的本帮菜，充分体现了本帮菜“浓油赤酱”的特点。 红红亮亮的红烧肉，过年，过节的时候这道菜是肯定少不了的，而且非常的受欢迎。",
              ingredients: "五花肉,400g",
              burden: "红烧肉调料,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/21/20800_369469.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_00f98ea621766a28.jpg",
                  step: "1.原料备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_305e706ea0761195.jpg",
                  step: "2.五花肉切大块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_aa054fbefe05c836.jpg",
                  step: "3.味好美红烧肉调料加入适量的水搅拌均匀。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_65eba6fc784e4dee.jpg",
                  step: "4.五花肉焯水后备用。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_d91cb28604bbd3fb.jpg",
                  step: "5.油锅烧热，下入五花肉块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_ac4966a56c422046.jpg",
                  step: "6.煎到表面微黄。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_62289707e581a91c.jpg",
                  step: "7.倒入搅拌均匀的料汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/208/20800_6e77b8eba022256d.jpg",
                  step: "8.小火慢炖至肉软烂，然后大火收汁。"
                }
              ]
            },
            {
              id: "20954",
              title: "红烧肉",
              tags: "家常菜;下饭菜;午餐;白领;红烧",
              imtro:
                "红烧肉是我老公的最爱，它的烧法有很多种，但是上海的红烧肉做法很简单，属于家常菜的一种吧。好吃油而不腻。吃了忍不住还想吃，那个香啊！",
              ingredients: "五花肉,500g",
              burden: "油,适量;盐,适量;姜,1片;老抽,适量;冰糖,5块",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/21/20954_230776.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_3d7f690895259c54.jpg",
                  step: "1.肉切块，水里面炒一下。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_5028015e90ad9a5b.jpg",
                  step: "2.锅里放油，姜一片"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_9736b04498e6bfcb.jpg",
                  step: "3.把肉放进去，煸炒下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_4f925c9f8c2b7293.jpg",
                  step: "4.倒入少许黄酒，再煸炒下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_ccb36ab1cf6d5cd5.jpg",
                  step: "5.倒入老抽，煸炒下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_5b596a32d8e828a6.jpg",
                  step: "6.加入3-5个冰糖，根据个人口味来，煸炒下，等冰糖化掉"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_74f2969031f734cc.jpg",
                  step: "7.加入开水，煸炒下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_5bfe80b470cf4fef.jpg",
                  step: "8.盖上锅盖煮10分钟"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/210/20954_5e9bd249ffd4e3c4.jpg",
                  step: "9.出锅，加入葱"
                }
              ]
            },
            {
              id: "23052",
              title: "红烧肉",
              tags: "下饭菜;咸香;夜宵;晚餐;聚会",
              imtro:
                "红烧肉是一道传统的中式菜肴，深受大家喜爱。大多数人都很喜欢的啦，很容易做的哦~！喜欢吃的朋友们不要错过了哦，快点来瞧瞧吧！",
              ingredients: "五花肉,250g",
              burden:
                "油,适量;盐,适量;葱,适量;姜,适量;花椒,适量;八角,适量;冰糖,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/24/23052_831303.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_8a595b63bd12e602.jpg",
                  step: "1.把五花肉洗干净切成块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_e2c6ba9425046eb4.jpg",
                  step: "2.大葱切段，姜切片，准备八角，花椒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_1f228386655bd219.jpg",
                  step:
                    "3.适量油锅，油热到冒烟，放入准备好的大葱段，姜，八角和花椒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_b09cca783a140cd5.jpg",
                  step: "4.放入五花肉翻炒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_9b7f1bee476bf110.jpg",
                  step: "5.变颜色出锅。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_c186c3a07ce2352e.jpg",
                  step:
                    "6.锅洗干净，放入适量的油，不要太少，要炒冰糖，一直小火，放入冰糖，不断地搅拌至融化。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_b4ab75e3a0a7f2e1.jpg",
                  step:
                    "7.翻炒到冰糖化出小泡泡，如果不会看就在糖化了时就把肉倒进去，不要把糖超过头了，那样会苦。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_e0517a0e196fae33.jpg",
                  step:
                    "8.翻炒至肉变色，放入生抽，料酒，老抽，比例是3:1:3翻炒均匀。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_4976ec69252dc5bc.jpg",
                  step: "9.从炒糖开始保持小火，倒入没过肉的开水。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_5be6a4c6c4a45095.jpg",
                  step:
                    "10.开大火，会飘上来血末，用铲子撇净，继续小火。慢炖一个小时，期间看一看，水少了就继续加，要加开水。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_d64630897be8cc96.jpg",
                  step: "11.慢炖一小时后尝一下汤汁的味道，如果淡就少加一点盐。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_bcbcc141af23a47e.jpg",
                  step: "12.在小火炖半小时，然后大火收汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/231/23052_239fbf002c827c81.jpg",
                  step: "13.出锅，撒上香葱末就好啦。"
                }
              ]
            },
            {
              id: "24193",
              title: "红烧肉",
              tags: "家常菜;老年人;咸;半小时-1小时;青少年;白领;红烧;1-2人;炒锅",
              imtro:
                "红烧肉的做法各地也会稍有不同。南方习惯用酱油（老抽）调色，而北方则偏爱炒糖色儿。原料一般选用上好五花肉（所谓上好五花肉要层次分明，一般五层左右为佳，故名“五花肉”），或者“坐臀肉”（即后臀尖）。",
              ingredients: "猪肉,500g",
              burden:
                "料酒,20ml;生抽,15ml;老抽,15ml;食用油,10ml;冰糖,适量;葱,适量;姜,10g;大料,适量;桂皮,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/25/24193_753573.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_3963d2f1629abb63.jpg",
                  step: "1.肉洗净"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_8ceb08ca68dd11de.jpg",
                  step: "2.准备好调料"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_5b4058c16e89546c.jpg",
                  step: "3.猪肉切成5cm宽的厚方块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_e85d0b6f5cec1b6c.jpg",
                  step: "4.烧开一锅水，将浸泡过的猪肉放入热水中，焯水"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_00c8150bb8ec5c71.jpg",
                  step: "5.用温水冲洗表面杂质后，用厨房纸将表面水份吸干"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_9f8dfd37c2360fd2.jpg",
                  step:
                    "6.大火加热炒锅，不放油，将猪肉直接倒入锅中煸炒，炒至颜色微黄"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_03f40b7aca843d23.jpg",
                  step: "7.微微出油后将油倒掉，猪肉盛出备用"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_ffa6fd3bd64cc583.jpg",
                  step:
                    "8.取一口干净的锅，加热后倒入10ml的油。油热后放入冰糖，小火熬化"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_65a97e0a25e9f636.jpg",
                  step: "9.熬至冰糖颜色变成红棕色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_eb2b1f0523c35e60.jpg",
                  step: "10.倒入煸炒过的猪肉"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_4a60896134a3e8d3.jpg",
                  step:
                    "11.猪肉均匀裹上糖色后，沿着锅边烹入10ml料酒、15ml生抽、15ml老抽，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_643533f4f8754688.jpg",
                  step: "12.翻炒片刻后加水没过猪肉"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_d7f2c599690da277.jpg",
                  step: "13.水开后，撇去浮末，放入葱姜大料和桂皮"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_312abb71502d0226.jpg",
                  step: "14.加盖小火炖煮40分钟，至猪肉软烂"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/242/24193_a266c427ebb85ac1.jpg",
                  step: "15.加入盐，大火将酱汁收干，并使酱汁均匀裹在肉块上即可"
                }
              ]
            },
            {
              id: "28287",
              title: "红烧肉",
              tags: "家常菜;私房菜;秋季菜谱;贴秋膘",
              imtro:
                "如果你想在众多朋友面前露一手的话，红烧肉是不错的选择。这不我也是第一次做。还真是挺好吃的。做法也相当简单。",
              ingredients: "五花肉,750g",
              burden: "糖,10g;酱油,3ml;盐,3g;八角,3个;米酒,20ml;辣椒末,3g",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/29/28287_652725.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_5dbb4089eeed4ab7.jpg",
                  step: "1.五花肉处理干净切成长宽1CM的丁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_8b1d8d0737228e1e.jpg",
                  step: "2.冷水下锅淖至肉色转白捞出沥干水分。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_4970796df8f34398.jpg",
                  step: "3.炒锅坐火放少许油小火炒糖色。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_d05bf4067fd38256.jpg",
                  step: "4.倒入肉丁翻炒，让糖色均匀沾到肉丁上。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_a8f3ffabea645807.jpg",
                  step: "5.加酱油、盐继续翻炒至肉色酱红。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_f18f3c151c9e3690.jpg",
                  step: "6.放八角、辣椒末炒匀烹米酒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_13abe9bf37753e91.jpg",
                  step: "7.加清水，完全没过肉丁，煮开。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_13b48b966a6052ff.jpg",
                  step: "8.倒入高压锅，上汽后20分钟。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/283/28287_39f485bbfcb54e89.jpg",
                  step: "9.汤汁浓稠，肉软烂可口即可。"
                }
              ]
            },
            {
              id: "28572",
              title: "红烧肉",
              tags: "家常菜;私房菜;烧;秋季养生;贴秋膘",
              imtro:
                "自己平时不管在家还是在外面几乎都不吃红烧肉的，主要是嫌油腻怕长肉肉。前几天到朋友家吃饭，朋友做了红烧肉儿子尝过后，竟然偷偷的跑到厨房跟她阿姨说：“你做的红烧肉太好吃了，下次来你还做哈。”就连下次也已经预约好了。没办法为了儿子的口福我也学着做吧，第一次做味道真不错，挑剔的老公也说很好吃，心里那个美呀没法形容了。",
              ingredients: "五花肉,750g",
              burden: "油,适量;盐,适量;生抽,适量;老抽,适量;白糖,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/29/28572_465082.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_005ef8ef6e43a515.jpg",
                  step: "1.准备好要用的五花肉"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_da6713ac3ba5ddd1.jpg",
                  step: "2.切成大块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_50e87cb3c5bb17b6.jpg",
                  step: "3.过开水焯一下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_bfe7553df821ea26.jpg",
                  step: "4.捞出控水"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_2da9c000976a75fc.jpg",
                  step: "5.锅内少放一丁点油，把五花肉放进去把水分炒干直至出油"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_e3912d2126bebb28.jpg",
                  step: "6.到颜色炒到发黄时倒入生抽"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_5d2370d74e4b75d0.jpg",
                  step:
                    "7.倒入老抽，放白糖，少放一点盐，（肉少的话就不要再放盐了）"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_ff2e41ddb12b236c.jpg",
                  step: "8.这时再炒一会等肉完全上色时，添水没过肉"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/286/28572_838258d7d366ab53.jpg",
                  step:
                    "9.水开后大火炖十分钟，然后转小火炖30分钟，至完全收汁就可以了"
                }
              ]
            },
            {
              id: "28817",
              title: "红烧肉",
              tags: "家常菜;下酒菜",
              imtro:
                "红烧肉对我家无肉不欢的那位来说是最喜欢的菜了，隔几天就要求吃，每次都大快朵颐，吃得津津有味，呵呵，确实是下饭下酒的好菜呢。",
              ingredients: "五花肉,1000g",
              burden: "油,适量;盐,适量;老姜,适量;老抽,适量;冰糖,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/29/28817_984508.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_83d88712aaf5e242.jpg",
                  step:
                    "1.把五花肉（带皮的）放入锅中用大伙烧沸，改中火煮以去除血沫"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_67270bc21dfdf108.jpg",
                  step: "2.五花肉捞出后切块，可依个人喜欢的大小切块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_d033d54a6b2c1086.jpg",
                  step: "3.锅中放油用微火烧至温热，下冰糖翻炒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_55e7fecdd3e1014d.jpg",
                  step: "4.炒至锅中呈焦黄色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_4abc7abe50f21bb9.jpg",
                  step:
                    "5.倒入五花肉，注意立即关火，快速的翻动肉块使之均匀的裹上糖色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_abc14e3ffff2c6b3.jpg",
                  step:
                    "6.加水（锅小可以分成几次加，但在中途加水是一定要是沸水），开大火烧沸后，放入老姜、老抽、盐以及黄酒，加盖后改小火慢烧。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_8901610cf5c2277c.jpg",
                  step:
                    "7.约1小时，当汤汁将干时开大火收汁，将肉整齐的码放在碗内（肉皮朝下）"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/289/28817_e40b781d5de9ee89.jpg",
                  step: "8.将一平盘扣在碗上，再反扣过来。浇上汤汁即可"
                }
              ]
            },
            {
              id: "28948",
              title: "红烧肉",
              tags: "家常菜;炒;下饭;红烧;下酒菜",
              imtro:
                "刚看颜色就想吃，闻到那香味更不得了！肉还没做好，在二楼的小可爱闻到香味就跑过来：“好香啊！好香啊！”。红烧肉拌饭、下酒都是好配搭。",
              ingredients: "五花肉,300g",
              burden:
                "生抽,1汤勺;老抽,1/2汤勺;姜片,3片;红葱头,2粒;香叶,2片;八角,3小瓣;冰糖,9g;油,少许",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/29/28948_556848.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_39597a9866281790.jpg",
                  step: "1.五花肉尽量拨干净毛。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_b8b8d2bc93a0d893.jpg",
                  step: "2.切好的五花肉、姜片冷水下锅，大火煮滚转小火煮30分钟。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_899946d5f1cbd877.jpg",
                  step: "3.捞起五花肉，用冷水冲洗，沥干水。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_21a039e9d594d3b5.jpg",
                  step: "4.温锅放少许油落红葱头、姜片、香叶、八角爆香。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_e1a32515db690b57.jpg",
                  step: "5.加入冰糖和少许水，转小火将糖煮溶。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_4964f9efcf76d72a.jpg",
                  step: "6.待糖溶后，倒入五花肉，转中火，翻拌让糖桨充份包好肉。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_48569ed1f26a75c2.jpg",
                  step:
                    "7.加入生抽、老抽及适量清水，大火煮滚转最小火煮10分钟，中途需翻拌。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_856def8708bdfaae.jpg",
                  step: "8.煮好的肉，转中大火翻动收汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/290/28948_17d5a6f5b0250df8.jpg",
                  step: "9.收剩少许汁即可。"
                }
              ]
            },
            {
              id: "29104",
              title: "红烧肉",
              tags: "下酒菜;冬季;家常菜;白领",
              imtro:
                "最喜欢吃红烧肉了，今天休息，做了红烧肉来解解馋，没想到这样成功。一家人都吃得很开心！有时，幸福似乎很简单。一家人围坐在一起，吃上大家都喜欢的美味，不失为一种幸福。",
              ingredients: "五花肉,500g",
              burden:
                "油,适量;盐,适量;冰糖,适量;八角,适量;老抽,适量;料酒,适量;五香粉,适量;味精,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/30/29104_693086.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_2b0f8cbe03dc54d3.jpg",
                  step: "1.不花肉洗净切好。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_5a1d982f9362b27a.jpg",
                  step: "2.热锅上油。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_0ca91a14ee8e38e8.jpg",
                  step: "3.放入五花肉煸炒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_d33b918dcbfb74d6.jpg",
                  step: "4.出油后放入冰糖和大料。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_a83cf77c180733d2.jpg",
                  step: "5.继续翻炒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_762153df42654da9.jpg",
                  step: "6.5分钟后烹入料酒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_778b49618d8c07e2.jpg",
                  step: "7.放入适量老抽。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_521189acec7994f6.jpg",
                  step: "8.倒入热水，大火炖。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_5c18985ba6897492.jpg",
                  step: "9.大约半小时左右，汤汁浓稠后，放入五香粉。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_3e485248f4aafca2.jpg",
                  step: "10.放入盐。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_6775be485256dad5.jpg",
                  step: "11.放入味精。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/292/29104_5cac71b142bdf6fb.jpg",
                  step: "12.待汤汁收干即可出锅。"
                }
              ]
            },
            {
              id: "46092",
              title: "红烧肉",
              tags: "家常菜;儿童;咸香;红烧;冬季菜谱",
              imtro:
                "输入菜谱内容，最多可输入1000个中文汉字冷吧，真心滴冷。连在南方的鱼都能感受到冷。不过，鱼喜欢冬天，因为鱼一家都是食肉兽，无肉不欢。趁着天冷，可以大口大口地吃肉，不用担心长胖，呵呵。 下了两个星期的雨，终于停了，虽然天还是阴冷阴冷的，但比起湿淋林的雨，鱼觉得已经很好了。 本来有很多计划，打算多晒一些腊肠，送给朋友，因为去年晒的腊肠很受欢迎，朋友说，比鱼这边卖的皇上皇还要好吃，可雨就一直下着.....本来打算晒腊肠、腊肉的肉肉就一次又一次地变了鱼家饭桌上的红烧肉，说实在的，鱼真的有那么一点内疚和后悔，唉，看来这冬天又不知道会长多少肉了。 昨天又给儿子做好他垂涎已久的红烧肉，儿子特开胃，一口气吃了三碗饭，最后还要添碗汤，呵呵，真开心，儿子好久没这么开胃了。",
              ingredients: "五花肉,350g",
              burden:
                "料酒,适量;酱油,适量;白砂糖,适量;豆瓣酱,适量;盐,适量;大蒜,30g;蒜瓣,15g;八角,5g;花椒,5g;茴香,5g;桂皮,15g;香叶,5g",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/47/46092_979258.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_8e10ba029fe2ddba.jpg",
                  step: "1.把材料准备好。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_8804a92c9dc599c3.jpg",
                  step: "2.五花肉洗干净，切成小块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_71c81cb05126a384.jpg",
                  step: "3.蒜瓣去掉外皮，切成小片。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_2ad21ad3f22a811f.jpg",
                  step: "4.大蒜洗干净，切成小段。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_e424255403d01231.jpg",
                  step:
                    "5.八角、茴香、桂皮、香叶放进水中冲洗一下，倒出，沥干水分。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_55f6d8b8e7b05cb0.jpg",
                  step:
                    "6.热锅下油，油热后倒入蒜头片、八角、茴香、桂皮、香叶，中小火煸香。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_9b3d1dd7ab44d00b.jpg",
                  step: "7.闻到八角等香味后，倒入切成小块的五花肉。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_be5c5303b2144a8a.jpg",
                  step: "8.炒至变色，即五花肉开始转白色时加入料酒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_f242c134a7de5000.jpg",
                  step: "9.翻炒均匀后，加入砂糖。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_55fb26ecfe2ce1af.jpg",
                  step: "10.翻炒几下后加入豆瓣酱。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_9298858102d4c8e7.jpg",
                  step: "11.加入酱油。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_7e1b3c5f1ce630f7.jpg",
                  step:
                    "12.翻炒均匀，加入适量清水，盖上锅盖，大火煮开后转中小火煮至收汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_a2ddd9b7b0c36bf8.jpg",
                  step: "13.最后加入蒜段，并快手翻炒至蒜段熟透即可。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_db546681e3f7631a.jpg",
                  step: "14.装碟时试试味，不够味再适当加点盐。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/461/46092_0d6b137f31a6f615.jpg",
                  step: "15.香喷喷的，儿子特喜欢。"
                }
              ]
            },
            {
              id: "46259",
              title: "红烧肉",
              tags: "家常菜;老年人;咸;半小时-1小时;青少年;白领;红烧;1-2人;炒锅",
              imtro: "用五花肉做这道菜是最好不过了。",
              ingredients: "五花肉,1000g",
              burden:
                "葱,10g;姜,10g;花椒,5g;大料,5g;冰糖,10g;香叶,5g;料酒,15ml;盐,5g;酱油,15ml",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/47/46259_113457.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_a398764999e9a770.jpg",
                  step: "1.准备好所有调料"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_c2a32c191a384211.jpg",
                  step: "2.五花肉切块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_03309c02fde294ad.jpg",
                  step: "3.用开水焯一下"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_c6f105475ab6df47.jpg",
                  step: "4.另起一锅爆香调料"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_ac478bafca4d5b6a.jpg",
                  step: "5.把焯好的肉倒进去"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_8450c3c16b8104fe.jpg",
                  step: "6.加料酒，酱油"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_0924f6b68c416be8.jpg",
                  step: "7.翻炒均匀"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_10e635145b374d0b.jpg",
                  step: "8.加入足量的水焖至60分钟"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46259_3173a9f21f119728.jpg",
                  step: "9.汤收紧后就可以了"
                }
              ]
            },
            {
              id: "46275",
              title: "红烧肉",
              tags: "家常菜;老年人;咸;半小时-1小时;青少年;白领;红烧;1-2人;炒锅",
              imtro: "味美鲜香的红烧肉，颜色诱人，看一眼就食欲大增",
              ingredients: "猪肉,500g",
              burden:
                "油,适量;盐,适量;冰糖,适量;葱,适量;姜,适量;香叶,适量;八角,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/47/46275_174475.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46275_4def01e336ff8d94.jpg",
                  step: "1.猪肉切块"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46275_676e07e6b72c130c.jpg",
                  step: "2.锅中烧水，放入肉块煮开，去浮沫，捞出"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46275_c2e0a74191c40cb8.jpg",
                  step: "3.锅中放入油，放肉块，煎出水分"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46275_143e2773c5509745.jpg",
                  step: "4.然后加入酱油上色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46275_d0ac764d2f71efc5.jpg",
                  step: "5.加入冰糖，葱姜，八角，香叶，和清水"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46275_2663380e1a05c906.jpg",
                  step: "6.煮25-30分钟，加入盐，汤汁收干即可"
                }
              ]
            },
            {
              id: "46276",
              title: "红烧肉",
              tags:
                "家常菜;老年人;甜;咸;10-20分钟;简单;米饭;青少年;白领;红烧;1-2人;炒锅",
              imtro: "味道甜甜的，没有那么油哦！新手们也可以试试！",
              ingredients: "五花肉,500g",
              burden:
                "八角,3粒;桂皮,2块;白砂糖,2大勺;盐,适量;黄酒,2勺;食用油,2勺",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/47/46276_941905.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46276_41440a623e0e03d6.jpg",
                  step: "1.新鲜五花肉洗净切小块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46276_2efef0636a4dced4.jpg",
                  step:
                    "2.锅内烧热水，加入少许黄酒，水开后将肉焊烫两分钟，沥干水分。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46276_571ebeea0467ed66.jpg",
                  step:
                    "3.锅底适量油，放两勺糖，小火慢炒成液体的时候将肉加入，再加入八角和桂皮，小火翻炒五分钟"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46276_6ef80ea9bc40cb15.jpg",
                  step:
                    "4.注入三碗开水，放少量汤，两大勺黄酒，少许盐，大火烧开后转小火慢炖二十分钟。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/463/46276_525d353a202cfa71.jpg",
                  step: "5.锅内水快干的时候要多翻炒，防止糊掉，汁收干即可成盘。"
                }
              ]
            },
            {
              id: "46729",
              title: "红烧肉",
              tags:
                "家常菜;运动员;咸香;半小时-1小时;炖;孕妇;青少年;老人;白领;晚餐;红烧;营养;增强抵抗力;全菜系;2小时以上;1-2人;待客菜;锅子;中等难度",
              imtro:
                "今天做了美味的红烧肉，好好吃啊，可惜我不敢多吃，怕长胖啊，唉！容易长胖的人伤不起啊，呵呵",
              ingredients: "五花肉,400g",
              burden:
                "葱,少许;八角,少许;香叶,少许;肉寇,少许;酱油,少许;冰糖,少许;姜,少许",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/47/46729_731885.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_4bfaaf2e013dd147.jpg",
                  step: "1.五花肉用料酒腌制一下去腥，焯水"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_ddfa5515c85d9f2e.jpg",
                  step: "2.捞出洗净浮沫"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_8130e6404ef83d15.jpg",
                  step: "3.热过热油下葱花，姜片，五花肉翻炒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_7693904200181b16.jpg",
                  step: "4.使劲炒，逼出肉内油来"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_edd391b5577b60e1.jpg",
                  step: "5.控油"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_735b3c3a00d5338b.jpg",
                  step: "6.热过热油下冰糖"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_226c2146725542a0.jpg",
                  step: "7.炒出糖色"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_aeec37d355162d1d.jpg",
                  step: "8.加入水，八角，香叶，肉寇，桂皮炖煮，出锅前烹入水淀粉"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/468/46729_53186de6ef6cb2f8.jpg",
                  step: "9.成品"
                }
              ]
            },
            {
              id: "48823",
              title: "红烧肉",
              tags: "家常菜;夏季饮食",
              imtro:
                "猪肉的蛋白质为完全蛋白质，猪肉中含有人体必需的氨基酸，猪肉性平味甘，有润肠胃，生津液，补肾气，解热毒的功效。猪肉有诸多的营养，还是学着做个红烧吧，这也是我第一次做红烧肉，味道还真不错，肉质香香的，一点都不不腻，真好吃。",
              ingredients: "猪肉,1000g",
              burden:
                "油,适量;盐,适量;味精,适量;料酒,适量;白糖,适量;酱油,适量;干辣椒,适量;陈皮,适量;桂皮,适量;葱,适量;姜,适量;蒜,适量;大料,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/49/48823_148903.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48823_a129ecc81e574d26.jpg",
                  step: "1.猪肉切块，锅开水焯一下，去腥味，捞出控水"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48823_519b85715eb79106.jpg",
                  step: "2.葱，姜，蒜，大料，桂皮，陈皮"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48823_f0b31ae6cbf51067.jpg",
                  step: "3.锅热后白糖炒色，再倒入猪肉翻炒均匀"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48823_b17f5cf109552599.jpg",
                  step:
                    "4.在倒入少许酱油，白糖，料酒，盐，味精，步骤2配料翻炒2分钟，再倒入适量的水，开锅后小火炖1小时左右"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48823_07ded2c90c48f3ca.jpg",
                  step: "5.打开盖，收汤汁后即可关火"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48823_c47060317eaef2ea.jpg",
                  step: "6.出锅，还不错吧。"
                }
              ]
            },
            {
              id: "48893",
              title: "红烧肉",
              tags: "家常菜;半小时-1小时;咸鲜;红烧;1-2人;炒锅;体力劳动者",
              imtro:
                "红烧肉的特点；浓油赤酱，肥而不腻，入口酥软即化。红烧肉，以五花肉为制作主料，红烧肉的做法各地也会稍有不同。 不管是逢年过节还是亲朋聚会都不会少了诱人的红烧肉。 小时候家里穷，因为是农村的，很少吃到肉，就是偶然买肉也是放一些在菜中点缀的，只有到了过年过节的，或是家里来客人了，才会烧了一碗红烧肉，妈妈做的红烧肉可好吃了，不过妈妈在饭前总要教导我们，不可吃太多，以免在客人面前丢了面子。在客人走后，没有吃完的红烧肉，我们才可以大口大口的吃。感觉真好吃啊。后来条件稍好一些了，妈妈经常会做红烧肉给我们吃，但是吃的越来越少了，妈妈总说，小时候，你可喜欢吃了，怎么现在不吃了呢！嘿，物以稀为贵啊。虽然现在吃的不多，但是妈妈的味道永远是最好的。学着妈妈做的红烧肉，味道和妈妈的差不多呢。妈妈，母亲节快乐。希望经后经常吃到您烧的红烧肉。",
              ingredients: "猪肉,500g",
              burden:
                "油,适量;盐,适量;老抽,适量;姜,适量;蒜,适量;辣椒,适量;葱,适量;八角,适量;桂皮,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/49/48893_635072.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48893_504b4501976f427a.jpg",
                  step: "1.肉洗净切成大块。冷水把肉下锅烧开，把肉焯水。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48893_a3d72ca1bcf04e72.jpg",
                  step: "2.准备好 八角 桂皮 葱姜蒜 辣椒"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48893_0e7be340570ccb49.jpg",
                  step: "3.把锅烧热，放少量油，下入葱姜蒜 八角 桂皮 辣椒炒香"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48893_2aa226959a2d987d.jpg",
                  step: "4.放少话冰糖熬至起沫成棕红色。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48893_f48c24965dd8b94e.jpg",
                  step:
                    "5.倒入煸炒的猪肉翻炒均匀，使每块肉均匀沾满糖色，加入料酒、酱油"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/489/48893_08d764d1b956b107.jpg",
                  step:
                    "6.加入开水没过肉，盖上锅盖开火煮沸，调小火炖40分钟，烧至肉熟烂、把汤汁收浓即可。"
                }
              ]
            },
            {
              id: "50156",
              title: "红烧肉",
              tags: "红烧;增强抵抗力;秋季菜谱;炒锅;贴秋膘",
              imtro:
                "红烧肉-食肉一簇无法抵抗的美味。 这次烧制红烧肉只用了一种调味品--李锦记秘制红烧汁，做出来的红烧肉色泽红亮，入口鲜香，非常的美味。 我觉得这是一个懒人法的红烧肉做法，最适合一些厨房新手和菜鸟来用，一定会给你一个惊喜，让你对制作美食充满信心。",
              ingredients: "五花肉,400g",
              burden: "油,适量;姜片,7片;料酒,15ml;红烧汁,50ml",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/51/50156_741283.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_4c736800da1e16ee.jpg",
                  step: "1.准备好所有的食材。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_8159745e81c8e0ed.jpg",
                  step: "2.锅中油烧热加入姜片炒香。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_eae9a1ceed936070.jpg",
                  step: "3.倒入洗净切块的五花肉翻炒。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_9b4befd1608bfb23.jpg",
                  step: "4.炒至五花肉变色微发黄。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_8e8a2d0c5e94122b.jpg",
                  step: "5.加入料酒炒香。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_fea7f422cb29b176.jpg",
                  step: "6.加入秘制红烧汁。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_80e5e98b8938bf7d.jpg",
                  step: "7.加入适量的清水大火煮开，小火烧煮50分钟。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50156_0f9c78ef64b489cc.jpg",
                  step: "8.最后用大火收汁即好。"
                }
              ]
            },
            {
              id: "50161",
              title: "红烧肉",
              tags: "东北菜;家常菜;电压力锅;红烧",
              imtro:
                "看过许多版本的红烧肉，包括知名不知名的厨艺高手的红烧肉，都是香浓诱人，馋涎欲滴，自然是心生怯意，不敢班门弄斧。偏偏前些日子，有人问俺红烧肉的做法。罗罗嗦嗦讲了半天，最后人家做成了拔丝肉，硬得咯牙。最后领了个差使，率先垂范，给人做份样品。 样品不敢当，也就敢糊弄一下生手吧。这一答应就好长时间过去了，这两天有时间，有材料，于是兑现诺言吧，丑媳妇也要见公婆。我做的红烧肉，第一是不放腐乳之类的东西，因为北方人不习惯那个吃法。第二，我把大家传统的做法做了一点改良，否则油太多太腻了。那么来看看吧。",
              ingredients: "五花肉,500g",
              burden:
                "料酒,适量;盐,1小勺;姜片,6片;冰糖,50g;香叶,适量;老抽,适量;桂皮,适量;砂糖,50g",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/51/50161_217271.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_349c030aa7a55b92.jpg",
                  step: "1.选择带皮五花肉，洗净，切块。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_eeaa2fa9125c315c.jpg",
                  step: "2.入凉水锅，焯水去血沫。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_20b73db7c78a1c83.jpg",
                  step: "3.焯水后的五花肉快。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_c71c323a3de1a113.jpg",
                  step:
                    "4.放进电高压锅，加老抽、料酒、冰糖、大料、盐等加各种调料炖烂。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_47bb914b60c7202c.jpg",
                  step: "5.高压锅炖好的肉块，已经很入味了。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_aaa01b59f1dbd223.jpg",
                  step: "6.开火，锅里加少量油，糖。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_25506e9ce9d0b0ac.jpg",
                  step: "7.小火把糖熬成焦色，但不能熬糊。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_72c5c981a865a05c.jpg",
                  step:
                    "8.加入五花肉快翻炒。也可以再加入少量炖肉的汤、盐炖一会儿。放心，也是照样入味的。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_384cdeed4783ee10.jpg",
                  step: "9.最后收汁即可。"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50161_add9557c42959295.jpg",
                  step: "10.装盘。“鱼牌”红烧肉就出炉了！"
                }
              ]
            },
            {
              id: "50170",
              title: "红烧肉",
              tags: "家常菜;热菜;增强抵抗力",
              imtro:
                "有的人喜欢吃瘦肉因为瘦肉有嚼劲，有的人喜欢吃肥肉因为肥肉香， 有的人觉得瘦肉偏硬，难以嚼烂，有的人觉得肥肉腻，难以下咽，可惟独红烧肉这道菜，肉是五花三层，经过制作之后，美味不可用言语来形容，肥而不腻，堪称中华美食中的一道经典名菜，这道菜便是“红烧肉”，我爸爸就超级喜欢吃红烧肉呢",
              ingredients: "五花肉,500g",
              burden:
                "油,适量;盐,适量;生抽,适量;老抽,适量;料酒,适量;醋,适量;红糖,适量",
              albums: [
                "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/51/50170_571352.jpg"
              ],
              steps: [
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_0e42d9c154548060.jpg",
                  step:
                    "1.准备的材料：五花肉一斤，红糖、料酒、生抽、老抽、醋适量，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_7f73fca9f73f8f59.jpg",
                  step: "2.将五花肉洗净后，切成均匀的小块，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_f845a4c5175a77e1.jpg",
                  step: "3.热油锅，放入切好的五花肉，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_948b24b94f683ff1.jpg",
                  step: "4.放适量的老抽，和生抽，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_e99d70e5db644c14.jpg",
                  step: "5.放适量的料酒和盐，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_e4e4392afb44507f.jpg",
                  step: "6.放入适量的醋，"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_b6852b7bcfc74f9f.jpg",
                  step: "7.放入红糖，在锅中加入开水，大火炖2-3分钟"
                },
                {
                  img:
                    "http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/s/502/50170_443724c1ef0fb69e.jpg",
                  step: "8.最后大火收汁，加味精出锅，即可出锅。"
                }
              ]
            }
          ],
          totalNum: "131",
          pn: 0,
          rn: 30
        },
        error_code: 0
      }
    };
  },
  asyncData() {
    const { networkInterfaces } = require("os");
    const ifaces = networkInterfaces();
    let locatIp = "";
    for (let dev in ifaces) {
      if (dev === "本地连接") {
        for (let j = 0; j < ifaces[dev].length; j++) {
          if (ifaces[dev][j].family === "IPv4") {
            locatIp = ifaces[dev][j].address;
            break;
          }
        }
      }
    }
    return {
      ip: locatIp
    };
  }
};
</script>

<style lang="less" scoped>
#error {
  background-color: hsla(0, 0%, 78%, 0.603);
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  .error-img {
    margin: 0 auto;
    width: 503px;
    height: 235px;
  }
  .error-ip {
    font-size: 24px;
    text-align: center;
    margin-top: 40px;
    display: block;
  }
  .error-box {
    width: 980px;
    margin: 0 auto;
    .error-list {
      width: 25%;
      display: inline-block;
      text-align: center;
      vertical-align: top;
      &:nth-child(4n + 1) {
        .error-list-img {
          margin-left: 0;
        }
      }
      .error-list-img {
        margin: 10px 0 0 10px;
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 5px;
        .error-list-scale {
          overflow: hidden;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition: ease-in 0.3s all;
            cursor: pointer;
            &:hover {
              transform: scale(1.5);
            }
          }
        }
        .error-list-tag {
          font-size: 12px;
          margin-top: 10px;
          max-height: 45px;
          overflow: hidden;
          span {
            display: inline-block;
            background-color: red;
            color: #fff;
            padding: 2px 3px;
            margin: 0 2px 2px 0;
            border-radius: 5px;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>