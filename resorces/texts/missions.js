var missi = [{
  id: 0,
  missionShown: 3,
  missionList: [{
    text: "确定顾闻良和方伯勋谁才是幕后主使",
    status: "block"
  }, {
    text: "如何营救徐子曦和陈景逾",
    status: "block"
  }, {
    text: "套上狗链，成为梁老师的狗",
    status: "none"
  }, {
    text: "jogggjojo",
    status: "none"
  }, {
    text: "jojogggdjo",
    status: "none"
  }]
}, {
  id: 1,
  missionShown: 3,
  missionList: [{
    text: "前往侍女馆找梁老师",
    status: "block"
  }, {
    text: "接下梁老师手上的狗链",
    status: "block"
  }, {
    text: "套上狗链，成为梁老师的狗",
    status: "block"
  }, {
    text: "jogggjojo",
    status: "block"
  }, {
    text: "jojogggdjo",
    status: "none"
  }]
}];

var pla = [{
  //0
  status: false,
  show: true,
  x: "735rpx",
  y: "255rpx",
  placeName: "北平",
  next: -1,
  text: "<div><p><span>“九一八”事变后，辽旷的东北平原的宁静被枪炮声打破，日本铁蹄践踏之处，哀哭遍地，国土倾覆，丧权辱国。</span></p><p><span>	</span><span>与全国人民一致要求抗日的愿望相反，国民党政府置中华民族的尊严与利益于不顾，一方面不断与日寇签订丧权辱国的条约、协定，另一方面对共产党、红军和人民实行军事“围剿”和文化“围剿”，镇压人民的抗日活动。</span> <span> 在国民党蒋介石“ 攘外必先安内”、 对日本侵略者采取“ 绝对不抵抗” 的政策下， 仅用两三个月， 日军便占领了东北三省。 </span></p> <p> <span> </span><span>而日寇的魔爪怎可能就此止步于此，将整个中国变为它的殖民地才是它的狼子野心。</span > </p><p><span>	</span> <span> 东北沦陷之后， 仅一年半之间， 华北又复门户洞开。 < /span></p> <p> <span> </span><span>形势危急，直逼华北。</span > </p><p><span>   北平，这座古都，斜阳残照的城门有日军岗哨，大街小巷兽蹄所踏之处鸡犬不宁。日军经常在郊区夜以继日地进行大规模的军事演习，人民的生命及财产毫无保障，农田民舍多被焚毁。</span> </p><p><span>   京城内外谣诼纷纭，人们不知何时大难临头，皆是人心惶惶风声鹤唳。</span> </p></div > </div><br><br><br><br><br><br><h4>线索:</h4><div style=\"font-size:20px;line-height:25px\">1、蒋介石的房间：一份学生名单<br>  2、宋哲仁的书房：一份学生名单，不过人数比蒋介石那份多<br>  3、方伯勋书桌：一本往届毕业生花名册<br>  4、顾闻良跟严钧儒：三份书信往来<br>  5、徐子曦房门一串记号，是一段密码</div><h4>任务：</h4><div style=\"font-size:20px;line-height:25px\">1、确定顾闻良和方伯勋谁才是幕后主使<br>  2、如何营救徐子曦和陈景逾</div>",
  passwd: 1234
}, {
  //----------------------------------
  //1
  status: false,
  show: true,
  x: "206rpx",
  y: "696rpx",
  next: 2,
  placeName: "西安",
  text: "<h5>1. 1965年 重聚</h5>",
  passwd: 1234
}, {
  //2
  status: false,
  show: false,
  x: "206rpx",
  y: "696rpx",
  next: 3,
  placeName: "西安",
  text: "<h5>2. 1935年 西安临大</h5>",
  passwd: 1234
}, {
  //3
  status: false,
  show: false,
  x: "206rpx",
  y: "696rpx",
  next: -1,
  placeName: "西安",
  text: "<h5>3. 1965年 现世安好</h5>",
  passwd: 1234
}, {
  //--------------------------------------------------
  //4
  status: false,
  show: true,
  x: "-125rpx",
  y: "695rpx",
  next: -1,
  placeName: "宝鸡",
  text: "ababab",
  passwd: 1234
}, {
  //-------------------------------------------------
  //5
  status: false,
  show: true,
  x: "-95rpx",
  y: "875rpx",
  next: -1,
  placeName: "城固",
  text: "ababab",
  passwd: 1234
}];

module.exports = {
  missions: missi,
  places: pla
}