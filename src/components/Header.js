import { Link } from 'react-router-dom'


const Header = ({ title }) => {
    return (
        <header>
            <h4> {title='Infinite inspiration gallery'} </h4>
            <nav>
                
                    <Link className="sivo" to="/"> Rainy days... </Link>
                    
                    <Link className="boja" to="/color" > Let the sunshine in! </Link>
                  
           
            
        </nav>

        </header>

        
    )

    
   

      
}

Header.defaultProps = {
    title: 'Gallery'
}

export default Header

