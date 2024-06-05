import ProductDetailLayout from "@/components/UI/product-detail-layout";

import { DUMMY_DATA } from "@/data";

function ProductDetailPage({ params }) {
  const product = DUMMY_DATA.find((product) => product.slug === params.slug);

  return <ProductDetailLayout product={product} />;
}

export default ProductDetailPage;
