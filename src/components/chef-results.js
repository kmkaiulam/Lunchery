import React from 'react';

import '../stylesheets/chef-results.css';

export default function ChefResults(props) {
    const chefResults= props.chefResults.map((chefResult, index) =>
        <tr key={index} className='chefResult'>
            <td><h3>{chefResult.chef}</h3></td>
            <tr>
                <td><img src={chefResult.image} alt='Chef Portrait'/></td>
            </tr>
            <tr> 
                <td> {chefResult.bio}</td>
            </tr>
            <tr>
                <td><p> {chefResult.specialty}</p></td>
            </tr>
            <tr>
                <td><p> {chefResult.availability}</p></td>
            </tr>  
            <tr>
                <td> {chefResult.reviews}</td>
            </tr>
            <tr>
                <td><img src={chefResult.dish} alt='Chef Specialty'/></td>
            </tr>
            <tr>
                <td>
                    <form>
                        <button type='submit'> Request </button>
                    </form>
                </td>
            </tr>
        </tr>
 
)
    return (
        <div className='chefResults'>
            <h2>[search results name]</h2>
            <table>
                {chefResults}
            </table>
        </div>
    )
}


