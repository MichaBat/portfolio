<template>
  <nav class="menu">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about">{{ $t('menu.about') }}</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/cv">{{ $t('menu.cv') }}</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact">{{ $t('menu.contact') }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "MenuComponent",
  components: { RouterLink }
};
</script>

<style scoped>
.menu {
  background-color: #f8f9fa;
  padding: 10px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 15px;
}

.menu a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.menu a:hover {
  text-decoration: underline;
}
</style>
