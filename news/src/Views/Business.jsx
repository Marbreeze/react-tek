import React from 'react';
import Article from '../Components/Article';

function Business({title, content, image, url}) {
    return (
        <div>
            <Article title = {title} image = {image} url = {url} content = {content}/>
        </div>
    )
}

export default Business;