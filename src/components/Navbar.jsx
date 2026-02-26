import { Link, NavLink } from "react-router-dom";


function Navbar(){
    return(
    <nav style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0.75rem 1.5rem',
        backgroundColor:'black',
        color:'white',
        position:'fixed',
        top:0,
        left:0,
        right:0,
        width:'100%',
        zIndex:1000,
        flexWrap:'wrap',
        boxSizing:'border-box',
        gap:'0.5rem'
    }}>
        <div>
      <Link to="/" style={{margin:0,fontSize:'1.3rem',fontWeight:'bold'}}>
      TechGadget
      </Link>
        </div>
         <div style={{display:'flex',alignItems:'center',gap:'0.75rem',flexWrap:'wrap',justifyContent:'flex-end',flex:1}}>
          <NavLink to="/" end style={{color:'#fff',textDecoration:'none',fontSize:'0.95rem'}}> Home</NavLink>
          <NavLink to="/about" style={{color:'#fff',textDecoration:'none',fontSize:'0.95rem'}}>About</NavLink>
          <NavLink to="/contact" style={{color:'#fff',textDecoration:'none',fontSize:'0.95rem'}}>Contact</NavLink> 
          <NavLink to="/products" style={{color:'#fff',textDecoration:'none',fontSize:'0.95rem'}}>Products</NavLink>  
           <NavLink to="/cart" style={{color:'#fff',textDecoration:'none',fontSize:'0.95rem'}}>Cart</NavLink>
        </div>

    </nav>
    )
}
export default Navbar;