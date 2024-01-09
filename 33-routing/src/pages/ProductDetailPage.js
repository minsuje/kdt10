import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

function ProductDetailPage() {
    console.log(useParams()); // {productId : '~~'} 파라미터는 항상 문자열로 들어온다.
    const { productId } = useParams();
    const navigate = useNavigate();

    console.log(productInfos);

    const targetProduct = productInfos[Number(productId) - 1];
    console.log(targetProduct);
    const { id, name, email, body } = targetProduct;

    return (
        <>
            <h1>Product Detail Page</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로 이동하기</button>
            <ul>
                <li>상품 번호: {id}</li>
                <li>상품명: {name}</li>
                <li>판매자: {email}</li>
                <li>상세설명: {body}</li>
            </ul>
        </>
    );
}

export default ProductDetailPage;
