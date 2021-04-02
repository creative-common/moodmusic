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
  CRow,
  CHeader,
  CFooter
} from '@coreui/react'

import {
  getAuthToken
} from '../../../helpers'

const Playback = () => {

  const history = useHistory();
  var albums = [];
  var albumsURI = [];

  const [albumsURI_, setAlbumsURI_] = useState(albumsURI);


  if (localStorage.getItem('albums')) {
    albums = JSON.parse(localStorage.getItem('albums'));
    if (localStorage.getItem('albumsURI')) {
      var temp = localStorage.getItem('albumsURI');
      albumsURI = temp.split(',');
    }
  } else {
    //Redirect back to previous status
    history.push('camera');
  }


  //Step-0 Set the Auth Token State for the Spotify Player
  let auth = getAuthToken();

  if (!auth) {
    history.push('login')
  }


  function playerListClickEvent(song) {
    console.log('this is:', albumsURI_);
    setAlbumsURI_(song)
  }

  return (
    <>

      <CRow className="justify-content-center p-0 m-0">

        <CCol xs="12" sm="12" md="12" lg="12" >
          <CCard style={{ 'minHeight': '700px' }}>
            <CCardBody className="justify-content-center">

              <CRow>
                
               
                {albums.map((album, index) => (
                   <CCol xs="12" sm="6" md="6" lg="4">
                      <CCard>
                          <CHeader className="justify-content-center mt-1" ><h4 className="m-2">{album.name}</h4></CHeader><CCardBody><img className="img-fluid" src={album.cover[0].url} alt={album.name} /></CCardBody>
                      </CCard>
                  </CCol>
                ))}
              
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}



export default Playback;
