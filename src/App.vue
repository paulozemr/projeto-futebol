<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <router-link to="/"><h3>Casa</h3></router-link>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>
