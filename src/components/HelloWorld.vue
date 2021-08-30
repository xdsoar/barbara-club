<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="奶量六围面板" name="first">
        <MilkSixDim></MilkSixDim>
      </el-tab-pane>
      <el-tab-pane label="奥兹玛配队速算" name="second">奥兹玛配队速算</el-tab-pane>
      <el-tab-pane label="芭芭拉音乐会" name="third">敬请期待</el-tab-pane>
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
