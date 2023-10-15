import {styled, Box } from "@mui/material";
// import styled from "styled-components";
// import { FlexBox } from './Flex';


export const FlexBox = styled(Box)(({theme}) =>({
    display:'flex',
    alignItems:'center'
}))