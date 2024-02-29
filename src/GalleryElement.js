import React from 'react'

const GalleryElement = ({url, desc}) => {

    const description = desc[2].toUpperCase() + desc.slice(3);

  return (

    <figure className='main__figure'>

        <div className='main__container--img'>

            <img src={url} alt={desc} className='main__img'/>

        </div>

      <figcaption className='main__figcaption'>{description}</figcaption>

    </figure>
  )
}

export default GalleryElement
