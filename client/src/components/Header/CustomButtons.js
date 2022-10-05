import {Box, Button, Typography, styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    font-size: 40px;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div{
        margin-right: 40px;
    }
`;
const ButtonWrapper = styled(Button)`
    margin-left: 30px;
    background-color: white;
`;
const TypographyWrapper = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
`;

function CustomButtons() {
  return (
    <Wrapper>
        <ButtonWrapper>LogIn</ButtonWrapper> 
        <TypographyWrapper style={{ width: 120 }}>Become a seller</TypographyWrapper>
        <TypographyWrapper >More</TypographyWrapper>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ShoppingCartIcon /> 
            <TypographyWrapper>Cart</TypographyWrapper>
        </Box>
    </Wrapper>  
  )
}

export default CustomButtons