export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e272d1cfemsh89f7427f4130b06p1e224djsn4cc687bde216",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e272d1cfemsh89f7427f4130b06p1e224djsn4cc687bde216",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
