import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import Gallery from "./Gallery";

function App() {

  const  BASE_URL = 'https://api.unsplash.com/photos';
  const API_KEY = 'ecvZAcGvxLbMX5a2wngWIpLYX-0X87WAnhNmjayqGPs';
  const maxNoImages = 30;

  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [gallerySize, setGallerySize] = useState(18);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    const fetchImages = async (getUrl, maxNoImages) => {

      console.log(images); 

      try {

        const response = await axios.get(`${getUrl}?per_page=${maxNoImages}`, {headers: {'Authorization': `Client-ID ${API_KEY}`}});
        const imagesData = await response.data;
        setImages(imagesData);

      } catch (err) {

        if (err.response) {

          console.log(err.response.data);
          console.log(err.response.headers);
          console.log(err.response.status);
          setFetchError(err.response.data);

        } else if (err.request) {
          console.log(err.request)
          setFetchError(err.message);
        } else {
          console.log(err.message)
          setFetchError(err.message);
        } 

      } finally {
        console.log(images);
      }

    }

    fetchImages(BASE_URL, maxNoImages);
    
  }, [])



  useEffect(() => {

    const resizeGallery = () => {

      if (images.length === 0){
        return;
      } else {

        let updatedGallery = [];

        for(let i = 0; i < gallerySize; i++){

          const galleryObj = {

            id: i,
            desc: images[i].alt_description,
            url: images[i].urls.small
            
          }

          updatedGallery.push(galleryObj);
    
        }
        
        setGallery(updatedGallery);

      }

    }

    resizeGallery();

  }, [gallerySize, images])

  return (

    <div className="App">

      <Header></Header>

      <Gallery

        fetchError={fetchError}
        gallery={gallery}
        images={images}
        gallerySize={gallerySize}
        setGallerySize={setGallerySize}

      ></Gallery>

    </div>

  );

}

export default App;
