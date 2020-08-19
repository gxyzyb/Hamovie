var postDada=require('../../data/data_posts.js')
Page({

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   /* var posts_content = [{
        date: "Sep 25 2019",
        title: "虾好肥，蟹好壮",
        img_src: "/images/post/crab.png",
        content: "天生一副张牙舞爪的怪模样，但一到秋天便有着“无复羡鱼虾”的肥美，在文人那里，秋天便成了“蟹秋”。从9月到11月，人们从上市品到下市，一年一度与蟹有个美味的约会。尽管现在难得吟诗作对，但是我们能够品尝得到蟹的品种绝对比古人多得多，从大闸蟹、青蟹、膏蟹、花蟹，到外国的阿拉斯加长脚蟹、日本的鳕场蟹、松叶蟹。金秋10月，让我们一起知味寻蟹，品尝属于秋天的丰腴。",
        reading: "112",
        collect_num: "96",
        author_img: "/images/avatar/1.png",
        text_condition: false,
      },
      {
        date: "May 30 2019",
        title: "猫的故事",
        img_src: "/images/post/cat.png",
        content: "猫的故事，猫的故事猫的故事，猫的故事，猫的故事，猫的故事，猫的故事，猫的故事，猫的故事，猫的故事",
        reading: "150",
        collect_num: "6",
        author_img: "/images/avatar/1.png",
        text_condition: false,
      },
      {
        date: "Sep 30 2019",
        title: "比恩的中场故事",
        img_src: "/images/post/bl.png",
        content: "伊拉克战争时期，来自美国德州的19岁技术兵比利·林恩（乔·阿尔文 Joe Alwyn 饰）因为一段偶然拍摄的视频而家喻户晓。那是一次规模不大却激烈非常的遭遇战，战斗中林恩所在的B班班长（范·迪塞尔 Vin Diesel 饰）遭到当地武装分子的伏击和劫持，而林恩为了营救班长不惜铤而走险冲锋陷阵。视频公布于世让他成为全美民众所崇拜的英雄，然而却鲜有人理解他和战友们所经历的一切。为了安葬班长，B班得到了短暂的休假......",
        reading: "150",
        collect_num: "6",
        author_img: "/images/avatar/1.png",
        text_condition: false,
      }
    ] */
    this.setData({
      post_key: postDada.postlist
    });
  },

 
  
})