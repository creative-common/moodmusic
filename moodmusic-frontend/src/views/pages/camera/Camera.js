import React from 'react'
import { useState, useEffect } from 'react';
import {

  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CButton
} from  '@coreui/react'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

const Camera = () => {
  
  const webcamRef = React.useRef(null);
  const size = useWindowSize();
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <>
      <CRow class="jusitfy-content-center">
      
        <CCol xs="12" sm="12" md="12">
          <CCard>
            <CCardHeader className="text-center">
             <h3>Camera</h3>
            </CCardHeader>
            <CCardBody >
            <Webcam
                audio={false}
                ref={webcamRef}
                width={size.width - 165}
                mirrored="true"
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
      
        
            </CCardBody>
            <CCardFooter className="d-flex justify-content-center">
            <CButton color="success" variant="outline" size="lg" className="px-4">Capture </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
     
      </CRow>
    </>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default Camera
