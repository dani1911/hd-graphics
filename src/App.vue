<template>
	<TheHeader />
	<TheMainNav />
	<RouterView />
	<TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMainNav from './components/TheMainNav.vue'
import TheFooter from './components/TheFooter.vue'

export default {
	components: {
		TheHeader,
		TheMainNav,
		TheFooter,
	},
}
</script>
