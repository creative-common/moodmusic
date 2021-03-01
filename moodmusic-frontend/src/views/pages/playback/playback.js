import React from 'react'
import { useState, useEffect } from 'react';
import {

  CCard,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CCol,
  CRow,
  CButton
} from '@coreui/react'

const Playback = () => {

  return (
    <>
      <CRow className="justify-content-center p-0 m-0">

        <CCol xs="6" sm="6" md="6">
          <CCard>

            <CCardBody >
              <CListGroup>
                <CListGroupItem>Track Name 1</CListGroupItem>
                <CListGroupItem>Track Name 2</CListGroupItem>
                <CListGroupItem>Track Name 3</CListGroupItem>
                <CListGroupItem>Track Name 4</CListGroupItem>
                <CListGroupItem>Track Name 5</CListGroupItem>
                <CListGroupItem>Track Name 6</CListGroupItem>
                <CListGroupItem>Track Name 7</CListGroupItem>
                <CListGroupItem>Track Name 8</CListGroupItem>
                <CListGroupItem>Track Name 9</CListGroupItem>
                <CListGroupItem>Track Name 10</CListGroupItem>
                <CListGroupItem>Track Name 11</CListGroupItem>
                <CListGroupItem>Track Name 12</CListGroupItem>
                <CListGroupItem>Track Name 13</CListGroupItem>
                <CListGroupItem>Track Name 14</CListGroupItem>
                <CListGroupItem>Track Name 15</CListGroupItem>
                <CListGroupItem>Track Name 16</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol xs="6" sm="6" md="6">
          <CCard>
            <CCardBody >
              <div className="d-flex justify-content-center">
              <iframe src="https://open.spotify.com/embed/track/5GeBgck1MU2tlIkMpsn8uT" width="100%" height="750px;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
              
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
      
    </>
  )
}



export default Playback;
