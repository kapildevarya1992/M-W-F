import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Grid, Segment, Container, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import PostUser from './components/responceData';



const Header = () => (
    <header>
        <Grid>
            <Grid.Row columns='equal' columns={2}>
                <Grid.Column width={14}><h1>This is header!</h1> </Grid.Column>
                <Grid.Column width={2}> <NavLink to="/post" activeClassName="is-active">Create Post</NavLink></Grid.Column>
            </Grid.Row>
        </Grid>
        {/* <h1>This is header!</h1>
     <NavLink to="/" activeClassName="is-active" exact={true}>Go to Home</NavLink> 
    <NavLink to="/post" activeClassName="is-active" style={{"float":"right"}}>Create Post</NavLink> */}
    </header>
);

class App extends Component {

    render() {
        // return (
        //   <div className="App">
        //     <Header />
        //     <br />
        //     <Home />
        //   </div>



        // );

        return (
            <div className="App">
                <BrowserRouter>
                    <div className="App">
                        <Header />
                        <Switch>
                            <Route path="/" component={Home} exact={true} />
                            <Route path="/post" component={PostUser} />
                            {/* <Route component={this.NotFoundPage} /> */}
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
