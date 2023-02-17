import React from 'react'
import './Pages.css'

function Pages({ aktuellPost }) {
    return (
        <div className='pagesContainer'>
            <ul className='unOrdPages'>

                {aktuellPost.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}

            </ul>
        </div>
    )
}

export default Pages