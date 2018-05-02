# weixin-news-demo
1.新闻列表页面
/pages/index/index.wxml /pages/index/index.wxss /pages/index/index.js
（1）主界面：应用包含一个主界面，来展示不同分类下的新闻列表，包含图标及题目。
（2）新闻列表可滑动切换不同分类
（3）每个列表项都显示有关该新闻的标题，作者以及发布时间。如果可以获取的
话，图片也应包括在内。当获取不到图片时使用一张默认图片（/images/no-image.jpg）来代替。
（4）下拉刷新
（5）iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部。
（6）可以从主界面的列表项跳转到对应新闻的详情页
2.新闻详情页面
/pages/news/details.wxml /pages/news/details.wxss /pages/news/details.js /pages/news/details.json
（1）详情界面包含有关该新闻的标题，作者，发布时间，阅读数以及正文。如相关新闻
含有图片信息，则显示图片，如图片有图名及来源，则显示在图片下方。
（2）可以从新闻详情页返回到主界面。
