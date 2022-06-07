<script setup>

import { onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

const checkIsAuthenticated = async () => {
	if(isAuthenticated.value) {
		await store.dispatch('content/loadLatestIndexes')
	}
}

watch(() => isAuthenticated.value, () => checkIsAuthenticated())
onMounted(() => checkIsAuthenticated())

</script>

<template lang="pug">

router-view
Menu(v-if="isAuthenticated")

</template>
