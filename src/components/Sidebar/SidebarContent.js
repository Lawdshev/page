import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import Logo from '../../assets/img/logo.svg'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500">
      <a className="ml-6 text-lg font-bold text-gray-800" href="#">
        <img src={Logo} className='mx-auto' style={{width:"160px", height:"auto"}} />
      </a>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                activeClassName="text-gray-800"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 right-0  bg-gray-400 opacity-25"
                    aria-hidden="true"
                    style={{width:"250px", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}
                  ></span>
                </Route>
                <img className="w-5 h-5" aria-hidden="true" src={`/image/${route.icon}`} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      {/* <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div> */}
    </div>
  )
}

export default SidebarContent
