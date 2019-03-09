import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {}
  },
  getters: {
    notes: state => state.notes,
    activeNote: state => state.activeNote,
    favoriteNotes: state => {
      return state.notes.filter(note => note.favorite)
    }
  },
  mutations: {
    ADD_NOTE (state){
      const newNote = {
        text: "New note",
        favorite: false
      }
      state.notes.push(newNote)
      state.activeNote = newNote
    },
    DELETE_NOTE (state){
      let index = state.notes.indexOf(state.activeNote)
      if(index > -1){
        state.notes.splice(index,1)
      }
      state.activeNote = state.notes[0]
    },
    TOGGLE_FAVORITE (state){
      state.activeNote.favorite = !state.activeNote.favorite
    },
    SET_ACTIVE_NOTE (state, note) {
      state.activeNote = note
    },
    EDIT_NOTE (state, text) {
      state.activeNote.text = text
    },
  },
  actions: {

  }
})
