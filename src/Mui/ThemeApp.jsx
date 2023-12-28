import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import React from 'react'

export const ThemeApp = ({children}) => {

    const tema = createTheme({
        palette:{
         
          primary:{
            main: '#ffff'
          },
          Nav:{
            main:'#7c7875'
          },
        }
    })
    
  return (
    <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
  )
}
