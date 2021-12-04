const base_url = process.env.VUE_APP_BASE_URL_API;
const base_url_photos = process.env.VUE_APP_BASE_URL_API_PHOTOS;
const authorized_key = process.env.VUE_APP_AUTHORIZED_KEY_PHOTOS;

module.exports = {
    api: base_url,
    name: "https://jsonplaceholder.typicode.com/users",
    review: "https://jsonplaceholder.typicode.com/posts",
    photo: base_url_photos,
    key: authorized_key
}