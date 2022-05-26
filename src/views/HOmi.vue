<script setup></script>
import { RouterLink, RouterView } from "vue-router";
<template>
  <main>
    <h1>Bem vindo a esse site de futebol</h1>
    <br />
    <h3>Segue os routers ate as informações:</h3>
    <nav>
      <router-link to="/times"><h3>Times</h3></router-link>
      <router-link to="/about"><h3>Jogadores</h3></router-link>
    </nav>
  </main>
</template>
