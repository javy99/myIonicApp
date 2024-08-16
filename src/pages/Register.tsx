import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import {
  checkmarkDoneOutline,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doLogin");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput
                      label="Email"
                      type="email"
                      placeholder="javy@ionicacademy.com"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>
                    <IonInput
                      label="Password"
                      type="password"
                      placeholder="javy@ionicacademy.com"
                      labelPlacement="floating"
                      fill="outline"
                      className="ion-margin-top"
                    ></IonInput>
                    <IonButton
                      type="submit"
                      expand="block"
                      className="ion-margin-top"
                    >
                      Create my account
                      <IonIcon icon={checkmarkDoneOutline} slot="end" />
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter>
        <IonToolbar>asdas</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
