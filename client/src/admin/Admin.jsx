import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './components/AdminDashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/AdminDashboard';

const menu = [
    {name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon />},
    {name: "Products", path: "/admin/products", icon: <FormatListBulletedIcon />},
    {name: "Customers", path: "/admin/customers", icon: <PeopleIcon />},
    {name: "Orders", path: "/admin/orders", icon: <ShoppingCartIcon />},
    {name: "Add Product", path: "/admin/product/create", icon: <AddShoppingCartIcon />},
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {
                    menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>)
                }
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

  return (
    <div>
        <div className='flex h-[100vh]'>
            <CssBaseline />

            <div className='w-[15%] border border-r-2 border-gray-100'>
                {drawer}
            </div>

            <div className='w-[85%]'>
                <Routes>
                    <Route path='/' element={<AdminDashboard />} />
                    <Route path='/product/create' element={<CreateProductForm />} />
                    <Route path='/products' element={<ProductsTable />} />
                    <Route path='/orders' element={<OrdersTable />} />
                    <Route path='/customers' element={<CustomersTable />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin