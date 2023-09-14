import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute",
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute',
})

const Achievement = () => {
  return (
    <Card sx={{position: "relative", bgcolor: '#242B2E', color: "white"}}>
        <CardContent>
            <Typography variant="h6" sx={{letterSpacing: ".25px"}}>
                Bhasha Cart
            </Typography>
            <Typography variant='body2'>
                Congratulation 🥳
            </Typography>
            <Typography variant='h5' sx={{my: 3.1}}>
                500.8k
            </Typography>
            <Button size="small" variant="contained">View Sales</Button>
            <TriangleImg src=''></TriangleImg>
            <TrophyImg src='https://img.freepik.com/premium-vector/shiny-golden-trophy-with-star-illustration-cartoon-icon_400474-507.jpg'></TrophyImg>
        </CardContent>
    </Card>
  )
}

export default Achievement