import React from "react";
import Link from "next/link";

const OverView = (props) => {
  return (
    <div>
      <Link href={`/recipes/${props.id}`}>{props.title}</Link>
      <p>{props.description}</p>
      {props.image_url && (
        <img src={props.image_url} alt="レシピ画像" width="300" />
      )}
    </div>
  );
};

export default OverView;
