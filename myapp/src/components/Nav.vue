<template>
	<div id="nav" class="navbar">
		<div class="container">
			<h4 class="nav-brand">{{cname}}</h4>
			<ul>
				<li v-for="nav in navlist">
					<a v-bind:href="nav.url">{{nav.name}}</a>
					<ul v-if="nav.child" class="dropdown">
						<li v-for="child in nav.child">
							<a v-bind:href="child.url">{{child.name}}</a>
						</li>
					</ul>
				</li>
			</ul>
			<button v-on:click="changeName">Change Name</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		navlist:Array,
		name:String
	},
	data() {return{
		cname:this.name
	}},
	beforeMount() {
		console.log('before Mount');
	},
	mounted() {
		console.log('mounted');
	},
	beforeCreate() {
		console.log('before Created');
	},
	created() {
		console.log('created')
	},
	methods: {
		changeName() {
			console.log(this.name);
			const rand = 10000+Math.round(Math.random()*(100-10000));
			this.cname = 'Name'+rand;
		}
	}
}
</script>

<style scoped>
	#nav {
		border-bottom: 1px solid #eee;
	}
	#nav .container {
		display: flex;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	ul li {
		display: inline-block;
	}
	ul li a:hover {
		background:#00f;
		color: #fff;
	}
	ul li a {
		text-decoration: none;
		display: block;
		padding: 20px
	}
	ul li:hover > ul.dropdown {
		display: block!important;
	}
	ul.dropdown {
		position: absolute;
		display: none;
		background: #fff;
		border:1px solid #eee;
		/*box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);*/
	}
	ul.dropdown li {
		display: block;
		border-bottom: 1px solid #eee;
	}
	ul.dropdown li:last-child {}
	ul.dropdown li a {
		padding:20px;
	}
</style>