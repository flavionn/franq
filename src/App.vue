<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

</script>

<template lang="pug">

router-view
Menu(v-if="isAuthenticated")

</template>
