fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1',{
    method:'GET'
})
.then(response=>response.json())
.then(function(json){
    var container=document.querySelector('.container');

    json.results.map(function(val){
        container.innerHTML+=` 
            <div style="cursor:pointer;" class="tituloFilme" >`+val.title+`
            <div style="display:none;" class="description">`+val.overview+`</div>
            <hr>   
            </div>`;//cria um container com o titulo do filme e a descrição
    })
    var titulo=document.querySelectorAll('.tituloFilme');
    for(var i=0; i < titulo.length; i++){
        titulo[i].addEventListener('click',function(t){ //oculta/mostra as descrições
            if(t.target.querySelector('.description').style.display=="none"){
                t.target.querySelector('.description').style.display="block";
            }else{
                t.target.querySelector('.description').style.display="none";
            }
        })
    }
})