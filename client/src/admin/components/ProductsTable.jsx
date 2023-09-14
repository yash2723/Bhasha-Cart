import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, findProducts } from '../../state/product/Action'

const ProductsTable = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(store => store);
  // console.log(products);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId))
  }

  useEffect(() => {
    const data = {
      category: "",
      color: ["blue", "white", "black", "purple", "red"],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    }
    dispatch(findProducts(data))
  }, [products.deletedProduct])

  return (
    <div className='p-5'>
      <Card>
        <CardHeader title='All Products' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" sx={{display: 'flex', justifyContent: 'center'}}><Avatar src={row.imageUrl} /></TableCell>
                  <TableCell component="th" scope="row" align='center'>{row.title}</TableCell>
                  <TableCell align="center">{row.category.name}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center" onClick={() => handleProductDelete(row.id)}>
                    <Button variant='outlined'>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default ProductsTable