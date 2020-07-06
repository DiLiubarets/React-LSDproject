import React from 'react';
import { Appbar} from 'muicss/react';

export default function AppBar() {


  return (
    
    <Appbar>
    <table>
      <tbody>
        <tr className="mui--appbar-height">
          <td className="mui--text-title ">
            <ul className="mui-list--unstyled mui-list--inline">
           <li><img
              src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15664219991579250992-512.png"
              alt="" style={{width: '70px'}}
            /></li> 
            <li className="mui--text-display3">LSD</li>
            </ul>
          </td>
          <td className="mui--text-right">
            <ul className="mui-list--inline" id="bigScreen">
              <li>
                <a href="#body"><span className="mui-text mui-caret--right">Chart</span></a>
              </li>
              <li>
                <a href="#contact-us"><span className="mui-text mui-caret--right">Contact Us</span></a>
              </li>
              <li>
                <a href="#about-project"><span className="mui-text mui-caret--right">About LSD</span></a>
              </li>
              <li>
                <a href="#crypto-news"><span className="mui-text mui-caret--right">News</span></a>
              </li>
            </ul>
            <div class="mui-dropdown mui-dropdown--left" id="smallScreen">
              <span data-mui-toggle="dropdown">
                <i class="fa fa-bars"> </i>
              </span>

              <ul id="siteNav" className="mui-dropdown__menu">
                <li>
                  <a href="#body"><span className="mui-text mui-caret--right">Chart</span></a>
                </li>
                <li>
                  <a href="#crypto-news"><span className="mui-text mui-caret--right">News</span></a>
                </li>
                <li>
                  <a href="#about-project"><span className="mui-text mui-caret--right">About LSD</span></a>
                </li>
                <li>
                  <a href="#contact-us"><span className="mui-text mui-caret--right">Contact Us</span></a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
  </Appbar>
  
  );
}

