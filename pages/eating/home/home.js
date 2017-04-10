Page({
    data: {
    	aa: "true",
    	refresh: true,
        current: 0,
        list: [
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
			    "monthSale": 1566
			  },
			  {
			    "id": 2,
			    "img": "../../../images/3.jpg",
			    "title": "嘻唰唰火锅",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  },
			  {
			    "id": 3,
			    "img": "../../../images/4.jpg",
			    "title": "老三大盘鸡",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  },
			  {
			    "id": 4,
			    "img": "../../../images/5.jpg",
			    "title": "必胜宅急送",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  },
			  {
			    "id": 5,
			    "img": "../../../images/6.jpg",
			    "title": "大唐夜宵",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  },
			  {
			    "id": 6,
			    "img": "../../../images/7.jpg",
			    "title": "嘻唰唰火锅",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  },
			  {
			    "id": 7,
			    "img": "../../../images/8.jpg",
			    "title": "老三大盘鸡",
			    "price": 5,
			    "good": 222,
			    "monthSale": 1566
			  }
		],
        swiper: {
            indicator: false,
            autoplay: false,
            duration: 500
        },
        array: ['综合排序', '速度最快', '评分最高', '起送价最低'],
	    index: 0,
    },
    bindPickerChange: function(e) {
	    console.log('picker发送选择改变，携带值为', e.detail.value)
	    this.setData({
	      index: e.detail.value
	    })
	},
    onLoad: function() {
    	
//    var that = this;
//      wx.request({
//          url: 'http://localhost/mock/list.json', //跨域、仅为示例，并非真实的接口地址
//
//          header: {
//              'content-type': 'application/json'
//          },
//          success: function(res) {
//              console.log(res.data)
//              that.setData({
//                list: res.data
//              })
//          }
//      })
		this.setData({
			list: [
			  {
			    "id": 0,
			    "img": "../../../images/1.jpg",
			    "title": "小六汤包"
			  },
			   {
			    "id": 1,
			    "img": "../../../images/2.jpg",
			    "title": "大唐夜宵"
			  },
			  {
			    "id": 2,
			    "img": "../../../images/3.jpg",
			    "title": "嘻唰唰火锅"
			  },
			  {
			    "id": 3,
			    "img": "../../../images/4.jpg",
			    "title": "老三大盘鸡"
			  },
			   {
			    "id": 4,
			    "img": "../../../images/5.jpg",
			    "title": "必胜宅急送"
			  },
			   {
			    "id": 5,
			    "img": "../../../images/6.jpg",
			    "title": "大唐夜宵"
			  },
			  {
			    "id": 6,
			    "img": "../../../images/7.jpg",
			    "title": "嘻唰唰火锅"
			  },
			  {
			    "id": 7,
			    "img": "../../../images/8.jpg",
			    "title": "老三大盘鸡"
			  }
			]
		});

    },

    changeSlide: function(event) {
      console.log(event.detail.current);
      this.setData({
        current : event.detail.current
      })
    },

    touchSlide: function(event) {
      this.setData({
        current: event.target.dataset.index
      })
    },
    //上拉刷新
    refresh() {
    	console.log(111);
    	this.setData({refresh: false});
    	var that = this;
    	wx.request({
			url: 'http://localhost/mock/refresh.json', 
			header: {
			    'content-type': 'application/json'
			},
			success: function(res) {
				setTimeout(function(){
					that.setData({
				   	    list: res.data.concat(that.data.list),
				   	    refresh: true		 	 
				    });
			    	console.log("刷新完");
				},1000);   
			}
		})
    },
    onPullDownRefresh: function(){
    	console.log("top");
		wx.stopPullDownRefresh()
	}
})
