var app = getApp();

Page({

  data: {
    areaList: [],
    isLoading: false
  },

  onLoad() {
    console.log("onload");
    this.loadPersonCenter('person', 1);
  },

  loadPersonCenter(type, page) {
    this.setData({
      areaList: areaData.map((item, index) => {
        console.log("load personal center");
        return item;
      })
    });
  }
})

let areaData = [{
  "index": "0",
  "itemData": [{
    "index": "01",
    "name": "积分商城"
  }]
}, {
  "index": "1",
  "itemData": [{
    "index": "11",
    "name": "付费服务"
  }, {
    "index": "12",
    "name": "卡券中心"
  }, {
    "index": "13",
    "name": "活动广场"
  }]
}, {
  "index": "2",
  "itemData": [{
    "index": "21",
    "name": "消息中心"
  }, {
    "index": "22",
    "name": "意见反馈"
  }, {
    "index": "23",
    "name": "帮助中心"
  }]
}];