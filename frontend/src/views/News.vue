<template>
  <div class="news">
    <h1>新闻动态</h1>
    <div v-if="news.length">
      <div v-for="item in news" :key="item._id" class="news-item card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.content }}</p>
          <p class="card-text">日期: {{ new Date(item.date).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'News',
  data() {
    return {
      news: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/api/news');
      this.news = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
.news-item {
  max-width: 600px;
  margin: 0 auto;
}
</style>