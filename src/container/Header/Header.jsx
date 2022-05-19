import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Good Food. Good Mood'/>
      <h1 className='app__header-h1'>Home of delicious meals</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>We offer the finest quality & nourishing meals, using our original recipes. Local dishes, African dishes, Small chops, snacks, Ice cream etc, are all available.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img'></img>
    </div>
  </div>
);

export default Header;
