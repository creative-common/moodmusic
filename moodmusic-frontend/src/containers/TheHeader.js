import React from 'react'
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
} from '@coreui/react'


const TheHeader = () => {
  return (
    <CHeader>

      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <h1>MoodMusic</h1>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none justify-content-center">
      <h1 class="pl-4">MoodMusic</h1>
      </CHeaderNav>
 
    </CHeader>
  )
}

export default TheHeader
