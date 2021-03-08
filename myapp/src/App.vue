<template>
	<div id="app">
		<app-nav v-if="navlist" v-bind:navlist="navlist" name="View Sorabh"></app-nav>
		<div class="container">
			<router-link to="/">Home</router-link>
			<router-link to="/user">User</router-link>

			<router-view></router-view>
		</div>

		<img v-if="!isLoaded" src="src/assets/Snake.gif" alt="">
		<app-footer name="sorabh86"></app-footer>
	</div>
</template>

<script>
	export default {
		name:'app',
		data() {
			return {
				navlist:undefined,
				isLoaded:false
			}
		},
		beforeCreate() {
			fetch('http://localhost:8080/src/assets/json/navlist.json')
				.then((d)=>d.json())
				.then((data)=>{
					setTimeout(()=>{
						this.isLoaded=true;
					},200);
					console.log('data:', data);
					this.navlist = data;
				})
				.catch(e=>console.error("Fetch request failed:", e));
		}
	};
</script>

<style>
	html,body{
		margin: 0;padding: 0;
		font-family: 'Roboto', sans-serif;
	}
	.container {max-width: 1200px; margin:0 auto;}
</style>
