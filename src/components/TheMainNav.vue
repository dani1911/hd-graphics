<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/trade">Trade</router-link> |
		<router-link to="/contract">Contract</router-link>
	</div>
</template>

<script>
export default {
	setup() {
		return {}
	},
}
</script>

<style lang="scss" scoped>
#nav {
	width: 100%;
	text-align: center;
	background: $color-secondary;

	a {
		text-decoration: none;
		color: $color-primary;
	}
}
</style>
