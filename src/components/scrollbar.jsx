import React from 'react';
import '../css/scrollbar.css';

const Scrollbar = () => {
  return (

       <div className="sidebar">
           <div className='first'> 
              <img className="sidebar-icon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
              <img className="sidebar-icon" src="https://main--stately-cocada-542a8d.netlify.app/assets/wallet/wallet.svg" alt="" />
              <img className="sidebar-icon" src="https://img.icons8.com/?size=2x&id=TZ2lKyH3LVjx&format=gif" alt="" />
              <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/5972/5972922.png" alt="" />
              <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/3649/3649458.png" alt="" />
                <hr /> 
            </div>
         
           <div className ='money'>
             <p>Games</p>
             <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/3840/3840696.png" alt="" />
             <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/3566/3566088.png" alt="" />
             <hr />
           </div>

           <div className='nft'>
               <h3>NFT-Fi</h3>
              <hr />
           </div>

           <div className='utility'>
            <h3>Utility</h3>
            <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/870/870653.png" alt="" />
            <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/8983/8983163.png" alt="" />
            <img className="sidebar-icon" src="https://img.icons8.com/?size=2x&id=6Ty1hd-tL2Il&format=png" alt="" />
            <hr />
           </div>
   
      <div className='about'>
        <h3>About Us</h3>
        <img className="sidebar-icon" src="https://img.icons8.com/?size=2x&id=gQzUf5XVxPEH&format=png" alt="" />
        <img className="sidebar-icon" src="https://cdn-icons-png.flaticon.com/128/8584/8584188.png" alt="" />
      </div>

       </div>

    

    
  );
};

export default Scrollbar;
