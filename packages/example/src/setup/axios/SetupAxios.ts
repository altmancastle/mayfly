export default function setupAxios(axios: any) {
  axios.interceptors.request.use(
    (config: any) => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (err: any) => Promise.reject(err)
  );
}
