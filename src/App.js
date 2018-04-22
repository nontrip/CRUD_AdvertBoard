import React, { Component } from 'react'
import './App.css'
import Form from './components/form/form'
import AdvertList from './components/advertList/advertList'

class App extends Component {

  state = {
    showForm: false,
    adverts: JSON.parse(localStorage.getItem('adverts')) || [],
    search: ''
  }

  handleFormState = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleSearchChange = (e) => {
    const search = e.target.value
    this.setState({ search })
  }

  addAdvert = (advert) => {
    const adverts = [advert, ...this.state.adverts]
    localStorage.setItem('adverts', JSON.stringify(adverts))
    this.setState({
      adverts,
      showForm: false
    })
  }

  onDelete = (e) => {
    const id = e.target.dataset.id
    const adverts = this.state.adverts.filter(el => el.id !== id)
    localStorage.setItem('adverts', JSON.stringify(adverts))    
    this.setState({ adverts })
  }

  render() {
    const { showForm, search } = this.state
    const adverts = this.state.adverts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className='App'>

        {adverts.length ? <AdvertList onDelete={this.onDelete} adverts={adverts}/> : <p className='no_adverts'>Нет объявлений</p>}
        <input type='text' value={search} onChange={this.handleSearchChange} className='search' placeholder='Поиск'/>
        
        {showForm && <div className='form-layout' onClick={this.handleFormState}>
          <Form addAdvert={this.addAdvert}/>
        </div>}
        <div className={`openForm ${showForm ? 'opened' : ''}`} onClick={this.handleFormState} />
      </div>
    );
  }
}

export default App;
