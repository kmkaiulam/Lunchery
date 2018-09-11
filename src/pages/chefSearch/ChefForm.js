import React from 'react';
import './ChefForm.css';

export default function ChefForm(props) {
    return (
        <div className='chefForm'>
        <form id = 'js-login-form'>
            <h1>Chef Search</h1>
            <div>
                <label  for='inputCompanyName'>Company Name</label>
                <input aria-label='company name' name='companyName' type='text' id='inputCompanyName' placeholder='ABC Company' required autofocus/>
            </div>
            <legend>Filter options</legend>
            <div>
                <legend>Availability</legend>
                <label for='monday'>M</label>
                <input aria-label='monday' type='checkbox' name='Monday' value='Monday' id='monday'/>
                <label for='tuesday'>T</label>
                <input aria-label='tuesday' type ='checkbox' name ='Tuesday' value ='Tuesday' id='tuesday'/>
                <label for='wednesday'>W</label>
                <input aria-label='wednesday' type ='checkbox' name ='Wednesday' value ='Wednesday' id='wednesday'/>
                <label for='thursday'>TH</label>
                <input aria-label='thursday' type ='checkbox' name ='Thursday' value ='Thursday' id='thursday'/>
                <label for='friday'>F</label>
                <input aria-label='friday' type ='checkbox' name ='Friday' value ='Friday' id='friday'/>
            </div>
            <div>
                <legend>Culinary Preferences</legend>
                <label for='American'>American</label>
                <input aria-label='American' type='checkbox' name='American' value='American' id='American'/>
                <label for='Chinese'>Chinese</label>
                <input aria-label='Chinese' type ='checkbox' name ='Chinese' value ='Chinese' id='Chinese'/>
                <label for='Italian'>Italian</label>
                <input aria-label='Italian' type ='checkbox' name ='Italian' value ='Italian' id='Italian'/>
                <label for='Mexican'>Mexican</label>
                <input aria-label='Mexican' type ='checkbox' name ='Mexican' value ='Mexican' id='Mexican'/>
                <label for='Filipino'>Filipino</label>
                <input aria-label='Filipino' type ='checkbox' name ='Filipino' value ='Filipino' id='Filipino'/>
            </div>
            <button type='submit'>Search</button>
        </form>    
    </div>
    )
}