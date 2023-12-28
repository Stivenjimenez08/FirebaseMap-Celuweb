import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'
import React from 'react'
import { AuthRoutes } from './auth/Routes/AuthRoutes';
import { NotesRoutes } from './pages/Routes/NotesRoutes';
import { ThemeApp } from './Mui/ThemeApp'
import { CheckingAuth } from './Mui/chechingAuth'
import { useCheckAuth } from './hooks';


export const NotesApp = () => {

  const {status} = useCheckAuth()

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return ( 
    <ThemeApp>
      <Router>
        <Routes>
          {
            (status === 'authenticated') ? <Route path="/*" element={<NotesRoutes/>}/> : <Route path="/auth/*" element={<AuthRoutes/>}/>
          }
          <Route path='/*' element={ <Navigate to='/auth/login' />  } />
        </Routes>
      </Router>
    </ThemeApp>
  )
}