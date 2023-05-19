import React, { useState, useEffect } from "react";
import axios from "axios";

function CinemaSelect() {
  const urlCinema = "http://localhost:5000/api/cinema";
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(urlCinema);
      setCinemas(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <select id="cinema" name="cinema" value={cinemas}>
        <option value=""></option>
        {cinemas.map((cinema) => {
          return (
            <option key={cinema._id} value={cinema._id}>
              {localStorage.setItem(cinema._id, cinema.name)}
              {cinema.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default CinemaSelect;
