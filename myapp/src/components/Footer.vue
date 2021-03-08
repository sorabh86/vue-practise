<template>
	<footer class="footer">
		<div class="container">
			<p>&copy; All rights Reserved to author <b>{{name}}</b>, 2019</p>
		</div>
	</footer>
</template>
<script>
export default {
	props:['name']
}
</script>
<style type="text/css">
	footer {border-top: 1px solid #eee;}
</style>