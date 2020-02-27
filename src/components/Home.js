import React , { useState , useEffect } from "react";
import axios from "axios";

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
import {IonPage,IonSegment,IonAvatar,IonList, IonButton, IonCard, IonCardContent,IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
  

const Home = () => {
    const [photo, setPhoto] = useState("");
    const [clientId, setClientId] = useState("8b675cb704111832812ec9e721682f5abcde4301abf3ba090d28686ca4078bb2");

    const [result, setResult] = useState([]);

    // function handleChange(event) {
    //     setPhoto(event.target.value);
    // }
    useEffect(() => {
        console.log(photo);

        const url = "https://api.unsplash.com/search/photos?page=1&query=man&client_id="+clientId;

        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results);
        });
    },[])

    // function handleSubmit(event) {
    
    // }

    return(
        <div>
            <IonPage>
                <IonContent>

                    <IonSegment scrollable>
                        <IonList>
                            <IonItem>
                                <IonAvatar size="large" slot="start">
                                    <img src={h1} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h2} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h3} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h4} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h5} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h6} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h7} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h8} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h9} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h10} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h11} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h12} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h13} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h14} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h15} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h16} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h17} />
                                </IonAvatar>
                                <IonAvatar slot="start">
                                    <img src={h18} />
                                </IonAvatar>
                            </IonItem>
                        </IonList>
                    </IonSegment>

                    <div className="ui divider"></div>
                    <br/>


                    <div className="ui container">
                        <div className="ui items">
                                {
                                    result.map((photo) => (
                                        <>

                                        <div class="ui  list">
                                            <div class="item">
                                                <div class="left floated content">
                                                    <img class="ui avatar image" src={h1} />
                                                </div>
                                                <div className="left floated content">
                                                    <div className="header">
                                                    zaid_khan123
                                                    </div>
                                                    <div className="content">
                                                        Virar
                                                    </div>
                                                </div>
                                                <div class="right floated content">
                                                    <i className="ellipsis vertical icon"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ui large image">
                                            <img src={photo.urls.small} width="400" height="400" />
                                        </div>

                                        <div className="ui secondary menu">
                                            <div className="item">
                                                <i className="large heart outline icon"></i>
                                                <i className="large comment outline icon"></i>
                                                <i className="large send outline icon"></i>
                                            </div>
                                            <div className="right item">
                                                <i className="large bookmark outline icon"></i>
                                            </div>
                                        </div>

                                        1080 likes <br/>
                                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                                        <div class="ui middle aligned animated list">
                                            <div class="item">
                                                <img class="ui avatar image" src={h1} />
                                                <div class="content">
                                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        </>
                                    ))
                                }
                            </div>
                        </div>

                    <br/>


                    {/* Card 1 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h1} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            {/* {
                                result.map((photo) => (
                                    <>
                                    <div className="ui small image">
                                        <img src={photo.urls.small} width="400" height="400" />
                                    </div>
                                    zaid bhai
                                    </>
                                ))
                            } */}
                            <img src={h1} />
                        </div>
                     
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h1} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>


                   {/* Card 2 */}
                   <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h2} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar West
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h2} />
                        </div>
                       <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h2} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>


                   {/* Card 3 */}
                   <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h3} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h3} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h3} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>



                   {/* Card 4 */}
                   <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h4} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h4} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h4} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>


                    {/* Card 5 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h5} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h5} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h5} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>



                    {/* card 6 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h6} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h6} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h6} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>



                    {/* card 7 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h7} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h7} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h7} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>


                    {/* Card 8 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h8} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h8} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h8} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>



                    {/* Card 9 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h9} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h9} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h9} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>


                    {/* Card 10 */}
                    <div className="ui container">
                        <div class="ui  list">
                            <div class="item">
                                <div class="left floated content">
                                    <img class="ui avatar image" src={h10} />
                                </div>
                                  <div className="left floated content">
                                      <div className="header">
                                      zaid_khan123
                                      </div>
                                      <div className="content">
                                        Virar
                                      </div>
                                  </div>
                                <div class="right floated content">
                                    <i className="ellipsis vertical icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui large image">
                            <img src={h10} />
                        </div>
                        <div className="ui secondary menu">
                            <div className="item">
                                <i className="large heart outline icon"></i>
                                <i className="large comment outline icon"></i>
                                <i className="large send outline icon"></i>
                            </div>
                            <div className="right item">
                                <i className="large bookmark outline icon"></i>
                            </div>
                        </div>

                        1080 likes <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <div class="ui middle aligned animated list">
                            <div class="item">
                                <img class="ui avatar image" src={h10} />
                                <div class="content">
                                    <IonInput type="text" placeholder="Add a Comment...." ></IonInput> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                {/* Card Ionic me bana h */}
                {/* <IonCard>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonAvatar slot="start">
                                    <img src="zaid.png" />
                                </IonAvatar>
                                <IonLabel>
                                    <h2><b>zaid_khan123</b></h2>
                                    <h5>CSMIA</h5>
                                </IonLabel>
                                <IonIcon name="more" />
                            </IonItem>
                        </IonList>

                        <div className="ui segment center aligned">
                            <div className="ui medium image">
                                <img src="zaid.png"  />
                            </div>
                        </div>

                        <IonItem>
                            <IonIcon size="large" name="heart" />
                            <IonIcon size="large" name="chatbubble" />
                            <IonIcon size="large" name="send" />
                            <IonIcon size="large" slot="end" name="bookmark" />
                        </IonItem>
                        <br/>
                        Liked_by_zaidkhan_and 112 others 5zaan_shaikh Good Day, Enjoy Day Alot #Peacefull

                        <IonItem>
                            <IonAvatar slot="start">
                                <img src="zaid.png" />
                            </IonAvatar>
                            <IonInput placeholder="Add Comments...."></IonInput>
                            <IonIcon name="heart" />
                            <IonIcon name="heart" />
                            <IonIcon name="heart" />
                        </IonItem>

                    </IonCardContent>
                </IonCard> */}



               
                

                   
                </IonContent>
            </IonPage>
        </div>
    );
}

export default Home;