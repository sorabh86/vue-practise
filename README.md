# Vue Projects

Demo application projects are found in this repo, for getting started you can use cdn for simple apps but when size of application increased you will have to think on code management side. Vue cli may help you manage different componenets more easily for single page app using nodejs to handle development parts & code management

## Install Vue cli
```
npm install -g vue-cli
```
## Create project

There many ways for creating vue projects command are as follow after installation of vue-cli:
```
vue init <generator> <app-name>
vue init webpack myapp
vue init webpack-simple myapp
```
### Directives
1. `v-bind:<attribute-name>` => `dynamically assign value`
2. `v-on:<event-name>` => `attach event listener`
3. `v-if` => `render conditions`

### Component
```
// main.js
import Vue from 'vue';
import View from './View.vue';
// You can use <app-view name=""></app-view> to add this component in page.
Vue.component('app-view', View);

// ./View.vue
<template>
	<div id="view">
		<h4>View{{name}}</h4>
	</div>
</template>
<script>
	export default {
		// prop can be Array or Object
		prop:['name'],
		data() {
			return{
				name:"Component View"
			}
		}
	}
</script>
<style scoped>
	h4{padding:0;margin:0;color:red}
</style>
```

### Lifecycle stages
1. beforeCreate
2. created 
3. beforeMount
4. mounted
5. updated
6. destroyed

![alt VueLifeCycle](https://vuejs.org/images/lifecycle.png)


### Add Router in project
```
$ npm install vue-router

// src/main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexComponent from './components/Index.vue';
import ContactComponent from './components/Contact.vue';

Vue.use(VueRouter);
const routes = [
	{path:'/', component:IndexComponent}
	{path:'/contact', component:ContactComponent}
];
const router = new VueRouter({
	routes: routes
});
new Vue({
	el:'#app',
	router:router, // adding this line to activate router
	render: h => h(App)
});

```


## Basic Without CLI
```
// Import cdn link
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

// define a div#app in html
<div id="app">{{ message }}</div>

// give control on the html block
var app = new Vue({
	el:"#app",
	data() { return{
		prop:value
	}},
	methods: 
});

```

