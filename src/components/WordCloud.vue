<script setup>
import { ref } from 'vue'
import cloudData from '@/data/cloudData'
const selectedCloud = ref(null)
const showSidebar = ref(false)


const selectCloud = (cloud) => {
  selectedCloud.value = cloud
  showSidebar.value = true
}
</script>

<template>
  <NavBar logo="@/assets/logo.png" />
  <div class="wordcloud-container">
    <div class="wordcloud-grid" :class="{ 'with-sidebar': showSidebar }">
      <div v-for="cloud in cloudData" 
           :key="cloud.id" 
           class="cloud-card"
           @click="selectCloud(cloud)">
        <div class="card-content">
          <h3 class="card-title">{{ cloud.title }}</h3>
          <div class="image-wrapper">
            <img :src="cloud.image" :alt="cloud.title" />
          </div>
        </div>
      </div>
    </div>

    <transition name="slide">
      <div v-if="showSidebar" class="analysis-sidebar">
        <div class="sidebar-header">
          <h2>{{ selectedCloud?.title }}</h2>
          <button class="close-btn" @click="showSidebar = false">×</button>
        </div>
        <div class="sidebar-content">
          <!-- 标题1 -->
          <div>
            <div class="keywords-section">
              <h3>{{ selectedCloud?.title1 }}</h3>
              <div class="keywords-list">
                <span v-for="keyword in selectedCloud?.analysis1.keywords" 
                      :key="keyword" 
                      class="keyword-tag">
                  {{ keyword }}
                </span>
              </div>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis1.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis1.insights }}</p>
            </div>
          </div>
          
          <!-- 标题2 -->
          <div>
            <div class="keywords-list">
              <span v-for="keyword in selectedCloud?.analysis2.keywords" 
                    :key="keyword" 
                    class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis2.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis2.insights }}</p>
            </div>
          </div>

          <!-- 标题3 -->
          <div>
            <div class="keywords-list">
              <span v-for="keyword in selectedCloud?.analysis3.keywords" 
                    :key="keyword" 
                    class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis3.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis3.insights }}</p>
            </div>
          </div>
          <!-- 标题4 -->
          <div>
            <div class="keywords-section">
              <h3>{{ selectedCloud?.title2 }}</h3>
              <div class="keywords-list">
                <span v-for="keyword in selectedCloud?.analysis4.keywords" 
                      :key="keyword" 
                      class="keyword-tag">
                  {{ keyword }}
                </span>
              </div>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis4.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis4.insights }}</p>
            </div>
          </div>
          
          <!-- 标题2 -->
          <div>
            <div class="keywords-list">
              <span v-for="keyword in selectedCloud?.analysis5.keywords" 
                    :key="keyword" 
                    class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis5.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis5.insights }}</p>
            </div>
          </div>

          <!-- 标题3 -->
          <div>
            <div class="keywords-list">
              <span v-for="keyword in selectedCloud?.analysis6.keywords" 
                    :key="keyword" 
                    class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis6.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis6.insights }}</p>
            </div>
          </div>
          <!-- 标题1 -->
          <div>
            <div class="keywords-section">
              <h3>{{ selectedCloud?.title3 }}</h3>
              <div class="keywords-list">
                <span v-for="keyword in selectedCloud?.analysis7.keywords" 
                      :key="keyword" 
                      class="keyword-tag">
                  {{ keyword }}
                </span>
              </div>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis7.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis7.insights }}</p>
            </div>
          </div>
          
          <!-- 标题2 -->
          <div>
            <div class="keywords-list">
              <span v-for="keyword in selectedCloud?.analysis8.keywords" 
                    :key="keyword" 
                    class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis8.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>台词印证：</h3>
              <p>{{ selectedCloud?.analysis8.insights }}</p>
            </div>
          </div>

          <!-- 标题3 -->
          <div>
            <div class="keywords-list">
              <span v-for="keyword in selectedCloud?.analysis9.keywords" 
                    :key="keyword" 
                    class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
            <div class="analysis-section">
              <h3>情节映射：</h3>
              <p>{{ selectedCloud?.analysis9.summary }}</p>
            </div>
            <div class="insights-section">
              <h3>结论：</h3>
              <p>{{ selectedCloud?.analysis9.insights }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.wordcloud-container {
  display: flex;
  min-height: 100vh;
  padding-top: 70px;
  background: linear-gradient(135deg, #f8f4e6 0%, #e8d9b5 100%);
}

.wordcloud-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 40px;
  width: 100%;
  transition: all 0.3s ease;

  &.with-sidebar {
    width: calc(100% - 800px);
  }
}

.cloud-card {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(145deg,  #fceabb,#f8b500);
    z-index: -1;
    margin: -2px;
    border-radius: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    
    &::before {
      opacity: 1;
    }
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-family: 'STKaiti', 'KaiTi', '楷体', serif;
    color: #8b0000;
    text-align: center;
    margin-bottom: 15px;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  }

  .image-wrapper {
    width: 100%;
    padding: 0;
    background: rgba(255,255,255,0.9);
    border-radius: 10px;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
}

.analysis-sidebar {
  width: 800px;
  background: rgba(255,255,255,0.95);
  border-left: 2px solid #d4af37;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 70px;
  bottom: 0;
  overflow-y: auto;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #d4af37;

    h2 {
      font-family: 'STKaiti', 'KaiTi', '楷体', serif;
      color: #8b0000;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      color: #8b0000;
      font-size: 24px;
      cursor: pointer;
      padding: 5px;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .keywords-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;

    .keyword-tag {
      background: linear-gradient(45deg, #8b0000, #c41e3a);
      color: #fff;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 0.9rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
  }

  h3 {
    font-family: 'STKaiti', 'KaiTi', '楷体', serif;
    color: #8b0000;
    margin: 20px 0 10px;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 1200px) {
  .wordcloud-grid {
    grid-template-columns: 1fr;
    
    &.with-sidebar {
      width: calc(100% - 800px);
    }
  }

  .analysis-sidebar {
    width: 800px;
  }
}

@media (max-width: 768px) {
  .wordcloud-grid {
    &.with-sidebar {
      width: 100%;
      opacity: 0.3;
    }
  }

  .analysis-sidebar {
    width: 100%;
  }
}
</style>