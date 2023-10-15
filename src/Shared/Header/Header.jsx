import { Box, Container, Stack } from '@mui/system';
import React from 'react';
import logo from '../../assets/Images/logo/sky-lawn-a1.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, IconButton } from '@mui/material';
import { FlexBox } from './../../Components/Style/Flex';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <FlexBox justifyContent='space-between' sx={{padding:'1rem 0'}}>
                    <NavLink to='/'><img src={logo} alt="logo" style={{width:'100px'}} /></NavLink>
                    <Stack direction='row' spacing={4} sx={{alignItems:'center'}}>
                        <IconButton><ShoppingCartOutlinedIcon /></IconButton>
                        <Button>Sign In</Button>
                        <Button>Sign Up</Button>
                    </Stack>
                </FlexBox>
                
            </Container>

        </>
    );
};

export default Header;