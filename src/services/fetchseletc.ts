const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "466d2434c6msh6f87b9f37a9e0cfp1e427djsnf5e16fa4fd9e",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

export const fetchRegions = () => {
  return fetch("https://covid-19-statistics.p.rapidapi.com/regions", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const fetchData = (date: string) => {
  return fetch(
    `https://covid-19-statistics.p.rapidapi.com/reports/total?date=${date}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
