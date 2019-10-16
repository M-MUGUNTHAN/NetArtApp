import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div>
        <div>
            <h3 className="footer-text-center">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <p  className="footer-text-center">CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|
                </span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|
                </span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|
                </span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|
                </span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|
                </span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
            </p>

        </div>
        <div className="footer-contact">
           <div >
               <img src="https://img.icons8.com/material-outlined/24/000000/add-phone.png" alt="Oops..."/>
               Toll free 1800 200 1234
           </div>
           <div>
           <img src="https://img.icons8.com/windows/32/000000/facebook-new.png" alt="Oops..."/>
           www.facebook.com/cripumps
           </div>
           <div>
           <img src="https://img.icons8.com/material-outlined/24/000000/globe--v2.png" alt="Oops..."/>
           www.crigroups.com
           </div>
         
        </div>
    </div>
  );
}

export default Footer;
