import React from "react";
import {IonPage,IonGrid,IonRow,IonCol,IonSegment, IonSegmentButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
  

const Search = () => {
    return(
        <div>
            <IonPage>
                <IonContent>

                <IonSegment color="dark" scrollable>
                    <IonSegmentButton checked layout="icon-start">
                        <IonIcon name="home" /> IGTV
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="heart" /> Shop
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="pin" /> Animals
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="star" /> Gaming
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="call" /> Food
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="globe" /> Audio
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="basket" /> Style
                    </IonSegmentButton>
                </IonSegment>


                <IonGrid>
                    <IonRow size="9">
                        <IonGrid>
                            <IonRow size="12">
                                <IonCol size="12">
                                    <img src="h9.png" />
                                </IonCol>
                                <IonCol size="12">
                                    <img src="h10.png" />
                                </IonCol>
                                <IonCol size="12">
                                    <img src="h11.png" />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCol size="9">
                            <img src="h18.png" />
                        </IonCol>
                    </IonRow>

                
                    <IonRow>
                        <IonCol>
                            <img src="h1.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h2.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h3.png" />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src="h4.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h5.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h6.png" />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src="h7.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h8.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h9.png" />
                        </IonCol>
                    </IonRow>


                    <IonRow size="9">
                        <IonCol size="9">
                            <img src="h1.png" />
                        </IonCol>
                        <IonGrid>
                            <IonRow size="12">
                                <IonCol size="12">
                                    <img src="h2.png" />
                                </IonCol>
                                <IonCol size="12">
                                    <img src="h3.png" />
                                </IonCol>
                                <IonCol size="12">
                                    <img src="h4.png" />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <img src="h11.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h12.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h13.png" />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src="h14.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h15.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h16.png" />
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <img src="h1.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h17.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h18.png" />
                        </IonCol>
                    </IonRow>

                    <IonRow size="9">
                        <IonGrid>
                            <IonRow size="12">
                                <IonCol size="12">
                                    <img src="h9.png" />
                                </IonCol>
                                <IonCol size="12">
                                    <img src="h10.png" />
                                </IonCol>
                                <IonCol size="12">
                                    <img src="h11.png" />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCol size="9">
                            <img src="h18.png" />
                        </IonCol>
                    </IonRow>

                    
                    <IonRow>
                        <IonCol>
                            <img src="h1.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h2.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h3.png" />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src="h4.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h5.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h6.png" />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src="h7.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h8.png" />
                        </IonCol>
                        <IonCol>
                            <img src="h9.png" />
                        </IonCol>
                    </IonRow>



                

                

                  

                   

                  
                    </IonGrid>
                </IonContent>
            </IonPage>
        </div>
    );
}

export default Search;