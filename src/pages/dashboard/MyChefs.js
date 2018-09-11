import React from 'react';

import './MyChefs.css';

export default function MyChefs(props) {
   const myChef = props.myChefs.map((myChef, index) => 
    <tr key={index} className='myChef'>
        <td><img className='chefPortrait' src={myChef.image} alt={myChef.name}/></td>
        <tr>
            <td><h3>{myChef.name}</h3></td>
        </tr>
        <tr>
            <td><p>Speciality: {myChef.speciality}</p></td>
        </tr>
        <tr>
            <td><img className='dish' src={myChef.dish} alt='signature dish' /></td>
        </tr>
    </tr>
   );
  
    return (
    <div className = 'myChef'>
        <table>
            <tbody>
                <thead colSpan={3}>My Chefs</thead>
                {myChef}
            </tbody>
        </table>
</div>
    )
}
        
          
