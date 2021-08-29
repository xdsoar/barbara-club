<template>
  <div class="hello">
    <h1>芭芭拉后援团组织中。。。。</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="六围面板" name="first">
        <MilkSixDim></MilkSixDim>
      </el-tab-pane>
      <el-tab-pane label="奥兹玛配队速算" name="second">奥兹玛配队速算</el-tab-pane>
      <el-tab-pane label="芭芭拉音乐会" name="third">link。。。</el-tab-pane>
      <el-tab-pane label="还要啥" name="fourth">还要啥</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MilkSixDim from "@/components/MilkSixDim.vue";

@Component({
  components: {
    MilkSixDim,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  activeName = "";

  handleClick() {
    return "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
