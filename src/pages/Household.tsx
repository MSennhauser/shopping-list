import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Household: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>HouseHolds</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonList inset={true} lines={"inset"}>
                    <IonListHeader>Households</IonListHeader>
                    <IonItem routerLink="/household/item">
                        <IonLabel>Pokémon Yellow</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/household/item/1">
                        <IonLabel>Mega Man X</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>The Legend of Zelda</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Pac-Man</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Super Mario World</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Household;