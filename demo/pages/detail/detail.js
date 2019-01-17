var app = getApp();

Page({

  data: {
    targetData: [],
    isLoading: false
  },

  onLoad() {
    console.log("detail#onload");
    this.loadPlanDetail('person', 1);
  },

  loadPlanDetail(type, page) {
    this.setData({
      targetData: targetData.map((item, index) => {
        console.log("load plan detail");
        console.log(item.targetMarket);
        return item;
      })
    });
  }
})

let targetData = [{
  "targetValue": "13%",
  "targetMarket": "A股",
  "targetStyle": "稳健性"
}]