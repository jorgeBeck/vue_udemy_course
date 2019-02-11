<template>
	<div id="app" class="container">
		<encabezado></encabezado>
		<div class="jumbotron">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Encabezado from './components/Encabezado.vue'
export default {
	components: {
		Encabezado: Encabezado
	}

}
</script>

<style>

</style>
