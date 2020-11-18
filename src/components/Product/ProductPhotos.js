import React, { useState } from "react";
import PropTypes from "prop-types";
import { IonCard, IonImg, IonItem, IonList, IonThumbnail } from "@ionic/react";

function ProductPhotos({ photos }) {
  const [index, setIndex] = useState(0);

  return (
    <IonCard>
      <IonList>
        <IonItem>
          <div style={{ margin: "0 auto" }}>
            <IonImg src={photos[index]} />
          </div>
        </IonItem>
        <IonItem>
          {photos.map((photo, index) => (
            <IonThumbnail
              key={`photo_${index}`}
              onClick={() => setIndex(index)}
              slot="start"
            >
              <IonImg src={photo} />
            </IonThumbnail>
          ))}
        </IonItem>
      </IonList>
    </IonCard>
  );
}

ProductPhotos.propTypes = {
  photos: PropTypes.array,
};

export default ProductPhotos;
