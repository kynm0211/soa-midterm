import axios from "./customizeAxios";

const fetchAllUser = (userId) => {
    console.log(userId);
    return axios.get(`users/api/getUsers`, { data: { id: userId } });
};

// const postCreateUser = (name, job) => {
//     return axios.post("/api/getusers", { name, job });
// };
const postCreateUser = (data) => {
    return axios.post("users/api/createUser", { data });
};
export { fetchAllUser, postCreateUser };
