import Paginations from "@/components/products/Paginations";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function productCount() {
  return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true
    }
  })

  return products
}

export default async function ProductsPage({searchParams} : {searchParams: {page: string}}) {
  const page = +searchParams.page || 1
  const pageSize = 10
 
  const productsData = await getProducts(page, pageSize)
  const totalProductsData = await productCount()
  const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData])

  return (
    <>
      <Heading>
        Administrar Productos
      </Heading>

      <ProductTable 
        products={products}
      />
      <Paginations
        page={page}
      />
    </>
  )
}
