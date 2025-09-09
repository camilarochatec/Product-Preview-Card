const AddToCartButton = ({ text }) => {
    return (
        <button className="flex items-center justify-center gap-3 w-full bg-[#3c8067] hover:bg-[#1a4031] text-white font-bold py-3 rounded-lg transition-colors duration-300">
            <i className='bx bx-cart'></i> {/*para exibir o ícone do carrinho */}
            {text}
        </button>
    );

}

export default AddToCartButton;