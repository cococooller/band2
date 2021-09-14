Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onInitChart(F2, config) {
      const chart = new F2.Chart(config);
      const data = [
        {
          date: "2021-09-05",
          value: 116,
        },
        {
          date: "2021-09-06",
          value: 129,
        },
        {
          date: "2021-09-07",
          value: 135,
        },
        {
          date: "2021-09-08",
          value: 86,
        },
        {
          date: "2021-09-09",
          value: 73,
        },
        {
          date: "2021-09-10",
          value: 85,
        },
        {
          date: "2021-09-11",
          value: 73,
        },
        {
          date: "2021-09-12",
          value: 68,
        },
        {
          date: "2021-09-13",
          value: 92,
        },
        {
          date: "2021-09-14",
          value: 130,
        },
        {
          date: "2021-09-15",
          value: 245,
        },
        {
          date: "2021-09-16",
          value: 139,
        },
        {
          date: "2021-09-17",
          value: 115,
        },
        {
          date: "2021-09-18",
          value: 111,
        },
        {
          date: "2021-09-19",
          value: 309,
        },
        {
          date: "2021-09-20",
          value: 206,
        },
        {
          date: "2021-09-21",
          value: 137,
        },
        {
          date: "2021-09-22",
          value: 128,
        },
        {
          date: "2021-09-23",
          value: 85,
        },
        {
          date: "2021-09-24",
          value: 94,
        },
        {
          date: "2021-09-25",
          value: 71,
        },
        {
          date: "2021-09-26",
          value: 106,
        },
        {
          date: "2021-09-27",
          value: 84,
        },
        {
          date: "2021-09-28",
          value: 93,
        }
      ];

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0,
        },
        date: {
          type: "timeCat",
          range: [0, 1],
          tickCount: 3,
        },
      });
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: "xy",
        crosshairsStyle: {
          lineDash: [2],
        },
      });
      chart.axis("date", {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        },
      });
      chart.line().position("date*value");
      chart.render();

      // 注意：需要把chart return 出来
      return chart;
    },
  },
});
