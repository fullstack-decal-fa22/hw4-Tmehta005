import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    let [blocks, setBlocks] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = blocks.map((c) => {return <Block color={c}></Block>});; // TODO: edit this variable

    const changeBlocks = (color) => {
        const slice = blocks.slice();
        slice.unshift(color);
        setBlocks(slice);
    }

    return (
        <div>
            {console.log("test")}
            <Menu func = {changeBlocks}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;