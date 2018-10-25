import React from 'react';
import {connect} from 'react-redux';
import './MyChefs.css';

export class  MyChefs extends React.Component {
    render() {
        const myChef = this.props.myChefs.map((myChef, index) => 
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
}


MyChefs.defaultProps = [
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
    name: 'Chef Jaz',
    bio: 'Lorem Ipsum dolor',
    availability: 'everyday',
    reviews: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74PsvREfbIsR6FqZy3L4sCQ0KTK4BwL7cpkT3qb4dqp8ybntXWw',
    speciality: 'Indian',
    dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
    },
]
    

const mapStateToProps=state => ({
    myChefs:[
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
        name: 'Chef Jaz',
        bio: 'Lorem Ipsum dolor',
        availability: 'everyday',
        reviews: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74PsvREfbIsR6FqZy3L4sCQ0KTK4BwL7cpkT3qb4dqp8ybntXWw',
        speciality: 'Indian',
        dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
        },
    ]
});

export default connect(mapStateToProps)(MyChefs);