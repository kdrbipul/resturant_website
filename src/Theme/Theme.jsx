import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette:{
        primary:{
            main:'#f94944',
            mainBg:'#191919',
            hover:'#ff9caf',
            grayText:'#727272'
        },
    },
    components:{
        MuiContainer:{
            defaultProps:{
                maxWidth:'lg'
            },
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    text:'1rem',
                    padding: '0.5rem 2rem',
                    borderRadius:'40px',
                    textTransform:'capitalize',
                    color:'#191919'
                },
            },
            defaultProps:{
                variant:"contained"
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    color: '#191919'
                }
            }
        }
    },
});