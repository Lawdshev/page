import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './assets/css/tailwind.output.css'
import App from './App'
import { SidebarProvider } from './context/SidebarContext'
import { SectorProvider } from './context/SectorContext'
import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import * as serviceWorker from './serviceWorker'
import { AuthProvider } from 'react-auth-kit'
import { BrowserRouter } from 'react-router-dom'
import {ModalContextProvider} from './context/modalContext'
import { AuthContextProvider } from './context/auth'

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
  <Suspense fallback={<ThemedSuspense />}>
    <AuthContextProvider>
  <SidebarProvider>
    <SectorProvider>
      <ModalContextProvider>
          <Windmill usePreferences>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </Windmill>
       </ModalContextProvider>
    </SectorProvider>
  </SidebarProvider>
  </AuthContextProvider>
   </Suspense>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
