<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted(){
    // console.log(this.activeNote)
  },
  computed: {
    activeNote() {
      return this.$store.getters.activeNote
    }
  },
  methods: {
    ...mapMutations({
      addNote: 'ADD_NOTE',
      deleteNote: 'DELETE_NOTE',
      toggleFavorite: 'TOGGLE_FAVORITE'
    })
  }
}
</script>
