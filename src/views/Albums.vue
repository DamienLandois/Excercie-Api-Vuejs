<script setup>
import API from "../api/route.js";
import { ref } from "vue";

const userList = ref([]);
const albumList = ref([]);
const photosList = ref([]);
const newPhotosList = ref([]);
const albumClicked = ref(false);
const userClicked = ref(false);
const userIdClicked = ref("");
const albumIdClicked = ref("");
let pager = [];
let page = 1;

async function UserList(){
    let endUrl = "users";
    userList.value = (await API.apiGetData(endUrl)).data;
}
UserList();

async function AlbumList(id) {
    albumList.value = [];
    let endUrl = "users/"+id+"/albums";
    albumList.value = (await API.apiGetData(endUrl)).data;
}

async function PhotoList(id){
    photosList.value = [];
    let endUrl = "albums/"+id+"/photos";
    photosList.value = (await API.apiGetData(endUrl)).data;
}

function isUserClicked(id){
    if(userClicked.value == false){
        userClicked.value = true;
        userIdClicked.value = id;
    } else if(userClicked.value == true && userIdClicked.value != id){
        userIdClicked.value = id;
    } else {
        userClicked.value = false;
    }
    return userClicked;
}

function isAlbumClicked(id){
    if(albumClicked.value == false){
        albumClicked.value = true;
        albumIdClicked.value = id;
    } else if(albumClicked.value == true && albumIdClicked.value != id){
        albumIdClicked.value = id;
    } else {
        albumClicked.value = false;
    }
    return albumClicked;
}
async function setPager(id){
    await PhotoList(id);
    let numberPosts = photosList.value.length;
    for (let i = 0; i < numberPosts/10; i++) {
        pager.push(i+1);
    }
}

async function pageClicked(id, pageSelect){
    pager = [];
    await listPhotosReduced(id, pageSelect);
}
async function listPhotosReduced(id, page){
    await PhotoList(id);
    if(page == undefined){
        page=1;
    }
    console.log(photosList);
    newPhotosList.value= [];
    for (let i = page*10-10; i < page*10 ; i++) {
        if( photosList.value[i] != undefined){
            newPhotosList.value.push(photosList.value[i]);
        }
    }
}
</script>
<template>
    <section class="listAlbums">
        <article class="user" v-for="(user, index) of userList" :key="index">
            <h4 v-on:click="isUserClicked(user.id),AlbumList(user.id)" >Voir les Albums de {{user.username}}</h4>
            <div v-if="userClicked == true  && userIdClicked == user.id" v-for="(album, index) of albumList" :key="index">
                <p v-on:click="isAlbumClicked(album.id),listPhotosReduced(album.id,page),setPager(album.id)">{{album.title}}</p>
                <div v-if="albumClicked == true && albumIdClicked == album.id" class="album" v-for="(photo, index) of newPhotosList" :key="index">
                    <p>{{photo.title}}</p>
                    <a :href="photo.url">
                        <img :src=photo.thumbnailUrl :alt="photo.title"/>
                    </a>
                </div>
                 <article class="pager">
                    <button v-if="albumClicked == true && albumIdClicked == album.id" v-for="(page, index) of pager" :key="index" v-on:click="pageClicked(album.id,page)">{{page}}</button>
                </article>
            </div>
        </article>
    </section>
</template>

<style scoped>
.pager{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    width: 350px;
    margin: auto;
}
button{
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #41b883;
}
button:hover {
    background-color: #34495e;
}
h4{
    color: black;
    text-align: center;
    width: 50%;
    margin: 20px auto;
}
</style>
