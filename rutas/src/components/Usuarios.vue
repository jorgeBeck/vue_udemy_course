<template>
    <div class="content">
        <p>Lista de usuarios</p>
        <ul>
            <router-link style="cursor:pointer;" tag="li" :to="{name:'usuario', params: {id:user.id}}" class="list-group-item" v-for="(user, i) in users" :key="i">
                {{ user.name }}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{

    },
    data(){
        return {
            users: {}
        }
    },
    created() {
        console.log('creadp');
        this.$http.get('users')
        .then(res => {
            return res.json();
        }).then(resJson => {
            this.users = resJson;
        }).catch(e => {

        });
    }
}
</script>
