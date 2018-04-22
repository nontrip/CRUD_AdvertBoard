import React from 'react'
import './advertList.css'
import Advert from '../advert/advert'
import uuid from 'uuid/v4'

const AdvertList = ( { adverts, onDelete } ) => 
    <div className='adverts'>
        {adverts.map(el => <Advert key={uuid()} data={el} onDelete={onDelete} />)}
    </div>

export default AdvertList