import React from 'react';
import Profile from './profilePage/Profile';
import ProfileForm from './profilePage/ProfileForm';
import './ProfilePage.css';

export default function ProfilePage(props) {
    const profile = {
        name: 'Chef Thomas',
        company: 'Kelly Services',
        location: 'San Francisco',
        picture: 'Placeholder image',
        bio: 'lorem ipsum',
        specialty: 'American',
        availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        dishes: ['placeholder dish, placeholder dish']
    }
    return (
        <div className='profilePage'>
            <Profile profile={profile} />
            <ProfileForm />
        </div>
    )
}