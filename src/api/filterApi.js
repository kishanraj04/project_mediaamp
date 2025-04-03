import axios from "axios";

const API_KEY = "6d633194af394581991e28eb88ce8c1d";
const BASE_URL = "https://api.rawg.io/api/games";

export const filterGame = async (filterCriteria) => {
  try {
   
    const params = {
      key: API_KEY, 
      genres: filterCriteria.category || "", 
      tags: filterCriteria.tags || "", 
      dates: filterCriteria.releaseYear 
        ? `${filterCriteria.releaseYear.slice(0,4)}-01-01,${filterCriteria.releaseYear.slice(0,4)}-12-31`
        : "",
      rating: filterCriteria.popularity || ""
    };

   
    Object.keys(params).forEach((key) => {
      if (!params[key]) delete params[key];
    });

    console.log("params ",BASE_URL, { params });
    const response = await axios.get(BASE_URL, { params });
    return response

  } catch (error) {
    console.error("Error fetching filtered games:", error?.message);
    return error;
  }
};
