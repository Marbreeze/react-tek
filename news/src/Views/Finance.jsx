import React from 'react';
import Article from '../Components/Article';

function Finance({title, i , image, url, content}) {
    return (
        <div>
            <Article title = {title} image = {image} url = {url} content = {content}/>
        </div>
    )
}

export default Finance;