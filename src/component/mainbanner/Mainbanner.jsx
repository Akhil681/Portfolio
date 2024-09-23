// import React from 'react';
// import "./Mainbanner.css"; // Optional: Import CSS for styling
// import bg3 from "./bg3.gif"; // Import the GIF file
// import { Col, Container, Row } from 'react-bootstrap';

// function Mainbanner() {
//   return (
//     <Container fluid className='bgimagegif'>
//       {/* <img src={bg3} alt="Background Image" className='img-fluid bggif' />  */}
//       <Container className='h-100'>
//       <Row className='h-100'>
//         <Col lg={6} >
//         <div style={{color:"white"}} className=' h-100 d-flex align-items-center justify-content-start'>        
//           <h4 className='bannertxt'>
//           <span className='bannertxt-2'> Hi !!!</span><br/> This is<span className='bannertxt-2'> Your Name </span> <br/> <span className='bannertxt-2'>i am a </span> Your Designation 
//         </h4>
//         </div>


//         </Col>
//         <Col lg={6}>
        
//         </Col>
//       </Row>
//       </Container>

//     </Container>
//   );
// }

// export default Mainbanner;


import React, { useState, useEffect } from 'react';
import "./Mainbanner.css"; // Optional: Import CSS for styling
import { Col, Container, Row } from 'react-bootstrap';
import picbg2 from "./picbg2.png"; // Import your image file
// import rafasuit from "./rafasuit.png"
import rafabluebg from "./rafabluebg.png"
// import rafawhitebg from "./rafawhitebg.png"

 
function Mainbanner() {
  const [text, setText] = useState('');
  const messages = ['UI/UX Designer', 'Frontend Developer']; // Messages to display
  const delayBetweenMessages = 1000; // Delay between switching messages (adjust as needed)

  useEffect(() => {
    let currentMessageIndex = 0;

    const typeText = async () => {
      while (true) {
        // Display current message with typing effect
        for (let i = 0; i <= messages[currentMessageIndex].length; i++) {
          setText(messages[currentMessageIndex].slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100)); // Adjust typing speed here
        }

        // Wait before erasing text
        await new Promise(resolve => setTimeout(resolve, delayBetweenMessages));

        // Erase text with erasing effect
        for (let i = messages[currentMessageIndex].length; i >= 0; i--) {
          setText(messages[currentMessageIndex].slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 50)); // Adjust erasing speed here
        }

        // Move to the next message
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      }
    };

    typeText();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Container fluid className='bgimagegif'>
      <Container className='h-100'>
        <Row className='h-100'>
          <Col lg={6}>
            <div style={{ color: "white" }} className='h-100 d-flex align-items-center justify-content-start'>
              <h4 className='bannertxt'>
                <span className='bannertxt-2'> Hi !!!</span><br />
                This is<span className='bannertxt-2'> Rafath Imran </span> <br />
                <span className='bannertxt-2'>I am a </span>{text}
              </h4>
            </div>
          </Col>
          <Col lg={6} className='h-100 d-flex align-items-center justify-content-center'>
            <img src={rafabluebg} alt='Background Image' className='img-fluid picbg  glitter-out' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Mainbanner;
