import { NotesApp } from './NotesApp.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotesApp/>
    </Provider>   
  </React.StrictMode>,
)
