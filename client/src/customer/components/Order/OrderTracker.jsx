import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel>
            {
                steps.map((label) => <Step>
                    <StepLabel sx={{fontSize: "44px", color: "rgb(79 70 229)"}}>{label}</StepLabel> 
                </Step>)
            }
        </Stepper>
    </div>
  )
}

export default OrderTracker