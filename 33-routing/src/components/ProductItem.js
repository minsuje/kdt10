import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    console.log('Product Item >>>>>', product);
    return (
        <>
            <Link to={`/products/${product.id}`}>
                <ul>
                    <li>상품명 : {product.name}</li>
                    <li>상세설명 : {product.body}</li>
                </ul>
            </Link>
        </>
    );
}

export default ProductItem;
