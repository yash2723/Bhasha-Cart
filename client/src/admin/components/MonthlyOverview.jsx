import { AccountCircle, AttachMoneyOutlined, MoreVert, SettingsCellOutlined, TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const salesData = [
    {
        stats: '200k',
        title: 'Sales',
        color: '#E5068A',
        icon: <TrendingUp sx={{fontSize: "1.75rem"}} />
    },
    {
        stats: '50k',
        title: 'Customers',
        color: '#22CB5C',
        icon: <AccountCircle sx={{fontSize: "1.75rem"}} />
    },
    {
        stats: '2k',
        title: 'Products',
        color: '#DE4839',
        icon: <SettingsCellOutlined sx={{fontSize: "1.75rem"}} />
    },
    {
        stats: '100k',
        title: 'Revenue',
        color: '#12B0E8',
        icon: <AttachMoneyOutlined sx={{fontSize: "1.75rem"}} />
    },
]

const renderStats = () => {
    return salesData.map((item, index) => {
        return (
            <Grid item xs={12} sm={3} key={index}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Avatar variant='rounded' sx={{mr: 3, width: 44, height: 44, boxShadow: 3, color: "white", backgroundColor: `${item.color}`}}>
                        {item.icon}
                    </Avatar>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='caption'>{item.title}</Typography>
                        <Typography variant='h6'>{item.stats}</Typography>
                    </Box>
                </Box>
            </Grid>
        )
    })
}

const MonthlyOverview = () => {
  return (
    <div>
        <Card sx={{bgcolor: "#242B2E", color: "white"}}>
            <CardHeader title="Monthly Overview" 
                action={
                    <IconButton size='small'>
                        <MoreVert />
                    </IconButton>
                } 
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{fontWeight: 600}}>
                            Total 50% Growth 😎
                        </Box>
                        &nbsp; this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important'
                    }
                }}
            />
            <CardContent sx={{pt: theme=>`${theme.spacing(3)} !important`}}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default MonthlyOverview