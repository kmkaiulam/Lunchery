import React from 'react';
import './ProfileForm.css';

export default class ProfileForm extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault();
        console.log(e.target.value);
    }
    render(){

    return (
        <div className='profileForm'>
            <form  id='profileEdit' onSubmit={ e => this.onSubmit(e)}>
                <h1>Edit Profile</h1>
                <div>
                    <label  htmlFor='inputCompanyName'>Company Name</label>
                    <input aria-label = 'companyName' name = 'companyName' type='name' id='inputCompanyName' ref={input => (this.input = input)} required/>
                </div>
                <div className='input1'>
                    <div>
                        <label  htmlFor='bio'>Bio</label>
                        <textarea aria-label = 'bio' name = 'bio' type='textarea' id='bio' />
                    </div>
                 {/*    <div>
                        <label htmlFor='pic'> Profile Picture</label>
                        <input type="file" name="pic" accept="image/*"/>
                    </div> */}
                </div>
                <div> 
                    <label  htmlFor='specialty'>Speciality</label>
                    <textarea aria-label ='speciality' name = 'speciality' type='textarea' id='speciality' placeholder='ex. Chinese, Italian, Japanese, American' />
                </div> 
                <div>
                    <legend>Availability</legend>
                    <label htmlFor='monday'>M</label>
                    <input aria-label='monday' type='checkbox' name='Monday' value='Monday' id='monday'/>
                    <label htmlFor='tuesday'>T</label>
                    <input aria-label='tuesday' type ='checkbox' name ='Tuesday' value ='Tuesday' id='tuesday'/>
                    <label htmlFor='wednesday'>W</label>
                    <input aria-label='wednesday' type ='checkbox' name ='Wednesday' value ='Wednesday' id='wednesday'/>
                    <label htmlFor='thursday'>TH</label>
                    <input aria-label='thursday' type ='checkbox' name ='Thursday' value ='Thursday' id='thursday'/>
                    <label htmlFor='friday'>F</label>
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
}