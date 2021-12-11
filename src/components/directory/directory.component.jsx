import React, { Component } from 'react';
import MenuItem from '../menu-item/menuItem.component';
import './directory.styles.scss';

class Directory extends Component {

  constructor(){
    super();
    this.state={
      sections: [
        {
          id:1,
          imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
          title: 'hats'
        },
        {
          id:2,
          imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
          title: 'jackets'
        },
        {
          id:3,
          imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
          title: 'sneakers'
        },
        {
          id:4,
          imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
          title: 'womens',
          size: 'large'
        },
        {
          id:5,
          imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
          title: 'mens',
          size: 'large'
        }

      ]
    }
  }


  render() {
    return (
      <div className='directory-menu'>
        {
        this.state.sections.map(({id, title, imageUrl, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} 
          size={size} />
        ))
      }
      </div>
    )
  }
}

export default Directory;
