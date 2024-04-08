import products from "../../../../public/assets/data/index";
import ProductItem from "../../components/product/ProductItem";

const HomePage = (): JSX.Element => {
  return (
    <section className="min-h-[90vh]">
      <div className="container">
        <h1 className="mx-auto text-2xl font-openSansBold pt-8 border-b-2 border-solid border-danger w-fit pb-2">
          {" "}
          popular selling houses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6 pb-12">
          {products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
