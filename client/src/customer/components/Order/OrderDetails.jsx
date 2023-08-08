import { Box, Grid } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetails = () => {
  return (
    <div className="my-32 px-5 lg:px-20">
        <div>
            <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
            <AddressCard />
        </div>
        <div className="py-20">
            <OrderTracker />
        </div>
        <Grid className="space-y-5" container>
            {
                [1, 1, 1, 1, 1].map((item) => {
                    return (
                        <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems: "center", justifyContent: "space-between"}}>
                            <Grid item xs={6}>
                                <div className="flex items-center">
                                    <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant-500x500.jpg" />
                                    <div className="space-y-2 ml-5">
                                        <p className="font-semibold">Light Brown Mens Casual Pant</p>
                                        <p className="space-x-5 opacity-50 text-sm font-semibold"><span>Color: Brown</span> <span>Size: M</span></p> 
                                        <p>Seller : Peterson</p>
                                        <p>₹999</p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item>
                                <Box sx={{color: "rgb(79 70 229)"}}>
                                    <StarBorderIcon sx={{fontSize: "2rem"}} className="px-2"></StarBorderIcon>
                                    <span>Rate & Review Product</span>
                                </Box> 
                            </Grid>
                        </Grid>
                    )
                })
            }
            
        </Grid>
    </div>
  )
}

export default OrderDetails