import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router"

interface ItemDetailPageProps
    extends RouteComponentProps<{
        id: string;
    }> { }

export const ItemDetail: React.FC<ItemDetailPageProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>ItemDetail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {match.params.id}

            </IonContent>
        </IonPage>
    )
} 