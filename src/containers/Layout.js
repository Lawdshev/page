import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import ProtectedRoute from '../utils/ProtectedRoute/ProtectedRoute'
// import Eligibility from '../pages/Eligibility'

const Eligibility = lazy(() => import('../pages/Eligibility'))
const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div
      className={`flex h-screen bg-gray-200 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <div className="md:hidden">
        <Header  />
        </div>
        
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              <Route
                    path='/app/eligibility'
                    component={Eligibility}
                    />
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <ProtectedRoute><route.component {...props} /></ProtectedRoute> }
                  />
                ) : null
              })}
              <Redirect exact from="/app" to="/app/eligibility" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
