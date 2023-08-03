import { Avatar, Box, Grid, Rating } from '@mui/material'
import { indigo } from '@mui/material/colors'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width: 56, height: 56, backgroundColor: "rgb(79 70 229)"}}>P</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className="space-y-2">
                    <div>
                        <p className="font-semibold text-lg">Preyash</p>
                        <p className="opacity-70">August 3, 2023</p>
                    </div>
                </div>
                <Rating value={3.5} name="half-rating" readOnly precision={0.5} />
                <p>This is the best quality t shirt I own. Runs true to size. Very soft yet holds its shape wash after wash it doesn’t fade or pill. I have it in white, black and navy.</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard