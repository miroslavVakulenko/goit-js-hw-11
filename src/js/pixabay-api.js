// const userRequest = '';
// https://pixabay.com/api/?key=42512017-1bddfdd3afd2851258a10c68c&q=sex&image_type=photo&orientation=horizontal&safesearch=true
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '42512017-1bddfdd3afd2851258a10c68c';

function fetchImg(userRequest, per_page = 9) {
  return fetch(
    `${API_URL}?key=${API_KEY}&q=${userRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}`
  ).then(res => res.json());
}

export { fetchImg };
