import{urlApi} from '../constants/config.js';

/*
const getListProduct = () => {
    return axios({
        url: "http://5e52260bd90e6c0014990fca.mockapi.io/SanPham",
        method: 'GET'
    });
};

const deleteProduct = (id) => {
    return axios({
        url: `http://5e52260bd90e6c0014990fca.mockapi.io/SanPham/${id}`,
        method: 'DELETE'
    })
}

const getProductById = (id) => {
    return axios({
        url: `http://5e52260bd90e6c0014990fca.mockapi.io/SanPham/${id}`,
        method: 'GET'
    })
}

const updateProduct = (id, product) => {
    return axios({
        url: `http://5e52260bd90e6c0014990fca.mockapi.io/SanPham/${id}`,
        method: 'PUT',
        data: product
    })
}

const addProduct = (product) => {
    return axios ({
        url: `http://5e52260bd90e6c0014990fca.mockapi.io/SanPham/`,
        method: 'POST',
        data: product
    })
}
*/

const callApi = (uri, method, data) => {
    return axios({
        url: `${urlApi}/${uri}`,
        method,// method: method,
        data,// data: data
    })
}

export { callApi };