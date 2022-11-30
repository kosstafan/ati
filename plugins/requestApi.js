export default function ({ $axios }, inject) {
  const requestApi = $axios.create();

  requestApi.onRequest((config) => {
    // eslint-disable-next-line no-console
  });

  requestApi.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });

  inject("requestApi", requestApi);
}
