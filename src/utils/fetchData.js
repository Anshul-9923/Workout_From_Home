export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fccbe5ff6amsh466e8e503b28139p1b6c32jsn82ef83ecbadf',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
};

export const youTubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fccbe5ff6amsh466e8e503b28139p1b6c32jsn82ef83ecbadf',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}