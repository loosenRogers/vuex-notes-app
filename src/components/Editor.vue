<template>
  <div id="note-editor">
    <textarea
      :value="activeNote.text"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  mounted(){
    // console.log(this.activeNote)
  },
  computed: {
    activeNote() {
      return this.$store.getters.activeNote
    }
  },
  methods: {
    editNote(e){
      this.$store.commit('EDIT_NOTE', e.target.value)
    }
  }
}
</script>
