import React, { useState, useEffect } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    (async function loadSpots() {
      const user_id = localStorage.getItem("user");
      console.log(user_id);
      const response = await API.get("/spotsProfile", {
        headers: { user_id }
      });
      console.log(response.data);
      setSpots(response.data);
    })();
  }, []);

  useEffect(() => {
    console.log("aqui", spots);
  });
  return (
    <>
      <ul className="spot-list">
        {spots
          ? spots.map(spot => (
              <li key={spot._id}>
                <header
                  style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
                />

                <strong>{spot.company}</strong>
                <span>
                  {spot.price ? "R$" + spot.price + "/Dia" : "Gratuito"}
                </span>
              </li>
            ))
          : null}
      </ul>
      <Link to={"/new"}>
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}
