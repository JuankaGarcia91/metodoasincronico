const app = { 
    baseUrl: 'https://picsum.photos/v2/list?',  
    getPictures: async function(){
        const pagina = document.getElementById("pagina").value; //select
        const cantidad = document.getElementById("cantidad").value; //text

        //let urlfinal = "https://picsum.photos/v2/list?"
        let urlFinal = app.baseUrl;

        if(pagina > 0 && cantidad > 0 && cantidad < 100){
            urlFinal += `pagina=${pagina}&cantidad=${cantidad}`;
            const resp = await fetch(urlFinal);
            const data = await resp.json();
            app.renderPicture(data);
        }
        else{
            alert("Debe seleccionar correctamente la pagina y cantidad")
        }
    },
    renderPicture: function(data) {
        let contenidoDiv = document.getElementById("contenido");
        contenidoDiv.innerHTML = "";
        const grises = document.getElementById("grises").checked; //checkbox
        const blur = document.getElementById("blur").value; //select

        let urlFoto ="";

        if (grises) 
            urlFoto += `grayscale`
        if (blur > 0)
            urlFoto += `&blur=${blur}`
        for (let item of data) {
            contenidoDiv.innerHTML += 
            `<div class="card" >
                <img src="${item.download_url}?${urlFoto}" class="card-img-top" alt="..." class="img">
                <div class="card-body">
                    <h5 class="card-title">${item.author}</h5>
                    <p class="card-text">ID del autor: ${item.id}</p>
                    <a href="${item.url}" class="btn btn-danger btn-sm btn-block active">URL</a>
                </div>
            </div>`;
        }
    }
};
document.getElementById('boton').addEventListener('click', app.getPictures);