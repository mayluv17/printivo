import React, { useContext } from "react";
import { getClass } from "../utils";
import Image from "../components/Image";
import { Context } from "../components/context";

function Photos() {
  const { allPhotos } = useContext(Context);

  const pictures = allPhotos.map((photo, i) => {
    return <Image key={photo.id} img={photo} className={getClass(i)} />;
  });

  return <main className="photos">{pictures}</main>;
}

export default Photos;
