import React from 'react'
import './Profile.css';
export default function Profile(props){
    const availability = props.profile.availability.map((day, index) =>
     <div key={index}>
        <div className='days'>
            {day} 
        </div>
     </div>
    )
     const dishes = props.profile.dishes.map((dish, index) =>
     <div key={index}> 
        <div className='dish'> {dish} </div>
     </div>
    )
    return (
        <div className='profile'>
            <div className='name'>
                <h1>{props.profile.name}</h1>   
            </div>
            <div clasName='company'>
                <h2>{props.profile.company} in {props.profile.location}</h2>   
            </div>
            <div className='picture'>
                <div>{props.profile.picture}</div>   
            </div>
            <h2>Bio</h2>
            <div className='bio'>
                <p>{props.profile.bio}</p> 
            </div>
            <h2>Speciality</h2>
            <div className='speciality'>
                {props.profile.specialty}  
            </div>
            <h2>Availability </h2>
            <div className='availability'>
                {availability}   
            </div>
            <h2>Dishes</h2>
            <div className='dishes'>
                {dishes}
            </div>
        </div>



    )

}