import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ItemDetail() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItem = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/prod09/upcoming/get", {
      method: "get",
      headers: new Headers({
        Authorization: "2a9f344780cf29d332afd511c1abeb7f",
      }),
    });
    const response = await data.json();
    console.log(response.data);
    setItems(response.data);
  };

  return (
    <div>
      <h1> Item</h1>
    </div>
  );
}

export default ItemDetail;
