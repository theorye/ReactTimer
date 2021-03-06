import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';


const Nav = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to='/' activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>
            Created By <a href="http://www.mead.io" target="_black">Adrian</a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Nav;


// export default class Nav extends Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return (
//       <div className='top-bar'>
//         <div className='top-bar-left'>
//           <ul className='menu'>
//             <li className="menu-text">React Timer App</li>
//             <li>
//               <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
//             </li>
//             <li>
//               <Link to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
//             </li>
//           </ul>
//         </div>
//         <div className='top-bar-right'>
//           <p className='menu'>Created By Adrian</p>
//         </div>
//
//       </div>
//
//     );
//   }
// }
