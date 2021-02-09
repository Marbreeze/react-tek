import React from 'react'

function Article({title, image, content, url}) {
    return (
        <article>
            <header>
                <h2><a href = {url}>{title}</a></h2>
                <img src={image} alt=""/>
            </header>
            <main>
                <section>
                    <p>{content}</p>
                </section>
            </main>
        </article>
    )
}

export default Article;