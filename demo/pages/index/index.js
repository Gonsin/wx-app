//index.js
//获取应用实例
var app = getApp();

Page({

  onLoad() {
    this.queryHotInfo('instagram', 1);
  },

  queryHotInfo(type, page) {
    this.setData({
      isLoading: true
    });
    this.setData({
      hotDataList: hotData[type].map((item, index) => {
        item.publishTime = this.timeFormat(item.publishTime);
        return item;
      }),
      isLoading: false
    });
  },

  querySubInfo(page) {
    this.setData({
      isLoading: true
    });
    this.setData({
      subDataList: subData.map((item, index) => {
        item.publishTime = this.timeFormat(item.publishTime);
        return item;
      }),
      isLoading: false
    });
  },

  querySpecialInfo(page) {
    this.setData({
      isLoading: true
    });
    this.setData({
      specialDataList: specialData.map((item, index) => {
        item.publishTime = this.timeFormat(item.publishTime);
        return item;
      }),
      isLoading: false
    });
  },

  changeType(e) {
    let type = e.target.dataset.type;
    if (type == this.data.currentType) return;
    this.setData({
      currentType: type,
      playingId: 0
    });
    if (type == 'hot') {
      this.queryHotInfo(this.data.currentPlat, 1);
    } else if (type == 'subscribe') {
      this.querySubInfo(1);
    } else if (type == 'special') {
      this.querySpecialInfo(1);
    }
  },

  changePlatform(e) {
    let index = e.target.dataset.index,
      platform = e.target.dataset.platform
    this.setData({
      platIndex: index,
      currentPlat: platform
    });
    this.queryHotInfo(platform, 1);
  },

  changeSubscribe(e) {
    let index = e.target.dataset.index,
      platform = e.target.dataset.platform
    this.setData({
      platIndex: index,
      currentPlat: platform
    });
    console.log(index);
    console.log(platform);
    this.querySubInfo(platform, 1);
  },

  checkDetail(e) {
    console.log("I clicked !");
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  videoPlay(e) {
    let id = e.currentTarget.dataset.imgid;
    // console.log(id);
    this.setData({
      playingId: id
    });
  },

  timeFormat(str) {
    // console.log(str);
    let date = new Date(str),
      result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' / ' + (Number(date.getHours()) < 10 ? ('0' + date.getHours()) : date.getHours()) + ':' + (Number(date.getMinutes()) < 10 ? ('0' + date.getMinutes()) : date.getMinutes());
    return result;
  },

  server(data, url, callback, method) {
    wx.request({
      url: url,
      data: data || {},
      method: method || 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      complete(res) {
        callback && callback(res);
      }
    });
  },

  data: {
    currentType: 'hot',
    platIndex: 0,
    currentPlat: 'instagram',
    playingId: 0,
    hotDataList: [],
    subDataList: [],
    specialDataList: [],
    isLoading: false
  }
})

let hotData = {

  instagram: [{
    "platform": "instagram",
    "author": {
      "authorId": "1827683445:weibo",
      "nickname": "张若昀",
      "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
      "platform": "instagram"
    },
    "gradeIncome": {
      "desc": "历史收益率",
      "ratio": "5.9%"
    },
    "fundInfo": {
      "fundName": "百万股神决赛第一期",
      "income": "13.65%",
      "styleType": "灵活配置 严格止损 稳健耐心",
      "marketIndex": "(同期股指: 5.9%)",
      "target": "目标: 20%",
      "dialog": "4",
      "runtimeText": "已运行26天(剩余34天)",
      "startTime": "明日运行(期限60天)",
      "status": "火热抢购中"
    },
    "imageId": "kW3LMcg/LrPmirH77XBQg3///qe2mzG3ZR5fcDizuQA=",
    "imageSpec": [{
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/14788301712754fd45f0e-2ee2-4d2b-a096-cca9936c95eb@!580x580",
      "width": 580,
      "height": 580,
      "imageType": "middle"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/14788301712754fd45f0e-2ee2-4d2b-a096-cca9936c95eb@!1242",
      "width": 1242,
      "height": 1242,
      "imageType": "large"
    }],
    "publishTime": 1478700093000,
    "type": "video",
    "likesCount": 11805,
    "commentsCount": 386,
    "geo": {
      "lat": 0,
      "lon": 0,
      "name": ""
    },
    "title": "海岛度假最佳吸睛神器，太酷炫了！",
    "videoSpec": {
      "coverUrl": "http://avator-cdn.kankanapp.com.cn/avatar/14788301712754fd45f0e-2ee2-4d2b-a096-cca9936c95eb",
      "videoUrl": "http://rm-dragon-cdn.kankanapp.com.cn/audio/322a7a04-af8d-463d-aded-98f5fe791069.mp4",
      "width": 640,
      "height": 640
    },
    "textContent": "Would you try this?"
  }, {
    "platform": "instagram",
    "author": {
      "authorId": "1827683445:weibo",
      "nickname": "Gonsin",
      "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
      "platform": "instagram"
    },
    "gradeIncome": {
      "desc": "历史收益率",
      "ratio": "6.8%"
    },
    "fundInfo": {
      "fundName": "牛股第一名",
      "income": "3.6%",
      "styleType": "灵活配置 严格止损 稳健耐心",
      "marketIndex": "(同期股指: 4.1%)",
      "target": "目标: 20%",
      "dialog": "90",
      "runtimeText": "已运行26天(剩余34天)",
      "startTime": "明日运行(期限60天)",
      "status": "火热抢购中"
    },
    "imageId": "kW3LMcg/LrPmirH77XBQg3///qe2mzG3ZR5fcDizuQA=",
    "imageSpec": [{
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/14788301712754fd45f0e-2ee2-4d2b-a096-cca9936c95eb@!580x580",
      "width": 580,
      "height": 580,
      "imageType": "middle"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/14788301712754fd45f0e-2ee2-4d2b-a096-cca9936c95eb@!1242",
      "width": 1242,
      "height": 1242,
      "imageType": "large"
    }],
    "publishTime": 1478700093000,
    "type": "video",
    "likesCount": 11805,
    "commentsCount": 386,
    "geo": {
      "lat": 0,
      "lon": 0,
      "name": ""
    },
    "title": "海岛度假最佳吸睛神器，太酷炫了！",
    "videoSpec": {
      "coverUrl": "http://avator-cdn.kankanapp.com.cn/avatar/14788301712754fd45f0e-2ee2-4d2b-a096-cca9936c95eb",
      "videoUrl": "http://rm-dragon-cdn.kankanapp.com.cn/audio/322a7a04-af8d-463d-aded-98f5fe791069.mp4",
      "width": 640,
      "height": 640
    },
    "textContent": "Would you try this?"
  }],

  facebook: [{
    "platform": "facebook",
    "author": {
      "authorId": "1827683445:weibo",
      "nickname": "张若昀",
      "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
      "platform": "facebook"
    },
    "gradeIncome": {
      "desc": "历史收益率",
      "ratio": "5.9%"
    },
    "fundInfo": {
      "fundName": "百万股神决赛第一期",
      "income": "13.65%",
      "styleType": "灵活配置 严格止损 稳健耐心",
      "marketIndex": "(同期股指: 5.9%)",
      "target": "目标: 20%",
      "dialog": "4",
      "runtimeText": "已运行26天(剩余34天)",
      "startTime": "明日运行(期限60天)",
      "status": "火热抢购中"
    },
    "imageId": "6kVgcDzqmhbxak2akSgqq3///qevroUH5lxU0oXxcAA=imageDetailSplit1",
    "imageSpec": [{
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/1478846527498b5764a8e-749a-4bb0-8a9e-f094397867df@!1242",
      "width": 1242,
      "height": 696,
      "imageType": "large"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/1478846527498b5764a8e-749a-4bb0-8a9e-f094397867df@!580x580",
      "width": 580,
      "height": 580,
      "imageType": "middle"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/1478846527498b5764a8e-749a-4bb0-8a9e-f094397867df@!200x200",
      "width": 200,
      "height": 200,
      "imageType": "thumbnail"
    }],
    "publishTime": 1478816267000,
    "type": "image",
    "likesCount": 45616,
    "commentsCount": 1102,
    "geo": {
      "lat": 0,
      "lon": 0,
      "name": ""
    },
    "title": "川普获选Lady Gaga再发声！“感到恐慌的人们，你们并不孤独”！ ",
    "textContent": "Anyone who feels afraid or alone today, you are not alone in feeling that way."
  }],

  twitter: [{
    "platform": "twitter",
    "author": {
      "authorId": "1827683445:weibo",
      "nickname": "张若昀",
      "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
      "platform": "instagram"
    },
    "gradeIncome": {
      "desc": "历史收益率",
      "ratio": "5.9%"
    },
    "fundInfo": {
      "fundName": "百万股神决赛第一期",
      "income": "13.65%",
      "styleType": "灵活配置 严格止损 稳健耐心",
      "marketIndex": "(同期股指: 5.9%)",
      "target": "目标: 20%",
      "dialog": "4",
      "runtimeText": "已运行26天(剩余34天)",
      "startTime": "明日运行(期限60天)",
      "status": "火热抢购中"
    },
    "imageId": "SHj1lGshYso47szYHmHka3///qezaXnHPf/WfO/yCAA=imageDetailSplitCw4CX6JXcAEEhqQ",
    "imageSpec": [{
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/1478853525965746f177b-7b62-4786-8f44-9aca39d265e4@!1242",
      "width": 1242,
      "height": 1516,
      "imageType": "large"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/1478853525965746f177b-7b62-4786-8f44-9aca39d265e4@!580x580",
      "width": 580,
      "height": 580,
      "imageType": "middle"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/1478853525965746f177b-7b62-4786-8f44-9aca39d265e4@!200x200",
      "width": 200,
      "height": 200,
      "imageType": "thumbnail"
    }],
    "publishTime": 1478753683000,
    "type": "image",
    "likesCount": 4309,
    "commentsCount": 39,
    "geo": {
      "lat": 0,
      "lon": 0,
      "name": ""
    },
    "title": "莉莉上艾伦秀，并在后台和艾伦合影。",
    "textContent": "Eddie! Backstage @FallonTonight with @JimmyFallon...pic.twitter.com/xee3nwdfmg"
  }],

  weibo: [{
    "platform": "weibo",
    "author": {
      "authorId": "1827683445:weibo",
      "nickname": "张若昀",
      "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
      "platform": "weibo"
    },
    "gradeIncome": {
      "desc": "历史收益率",
      "ratio": "5.9%"
    },
    "fundInfo": {
      "fundName": "百万股神决赛第一期",
      "income": "13.65%",
      "styleType": "灵活配置 严格止损 稳健耐心",
      "marketIndex": "(同期股指: 5.9%)",
      "target": "目标: 20%",
      "dialog": "4",
      "runtimeText": "已运行26天(剩余34天)",
      "startTime": "明日运行(期限60天)",
      "status": "火热抢购中"
    },
    "imageId": "v1ty01aXw+5QVVECncFzin///qetWVoHPeu9m1uFxAA=",
    "imageSpec": [{
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/147885834495119deac62-e72e-4748-9f91-6e1317ed3616@!580x580",
      "width": 580,
      "height": 580,
      "imageType": "middle"
    }, {
      "url": "http://avator-cdn.kankanapp.com.cn/avatar/147885834495119deac62-e72e-4748-9f91-6e1317ed3616@!1242",
      "width": 1242,
      "height": 778,
      "imageType": "large"
    }],
    "publishTime": 1478855403000,
    "type": "video",
    "likesCount": 68,
    "commentsCount": 0,
    "geo": {
      "lat": 0,
      "lon": 0,
      "name": ""
    },
    "title": "双十一教你怎么剁手！美国那些一逛就上瘾的神奇购物网站，你知道几个？",
    "videoSpec": {
      "coverUrl": "http://avator-cdn.kankanapp.com.cn/avatar/147885834495119deac62-e72e-4748-9f91-6e1317ed3616",
      "videoUrl": "http://rm-dragon-cdn.kankanapp.com.cn/audio/b93615e0-d923-499d-b2ff-d5bd9f178690.mp4",
      "width": 480,
      "height": 301
    },
    "textContent": "双十一教你怎么剁手！美国那些一逛就上瘾的神奇购物网站，你知道几个？[doge]聪聪那年在美国的秒拍... @聪聪那年在美国"
  }]
};

let subData = [{
  "imageId": "5ptKvPVMafahUxZz/uhj5H///rGeesm3PRIzkU+6QwA=imageDetailSplit6cf03c75jw1etsx1e6t4rj215o0rqzu8",
  "type": "image",
  "videoSpec": {
    "coverUrl": "",
    "videoUrl": "",
    "width": 0,
    "height": 0
  },
  "imageSpec": [{
    "url": "http://avator-cdn.kankanapp.com.cn/avatar/147917504705776e933c7-b4ca-49ab-b091-52e279e5b60b@!1242",
    "width": 1242,
    "height": 826,
    "imageType": "large"
  }, {
    "url": "http://avator-cdn.kankanapp.com.cn/avatar/147917504705776e933c7-b4ca-49ab-b091-52e279e5b60b@!580x580",
    "width": 580,
    "height": 580,
    "imageType": "middle"
  }, {
    "url": "http://avator-cdn.kankanapp.com.cn/avatar/147917504705776e933c7-b4ca-49ab-b091-52e279e5b60b@!200x200",
    "width": 200,
    "height": 200,
    "imageType": "thumbnail"
  }],
  "publishTime": 1436155197000,
  "likesCount": 673415,
  "commentsCount": 0,
  "author": {
    "authorId": "1827683445:weibo",
    "nickname": "张若昀",
    "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
    "platform": "weibo"
  },
  "interestTags": [{
    "id": 6,
    "tag": "时尚",
    "coverUrl": "http://avator-cdn.kankanapp.com.cn/avatar/1473066661724da95e298-da43-4e09-8d3d-2fef19aa4ead@!200x200",
    "order": 5
  }],
  "gradeIncome": {
    "desc": "历史收益率",
    "ratio": "5.9%"
  },
  "fundInfo": {
    "fundName": "百万股神决赛第一期",
    "income": "13.65%",
    "styleType": "灵活配置 严格止损 稳健耐心",
    "marketIndex": "(同期股指: 5.9%)",
    "target": "目标: 20%",
    "dialog": "4",
    "runtimeText": "已运行26天(剩余34天)"
  },
  "createTime": 1479175051584,
  "platform": "weibo",
  "textContent": "我今年26岁出头，除了演戏耍帅唱歌之外，无所事事。哦对了，我还会飞。 [左]️ 最长的旅途",
  "title": ""
}, {
  "imageId": "5ptKvPVMafahUxZz/uhj5H///rGeesm3PRIzkU+6QwA=imageDetailSplit6cf03c75jw1etsx1e6t4rj215o0rqzu8",
  "type": "image",
  "videoSpec": {
    "coverUrl": "",
    "videoUrl": "",
    "width": 0,
    "height": 0
  },
  "imageSpec": [{
    "url": "http://avator-cdn.kankanapp.com.cn/avatar/147917504705776e933c7-b4ca-49ab-b091-52e279e5b60b@!1242",
    "width": 1242,
    "height": 826,
    "imageType": "large"
  }, {
    "url": "http://avator-cdn.kankanapp.com.cn/avatar/147917504705776e933c7-b4ca-49ab-b091-52e279e5b60b@!580x580",
    "width": 580,
    "height": 580,
    "imageType": "middle"
  }, {
    "url": "http://avator-cdn.kankanapp.com.cn/avatar/147917504705776e933c7-b4ca-49ab-b091-52e279e5b60b@!200x200",
    "width": 200,
    "height": 200,
    "imageType": "thumbnail"
  }],
  "publishTime": 1436155197000,
  "likesCount": 673415,
  "commentsCount": 0,
  "author": {
    "authorId": "1827683445:weibo",
    "nickname": "Gonsin",
    "avatar": "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6cf03c75jw8etxuxys33pj20ku0kvadq.jpg",
    "platform": "weibo"
  },
  "gradeIncome": {
    "desc": "历史收益率",
    "ratio": "13.4%"
  },
  "fundInfo": {
    "fundName": "冲击涨停第一期",
    "income": "23.65%",
    "styleType": "灵活配置 严格止损 稳健耐心",
    "marketIndex": "(同期股指: 2.9%)",
    "target": "目标: 20%",
    "dialog": "7",
    "runtimeText": "已运行26天(剩余90天)"
  },
  "interestTags": [{
    "id": 6,
    "tag": "时尚",
    "coverUrl": "http://avator-cdn.kankanapp.com.cn/avatar/1473066661724da95e298-da43-4e09-8d3d-2fef19aa4ead@!200x200",
    "order": 5
  }],
  "createTime": 1479175051584,
  "platform": "weibo",
  "textContent": "我今年26岁出头，除了演戏耍帅唱歌之外，无所事事。哦对了，我还会飞。 [左]️ 最长的旅途",
  "title": ""
}];

let specialData = [{
  "trendingId": 4925,
  "trendingTitle": "奥巴马的两百万张照片中，这二十张最好",
  "trendingSubTitle": "",
  "trendingPublishDate": "2016-11-11 05",
  "trendingCoverUrl": "http://avator-cdn.kankanapp.com.cn/avatar/1478859173962a2fdf325-ae36-4891-a36d-489664568f71@!1242",
  "trendingType": 0,
  "location": {
    "longitude": 0,
    "latitude": 0,
    "name": ""
  },
  "commercialTags": "",
  "description": "Pete Souza是白宫的摄影师，在奥巴马上任之后他为其拍摄了大约两百万张照片。随着奥巴马任期即将结束，他选出了自己最喜欢的55张。下面是其中的20张。",
  "trendingTypeStr": "",
  "externalLink": "http://h5.kankanapp.com.cn/trending/?id=4925&lang=zh_CN"
}];
