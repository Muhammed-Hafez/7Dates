import Products from "../../../components/Products/Products";

import styles from "../../../styles/ProductsPage.module.scss";

const ProductsPage = () => {
  return (
    <main>
      <section className={styles.products__banner}></section>
      <Products />
    </main>
  );
};

export default ProductsPage;
