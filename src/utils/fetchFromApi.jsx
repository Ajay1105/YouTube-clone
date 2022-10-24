import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
   
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '00ef485d42msh41f0311f770be6bp1844f0jsne23c088febd7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (err) {
	console.error(err);
});
export const fetchFromApi = async (url)=>{
  const {data } = await axios.get(`${BASE_URL}/${url}`,options);
return data;
}