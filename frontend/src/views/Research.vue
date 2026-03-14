<template>
  <div class="research">
    <h1>科研成果</h1>
    <div v-if="research.length">
      <div v-for="item in research" :key="item._id" class="research-item card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <p class="card-text">类型: {{ item.type }}</p>
          <a v-if="item.link" :href="item.link" target="_blank">查看详情</a>
        </div>
      </div>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Research',
  data() {
    return {
      research: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/api/research');
      this.research = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
.research-item {
  max-width: 600px;
  margin: 0 auto;
}
</style>