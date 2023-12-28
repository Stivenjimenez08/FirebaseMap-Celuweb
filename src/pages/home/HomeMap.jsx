import '../../style.css'
import * as React from 'react';
import Map from '../../Components/Map/Map';
import { LayoutHome } from '../LayoutHome';


export const HomeMap =()=>{

  return (
    <LayoutHome title={'Mapa de medellin'} >
      <Map className='animate__animated animate__fadeIn animate__faster'/>
    </LayoutHome>
  );
}
