<template>
    <div class="container">
        <h2>Info del Usuario</h2>
        <div>
            <p><strong>Nombre: </strong> {{ nombre }} </p>
            <p><strong>Correo: </strong> {{ email }} </p>
        </div>
        <button class="btn btn-primary" @click="volver">Volver</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nombre: '',
            email: '',
        }
    },
    methods: {
        obtenerUsuario(){
            let id = this.$route.params.id;
            this.$http.get('users/' + id)
            .then(res => {
                return res.json();
            }).then(user => {
                this.nombre = user.name;
                this.email = user.email;
            }).catch(e => {
                console.warn(e);
            });
        },
        volver() {
            this.$router.push('/usuarios');
        }
    },
    watch: {
        $route() {
            this.obtenerUsuario();
        }
    },
    created(){
        this.obtenerUsuario();
    }
}
</script>
