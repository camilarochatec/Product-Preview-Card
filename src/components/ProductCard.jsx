import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = () => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm md:max-w-xl md:flex">
                <div className="md:w-1/2">
                    <ProductImage />
                </div>

                <div className="md:w-1/2">
                    <ProductInfo />
                </div>
            </div>
        </>
    );

}

export default ProductCard;