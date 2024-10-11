import { axiosClient1 } from "./axiosClient";

const productsApi = {
    getAll(params) {
        const url = '/products';
        return axiosClient1.get(url, { params });
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient1.get(url);
    }
};

export default productsApi;