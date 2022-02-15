import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
  console.log(product);
  return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
