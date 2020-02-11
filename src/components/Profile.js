import React from "react";
import Menu from "./Menu";
import h1 from '../assets/h1.png';
import h2 from '../assets/h2.png';
import h3 from '../assets/h3.png';
import h4 from '../assets/h4.png';
import h5 from '../assets/h5.png';
import h6 from '../assets/h6.png';
import h7 from '../assets/h7.png';
import h8 from '../assets/h8.png';
import h9 from '../assets/h9.png';
import h10 from '../assets/h10.png';
import h11 from '../assets/h11.png';
import h12 from '../assets/h12.png';
import h13 from '../assets/h13.png';
import h14 from '../assets/h14.png';
import h15 from '../assets/h15.png';
import h16 from '../assets/h16.png';
import h17 from '../assets/h17.png';
import h18 from '../assets/h18.png';
import {IonPage,IonGrid,IonRow,IonCol,IonSegment,IonAvatar, IonSegmentButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
  

const Profile = () => {
    return(
        <div>
            <IonPage>
                <IonContent>
                    
                    <Menu />

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <img className="ui mini circular image" src={h1} />
                                ImZAIDKHAN786
                            </IonCol>
                            <IonCol>
                                <br/><br/>
                                <b>1266</b> <br/> Posts
                            </IonCol>
                            <IonCol>
                                <br/><br/>
                                <b>15K</b> Followers
                            </IonCol>
                            <IonCol>
                                <br/><br/>
                                <b>123</b> Following
                            </IonCol>
                         
                        </IonRow>
                    </IonGrid>


                        {/* <IonItem>
                            <IonAvatar size="large" slot="start">
                                <img src="h1.png" />
                            </IonAvatar>
                          
                        
                        </IonItem> */}

                    <IonButton color="medium" expand="block">Edit Profile</IonButton>

                    <br/>
                    <b>Story Highlights</b>

                    <IonSegment color="dark" scrollable>
                        <IonSegmentButton checked layout="icon-start">
                            <IonIcon name="grid" />
                        </IonSegmentButton>
                        <IonSegmentButton layout="icon-start">
                            <IonIcon name="image" />
                        </IonSegmentButton>
                    </IonSegment>


                    <IonGrid>
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

                        <IonRow>
                            <IonCol>
                                <img src="h10.png" />
                            </IonCol>
                            <IonCol>
                                <img src="h11.png" />
                            </IonCol>
                            <IonCol>
                                <img src="h12.png" />
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <img src="h13.png" />
                            </IonCol>
                            <IonCol>
                                <img src="h14.png" />
                            </IonCol>
                            <IonCol>
                                <img src="h15.png" />
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <img src="h16.png" />
                            </IonCol>
                            <IonCol>
                                <img src="h17.png" />
                            </IonCol>
                            <IonCol>
                                <img src="h18.png" />
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                 
                </IonContent>
            </IonPage>
        </div>
    );
}

export default Profile;