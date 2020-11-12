import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";
import ProductList from "../components/Product/ProductList";

const Trending = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
        <ProductList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
