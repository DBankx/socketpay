import React from "react";
import {Box, Center, Button} from "@chakra-ui/react";
import {history} from "../../index";
import {ChevronRightIcon} from "@chakra-ui/icons";

const HomePage = () => {
    return (
        <Center h="80vh">
            <Box>
            <Center>
                <Box as="h2" fontSize="2em" color="gray.600" fontWeight="semibold">Shop till you drop with <span style={{color: "#1DBF73"}}>SocketPay's</span> integration with <span style={{color: "#0A98CB"}}>Paystack</span> for instant access to products!</Box>
            </Center>
           
                <Button size="lg" mt="2em" onClick={() => history.push("/products")} bg="#1DBF73" color="#fff" _hover={{bg: "green.600", color: "#fff"}} rightIcon={<ChevronRightIcon />}>Start shopping now</Button>
            </Box>
        </Center>
    )
}

export default HomePage;