import React, { useEffect, useState } from 'react';
import './nestednavbar.css';
import downarrowimage from '../Assets/dwon.gif';
import lap from '../Assets/lap.png';
import Navbar from '../Navbar/Navbar';
// Aos animations
import Aos from 'aos';
import 'aos/dist/aos.css';

const Nestednavbar = () => {
  const [isNestedVisible, setIsNestedVisible] = useState(false);

  useEffect(() => {
    Aos.init();
    const handleScroll = () => {
      const arrowSection = document.querySelector('.dwon-arrow');
      const arrowSectionBottom = arrowSection.getBoundingClientRect().top;

      if (arrowSectionBottom <= 0) {
        setIsNestedVisible(true);
      } else {
        setIsNestedVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
   
    label: {
      marginRight: '10px',
      fontWeight: 'bold',
      color: '#272848',
    },
    input: {
      border: 'none',
      outline: 'none',
      
      color: '#272848',
      marginRight: '10px',
      flex: 1,
    },
  };

  return (
    <>
      {isNestedVisible && (
        <div className="nested sticky-top">
          <div className="color-style">
            <Navbar />
          </div>
          <div className="navbar-back">
            <div className="container-fluid">
              <form>
                <div className="row align-items-center d-flex justify-content-center m-0 p-0">
                 
                  <div className="col-12 col-md-6 ">
                    <div className='form-control'>
                      <label style={styles.label}>What</label>
                      <input type="text"   placeholder="Search Doctors, providers or conditions" style={styles.input} />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 ">
                    <div className='form-control'>
                      <label style={styles.label}>Where</label>
                      <input type="text" placeholder="United Arab Emirates" style={styles.input} />
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-2 text-center">
                    <button type="submit" className="btn button-color">
                      Find My Doctor
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <section className="dwon-arrow">
        <img src={downarrowimage} className="image-arrow" alt="Map" />
      </section>

      <div className="image-lap" data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <img
          src={lap}
          className="animating-image"
          alt="Lap"
        />
      </div>
    </>
  );
};

export default Nestednavbar;
