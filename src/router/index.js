import FirstStage from '@/components/firstStage/FirstStage.vue'
import FourthStage from '@/components/fourthStage/FourthStage.vue'
import SecondStage from '@/components/secondStage/SecondStage.vue'
import ThirdStage from '@/components/thirdStage/ThirdStage.vue'
import WordCloud from '@/components/WordCloud.vue'
import Detail from '@/views/detail/Detail.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/firstStage',
      name: 'firstStage',
      component: FirstStage,
    },
    {
      path: '/secondStage',
      name: 'secondStage',
      component: SecondStage,
    },
    {
      path: '/thirdStage',
      name: 'thirdStage',
      component: ThirdStage,
    },
    {
      path: '/fourthStage',
      name: 'fourthStage',
      component: FourthStage,
    },
    {
      path: '/wordcloud',
      name: 'wordcloud',
      component: WordCloud,
    },
  ],
})

export default router
