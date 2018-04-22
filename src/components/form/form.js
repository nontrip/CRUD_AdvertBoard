import React, { Component } from 'react';
import './form.css'
import cities from './cities'
import uuid from 'uuid/v4'

class Form extends Component {

  state = {
    name: '',
    description: '',
    phoneNumber: '',
    city: 'Москва',
    // photo: '',
    id: uuid()
  }

  handleNameChange = (e) => {
    const name = e.target.value
    this.setState({ name })
  }

  handleDescriptionChange = (e) => {
    const description = e.target.value
    this.setState({ description })
  }
  
  handleCityChange = (e) => {
    const city = e.target.value
    this.setState({ city })
  }

  handlePhoneChange = (e) => {
    const phoneNumber = e.target.value
    const valid = !phoneNumber.length || phoneNumber.substr(-1) === '-' || phoneNumber.substr(-1).match('[0-9]')
    valid && this.setState({ phoneNumber })
  }
  
  validatePhoneNumber = (number) => {
    const regular = new RegExp('8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}');
    return number.match(regular) ? true : false
  }

  onChangePhoto = (e) => {
    const photo = e.target.files[0]
    console.log(photo)
    // this.setState({ photo })
  }

  submit = (e) => {
    e.preventDefault()
    this.props.addAdvert(this.state)
  }


  render() {
    const { name, description, phoneNumber, city } = this.state
    return (
      <form className='form' onSubmit={this.submit} onClick={e => e.stopPropagation()}>
        <div className='form_content'>
          <input 
            type='text' 
            maxLength={100} 
            required 
            className='form_content_name' 
            value={name} 
            placeholder='Введите название' 
            onChange={this.handleNameChange} />

          <div className='form_content_sub-info'>
            <select name='city' className='city' value={city} onChange={this.handleCityChange}>
              <option disabled>Выберите город</option>
              {cities.map(el => <option key={uuid()}>{el}</option>)}
            </select>

            <input 
              type='text' 
              required 
              pattern={'8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'} 
              className='phoneNumber' 
              value={phoneNumber} 
              placeholder='Телефон 8-XXX-XXX-XX-XX' 
              onChange={this.handlePhoneChange} />
          </div>
          <textarea 
            maxLength={300} 
            placeholder='Введите описание'
            className='form_content_description' 
            value={description} 
            onChange={this.handleDescriptionChange} />

          <label>Добавьте фото</label>
          <input type='file' onChange={this.onChangePhoto} />

          <input type='submit' value='Добавить' className='form_content_submit'/>
        </div>
      </form>
    );
  }
}

export default Form;
