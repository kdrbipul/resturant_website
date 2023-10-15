import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import banner from '../../assets/Images/images/all/bannerbackground.png'

const Hero = () => {
    return (
        <>
            <Box sx={{height:'90vh', width:'100%', background:'url(https://i.ibb.co/pfQZmbD/bannerbackground.png)', backgroundPosition:'center', backgroundSize:'110%'}}>
                <Container sx={{
                    height:'100%'
                    }}>
                    <Box sx={{
                        width:'100%',
                        height:'100%', 
                        display:'grid', 
                        placeItems:'center'
                        }}>
                        <Box sx={{
                            width:'50%',
                            mx:'auto'
                            }}>
                            <Typography variant='h4' fontWeight={500} textAlign='center' sx={{padding:'2rem'}}>
                                Best Food Waiting For Your Belly
                            </Typography>
                        
                        <Box sx={{
                            position:'relative',
                            width:'100%',
                            maxWidth:'550px',
                            mx:'auto',
                            background:'#fff',
                            borderRadius:'50px',
                            overflow:'hidden',
                            '& input':{
                                border:'none',
                                outline:'none',
                                padding:'1rem 2rem',
                                width:'100%',
                                borderRadius:'30px',
                                fontSize: '1.2rem'
                            },
                            '& button':{
                                position:'absolute',
                                right:'0',
                                top:'0',
                                background:'#f94944',
                                border:'none',
                                outline:'none',
                                padding:'1rem 2rem',
                                color:'#fff',
                                fontSize:'1.2rem',
                                borderRadius:'30px',
                                cursor:'pointer'
                            }
                        }}>
                            <input type="search" alt="Search Type" placeholder='Search Food' />
                            <button>Search</button>
                        </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
        
    );
};

export default Hero;