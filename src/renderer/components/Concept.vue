<template>
  <div>

    <!-- CONTEXT -->
    <Context :data="data.context" :isEdit="isEdit"/>

    <!-- ALL PAGES -->
    <Page v-for="(page, index) in data.pages" :concept="concept" :index="index ":data="page" :key="`page-${index}`" :_id="`page-${index}`" :subject="subject" :isEdit="isEdit" @new-note="handleNewNote"/>
  </div>
</template>
</style>

<script>
import Context from './Context.vue'
import Page from './Page.vue'

export default {
  components: {
    Page,
    Context
  },
  props: {
    data: {
      type: Object,
      default: {}
    },
    subject: {
      type: Object,
      default: () => {}
    },
    concept: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      currentNote: null
    }
  },
  methods: {
    //-----------
    //-- this handles the new-note event from Page
    //-- and passes it on to the Topic
    //-----------
    handleNewNote(el){
      this.$emit('new-note', el)
    }
  }
}
</script>
