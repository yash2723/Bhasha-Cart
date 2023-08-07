import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const formData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            phoneNumber: data.get("phoneNumber")
        }
        console.log(formData);
    }

  return (
    <div>
        <Grid container columnSpacing={4}>
            <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-7 border-b cursor-pointer">
                    <AddressCard />
                    <Button sx={{mt: 2, backgroundColor: "rgb(79 70 229)", ":hover": {backgroundColor: 'rgb(79 70 229)'} }} size="large" variant="contained">Deliver Here</Button>
                </div>
            </Grid>

            <Grid item xs={12} lg={7}>
                <Box className="border rounded-s-md shadow-md p-5">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="firstname" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="address" name="address" label="Address" fullWidth autoComplete="lastname" multiline rows={4} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="city" name="city" label="City" fullWidth autoComplete="city" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="state" name="state" label="State" fullWidth autoComplete="state" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="zip" name="zip" label="Zip / Postal Code" fullWidth autoComplete="zip" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth autoComplete="phone" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button sx={{mt: 2, backgroundColor: "rgb(79 70 229)", ":hover": {backgroundColor: 'rgb(79 70 229)'} }} size="large" variant="contained" type="submit">Deliver Here</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAddressForm