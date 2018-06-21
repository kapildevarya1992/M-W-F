import React, { Component } from 'react';
import { Container, Icon, Input, Button } from 'semantic-ui-react'

class postUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: {},
            showForm: true
        };
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            ...this.state, [name]: value
        })
        // console.log("Data = = "+this.state.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            showForm :false
        })
        console.log('this.setState = ' + this.setState.showForm);

        const payload = {
            "id": Math.floor(1000 + Math.random() * 9000),
            "userName": this.state.userName,
            "email": this.state.email,
            "mob": this.state.mob
        };
        //console.log('json = ' + JSON.stringify(payload));


        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            console.log('body == ' + JSON.stringify(body));
           
        }).catch(err => {
            console.log('err = ' + err);
        });

    }



    render() {
        return (
            <div>
                 <br />
                { this.state.showForm ? <form onSubmit={this.handleSubmit}>
                    <Input iconPosition='left' placeholder='User Name'>
                        <Icon name='user' />
                        <input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.handleChange} />
                    </Input>
                    <br /> <br />
                    <Input iconPosition='left' placeholder='Password'>
                        <Icon name='lock' />
                        <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    </Input>
                    <br /> <br />
                    <Input iconPosition='left' placeholder='Email'>
                        <Icon name='at' />
                        <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    </Input>
                    <br /> <br />
                    <Input iconPosition='left' placeholder='Phone'>
                        <Icon name='phone volume' />
                        <input type="number" name="mob" id="mob" value={this.state.mob} onChange={this.handleChange} />
                    </Input>
                    <br /> <br />
                    {/* <input type="submit" value="Submit" /> */}
                    <Button type="submit" value="Submit" content='Submit' primary />
                </form> :
               
                <Container>
                    <h3> <Icon name='user' /> {this.state.userName}</h3>
                    <p>
                        <Icon name='at' />  {this.state.email}
                    </p>
                    <p>
                        <Icon name='phone volume' /> {this.state.mob}
                    </p>
                </Container>
             }
            </div>
        );
    }
}


export default postUser;
