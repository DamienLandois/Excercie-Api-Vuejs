<script>
</script>

<template>
<div class="navbar">
    <router-link to="/posts" class="myButton">Posts</router-link>
    <router-link to="/"><img class="iconSite" src="src\assets\img\logo.svg" href="" /></router-link>
    <router-link to="/albums" class="myButton">Albums</router-link>
</div>
</template>

<style scoped>
.navbar{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
}
.iconSite{
    height: 250px;
    width: auto;
}
.myButton {
    text-decoration: none;
    color: black;
    font-size: 29px;
    line-height: 29px;
    padding: 20px;
    border-radius: 27px;
    background-color: #41b883;
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 2px solid #41b883; 
    display: inline-block;
    font-family:"Bebas Neue"
    }
.myButton:hover {
background: #41b883;
}
.myButton:active {
background:#41b883;
}
</style>