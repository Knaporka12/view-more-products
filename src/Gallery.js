import React from 'react'
import GalleryElement from './GalleryElement'

const Gallery = ({fetchError, images, gallery, gallerySize, setGallerySize}) => {

  return (

    <main className='main'>

      {fetchError &&  <h2 className='main__h2' style={{color: 'red'}}>Did not receive the images</h2>} 

      {(images.length === 0 && !fetchError) && <h2 className='main__h2'>The gallery is empty</h2>}

      {(!fetchError && images.length > 0) &&
        
        <div className='main__container--gallery'>
        
            {gallery.map((galleryObj) => {

                return (

                    <GalleryElement

                      key={galleryObj.id}
                      url={galleryObj.url}
                      desc={galleryObj.desc}

                    ></GalleryElement>
                )

            })}

        </div>

      }

      {(gallerySize < 30 && !fetchError && images.length > 0) && 
        <button 
          className='main__btn'
          onClick={() => {setGallerySize((prevGallerySize) => prevGallerySize + 3)}}>View more images
        </button>
      }

      {gallerySize === 30 && <h3 className='main__h3'>No more images to show</h3>}

    </main>

  )

}

export default Gallery
