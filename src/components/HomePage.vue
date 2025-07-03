<template>
	<div class="container">
		<h1>{{ msg }}</h1>
		<p>
			On this page you can create your very own HD graphics like trade
			announcements, contract extensions or FA signings.
		</p>
		<p>The plan for future is to display user created graphics here.</p>
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
