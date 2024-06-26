import React, { useState,useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './WhyUs.css';

const WhyUs = () => {

  const [hoverData, setHoverData] = useState({ isVisible: false, doctorType: '', position: {} });

  const handleMouseEnter = (doctorType, event, imageRef) => {
    const rect = imageRef.current.getBoundingClientRect();
    setHoverData({
      isVisible: true,
      doctorType,
      position: { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }
    });
  };

  const handleMouseLeave = () => {
    setHoverData({ isVisible: false, doctorType: '', position: {} });
  };

  const [maleHoverData, setMaleHoverData] = useState({ isVisible: false, doctorType: '',position: {} });
  const [femaleHoverData, setFemaleHoverData] = useState({ isVisible: false, doctorType: '', position: {} });

  const maleDocRef = useRef(null);
  const femaleDocRef = useRef(null);

  const handleMaleMouseEnter = (doctorType,event) => {
    const rect = maleDocRef.current.getBoundingClientRect();
    setMaleHoverData({
      isVisible: true,doctorType: '',
      position: { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }
    });
  };

  const handleMaleMouseLeave = (doctorType) => {
    setMaleHoverData({ isVisible: false, doctorType: '', position: {} });
  };

  const handleFemaleMouseEnter = (doctorType,event) => {
    const rect = femaleDocRef.current.getBoundingClientRect();
    setFemaleHoverData({
      isVisible: true, doctorType: '',
      position: { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }
    });
  };

  const handleFemaleMouseLeave = (doctorType) => {
    setFemaleHoverData({ isVisible: false, doctorType: '',position: {} });
  };
  return (
    <div className='main' >
      <div className="why-us-section text-center ">
        <div className="lorem-ipsum">LOREM IPSUM</div>
        <h2 className="mb-4 why-us">Why Us?</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 card">
              <Card.Body>
                <div className="icon mb-3">
                  <img src="/icon1.png" alt="Patient Centered Icon" />
                </div>
                <Card.Title className="card-title">Patient Centered</Card.Title>
                <Card.Text className="card-text">
                  From provider profiles reviewed by other patients to in-depth articles that explore numerous conditions, we have designed our platform to empower you to be your own health advocate.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 card">
              <Card.Body>
                <div className="icon mb-3">
                  <img src="/icon2.png" alt="AI First Company Icon" />
                </div>
                <Card.Title className="card-title">AI First Company</Card.Title>
                <Card.Text className="card-text">
                  To help deliver a quality experience that supports our continuous improvement process, we are dedicated to being an AI first company. This will allow us to implement the latest and greatest tools to best serve.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 card">
              <Card.Body>
                <div className="icon mb-3">
                  <img src="/icon3.png" alt="Global Focus Icon" />
                </div>
                <Card.Title className="card-title">Global Focus</Card.Title>
                <Card.Text className="card-text">
                  With a focus on serving the Middle East and various countries throughout Africa, we are aligning our efforts to the UN'S Sustainable Development Goal #3, good health & well-being.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="x-image1">
        <img src="/x-image.png" alt="X Image" className="overlay" />
      </div>

      <div className="provider-section-1 my-5"
        onMouseEnter={handleMaleMouseEnter}
        onMouseLeave={handleMaleMouseLeave}>
    <div className="row reverse-row" >
        <div className="col-sm-4 provider-feature1 d-flex ">
            <div className="overlay-container-1">
                <img ref={maleDocRef} src="/maledoc1.png" alt="Male Doc 1" className="overlay first" />
                <img ref={maleDocRef} src="/maledoc2.png" alt="Male Doc 2" className="overlay second" />
            </div>
        </div>
        <div className="col-sm-8">
            <div className="lorem-ipsum2">LOREM IPSUM</div>
            <h2 className="mb-4 provider-title1">Find Your Ideal Provider</h2>
            <p className="provider-text1">
                Whether you’re seeking traditional medical advice or exploring modern and holistic treatment options, our directory connects you with healthcare providers who specialize in your specific condition or area of concern. From local specialists to top-rated clinics, find the right provider near you with ease.
            </p>
            <p className="provider-text1"><img src="/tick.png" alt="Check Icon" /> Lorem ipsum dolor sit amet consectetur.</p>
            <p className="provider-text1"><img src="/tick.png" alt="Check Icon" /> Lorem ipsum dolor sit amet consectetur.</p>
            <p className="provider-text1"><img src="/tick.png" alt="Check Icon" /> Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
</div>

<div className="provider-section-2 my-5"
        onMouseEnter={handleFemaleMouseEnter}
        onMouseLeave={handleFemaleMouseLeave}>
    <div className="row">
        <div className="col-sm-4 provider-feature2 d-flex justify-content-end" >
            <div className="overlay-container-2">
                <img ref={femaleDocRef} src="/femaledoc1.png" alt="Female Doc 1" className="overlay first-1" />
                <img ref={femaleDocRef} src="/femaledoc2.png" alt="Female Doc 2" className="overlay second-2" />
            </div>
        </div>
        <div className="col-sm-8">
            <div className="lorem-ipsum3">LOREM IPSUM</div>
            <h2 className="mb-4 provider-title2">Own Your Health</h2>
            <p className="provider-text2">
                Dive into the healthcare scene and check out detailed profiles of providers, their specialties, blog posts, which insurance they accept, and their affiliated hospitals. It’s more than just finding any provider; it’s about finding the right one who really gets your health needs.
            </p>
            <p className="provider-text2"><img src="/tick.png" alt="Check Icon" /> Lorem ipsum dolor sit amet consectetur.</p>
            <p className="provider-text2"><img src="/tick.png" alt="Check Icon" /> Lorem ipsum dolor sit amet consectetur.</p>
            <p className="provider-text2"><img src="/tick.png" alt="Check Icon" /> Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
    <div className="x-image2" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <img src="/x-image.png" alt="X Image" className="overlay" />
        </div>
</div>

{maleHoverData.isVisible && (
        <div className="hover-card" style={{ top: maleHoverData.position.top, left: maleHoverData.position.left }}>
          <Card className="hover-profile-card card-1">
                <Card.Body>
                   <Card.Title className="card-title">
                      <img src="/doctor-profile-3.png" alt="Doctor Profile" className="doctor-profile-img" />
                         <span className="profile-name">Dr. Mehmet Akinci</span>
                   </Card.Title>
                        <p className="bar-image-1"><img src="/largebar.png" alt="Large Bar" /></p>
                        <p className="bar-image-2"><img src="/smallbar.png" alt="Small Bar" /></p>
                </Card.Body>
          </Card>
    <Card className="hover-profile-card card-2">
      <Card.Body>
        <Card.Title className="card-title ">
          <img src="/doctor-profile.png" alt="Doctor Profile" className="doctor-profile-img" />
          <span className="profile-name">Dr. Andrew Miller</span>
        </Card.Title>
        <p className="bar-image-1"><img src="/largebar.png" alt="Large Bar" /></p>
<p className="bar-image-2"><img src="/smallbar.png" alt="Small Bar" /></p>
            <Card.Title className="card-title ">
              <img src="/doctor-profile-2.png" alt="Doctor Profile" className="doctor-profile-img" />
              <span className="profile-name">Dr. Cameron Wilson</span>
            </Card.Title>
            <p className="bar-image-1"><img src="/largebar.png" alt="Large Bar" /></p>
<p className="bar-image-2"><img src="/smallbar.png" alt="Small Bar" /></p>
          </Card.Body>
        </Card>
      </div>
    )}

{femaleHoverData.isVisible && (
        <div className="hover-card-2" style={{ top: femaleHoverData.position.top, left: femaleHoverData.position.left }}>
           <Card className="hover-profile-card card-2 female">
        <Card.Body>
          <Card.Title className="card-title">
            <img src="doctor-profile-4.png" alt="Doctor Profile" className="doctor-profile-img" />
            <span className="profile-name-2">Dr. Mamtha</span>
          </Card.Title>
          <p className="bar-image-1"><img src="/largebar.png" alt="Large Bar" /></p>
          <p className="bar-image-2"><img src="/smallbar.png" alt="Small Bar" /></p>
          <Card.Text>Specialities</Card.Text>
          <p className="bar-image-3"><img src="/largebar.png" alt="Large Bar" /></p>
          <Card.Text>detailed profile</Card.Text> 
          <p className="bar-image-4"><img src="/largebar.png" alt="Large Bar" /></p>
        </Card.Body>
      </Card>
        </div>
      )}
  </div>

    
  );
};

export default WhyUs;
