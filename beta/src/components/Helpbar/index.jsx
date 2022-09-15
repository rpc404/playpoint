import React from "react";
import "./style.css";
import { IKImage, IKContext } from "imagekitio-react";

export default function Helpbar() {
  return (
    <div className="helpbar__container">
      <IKContext urlEndpoint="https://ik.imagekit.io/playpoint">
        <IKImage src="https://ik.imagekit.io/domsan/fifa_K91-cF76y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662802427034" />
        <IKImage src="https://ik.imagekit.io/domsan/premiere_50mfIMZUo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662802235192" />
        <IKImage src="https://ik.imagekit.io/domsan/Easports_fifa_logo.svg_4tFjWslcH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662801195306" />
        <IKImage src="https://ik.imagekit.io/domsan/TBC_p7nKZl0xP.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662802554283" />
        <IKImage src="https://ik.imagekit.io/domsan/hublot_v6i7gXMGY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662802819204" />
        <IKImage src="https://ik.imagekit.io/domsan/nike_-CXafJpJD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662802714425" />
      </IKContext>
    </div>
  );
}
