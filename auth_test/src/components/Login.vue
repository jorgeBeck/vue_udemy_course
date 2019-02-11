<template>
    <div>
        <form v-on:submit.prevent="login()">
            <!-- <label for="username">Nombre de usuario</label> -->
            <input type="text" id="username" v-model="data.username" placeholder="Nombre de usuario">
            <br>
            <!-- <label for="password">Contraseña</label> -->
            <input type="text" id="password" v-model="data.password" placeholder="Contraseña">
            <button>Enviar</button>
        </form>
    </div>
</template>

<script>
import { Bus } from '../bus.js'

export default {
    data() {
        return {
            data: {
                username: '',
                password: ''
            },
        };
    },
    methods: {
        login() {
            let username = this.data.username;
            let password = this.data.password;
            this.$http.post('jwt.php', {username, password})
                .then(res => res.json()).then(res => {
                    let token = res.token;
                    localStorage._token = token;
                    Bus.$emit('is_logged_event', true);
                })
                .catch(e => console.warn(e))
        }
    }
}
</script>
