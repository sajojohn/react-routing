import React, { useEffect, useState } from "react";
function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({ images: {} });
  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`, {
      method: "get",
      headers: new Headers({
        Authorization: "2a9f344780cf29d332afd511c1abeb7f",
      }),
    });
    const response = await fetchItem.json();
    setItem(response.data.item);
  };

  return (
    <div>
      <h1> {item.name}</h1>
      <h2> {item.type}</h2>
      <img src={item.images.icon} alt="" />
    </div>
  );
}

export default ItemDetail;
