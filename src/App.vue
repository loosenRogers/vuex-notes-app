<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Toolbar />
    <NotesList />
    <Editor />

  </div>
</template>

<script lang="ts">
// import './assets/styles/style.css'
import Toolbar from './components/Toolbar.vue'
import NotesList from './components/NotesList.vue'
import Editor from './components/Editor.vue'

import Vue from 'vue'
export default Vue.extend({
  name: 'app',
  components: {
    Toolbar,
    NotesList,
    Editor
  }
})
</script>

