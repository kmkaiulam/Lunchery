import React from 'react';
import './ProfileForm.css';

export default function ProfileForm(props) {
    return (
        <div className='profileForm'>
            <form id = 'profileEdit'>
                <h1>Edit Profile</h1>
                <div>
                    <label  htmlFor='inputCompanyName'>Company Name</label>
                    <input aria-label = 'companyName' name = 'companyName' type='name' id='inputCompanyName' required/>
                </div>
                <div className='input1'>
                    <div>
                        <label  htmlFor='bio'>Bio</label>
                        <textarea aria-label = 'bio' name = 'bio' type='textarea' id='bio' />
                    </div>
                    <div>
                        <label htmlFor='pic'> Profile Picture</label>
                        <input type="file" name="pic" accept="image/*"/>
                    </div>
                </div>
                <div> 
                    <label  htmlFor='specialty'>Speciality</label>
                    <textarea aria-label ='speciality' name = 'speciality' type='textarea' id='speciality' placeholder='ex. Chinese, Italian, Japanese, American' />
                </div> 
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
                  [Placeholder for multifile photo upload for dishes]
                </div>
                <div>
                <button type='submit'>Submit</button>
                </div>   
            </form>
        </div>
    )
}