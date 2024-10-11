import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(params) {
        const url = '/_metadata.json';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/_metadata.json/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/_metadata.json';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/_metadata.json/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/_metadata.json/${id}`;
        return axiosClient.delete(url);
    }
}

export default categoryApi;