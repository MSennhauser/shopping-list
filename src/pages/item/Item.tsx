import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Item: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Items</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                
                <IonList inset={true} lines={"inset"}>
                    <IonListHeader>Kategorie</IonListHeader>
                    <IonItem>
                        <IonLabel>Dings</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>

    );
};

export default Item;