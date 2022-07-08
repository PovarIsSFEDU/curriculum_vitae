import axios from 'axios';

const request = axios.create({
    timeout: 10000
});

request.interceptors.request.use((config) => {
    const csrfTokenTag = document.querySelector('meta[name="csrf-token"]');
    if (!csrfTokenTag) return config;
    config.headers['X-CSRF-Token'] = csrfTokenTag.getAttribute('content');
    return config;
});

export default request;