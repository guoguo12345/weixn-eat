// pages/eating/detail/detail.js
var list = {
	  "hot": [
			  {
			    "id": 0,
			    "img": "../../../images/1.jpg",
			    "title": "必胜宅急送",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  },
			  {
			    "id": 1,
			    "img": "../../../images/2.jpg",
			    "title": "大唐夜宵",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1366
			  },
			  {
			    "id": 7,
			    "img": "../../../images/4.jpg",
			    "title": "老三大盘鸡",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1866
			  }
		],
	  "spring": [
		  	{
			    "id": 2,
			    "img": "../../../images/3.jpg",
			    "title": "嘻唰唰火锅",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1766
			  },
			  {
			    "id": 3,
			    "img": "../../../images/4.jpg",
			    "title": "老三大盘鸡",
			    "price": 5,
			    "good": 222,
			    "monthSale": 2566
			  },
			  {
			    "id": 6,
			    "img": "../../../images/3.jpg",
			    "title": "嘻唰唰火锅",
			    "price": 5,
			    "good": 233,
			    "monthSale": 5566
			  }
	  ],
	 
	  "summer": [
		  	{
			    "id": 4,
			    "img": "../../../images/1.jpg",
			    "title": "必胜宅急送",
			    "price": 5,
			    "good": 122,
			    "monthSale": 1888
			  },
			  {
			    "id": 5,
			    "img": "../../../images/2.jpg",
			    "title": "大唐夜宵",
			    "price": 5,
			    "good": 262,
			    "monthSale": 1966
			  }
	  ]  
}
Page({
  data:{
  	title: "",
  	isshowNotice: true,
    current: 0,
    list: [] ,
    counts: [0,0,0],
    allCounts: 0,
    allPrice: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
    	title: options.title,
    	list: list.hot
    });
    wx.setNavigationBarTitle({
		  title: this.data.title
		});
  },
	getAllCounts(arr) {
		var num = 0;
		var allPrice = 0;
		for(var i=0;i<arr.length;i++) {
			num += arr[i];
			allPrice += arr[i]*this.data.list[i].price
		}
		this.setData({
			allCounts: num,
			allPrice: allPrice
		});
		
	},
//加入购物车
//添加
  insCount(event) {
  	var ord = event.target.dataset.ord;
  	var that = this;
		this.setData({
			counts: (function(){
				var arr = [...that.data.counts];
				arr[ord] = ++ that.data.counts[ord];
				return arr;
			})()
		});
		wx.showToast({
			  title: '添加成功',
			  icon: 'success',
			  duration: 2000,
			  success() {
			  	that.getAllCounts(that.data.counts);
			  }
		})
	//	console.log(this.data.allCounts);
  },
//减少
	desCount(event) {
		var ord = event.target.dataset.ord;
  	var that = this;
		this.setData({
			counts: (function(){
				var arr = [...that.data.counts];
				arr[ord] = -- that.data.counts[ord];
				return arr;
			})()
		}) 
		this.getAllCounts(this.data.counts);
  },
//左侧导航栏切换
//热销
  changeHot() {
  	this.setData({
  		list: list.hot
  	});
  },
//春季新品
  changeSpring() {
  	this.setData({
  		list: list.spring
  	});
  },
//夏季新品
  changeSummer() {
  	this.setData({
  		list: list.summer
  	});
  },
//点击切换swiper
  touchSlide(event) {
  	console.log(event.target.dataset.index);
  	this.setData({
  		current: event.target.dataset.index
  	});
  },
  changeSlide(event) {
  	console.log(event.detail);
  	this.setData({
  		current: event.detail.current
  	});
  },
//显示公告
  showNotice() {
  	this.setData({
  		isshowNotice: false
  	});
  },
//隐藏公告
  hideNotice() {
  	this.setData({
  		isshowNotice: true
  	});
  },
  
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})