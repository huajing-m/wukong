<script setup>
import { RouterLink } from 'vue-router'
import './style.css'
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="title-frame">
        <div class="cloud-frame">
          <h1 class="main-title">金箍轨迹</h1>
        </div>
        <h2 class="sub-heading">数字人文视域下《西游记》
          <br>孙悟空成长多维分析的可视化呈现</h2>
      </div>
      <div class="subtitle">本项目以数字人文为方法论支撑，
        通过大模型对《西游记》百万字文本进行结构化处理，
        聚焦孙悟空从石猴到斗战胜佛的蜕变过程，突破传统线性叙事研究的局限。
        在新技术革命与文化传承深度融合的语境下，运用动态可视化手段重构经典文学人物成长路径，
        既是对传统文化的创新性解读，也是数字人文研究范式在古典文学领域的深度实践。</div>
      <RouterLink to="/detail" class="explore-link">
        <button class="explore-btn">开启旅程</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 0;
  color: #1a1a1a;
  background: linear-gradient(135deg, #f8f4e6 0%, #e8d9b5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><path fill="%23000" fill-opacity="0.03" d="M400,100 Q550,150 600,300 T650,550 Q600,700 400,750 Q200,700 150,550 T200,300 Q250,150 400,100 Z"/></svg>');
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
}

.content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  text-align: center;
}

.title-frame {
  margin-bottom: 3rem;
}

.cloud-frame {
  position: relative;
  display: inline-block;
  padding: 2rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: url('@/assets/祥云.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
  }
}

.main-title {
  font-family: 'STKaiti', 'KaiTi', '楷体', serif;
  font-size: 4.5rem;
  color: #8b0000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, #d4af37, #8b0000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 2rem;
}

.sub-heading {
  font-family: 'STKaiti', 'KaiTi', '楷体', serif;
  font-size: 2rem;
  color: #8b0000;
  margin: 1rem 0;
  line-height: 1.4;
}

.subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: justify;
  letter-spacing: 1px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.explore-btn {
  background: linear-gradient(135deg, #8b0000 0%, #c41e3a 100%);
  color: #f9f0e6;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'STKaiti', 'KaiTi', '楷体', serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #d4af37, #f9f3a9, #d4af37);
    z-index: -1;
    border-radius: 32px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 5%;
  }

  .main-title {
    font-size: 3rem;
  }

  .sub-heading {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1rem;
    padding: 1.5rem;
  }

  .explore-btn {
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
  }
}
</style>