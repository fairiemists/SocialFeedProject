import React from 'react';


const NavBar = ({word1, word2}) => {
    return ( 
        <div>
            <h3 style={{margin: '1em'}}>{word1}<nobr className='text-muted'>{word2}</nobr></h3>
        </div>
     );
}
 
export default NavBar;