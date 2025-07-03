<template>
	<div class="container">
		<h1>{{ msg }}</h1>
		<p>
			Please move to <router-link to="/trade">Trade</router-link> page to
			see the working part.
		</p>
		<p>
			The plan for future is to display user created graphics on this home
			page.
		</p>
	</div>
</template>

<script>
export default {
	name: 'MainMessage',
	props: {
		msg: String,
	},
}
</script>
