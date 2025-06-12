<script setup>
// 无需额外 JS 就可以
import { RouterLink } from 'vue-router'
const props = defineProps({
  stageNumber: {
    type: Number,
    default: 1
  },
  stageTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '内容描述……'
  },
  imageUrl: {
    type: String,
    // default: '@/assets/wukong1.png'
  },
  linkTo: {
    type: String,
    default: '/firstStage'
  }
})
</script>
<template>
  <section class="journey-card">
    <div class="cloud-left"></div>
    <div class="cloud-right"></div>
    <div class="ink-splash"></div>
    <div class="card-content">
      <div class="image-section">
        <div class="stage-number">{{ stageNumber }}</div>
        <img :src="imageUrl" alt="人物图像" />
        <div class="gold-foil-overlay"></div>
      </div>
      <div class="text-section">
        <h2 class="title">{{ stageTitle }}</h2>
        <p class="description">{{ description }}</p>
        <RouterLink :to="linkTo" class="explore-link">
          <button class="details-btn">查看详情</button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.3); }
}

@keyframes inkSpread {
  0% { transform: scale(0.8); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 0.9; }
  100% { transform: scale(1); opacity: 0.8; }
}

@keyframes shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

.journey-card {
  position: relative;
  width: 100%;
  height: 100vh; // 使用100vh填满整个视口高度
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'STKaiti', 'KaiTi', '楷体', serif;
  overflow: hidden; // 防止装饰元素溢出
  background: linear-gradient(135deg, #f8f4e6 0%, #e8d9b5 100%);
  
  // 水墨晕染效果
  .ink-splash {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><path fill="%23000" fill-opacity="0.03" d="M400,100 Q550,150 600,300 T650,550 Q600,700 400,750 Q200,700 150,550 T200,300 Q250,150 400,100 Z"/></svg>');
    background-size: cover;
    opacity: 0.8;
    z-index: -2;
    animation: inkSpread 15s ease-in-out infinite;
  }
  
  // 云朵装饰
  .cloud-left, .cloud-right {
    position: absolute;
    width: 180px; // 增大云朵尺寸
    height: 100px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6));
    border-radius: 75px;
    z-index: -1;
    animation: float 6s ease-in-out infinite;
    
    &:before, &:after {
      content: '';
      position: absolute;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6));
      border-radius: 50%;
    }
  }
  
  .cloud-left {
    top: 10%;
    left: 5%;
    
    &:before {
      width: 100px;
      height: 100px;
      top: -35px;
      left: 25px;
    }
    
    &:after {
      width: 130px;
      height: 130px;
      top: -20px;
      left: 60px;
    }
  }
  
  .cloud-right {
    bottom: 10%;
    right: 5%;
    animation-delay: 1s;
    
    &:before {
      width: 100px;
      height: 100px;
      bottom: -20px;
      right: 25px;
    }
    
    &:after {
      width: 115px;
      height: 115px;
      bottom: -10px;
      right: 60px;
    }
  }
  
  .card-content {
    display: flex;
    width: 95%; // 增加宽度占比
    height: 85vh; // 增加高度占比
    max-height: 900px;
    background: linear-gradient(135deg, #f9f0e6 0%, #f5e6c8 100%);
    border-radius: 20px; // 增大圆角
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25); // 增强阴影
    position: relative;
    
    // 金箍棒装饰
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 15px; // 增加高度
      background: linear-gradient(90deg, #d4af37, #f9f3a9, #d4af37);
      z-index: 2;
    }
    
    // 如意云纹边框
    // &:after {
    //   content: '';
    //   position: absolute;
    //   top: 15px;
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
    //   border: 4px solid #d4af37; // 增加边框粗细
    //   border-top: none;
    //   border-radius: 0 0 20px 20px;
    //   pointer-events: none;
    //   z-index: 1;
    //   background-image: 
    //     radial-gradient(circle at 20px 20px, transparent 15px, #d4af37 15px, #d4af37 18px, transparent 18px),
    //     radial-gradient(circle at 20px 20px, transparent 15px, #d4af37 15px, #d4af37 18px, transparent 18px);
    //   background-size: 70px 35px; // 增大图案尺寸
    //   background-position: bottom left, bottom right;
    //   background-repeat: repeat-x;
    //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    // }
  }
  
  .image-section {
    flex: 0 0 50%; // 增加图片部分比例
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
    
    // 金箔岩彩效果遮罩
    .gold-foil-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        rgba(212, 175, 55, 0.2) 0%, 
        rgba(212, 175, 55, 0) 40%, 
        rgba(212, 175, 55, 0.1) 60%, 
        rgba(212, 175, 55, 0.3) 100%);
      background-size: 200% 100%;
      animation: shimmer 8s linear infinite;
      pointer-events: none;
    }
    
    // 图片遮罩，增加岩彩画质感
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(to right, rgba(139, 0, 0, 0.1), transparent),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent 70%);
      mix-blend-mode: multiply;
    }
    
    .stage-number {
      position: absolute;
      top: 35px; // 调整位置
      left: 35px;
      width: 70px; // 增大尺寸
      height: 70px;
      background: linear-gradient(135deg, #d4af37 0%, #f9f3a9 50%, #d4af37 100%);
      color: #8b0000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px; // 增大字体
      font-weight: bold;
      z-index: 3;
      border: 3px solid #f9f0e6;
      box-shadow: 0 0 0 3px #d4af37, 0 0 20px rgba(212, 175, 55, 0.6);
      animation: glow 3s infinite;
    }
  }
  
  .text-section {
    flex: 0 0 50%; // 调整文字部分比例
    padding: 60px; // 增大内边距
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    // 背景添加水墨晕染效果
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23d4af37" fill-opacity="0.05" d="M50 0 L100 50 L50 100 L0 50 Z"/></svg>'),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><path fill="%23000" fill-opacity="0.02" d="M150,50 Q200,100 250,150 T200,250 Q150,300 100,250 T50,150 Q100,100 150,50 Z"/></svg>');
      background-size: 80px 80px, 300px 300px; // 增大背景图案
      background-position: center, center;
      opacity: 0.7;
      z-index: 0;
    }
    
    .title {
      color: #8b0000;
      font-size: 48px; // 增大字体
      margin-bottom: 30px; // 增大间距
      position: relative;
      z-index: 1;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15), 0 0 10px rgba(212, 175, 55, 0.3); // 增强文字阴影和金色光晕
      
      // 标题装饰 - 岩彩风格
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 150px; // 增大装饰线
        height: 5px;
        background: linear-gradient(90deg, #8b0000, #d4af37, transparent);
      }
    }
    
    .description {
      color: #5c3a21;
      font-size: 24px; // 增大字体
      line-height: 1.7;
      margin-bottom: 50px; // 增大间距
      position: relative;
      z-index: 1;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05); // 轻微文字阴影
      /* 新增溢出处理 */
      max-width: 90%;
      overflow-wrap: break-word;
      hyphens: auto;
      padding-right: 20px;
    }
    
    .details-btn {
      align-self: flex-start;
      background: linear-gradient(135deg, #8b0000 0%, #c41e3a 100%);
      color: #f9f0e6;
      border: none;
      padding: 18px 40px; // 增大按钮尺寸
      border-radius: 50px;
      font-family: 'STKaiti', 'KaiTi', '楷体', serif;
      font-size: 22px; // 增大字体
      cursor: pointer;
      position: relative;
      z-index: 1;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 10px 25px rgba(139, 0, 0, 0.35), 0 0 15px rgba(212, 175, 55, 0.2); // 增强阴影和金色光晕
      
      // 波光效果
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: all 0.5s ease;
      }
      
      &:hover {
        transform: translateY(-7px); // 增大悬浮效果
        box-shadow: 0 15px 30px rgba(139, 0, 0, 0.45), 0 0 20px rgba(212, 175, 55, 0.3);
        
        &:before {
          left: 100%;
        }
      }
      
      &:active {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(139, 0, 0, 0.35), 0 0 10px rgba(212, 175, 55, 0.2);
      }
    }
  }
  
  @media (max-width: 1200px) {
    .card-content {
      width: 95%;
      height: 85vh;
    }
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 40px 20px;
    
    .card-content {
      flex-direction: column;
      height: auto;
      width: 100%;
    }
    
    .image-section, .text-section {
      flex: 0 0 auto;
    }
    
    .image-section {
      height: 45vh;
    }
    
    .text-section {
      padding: 40px 30px;
    }
    
    .text-section .title {
      font-size: 36px;
    }
    
    .text-section .description {
      font-size: 20px;
    }
    .description {
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 30px;
      /* 移动端优化 */
      padding-right: 15px;
    }
  }
}
</style>