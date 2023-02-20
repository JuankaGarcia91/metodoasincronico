const app = { 
    baseUrl: 'https://picsum.photos/v2',  
    getPictures: async function(){
        const resp = await fetch(`${this.baseUrl}/list`)
        const data = await resp.json()
        this.renderPicture(data)
    },
    renderPicture: function(data){
        for (let item of data){
            document.getElementById('contenido').innerHTML += 
            `<div class="card" >
                <img src="${item.download_url}?${urlFoto}" class="card-img-top" alt="..." class="img">
                <div class="card-body">
                    <h5 class="card-title">${item.author}</h5>
                    <p class="card-text">ID del autor: ${item.id}</p>
                    <a href="${item.url}" class="btn btn-danger btn-sm btn-block active">URL</a>
                </div>
            </div>`
        }
    }
};

(function(){
    try {
        console.log(app.baseUrl);
        app.getPictures();
    }
    catch(error){
        console.log(`Error> ${error}`)
    }
})()
