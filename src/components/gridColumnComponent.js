import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'
import image from '../img/column_2.jpg';

import '../index.css';


class GridColumn extends Component {
  render() {
    return (
      <div>
        <Container>
          <Image src={image} size='medium' style={{"height":"150px"}}/>
          <h3>{this.props.head}</h3>
          <p className='line-overflow'>
            {this.props.subHead}
          </p>
          <p className='line-overflow'>
            {this.props.body}
          </p>
        </Container>
      </div>
    );
  }
}


export default GridColumn;
