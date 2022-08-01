<script setup>
import API from "../api/route.js";
import { ref } from "vue";

const listPosts = ref([]);
const newListPosts = ref([]);
const listComments = ref([]);
const userInfoList = ref([]);
const postClicked = ref(false);
const commentsClicked = ref(false);
const postIdClicked = ref("");
let pager = [];
let page = 1;

async function PostsList() {
    let endUrl = "posts";
    listPosts.value = (await API.apiGetData(endUrl)).data;
}

async function UserInfo(userId) {
    userInfoList.value = [];
    let endUrl = "users/"+userId;
    userInfoList.value = (await API.apiGetData(endUrl)).data;
}

async function CommentsList(id){
    listComments.value = [];
    let endUrl = "posts/"+id+"/comments";
    listComments.value = (await API.apiGetData(endUrl)).data;
}

async function setPager(){
    await PostsList();
    let numberPosts = listPosts.value.length;
    for (let i = 0; i < numberPosts/10; i++) {
        pager.push(i+1);
    }
}
setPager();

async function listPostsReduced(page){
    await PostsList();
    newListPosts.value= [];
    for (let i = page*10-10; i < page*10 ; i++) {
        if( listPosts.value[i] != undefined){
            newListPosts.value.push(listPosts.value[i]);
        }
    }
    console.log(newListPosts.value);
}
listPostsReduced(page);
async function pageClicked(pageSelect){
        page = pageSelect;
        await listPostsReduced(pageSelect);
}

function isPostClicked(id){
    if(postClicked.value == false){
        postClicked.value = true;
        postIdClicked.value = id;
    } else if(postClicked.value == true && postIdClicked.value != id){
        postIdClicked.value = id;
    } else {
        postClicked.value = false;
    }
    console.log(postClicked.value);
    return postClicked;
}

function isCommentClicked(){
    if(commentsClicked.value == false){
        commentsClicked.value = true;
    } else {
        commentsClicked.value = false;
    }
    return commentsClicked;
}

</script>
<template>
    <section class="listPosts">
        <article class="post" v-for="(post, index) of newListPosts" :key="index">
            <h4 v-on:click="isPostClicked(post.id),UserInfo(post.userId)" >{{post.title}}</h4>
            <div v-if="postClicked == true  && postIdClicked == post.id">
                <p>{{post.body}}</p>
                <p> publié par <span>{{userInfoList.username}}</span></p>
                <button class="buttonComments" v-on:click="isCommentClicked(post.id),CommentsList(post.id)">afficher les commentaires</button>
                <div v-if="commentsClicked == true" class="comment" v-for="(comment, index) of listComments" :key="index">
                    <p>{{comment.body}}</p>
                    <p>mail: {{comment.email}}</p>
                </div>
            </div>
        </article>
        <article class="pager">
                <button v-for="(page, index) of pager" :key="index" v-on:click="pageClicked(page)">{{page}}</button>
        </article>
    </section>
</template>

<style scoped>
.buttonComments{
    width: 200px;
    height: 60px;
}
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
h4:hover{
    color: #34495e;
}
</style>
