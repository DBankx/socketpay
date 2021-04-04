import React from "react";
import {Box, Button, Center} from "@chakra-ui/react";
import {history} from "../index";
import {ChevronLeftIcon, CloseIcon} from "@chakra-ui/icons";

const NotFound = () => {
    return (
        <Center h="80vh">
            <Box>
                <Center>
                    <CloseIcon color="#1DBF73" boxSize="2em" />
                </Center>
                <Center mt="3">
                    <Box as="h1" color="#1DBF73" fontSize="1.5em" fontWeight="bold">OOPS, Page not found</Box>
                </Center>
                <Center mt="3">
                    <Box width={{xl: "60%", lg: "60%", md: "60%", base: "100%"}} as="h4" color="gray.600" fontWeight="semibold">The page you are looking for sadly doesnt exist or has been removed, please go back home :(</Box>
                </Center>
                <Center mt="3">
                    <Button onClick={() => history.push("/")} leftIcon={<ChevronLeftIcon />} color="#fff" bg="#1DBF73" _hover={{bg: "green.600", color: "#fff"}}>Go back Home</Button>
                </Center>
            </Box>
        </Center>
    )
}

export default NotFound;