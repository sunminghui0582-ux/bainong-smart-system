<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">百农智慧农业</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">关于我们</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/team">团队成员</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/research">科研成果</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">项目案例</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">新闻动态</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recruitment">招生信息</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">联系我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
}
</style>