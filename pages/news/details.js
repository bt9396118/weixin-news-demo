Page({
  data: {
    id: 0,
    title: "",
    source: "",
    date: "",
    readCount: "",
    contentForDetail:[]
  },
  onPullDownRefresh() {
    this.getNewsDetails(() => {
      wx.stopPullDownRefresh()
    })
  },
  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getNewsDetails()
  },
  getNewsDetails(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      success: res => {
        let result = res.data.result
        let title = result.title
        let source = result.source
        let date = result.date.substr(0, 10)
        let readCount = result.readCount
        let contentForDetail= result.content
        this.setData({
          title: title,
          source: source,
          date: date,
          readCount: readCount,
          contentForDetail: contentForDetail
        })
      },
      complete: () => {
        callback && callback()
      }
    })
  }
})