import React, { Component } from 'react';
import { Grid, Segment, Container, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import GridColumn from './gridColumnComponent';
import ResponceData from './responceData';


class GridCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: []
        };
    }

    componentDidMount() {
        this.getData().then((data) => {
            this.setState({
                jsonData: data
            })
        })
    }



    getData = () => {
        var tempData = [];
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                return json;
            })
    }

    render() {
        return (
            <div>
                {this.state.jsonData.length > 0 &&
                    <Grid>
                        <Grid.Row columns='equal' columns={3}>
                            {
                                (this.state.jsonData).map((item, index) => (
                                    index % 10 == 0 && <Grid.Column className='margin-top-20px'>
                                        <Segment>
                                            <GridColumn key={index} head={item.title} subHead={item.title} body={item.body} />
                                        </Segment>
                                    </Grid.Column>

                                ))
                            }

                        </Grid.Row>
                    </Grid>

                }
                <ResponceData />
            </div>
        );
    }
}


export default GridCompo;
