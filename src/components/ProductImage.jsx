import mobileImage from '../assets/image-product-mobile.jpg';
import desktopImage from '../assets/image-product-desktop.jpg';

const ProductImage = () => {
    return ( 
        <div>
            <img src={mobileImage} alt="Perfume Gabrielle" className="block md:hidden rounded-t-lg" />
            <img src={desktopImage} alt="Perfume Gabrielle" className="hidden md:block rounded-l-lg" />
        </div>
    );

}

export default ProductImage;