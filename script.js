// manejo operador ASYNC para devolver promesas

async function getText(){
    return "Devuelve promesa ..."
}

function getText2(){
    return Promise.resolve('Hola ADSI')
}

/********************************************************/
//ejemplo async/await
async function showData(){
    const data = await fetch('https://www.datos.gov.co/resource/mcec-87by.json');
    console.log(data);
}

function showData2(){
    return fetch('https://www.datos.gov.co/resource/mcec-87by.json')
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
}

