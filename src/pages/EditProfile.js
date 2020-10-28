import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import NavHeader from "../components/Header/NavHeader";

const EditProfile = () => {
  return (
    <IonPage>
      <NavHeader title="Log In" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput name="name" type="text" required></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">New Password</IonLabel>
          <IonInput name="newPassword" type="password" required></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Current Password</IonLabel>
          <IonInput name="currentPassword" type="password" required></IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Save
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
