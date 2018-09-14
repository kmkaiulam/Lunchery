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

const mapStateToProps=state => ({
    myChefs:state.auth.user.mychefs
});

export default connect(mapStateToProps)(MyChefs);