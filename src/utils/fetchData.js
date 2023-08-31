export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData=async(url,options) =>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '38bbe37469msh1fa4311c1ebc384p1aa081jsn8e1847afcb50',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};