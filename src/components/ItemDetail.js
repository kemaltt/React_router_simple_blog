import React from "react";
import { useParams, useLocation } from "react-router-dom";
export default function ItemDetail() {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const item = data.filter((el) => el.id.toString() === id.toString());
  console.log(item);

  return (
    <div className="item_detail">
      <img src={item[0].img_url} alt="" />
      <div className="item_headline">
        <h2>{item[0].title}</h2>
        <p>{item[0].published_date}</p>
      </div>
      <p>{item[0].description} </p>

      <p> By {item[0].author}</p>
    </div>
  );
}
