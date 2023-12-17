import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import CrispChatScript from "@/components/ui/CrispChatScript";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("09ab1c87-a596-4462-a29b-3babad69cd5b");

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
        {/* Include the CrispChatScript component after existing content */}
        <CrispChatScript />
      </div>
    </Container>
  )
};

export default HomePage;