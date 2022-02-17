import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // [상태 값 저장 변수, 상태 값 갱신 함수]
  useEffect(function () {
    axios
      .get(
        `https://bc433b0e-594d-476b-b713-be4ae8fcd6b5.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data); // 상태값 저장 함수. 이것 때문에 useState 쓰는 듯.
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
        {/* /는 이 프로젝트 안 임을 뜻함 */}
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        {/* public 적는 것은 생략할 수 있음 */}
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2022년 2월 17일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
