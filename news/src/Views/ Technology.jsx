import React from 'react';
import Article from '../Components/Article';

function Technology({title, image, content, url, i}) {
    return (
        <div>
            <Article title = {title} image = {image} content = {content} url = {url}/>
        </div>
    )
}

export default Technology