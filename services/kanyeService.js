import axios from "axios";

function buscar_quote(){
    return axios.get('https://api.kanye.rest/')
        .then(response => response.data)
        .catch(error => console.error("Não deu certo"));
}

export { buscar_quote };