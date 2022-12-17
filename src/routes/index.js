import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Eligibility = lazy(() => import('../pages/Eligibility'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const Bvnverification = lazy(() => import('../pages/Bvnverification'))
const Loandetails = lazy(() => import('../pages/Loandetails') )
const Accountdetails = lazy(() => import('../pages/Accountdetails') )
const Personaldetails = lazy(() => import('../pages/Personaldetails'))
const Employerdetails = lazy(() => import('../pages/Employerdetails'))
const Statement = lazy(() => import('../pages/Statement'))



/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  // {
  //   path: '/eligibility', // the url
  //   component: Eligibility, // view rendered
  // },
  {
    path: '/bvnverification', // the url
    component: Bvnverification, // view rendered
  },
  {
    path: '/loandetails', // the url
    component: Loandetails, // view rendered
  },
  {
    path: '/accountdetails', // the url
    component: Accountdetails, // view rendered
  },
  {
    path: '/personaldetails', // the url
    component: Personaldetails, // view rendered
  },
  {
    path: '/employerdetails', // the url
    component: Employerdetails, // view rendered
  },
  {
    path: '/statement', // the url
    component: Statement, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes;
