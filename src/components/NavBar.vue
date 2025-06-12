<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  logo: string
}>()
</script>

<template>
  <div class="detail-container">
    <nav class="detail-nav">
      <img src="@/assets/孙悟空.png" class="nav-logo" alt="西游记logo">
      <div class="nav-items">
        <RouterLink 
          to="/detail" 
          class="nav-item"
          active-class="active"
        >
          <i class="iconfont icon-a-ziyuan1"></i>
          
          成长阶段
        </RouterLink>
        <RouterLink 
          to="/WordCloud" 
          class="nav-item"
          active-class="active"
        >
        <i class="iconfont icon-ciyun1"></i>
          词云分析
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* 原有导航栏样式保持不变 */
.detail-container {
  padding-top: 0px;
}
.detail-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background: linear-gradient(45deg, rgba(139,0,0,1), rgba(255,215,0,1));
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
  /* border-bottom: 2px solid rgba(255,215,0,1); */
  
  .nav-logo {
    height: 50px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    position: static;
    margin-left: 20px;
  }

  .nav-items {
    display: flex;
    gap: 40px;
    margin-right: 40px;
  }
}
.nav-item {
  color: #FFD700;
  text-decoration: none;
  font-family: '站酷酷黑体', cursive;
  font-size: 1.2rem;
  padding: 8px 16px;
  position: relative;
  transition: all 0.3s ease;
  background: linear-gradient(to right, #8B0000, #4B0082);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFD700, #8B0000);
    transition: all 0.3s;
    transform: translateX(-50%);
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    &::after {
      content: '·';
      position: absolute;
      right: -10px;
      top: -5px;
      color: #FFD700;
      font-size: 1.5rem;
      text-shadow: 0 0 8px rgba(255,215,0,0.5);
    }
  }
}
</style>