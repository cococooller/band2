Page({
  data: {
    show: 'true',
    current: 'homepage',
    list: [
      {
        name: '王力宏',
        id: '1',
        class: '高二三班',
        gender: '男',
        age: '19岁',
        online: true,
        health: {
          heartRate: '60',
          bloodOxygen: '60',
          pressure: '80/190'
        }
      },
      {
        name: 'xk',
        class: '高二三班',
        gender: '女',
        age: '19岁',
        online: false,
        health: {
          heartRate: '60',
          bloodOxygen: '60',
          pressure: '80/190'
        }
      },
      {
        name: 'xjp',
        class: '高二三班',
        gender: '男',
        age: '19岁',
        online: true,
        health: {
          heartRate: '60',
          bloodOxygen: '60',
          pressure: '80/190'
        }
      },
    ]
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    // my.navigateTo({ url: '../detail' })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  handleLoading() {

  },
  handleChange(event) {
    // event.detail 的值为当前选中项的索引
    console.log(event);

    this.setData({ current: event.detail.key });
  },
});
