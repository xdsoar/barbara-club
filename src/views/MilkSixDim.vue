<template>
  <v-chart class="chart" :option="options" ref="milks" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'
import originalMilkJson from '@/data/milk_data.json'

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

@Component({
  components: {
    VChart,
  },
})
export default class MilkSixDim extends Vue {
  options = {}

  originalMilk: any[] = originalMilkJson

  calMilkRoles(): Array<any> {
    return this.originalMilk.map((milk) => milk.ID)
  }

  calDims(): Array<any> {
    return [
      { name: '三攻', max: 1 },
      { name: '力智总和', max: 1 },
      { name: '常驻提升', max: 1 },
      { name: '常驻提升-双c', max: 1 },
      { name: '爆发提升', max: 1 },
      { name: '爆发提升-双c', max: 1 },
    ]
  }

  wrapToolTipPanel(milk: any): any {
    return (
      `ID：${milk.ID}\n职业：${milk['职业']}\n常驻力智：${milk['常驻力智']}\n` +
      `三攻：${milk['唱歌后三攻']}\n太阳：${milk['一觉'] + milk['三觉']}\n` +
      `常驻倍率：${milk['常驻提升倍率'].toFixed(2)}\n爆发倍率：${milk[
        '爆发提升倍率'
      ].toFixed(2)}`
    )
  }

  generateData(): Array<any> {
    return this.originalMilk.map((milk) => {
      return {
        name: milk.ID,
        tooltip: {
          show: true,
          trigger: 'item',
          milk: milk,
          panel: this.wrapToolTipPanel(milk),
          formatter: function(params: any) {
            return params.data.tooltip.panel
          },
          extraCssText: 'width: 120px; white-space:pre-wrap;text-align: left',
        },
        value: [
          milk['唱歌后三攻-归一化'],
          milk['力智总和-归一化'],
          milk['常驻提升-归一化'],
          milk['常驻提升-2C-归一化'],
          milk['相对提升伤害-归一化'],
          milk['相对提升伤害2C-归一化'],
        ],
      }
    })
  }

  toolPanel(nam: string): string {
    return nam
  }

  resizeTheChart():void {
    this.$refs?.milks?.resize()
  }

  initOptions(): void {
    console.log(originalMilkJson)
    console.log(this.originalMilk)
    this.options = {
      tooltip: { trigger: 'item' },
      legend: {
        padding: 20,
        selector: [
          {
            type: 'all or inverse',
            // 可以是任意你喜欢的 title
            title: '反选',
          },
        ],
        data: this.calMilkRoles(),
      },
      radar: {
        indicator: this.calDims(),
      },
      series: [
        {
          type: 'radar',
          data: this.generateData(),
        },
      ],
    }
  }
  created(): void {
    this.initOptions()
  }
  mounted(): void {
    window.addEventListener('resize', this.resizeTheChart)
  }
  beforeDestroy(): void {
    window.removeEventListener('resize', this.resizeTheChart)
  }
}
</script>

<style scoped>
.chart {
  /* width: 1000px; */
  width: 100%;
  height: 100vh;
}
</style>
