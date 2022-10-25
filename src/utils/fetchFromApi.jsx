import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
   
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.KEY,
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