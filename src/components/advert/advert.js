import React from 'react'
import no_photo from './img/no-photo.svg'
import './advert.css'

const Advert = ( { data, onDelete } ) => 
  <div className='advert'>
    <div className='advert-info'>
      <div className='subinfo'>
        <p className='info_name'>{data.name}</p>
        <p className='info_city'>{data.city}</p>    
        <p className='info_number'>{data.phoneNumber}</p>
      </div>
      <div className='photo_container'>
        <div className='photo' 
          style={{background: data.photo ? `url(${data.photo})` : `url(${no_photo})`, 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'}}/>
      </div>
    </div>
    <label>Описание:</label>
    <p className='advert-description'>{data.description || 'Пользователь не добавил описания'}</p>
    <div className='delete' data-id={data.id} onClick={onDelete}>Удалить</div>
  </div>

export default Advert