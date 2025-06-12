<!-- src="https://d.eqxiu.com/s/wVrt9d2k?eip=true" -->
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.go(-1)  // 返回上一页
}

const h5Url = 'https://e.eqxiu.com/s/wVrt9d2k?eip=true'
</script>

<template>
  <div class="page-container">
    <button class="back-btn" @click="goBack">返回</button>
    <div class="content-wrapper">
      <div class="phone-frame">
        <div class="phone-header">
          <div class="status-bar">
            <span class="time">7:08</span>
            <span class="battery">电量充足</span>
          </div>
          <h1 class="page-title">金箍轨迹之受封斗战胜佛</h1>
        </div>
        <iframe 
          :src="h5Url"
          width="100%"
          height="100%"
          allowfullscreen
          class="h5-iframe"
        ></iframe>
      </div>
      <div class="qr-section">
        <div class="qr-wrapper">
          <img src="@/assets/qr_code4.png" alt="扫码查看" class="qr-code" />
          <p class="scan-text">扫码查看</p>
        </div>
        <div class="action-buttons">
          <button class="action-btn primary">点赞评论</button>
          <button class="action-btn secondary">转发分享</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #f8f4e6 0%, #e8d9b5 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;

  // 水墨效果装饰
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

.back-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
  padding: 12px 24px;
  background: linear-gradient(135deg, #8b0000 0%, #c41e3a 100%);
  color: #f9f0e6;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'STKaiti', 'KaiTi', '楷体', serif;
  font-size: 18px;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
  }
}

.content-wrapper {
  display: flex;
  gap: 60px;
  align-items: center;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.phone-frame {
  width: 340px;
  height: 570px;
  background: #fff;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 12px solid #1a1a1a;
  display: flex;
  flex-direction: column;

  .phone-header {
    background: #fff;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    flex-shrink: 0;

    .status-bar {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }

    .page-title {
      font-size: 18px;
      color: #333;
      margin: 0;
      text-align: center;
      font-family: 'STKaiti', 'KaiTi', '楷体', serif;
    }
  }

  .h5-iframe {
    width: 120%;
    height: 115%;
    border: none;
    margin: 0;
    padding: 0;
    display: block;
  }
}



.qr-section {
  text-align: center;

  .qr-wrapper {
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 4px solid #d4af37;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #d4af37, #f9f3a9, #d4af37);
      z-index: -1;
      border-radius: 22px;
    }
  }

  .qr-code {
    width: 200px;
    height: 200px;
    margin-bottom: 15px;
  }

  .scan-text {
    font-family: 'STKaiti', 'KaiTi', '楷体', serif;
    font-size: 20px;
    color: #8b0000;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .action-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
  }

  .action-btn {
    padding: 12px 30px;
    border-radius: 25px;
    font-family: 'STKaiti', 'KaiTi', '楷体', serif;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.primary {
      background: linear-gradient(135deg, #8b0000 0%, #c41e3a 100%);
      color: #f9f0e6;
      border: none;
      box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
      }
    }

    &.secondary {
      background: #fff;
      color: #8b0000;
      border: 2px solid #8b0000;

      &:hover {
        background: #fff5f5;
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 1200px) {
  .content-wrapper {
    flex-direction: column;
    gap: 40px;
  }

  .phone-frame {
    width: 320px;
    height: 690px;
  }

  .qr-section .qr-code {
    width: 160px;
    height: 160px;
  }
}
</style>