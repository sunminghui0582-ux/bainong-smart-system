<template>
  <div class="projects">
    <h1>项目案例</h1>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project._id" class="project-card card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <p class="card-text">技术: {{ project.technologies }}</p>
          <p class="card-text">成果: {{ project.results }}</p>
        </div>
      </div>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Projects',
  data() {
    return {
      projects: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/api/projects');
      this.projects = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
.project-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>