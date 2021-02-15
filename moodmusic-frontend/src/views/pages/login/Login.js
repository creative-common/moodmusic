import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow
} from '@coreui/react'

import { RiSpotifyLine } from 'react-icons/ri';

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="text-center">
                    <h1>MoodMusic</h1>
                    <p className="text-muted">Authentication </p>
                    <CButton color="success" variant="outline" size="lg" className="px-4">Login with Spotify  <RiSpotifyLine size={50} /></CButton>
                    
                   
                  </CForm>
                </CCardBody>
              </CCard>
            
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
