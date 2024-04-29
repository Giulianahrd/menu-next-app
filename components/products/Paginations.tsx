import Link from 'next/link'
import React from 'react'

type PaginationProps = {
    page: number
}

export default function Paginations({page} : PaginationProps) {
  return (
    <nav className='flex justify-center py-18'>
        <Link
            href={`/admin/products?page=${page + 1}`}
        >&raquo;
        </Link>
    </nav>
  )
}
