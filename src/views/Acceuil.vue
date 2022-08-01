<script>
</script>

<template>
    <div class="corps">
        <div class="texteExpliquation">
            <h1>Je vous présente le projet qui a pour but de creer une application vuejs en utilisant l'api <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.typicode</a>.</h1>
            <img class="image-acceuil" src="src\assets\img\img-vuejs.jpg" alt="logo vuejs"/>
        </div>
        <div class="presentation">
            <div class="description">
                <img class="photo" src="src\assets\img\damien-photo.jpg" alt="photo de Damien Landois"/>
                <h3>Ce projet est réalisé par Damien LANDOIS, étudiant en bachelor 3 "développement web et mobile" futur étudiant en master "expert en développement web" à Ynov Nantes Campus.</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.texteExpliquation{
    grid-column: 2;
    border: 3px solid #41b883;
    text-align:center;
    }
.description{
    margin: 2% 2% 2% 2%;
}
a {
    text-decoration: none;
    color: grey;
    font-family: "Bebas Neue";
    font-size: 35px;
}
a:hover{
    color:black;
}
.image-acceuil{
    height: 250px;
    width: auto;
}
.presentation{
    grid-column: 4;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
    border: 3px solid #41b883;
}
.corps
    {
    margin: 3% 0 0 0;
    display: grid;
    grid-template-columns: 1fr 30% 1fr 30% 1fr;
    grid-template-rows: 0px 300px;
    grid-gap: 10px;
    color: grey;
}
.photo{
    height: 200px;
    width: auto;
    margin : 2% 2% 2% 2%;
}
@media screen and (min-width: 0px) and (max-width: 1200px){
    .corps{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
    }
    .texteExpliquation{
    border: 3px solid #41b883;
    text-align:center;
    }
    .presentation{
    grid-column: 1/2;
}
.image-acceuil{
    height: 200px;
    width: auto;
}
}
</style>