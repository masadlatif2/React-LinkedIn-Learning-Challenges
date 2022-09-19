import axios from "axios";
import { useEffect, useState } from "react";

export default function DogPics() {
  // API: https://dog.ceo/dog-api/

  const [imgSource, setImgSource] = useState("");

  // const selectRandomImg = () => {
  //   const img_source =
  //     "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg";
  //   return img_source;
  // };

  const baseURL = "https://dog.ceo/api/breeds/image/random";

  const selectRandomImg = () => {
    axios.get(baseURL).then((response) => {
      setImgSource(response.data.message);
    });
  };

  useEffect(() => {
    selectRandomImg();
  }, []);

  return (
    <div className="dog-pics">
      {/* <img src='https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg' alt="dog pic"/> */}
      <img src={imgSource} alt="dog pic" height="500"/>
      <button onClick={selectRandomImg}>🐶</button>
      <div>
        {/* {colors.map((color) => (
          <img src={source} alt="dog pic" />
        ))} */}
      </div>
    </div>
  );
}
