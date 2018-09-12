import React from 'react';

import './MyChefs.css';

export default function MyChefs(props) {
   const myChef = props.myChefs.map((myChef, index) => 
    <div key={index} className='myChef'>
        <div><img className='chefPortrait' src={myChef.image} alt={myChef.name}/></div>
        <div>
            <div><h3>{myChef.name}</h3></div>
        </div>
        <div>
            <div><p>Speciality: {myChef.speciality}</p></div>
        </div>
        <div>
            <div><img className='dish' src={myChef.dish} alt='signature dish' /></div>
        </div>
    </div>
   );
  
    return (
        <div className = 'myChef'>
            <h2>My Chefs</h2>
            {myChef}
        </div>
    )
}
        
          
