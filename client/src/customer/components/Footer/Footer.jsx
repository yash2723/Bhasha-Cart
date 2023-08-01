import React from 'react';
import { Button, Grid, Link, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const Footer = () => {
  return (
    <div>
        <Grid className="bg-black text-white text-center py-10" container>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6"> Company </Typography>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> About </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Contact </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Blogs </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Careers </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6"> Solutions </Typography>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> About </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Contact </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Blogs </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Careers </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6"> Documentation </Typography>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> About </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Contact </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Blogs </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Careers </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6"> Legal </Typography>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> About </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Contact </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Blogs </Button>
                </div>
                <div>
                    <Button sx={{textDecoration: "none"}} className="pb-5" variant="h6"> Careers </Button>
                </div>
            </Grid>
            <Grid className="pt-20" item xs={12}>
                <Grid className="my-5 space-x-6">
                    <Link href=''><MailOutlineOutlinedIcon /></Link>
                    <Link href=''><PhoneOutlinedIcon /></Link>
                    <Link href=''><FacebookOutlinedIcon /></Link>
                </Grid>
                <Typography variant="body2" component="p" align="center">
                    &copy; 2023 Bhasha. All rights reserved.
                </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer;