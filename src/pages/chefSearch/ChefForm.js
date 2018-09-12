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
            <button type='submit'>Search</button>
        </form>    
    </div>
    )
}