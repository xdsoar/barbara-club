<template>
  <v-chart class="chart" :option="options" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

@Component({
  components: {
    VChart,
  },
})
export default class MilkSixDim extends Vue {
  options = {};
  created() {
    this.options = {
      title: {
        text: "芭芭拉奶量检测报告",
      },
      legend: {
        data: ["Deer °", "蝶舞花翩翩", "凌采露华", "伊莉雅", "桃花舞翩翩"],
      },
      radar: {
        indicator: [
          { name: "三攻", max: 100 },
          { name: "力智总和", max: 100 },
          { name: "常驻buff", max: 100 },
          { name: "常驻提升-双c", max: 100 },
          { name: "爆发提升", max: 100 },
          { name: "爆发提升-双c", max: 100 },
        ],
      },
      series: [
        {
          type: "radar",
          data: [
            {
              value: [
                88.68360277136259, 100.0, 100.0, 100.0, 99.43782208109937,
                99.21314369184995,
              ],
              name: "Deer °",
            },

            {
              value: [
                82.7752117013087, 94.64606172185184, 88.98687931477592,
                98.8100656544247, 91.04939878194784, 98.30381706975506,
              ],
              name: "蝶舞花翩翩",
            },

            {
              value: [
                100.0, 92.23595265325858, 92.44336144122222, 92.53601360542505,
                100.0, 100.0,
              ],
              name: "凌采露华",
            },

            {
              value: [
                77.5211701308699, 97.65776823156388, 91.6542838965611,
                91.90277903709445, 90.01613658841289, 90.00681846664203,
              ],
              name: "伊莉雅",
            },

            {
              value: [
                76.78983833718245, 88.4645782774043, 79.56275374951481,
                88.34561883923709, 82.33303836343762, 88.90508901633135,
              ],
              name: "桃花舞翩翩",
            },
          ],
        },
      ],
    };
  }
}
</script>

<style scoped>
.chart {
  width: 900px;
  height: 800px;
}
</style>