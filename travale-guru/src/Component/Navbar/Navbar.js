import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/Logo.png'
import { Container,Grid ,Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const Navbar= () => {

    return (
       <Container className="nav">
           <Grid container spacing={3}>
        <Grid item xs={2}>
           <img src={logo} alt=""/>
        </Grid>
        <Grid item xs={4}>
           <SearchIcon/>
            <input type="search" placeholder="Search your Destination..."/>
        </Grid>
        <Grid item xs={6}>
             <nav>
               <Link to="/">News</Link>
               <Link to="/">Destination</Link>
               <Link to="/">Blog</Link>
               <Link to="/">Contact</Link>
              <Button color="primary"> <Link to="/">Login</Link></Button>
               </nav> 
        </Grid>
        </Grid>
           
       </Container>
    );
};

export default Navbar;

