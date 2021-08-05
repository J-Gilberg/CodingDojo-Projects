async function getPokemon(){
    // if(document.getElementById("textbox").value == null){

    // }

    console.log(document.getElementById("textbox").value);
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("textbox").value);
    var data  = await response.json();
    document.getElementById("pokemonImg").src = data.sprites.front_default;
}