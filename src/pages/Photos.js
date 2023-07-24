import React, { useContext } from "react";

import Image from "../components/Image";
import { Context } from "../components/context";

function Photos() {
  const { allPhotos } = useContext(Context);

  const pictures = allPhotos.map((photo, i) => {
    // return <Image key={photo.id} img={photo} className={getClass(i)} />;
    return <Image key={photo.id} img={photo} className="w-full" />;
  });

  // return <main className="photos columns-3">{pictures}</main>;
  return (
    <main className="container m-auto mt-4 columns-4 gap-8">{pictures}</main>
  );
}

export default Photos;
