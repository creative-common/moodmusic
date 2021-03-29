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
 
  if(!auth){
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
          <CCard style={{'minHeight': '700px'}}>
            <CCardBody className="justify-content-center">

               <CRow>
                 <CCol xs="12" sm="3" md="3" lg="3">
                    <CCard>
                        <CHeader  className="justify-content-center mt-1" ><h3 className="mt-2">Album Name</h3></CHeader>
                      <CCardBody><img className="img-fluid" src="https://i.scdn.co/image/ab67616d0000b273b0c11af61ca4242b91af7d7b" alt="Album Name"/ ></CCardBody>
                      <CFooter>Tracks: 10</CFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="3" md="3" lg="3">
                    <CCard>
                        <CHeader  className="justify-content-center mt-1" ><h3 className="mt-2">Album Name</h3></CHeader>
                      <CCardBody><img className="img-fluid" src="https://i.scdn.co/image/ab67616d0000b273b0c11af61ca4242b91af7d7b" alt="Album Name"/ ></CCardBody>
                      <CFooter>Tracks: 10</CFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="3" md="3" lg="3">
                    <CCard>
                        <CHeader  className="justify-content-center mt-1" ><h3 className="mt-2">Album Name</h3></CHeader>
                      <CCardBody><img className="img-fluid" src="https://i.scdn.co/image/ab67616d0000b273b0c11af61ca4242b91af7d7b" alt="Album Name"/ ></CCardBody>
                      <CFooter>Tracks: 10</CFooter>
                    </CCard>
                  </CCol>
                  <CCol xs="12" sm="3" md="3" lg="3">
                    <CCard>
                        <CHeader  className="justify-content-center mt-1" ><h3 className="mt-2">Album Name</h3></CHeader>
                      <CCardBody><img className="img-fluid" src="https://i.scdn.co/image/ab67616d0000b273b0c11af61ca4242b91af7d7b" alt="Album Name"/ ></CCardBody>
                      <CFooter>Tracks: 10</CFooter>
                    </CCard>
                  </CCol>

               </CRow>

              
                

            </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>

     
      
    </>
  )
}



export default Playback;
