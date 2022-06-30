import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key":
            "ede7b79daemshef232675df23665p157232jsnd7a3105861cc",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    // destructring
    const {
      data: { data },
    } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};