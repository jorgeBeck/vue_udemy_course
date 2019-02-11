<template>
	<div id="app">
		<h1>Testing de Auth {{ is_logged }} </h1>
		<router-link tag="a" to="/">Inicio</router-link>

		<router-link tag="a" to="/login" v-if="!is_logged">Login</router-link>

		<router-link tag="a" to="/usuarios" v-if="is_logged">Usuarios</router-link>
		<a tag="a" href="javascript:void()" v-if="is_logged">Logout</a>
		<button @click="sdf()">sdf</button>
		<br><br>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
import { Bus } from './bus.js'

export default {
	created() {},
	mounted() {
		Bus.$on('is_logged_event', (is_logged) => {
			this.is_logged = is_logged;
			Bus.is_logged = is_logged;
		});
	},
	methods: {
		sdf() {
			console.log(Bus.is_logged);
		}
		// getCookie(cname) {
		// 	var name = cname + "=";
		// 	var decodedCookie = decodeURIComponent(document.cookie);
		// 	var ca = decodedCookie.split(';');
		// 	for (var i = 0; i < ca.length; i++) {
		// 		var c = ca[i];
		// 		while (c.charAt(0) == ' ') {
		// 			c = c.substring(1);
		// 		}
		// 		if (c.indexOf(name) == 0) {
		// 			console.log(c.substring(name.length, c.length));
		// 			return c.substring(name.length, c.length);
		// 		}
		// 	}
		// 	return "";
		// }
	},
	data() {
		return {
			is_logged : false
		};
	}
}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
