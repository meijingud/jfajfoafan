export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'oktetov2ray-meijingud.cloud.okteto.net'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
