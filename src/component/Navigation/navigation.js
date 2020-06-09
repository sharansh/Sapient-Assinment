import React,{ Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav } from 'react-bootstrap'
  import Home from '../../containers/Home/home';
  import Past from '../../containers/Past/past';
  import Comment from '../../containers/Comment/comment';
  import './navigation.css';

class BootstrapNavbar extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12 ">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand to="/">Sapient Assinment</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto navigationlink">
                                    <Link to="/">NEW</Link>
                                    <Link to="/past">PAST</Link>
                                    <Link to="/comment">COMMENT</Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/past" component={Past} />
                                <Route path="/comment" component={Comment} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;