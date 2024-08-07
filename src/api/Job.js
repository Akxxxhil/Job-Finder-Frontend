import axios from 'axios';

const BACKEND_ORIGIN_URL = 'https://job-finder-backend-pi.vercel.app';

const fetchJobs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`);
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const fetchJobsByQuery = async (query) => {
    const { minSalary,
        maxSalary,
        skills,
        title
    } = query;
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`, {
            params: {
                minSalary,
                maxSalary,
                title: title.trim(),
                skills
            }
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const fetchJobById = async (id) => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

const createJob = async (job) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/job/add`, job, config);
        return response;
    } catch (error) {
        return error;
    }
};

const editJob = async (job) => {
    try{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
       const response = await axios.put(`${BACKEND_ORIGIN_URL}/job/update/${job._id}`, job, config);
       return response;
    }catch(error){
        return error;
    }
}

const deleteJob = async (id) => {
    try{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.delete(`${BACKEND_ORIGIN_URL}/job/delete/${id}`, config);
        return response;
    }catch(error){
        return error;
    }
}



export { fetchJobs, fetchJobsByQuery, fetchJobById, createJob, editJob, deleteJob };