import axios from 'axios';

// Dev
// const baseURL = 'https://ancient-water-1781.getsandbox.com:443/';

const baseURLJava =
  'https://app.jala.tech/api/shrimp_prices?per_page=15&page=1&with=region,creator&region_id=';

const hitApiJava = axios.create({
  baseURL: baseURLJava,
  //   allowHTTP: true,
  //   headers: {
  //     Authorization:
  //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzNGQ5Nzg0ZjZhNzRjNmFlZjI1ODRlNjI5YmRiNDk5ZDIzNTNiNjQ1ZGMzM2QxNWM1MzJlMWRmZGNkNTFjNDFhZDA3MTY2Y2M0MjcwZGFjIn0.eyJhdWQiOiIxIiwianRpIjoiYzM0ZDk3ODRmNmE3NGM2YWVmMjU4NGU2MjliZGI0OTlkMjM1M2I2NDVkYzMzZDE1YzUzMmUxZGZkY2Q1MWM0MWFkMDcxNjZjYzQyNzBkYWMiLCJpYXQiOjE2NzA0NzE1NTcsIm5iZiI6MTY3MDQ3MTU1NywiZXhwIjoxNzAyMDA3NTU3LCJzdWIiOiI3NyIsInNjb3BlcyI6W119.de53bq9RIwzpyfWGRK4LPLwdnkQXLZm19Q7o6mx9pBrsGYaOhjuw55F0qBbO6e5WVCrz3VOeAgb8zcVc4JYFpLmzFihFamT3Uf7EuDpXx7xpleYVb1n14zX9XrNg2Bum8irjxXqADgJDDnjb4Yvjh_EZYMfwRBk5gJjIZ7r7KiW3rz3kVbthaoRy6aayPP2rz_PXDeGAkF-SV4nwfZXRUT1_YWuTPRfy9KN8RsK1msqQre1qlKJE1IDFPi8DXrHP8oLuN0XHa9babTFPcCg9xO88YKq4a46IqVMsl-qEyqAukA5dxcC73cFuFo8IOjt2m0toIz1wdZdShz-3IAgOpqwi-7WTJjFRwrdazBMgrHTl0sNiI4U6ONoVaPGlmUxVYmdRbQ2QZckXFAN6o6mwAwB_zxQsEg_CJYgZbCxAcNj9yXYaqtHNchj_1HlcvbE7LXBffLKmJ9jrXFg-3STGypwt35wkZiyS8JkoHLhTg_C2Efad4_wMWuPhSCirrqfq6HszD5dCRDG69cl1IMY-kkShzagQEz2KybFVhoCbC1oImYgqTsp_w81W9-v5gb23Z38AY9GdCEKOPMpIEg1DMaYQaTe8x6_1nRxf_XjsSBRQN935Qr2AKIGir9uox0hx-1Ji7wH2TwEyclYuf_0uMVCEOBpi2aImo5neMmWBggs',
  //   },
});

// hitApi.interceptors.request.use(request => {
//   console.log('request', request);
//   return request;
// });

// hitApi.interceptors.response.use(response => {
//   console.log('response ', response);
//   return response;
// });
///////////////////////////////////////////////////
hitApiJava.interceptors.request.use(request => {
  console.log('request', request);
  return request;
});

hitApiJava.interceptors.response.use(response => {
  console.log('response ', response);
  return response;
});

export const hitHomeJava = requestParam => {
  return hitApiJava.get(`/`, requestParam);
};
