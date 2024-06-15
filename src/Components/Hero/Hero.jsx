import React, { useState, useEffect } from 'react';
import './hero.css'; 
import Navbar from '../Navbar/Navbar';
import map from '../Assets/map.png';
import doctorImage from '../Assets/doctorImage.png';

import { SlLocationPin } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { getNames, getCode } from 'country-list';
import countries from 'i18n-iso-countries';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Hero = () => {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const countriesList = getNames().map(country => {
            const alpha2Code = getCode(country);
            const alpha3Code = countries.alpha2ToAlpha3(alpha2Code);
            return {
                value: alpha3Code,
                label: country,
                fullLabel: country
            };
        });
        setLocations(countriesList);
        setSelectedLocation(countriesList.find(c => c.value === 'ARE'));
    }, []);

    const handleLocationChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = locations.find(location => location.value === selectedValue);
        setSelectedLocation(selectedOption);
    };

    return (
        <>
            <section className="hero-section">
                <Navbar />
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-5 col-12 text-center">
                            <div className='hero-content-head ml-md-5'>
                                <h5>CERTIFIED DOCTORS</h5>
                                <p className="hero-title">We Find <span>Best Doctors</span><br /> Based On Your Condition</p>
                                <div className="search-bar">
                                    <div className="custom-select-wrapper">
                                        <SlLocationPin className="icon-loc-src" size='1rem' />
                                        <select
                                            onChange={handleLocationChange}
                                            value={selectedLocation ? selectedLocation.value : 'ARE'}
                                        >
                                            {locations.map(location => (
                                                <option key={location.value} value={location.value}>
                                                    {selectedLocation && selectedLocation.value === location.value ? location.value : location.fullLabel}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='simple-line'></div>
                                    <div className="search">
                                        <IoMdSearch className="icon-loc-src" size='1.5rem' />
                                        <input type="text" className='search-input' placeholder="Search Doctors" />
                                        <button className="search-button">Find My Doctor</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-2 col-12 text-center ">
                            <img src={map} className='map-image' alt="Map" />
                        </div> */}
                        <div className="col-md-2 col-12 text-center ">
                                 <div className="animation"></div>
                        </div>
                        <div className="col-md-5 col-12 text-center ">
                            <div className="image-division">
                                <img
                                    src={doctorImage}
                                    alt="Doctors"
                                    className="hero-image"
                                />
                                <div className="layout"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    );
};

export default Hero;