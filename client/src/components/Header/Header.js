import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from '../Header/Search';
import CustomButtons from "./CustomButtons";


const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeadering = styled(Typography)`
  font-size: 10px;
  font-style: Italic;
`;


function header() {
    const logoURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    return (
        <StyleHeader>
            <Toolbar style={{ minHeight: 55}} >
                <Component>
                    <img src={logoURL} alt="flipkart-logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeadering>
                            Explore&nbsp;
                            <Box component="span" style={{ color: "yellow" }} >Plus</Box>
                        </SubHeadering>
                        &nbsp; 
                        <img src={subURL} alt="logo-explore-plus" style={{ width: 10, height: 10, marginLeft: 4 }}/>
                    </Box>
                </Component>
                <Search />
                <Box>
                    <CustomButtons />
                </Box>
            </Toolbar>
        </StyleHeader>
    );
}

export default header;
