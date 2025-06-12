<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Stage from '../stage/Stage.vue';
import wukong1 from '@/assets/wukong1.jpg';
import wukong2 from '@/assets/wukong2.png';
import wukong3 from '@/assets/wukong3.png';
import wukong4 from '@/assets/wukong4.png';
</script>

<template>
  <NavBar logo="@/assets/logo.png" />
  
  <Stage 
  :stage-number="1"
    stage-title="金箍轨迹之猴王出世"
    description="作为花果山水帘洞的「美猴王」，孙悟空以「齐天大圣」的自封名号挑战天庭秩序。他闹龙宫夺金箍棒、改生死簿、大闹蟠桃会，喊出「皇帝轮流做，明年到我家」的宣言，展现原始生命力的狂飙。此阶段以「金箍棒」「天宫」为核心符号，行为充满破坏性，最终被五行山镇压，标志着单纯武力对抗体制的失败。「五行山」的出现，成为其野性时代的休止符。​"
    :image-url="wukong1"
    link-to="/firstStage"
  />
  <Stage 
  :stage-number="2"
    stage-title="金箍轨迹之磨合与冲突"
    description="被唐僧揭符救出后，孙悟空被迫戴上「紧箍咒」，成为「孙行者」。此阶段的核心冲突是「杀生」与「慈悲」的理念对立 —— 他三打白骨精却被师父误解为「行凶」，喊出「鸟尽弓藏」的愤懑，既体现对体制的抗拒，又隐含对团队认同的渴望。他开始依赖外部力量（如请观音收伏白龙马），但协作模式仍显生硬，「呆子」「夯货」的称呼暴露对师弟的嫌弃，本质是野性未驯与佛教伦理的撕裂。"
    :image-url="wukong2"
    link-to="/secondStage"
  />
  <Stage 
  :stage-number="3"
    stage-title="金箍轨迹之行者炼心"
    description="经历平顶山、火焰山等战役，孙悟空完成「兄弟」到「领袖」的转型。他学会分工调度：让八戒诱敌、沙僧护法、自己主攻（如第 32 回巡山分工），并熟练调用神佛资源（「菩萨」「天王」频现），如请观音收红孩儿、借老君金丹救乌鸡国王。此阶段「设法」「宝贝」成为策略象征，他以变装诱敌、借物克敌等手段替代蛮干，甚至主动使用「紧箍咒」自证身份（真假美猴王事件），标志着从「反体制」到「善用体制」的认知飞跃。​"
    :image-url="wukong3"
    link-to="/thirdStage"
  />
  <Stage 
  :stage-number="4"
    stage-title="金箍轨迹之受封斗战胜佛"
    description="抵达灵山前，孙悟空已能自如融合「齐天大圣」与「贫僧」双重身份。他在狮驼岭不再一味杀戮，而是设计智取；面对青牛精、犀牛精等体制内妖怪，优先「问明来历，送归原主」。取经成功后，他请求除去紧箍咒，却发现「金箍自然去矣」，标志外部规训已内化为自我约束。最终，他受封「斗战胜佛」，不仅是对其佛门修行的认可，更象征着他以「战斗精神」完成佛道价值的终极认同。这种认同并非磨灭棱角的妥协，而是让他在保留反抗腐朽锋芒的同时，将桀骜不驯的野性升华为守护正义的力量，完成了从「无法无天」到「破界立道」的蜕变。"
    :image-url="wukong4"
    link-to="/fourthStage"
  />
</template>
<style lang="css" scoped>

body {
  counter-reset: stage;
}
</style>