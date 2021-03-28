import React from 'react'
import { useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CCol,
  CRow
} from '@coreui/react'

import {
  getAuthToken
} from '../../../helpers'

const Playback = () => {

  const history = useHistory();
  var albums = [];
  var albumsURI = [];
 
  const [albumsURI_, setAlbumsURI_] = useState(albumsURI);


  if(localStorage.getItem('albums')){
    albums = JSON.parse(localStorage.getItem('albums'));
    if(localStorage.getItem('albumsURI')){
      var temp = localStorage.getItem('albumsURI');
      albumsURI = temp.split(',');
    }
  }else{
    //Redirect back to previous status
    history.push('camera');
  }
  


  //Step-0 Set the Auth Token State for the Spotify Player
  let auth = getAuthToken();
  var accessToken = auth.accessToken;
  if(!auth){
    history.push('login')
  }

  function spotifyPlayerState(state){
    console.log(state)
  }

  function playerListClickEvent(song) {
    console.log('this is:', song);
    setAlbumsURI_(song)
  }
  

 
  return (
    <>
      <CRow className="justify-content-center p-0 m-0">

        <CCol xs="12" sm="12" md="8" lg="8" >
          <CCard>
            <CCardBody className="justify-content-center">
              
              <CListGroup>
                {albums.map( (album, index) => (<CListGroupItem key={index} style={{fontSize: '20px'}} onClick={ (e) => playerListClickEvent(album.uri, e) } className="text-center">{album.name}</CListGroupItem>))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>

      <CRow style={{'position':'fixed', 'bottom': '50px', 'width':'100%'}}>
        <CCardBody style={{'padding':'0', 'marginRight': '30px'}}>
            <SpotifyPlayer
              token={accessToken}
              autoPlay={true}
              uris={albumsURI_}
              callback={(state) => spotifyPlayerState(state)}
              styles={{
                activeColor: 'red',
                bgColor: '#FFF',
                color: '#000',
                loaderColor: '#000',
                sliderColor: '#1cb954',
                trackArtistColor: '#000',
                trackNameColor: '#000',
              }
          }
        />
        </CCardBody>
      </CRow>
      
    </>
  )
}



export default Playback;
