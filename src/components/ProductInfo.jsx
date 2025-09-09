import AddToCartButton from "./AddToCartButton";
const ProductInfo = () => {
    return (
        <div className="p-6 flex flex-col gap-4">
            <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">Perfume</p>
            <h1 className="font-serif text-3xl font-bold text-gray-800">Gabrielle Essence Eau De Parfum</h1>
            <p className="text-gray-500 text-sm leading-relaxed">Com notas de flor de laranjeira, jasmim e baunilha.</p>
            <p  className="text-gray-500 text-xs leading-relaxed">Composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

            <div className="flex items-center gap-5">
                <span className="font-serif text-3xl text-[#3c8067]">
                    $149.99
                </span>
                <span className="text-gray-500 line-through">
                    $169.99
                </span>
            </div>

            <AddToCartButton text="Add ao carrinho" />
        </div>
    );
}

export default ProductInfo;