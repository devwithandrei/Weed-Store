import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import CrispChatScript from "@/components/ui/CrispChatScript";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("0629d873-06d6-4c77-b58d-9c05fea3981a");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
          textColor="#0073B2" // Add the textColor prop with the desired color
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
        <CrispChatScript />
      </div>
    </Container>
  )
};

export default HomePage;