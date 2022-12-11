/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/eligibility', // the url
    icon: 'eligibility.svg', // the component being exported from icons/index.js
    name: 'Elibility check', // name that appear in Sidebar
  },
  {
    path: '/app/bvnverification',
    icon: 'bvn.svg',
    name: 'Bvn Verification',
  },
  {
    path: '/app/personaldetails',
    icon: 'bvn.svg',
    name: 'Personal Details',
  },
  {
    path: '/app/employerdetails',
    icon: 'employer.svg',
    name: 'Employer Details',
  },
  {
    path: '/app/loandetails',
    icon: 'loan.svg',
    name: 'Loan Details',
  },
  {
    path: '/app/accountdetails',
    icon: 'account.svg',
    name: 'Account Details',
  },
  {
    path: '/app/statement',
    icon: 'statement.svg',
    name: 'Statement',
  },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
