import { createRouter, createWebHistory } from "vue-router"
import Posts from '../views/Posts.vue'
import acceuil from '../views/Acceuil.vue'
import Albums from '../views/Albums.vue'

export default createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "acceuil",
            component : acceuil,
        },
            {
                path : "/posts",
                name : "posts",
                component : Posts,
            },
            {
                path : "/albums",
                name : "albums",
                component : Albums,
            }
    ]
})