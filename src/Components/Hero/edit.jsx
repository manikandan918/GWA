import React, { useState, useEffect } from 'react';
import './hero.css'; // Import your local CSS file for component-specific styles
import Navbar from '../Navbar/Navbar';
import doctorImage from '../Assets/doctorImage.png';
import { SlLocationPin } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";

import { getNames, getCode } from 'country-list';
import countries from 'i18n-iso-countries';

// Load languages
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Hero = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const countriesList = getNames().map(country => {
      const alpha2Code = getCode(country);
      const alpha3Code = countries.alpha2ToAlpha3(alpha2Code);
      return {
        value: alpha3Code,
        label: country,
        fullLabel:`${country} (${alpha3Code})` // Include full name and 3-letter code for displaying in the dropdown
      };
    });
    setLocations(countriesList);
    setSelectedLocation(countriesList.find(c => c.value === 'ARE')); // Set default to USA (USA)
  }, []);

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  // Custom SingleValue component to display only the 3-letter code after selection
  const SingleValue = ({ data }) => (
    <div>{data.value}</div>
  );

  // Custom DropdownIndicator component to remove the default icon
  const DropdownIndicator = () => null;

  return (
    <>
        <section className="hero-section">
          <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className='hero-content-head ml-5'>
                            <h5>CERTIFIED DOCTORS</h5>
                            <h2 className="hero-title">We Find <span>Best Doctors</span><br/> Based On Your Condition</h2>
                            <div className="search-bar ">
                                <div className="location-container">
                                    <SlLocationPin className="icons " size='1.4rem'/>
                                    <div
                                        value={selectedLocation}
                                        onChange={handleLocationChange}
                                        options={locations}
                                        className="react-select"
                                        placeholder="Select Country"
                                        getOptionLabel={option => option.fullLabel} // Display full name and 3-letter code in the dropdown
                                        components={{ SingleValue, DropdownIndicator }} // Use the custom SingleValue and DropdownIndicator components
                                        styles={{
                                            control: (base) => ({
                                            ...base,
                                            border: 'none',
                                            boxShadow: 'none',
                                            background: 'none',
                                            width:'100px',
                                            marginLeft:'10px',
                                            marginTop:'-35px',
                                           
                                            }),
                                            singleValue: (base) => ({
                                            ...base,
                                            color: '#333',
                                            }),
                                            indicatorSeparator: (base) => ({
                                            ...base,
                                            display: 'none'
                                            }),
                                            valueContainer: (base) => ({
                                            ...base,
                                            padding: '0px',
                                           
                                            }),
                                            menu: (base) => ({
                                            ...base,
                                            background: '#fff',
                                            border: '1px solid #ddd'
                                            })
                                        }}
                                    />
                                    <div className='simple'></div>
                                </div>
                                <div className="search">
                                    <IoMdSearch className="icons" size='1.8rem' />
                                    <input type="text" className='search-input' placeholder="Search Doctors" />
                                </div>
                                <button className="search-button">Find My Doctor</button>
                            </div> 
                        </div>    
                    </div>

                    <div className="col-md-6 col-12">
                        <img
                            src={doctorImage}
                            alt="Doctors"
                            className="hero-image"
                        />
                    </div>    
                </div>
            </div>
        </section>
    </>
  );
};

export default Hero;
