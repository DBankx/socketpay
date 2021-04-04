import React from "react";
import {Box, HStack, Spacer} from "@chakra-ui/react";

const Footer = () => {
    return (
        <footer>
        <HStack>
            <Box fontSize="lg" fontWeight="semibold" color="gray.600">Copyright &copy; {new Date().getFullYear()}</Box>
           <Spacer /> 
            <Box fontSize="lg" fontWeight="semibold" color="gray.600">Made with ❤ by dami</Box>
        </HStack>
        </footer>
    )
}

export default Footer;