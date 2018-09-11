import React from 'react';
import ChefResults from './chefSearch/ChefResults';
import ChefForm from './chefSearch/ChefForm';
import './ChefSearch.css';

export default function ChefSearch(props) {
    const results= [
      {
        company: 'ABC Company',
        name: 'Chef Amy',
        bio: 'Lorem Ipsum dolor',
        availability: 'everyday',
        reviews: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74PsvREfbIsR6FqZy3L4sCQ0KTK4BwL7cpkT3qb4dqp8ybntXWw',
        speciality: 'Indian',
        dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
     },
     {
        company: 'ABC Company',
        name: 'Chef Guy',
        bio: 'Lorem Ipsum dolor',
        availability: 'everyday',
        reviews: 'Real Authentic Food this one',
        image: 'https://assets3.thrillist.com/v1/image/2670144/size/tmg-gift_guide_default.jpg',
        speciality: 'American',
        dish: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Easy_Steak_Frites-LEDE.jpg?itok=IdQsXmBP'
    }
    ]
    return (
        <div className='chefSearch'>
            <ChefForm />
            <ChefResults chefResults={results} />
        </div>
    
    
    )
}








