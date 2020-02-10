import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import Add from "./Add";
import Like from "./Like";
import Profile from "./Profile";

import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/react';



const Dashboard = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar color="light">
            <IonIcon size="large" slot="start" name="camera" />
            <IonTitle class="ion-text-center">Instagram</IonTitle>
            <IonIcon size="large" slot="end" name="paper-plane" />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>

                <Route path="/home" component={Home} exact={true} />
                <Route path="/search" component={Search} exact={true} />
                <Route path="/add" component={Add} exact={true} />
                <Route path="/like" component={Like} exact={true} />
                <Route path="/profile" component={Profile} exact={true} />
        
            </IonRouterOutlet>

            <IonTabBar color="light" slot="bottom">
                <IonTabButton tab="home" href="/home" active>
                    <IonIcon name="home" />
                </IonTabButton>
                <IonTabButton tab="search" href="/search" active>
                    <IonIcon name="search" />
                </IonTabButton>
                <IonTabButton tab="add" href="/add" active>
                    <IonIcon name="add-circle-outline" />
                </IonTabButton>
                <IonTabButton tab="like" href="/like" active>
                    <IonIcon name="heart" />
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile" active>
                    <IonIcon name="person" />
                </IonTabButton>
            </IonTabBar>

          </IonTabs>

        </IonContent>
      </IonReactRouter>

    </IonApp>
  );
}

export default Dashboard;
