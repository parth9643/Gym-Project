export const exerciseOptions = {
  method: 'GET',
  headers: {
   'X-RapidAPI-Key': '615dd5b4c1msh0840d2fb8cb4d4bp1e422bjsn8bd327dfa262',
   'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const Youtubeoptions = {
  headers: {
    'X-RapidAPI-Key': '0dc44c719emsh61e944a1dcccf28p1f7192jsn611c47bc7e8a',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const FetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    return data
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
