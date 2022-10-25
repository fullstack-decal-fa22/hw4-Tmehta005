import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color = "cyan" handleClick={props.func}></Color>
          <Color color = "green" handleClick={props.func}></Color>
          <Color color = "magenta" handleClick={props.func}></Color>
          <Color color = "gold" handleClick={props.func}></Color>

      </div>
    );
}

export default Menu;