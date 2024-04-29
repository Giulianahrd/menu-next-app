'use client'

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductBtnProps = {
    product: Product
}

export default function AddProductBtn({product}: AddProductBtnProps) {
    const addToOrder = useStore((state) => state.addToOrder)

  return (
    <div>
       <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
             uppercase font-bold cursor-pointer"
            onClick={() => addToOrder(product)}
        >Agregar</button>
    </div>
  )
}
