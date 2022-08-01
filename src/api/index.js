import axios from "axios";

export const getProducts = () => {
return axios.get('https://fakestoreapi.com/products')
          .then( resp => resp.data )
          .catch( error => console.error(error))
};



