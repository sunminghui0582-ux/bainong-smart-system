<template>
  <div class="team">
    <h1>团队成员</h1>
    <div v-if="members.length">
      <div v-for="member in members" :key="member._id" class="member-card card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ member.name }}</h5>
          <p class="card-text">{{ member.role }}</p>
          <p class="card-text">{{ member.bio }}</p>
          <p class="card-text">{{ member.email }}</p>
        </div>
      </div>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Team',
  data() {
    return {
      members: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/api/members');
      this.members = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
.member-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>