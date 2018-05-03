const newsType=[
  { newstype: "gn", newstab: "国内" },
  { newstype: "gj", newstab: "国际" },
  { newstype: "cj", newstab: "财经" },
  { newstype: "yl", newstab: "娱乐" },
  { newstype: "js", newstab: "军事" },
  { newstype: "ty", newstab: "体育" },
  { newstype: "other", newstab: "其他" },
]
Page({
  data:{
    winHeight:"",
    tab: 0, //预设当前tab项的值，0为国内的tab值
    newsType: newsType,
    newList:[],
  },
  onPullDownRefresh() {
    this.getNews(this.data.tab,()=>{
      wx.stopPullDownRefresh()
    })
  },
  //滚动切换tab页
  switchTab: function (e) {
    this.setData({
      tab: e.detail.current
    });
    this.getNews(this.data.tab)
  },

  //点击标题切换tab页
  switchSlide: function (e) {
    let cur = e.target.dataset.current;
    if (this.data.tab === cur) { return false; }
    else {
      this.setData({
        tab: cur
      })
    }
  },
  onLoad(){
    //  高度自适应
    wx.getSystemInfo({
      success: res=>{
        let clientHeight = res.windowHeight //客户端窗口高度（px）
        let clientWidth = res.windowWidth //客户端窗口宽度（px）
        let  rpxR = 750 / clientWidth //换算成rpx的百分比
        let calc = clientHeight * rpxR //窗口高度换算成rpx单位
        //窗口高度的rpx值，console.log(calc)
        this.setData({
          winHeight: calc
        })
      }
    }),
    console.log(Array.from({length:newsType.length},(v,i)=>i))
    this.getNews(this.data.tab) //初始化页面，当tab为0也就是国内新闻页面
  },

  onTapNewsDetail:function(e){
    wx.navigateTo({
      url: '/pages/news/details?id=' + e.currentTarget.dataset.id
    })
  },

  getNews(tab,callback){
    wx.request({
      url:'https://test-miniprogram.com/api/news/list',
      data:{
        type: newsType[tab].newstype
      },
      success:res=>{
        let result=res.data.result
        //tab页的新闻类型，console.log("type:" + newsType[tab].newstype)
        this.setNews(result)
      },
      complete:()=>{
        callback && callback()
      }
    })
  },
  setNews(result){
    let newsList=[]
    for(let i=0;i<result.length;i++){
      let firstImage = (result[i].firstImage) ? result[i].firstImage :"/images/no-image.jpg" //当获取到的数据集中没有图片数据，用默认图片代替
      newsList.push({
        id:result[i].id,
        title:result[i].title,
        source:result[i].source,
        date:`${result[i].date.substr(0,10)}`,
        firstImage: firstImage
      })
    }
    this.setData({
      newsList:newsList
    })
  }
})
