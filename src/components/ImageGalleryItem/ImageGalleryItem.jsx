const ImageGalleryItem = ({ images, togleModal}) => {
    if(images !== undefined || images.length > 0 ){
        
        return images.map((image,)=> {
                return <li onClick={()=>togleModal(image.webformatURL)} key={image.id} className="ImageGalleryItem">
              <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
            </li>
            });
    }
    return ;
};

export default ImageGalleryItem;
