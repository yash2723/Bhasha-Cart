import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${2}`)} className="p-5 shadow-md hover:shadow-lg rounded-md">
        <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
            <Grid item xs={6}>
                <div className="flex cursor-pointer">
                    <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant-500x500.jpg" />
                    <div className="ml-5 space-y-2">
                        <p>Light Brown Mens Casual Pant</p>
                        <p className="opacity-50 text-xs font-semibold">Size : M</p>
                        <p className="opacity-50 text-xs font-semibold">Color : Brown</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>₹999</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                        <AdjustIcon sx={{width: "15px", height: "15px"}} className="text-green-600 mr-2 text-sm" />
                        <span className="font-semibold">Delivered On March 12</span>
                    </p>
                    <p><span className="text-xs">Your Item has been Delivered.</span></p>
                </div>}
                {false && <p>
                    <span>Expected Delivered On March 12</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard