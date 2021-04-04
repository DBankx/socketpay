import React from "react";
import cardIcon from "../assets/icons/pngaaa.com-2538794.png";
import {Center, Image, Box, Button} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {history} from "../index";

const PaymentSuccessPage = ({match:{params}}) => {
    return (
        <Center h="80vh">
            <Box>
            <Center>
             <Image src={cardIcon} alt="payment-success" maxW="200px" />
            </Center>
            <Center mt="3">
                <Box as="h1" color="#1DBF73" fontSize="1.5em" fontWeight="bold">Payment Successful</Box>
            </Center>
                <Center mt="3">
                    <Box>Reference: </Box>
                    <Box as="h4" color="grey.600" fontWeight="semibold">{params.reference}</Box>
                </Center>
                <Center mt="3">
                    <Box width={{xl: "40%", lg: "40%", md: "40%", base: "100%"}} as="h4" color="gray.600" fontWeight="semibold">Your payment was successful, details will be set to the email provided during payment: <span style={{fontWeight: "bold", color: "#000"}}>{params.email}</span></Box>
                </Center>
                <Center mt="3">
                    <Button onClick={() => history.push("/products")} rightIcon={<ChevronRightIcon />} color="#fff" bg="#1DBF73" _hover={{bg: "green.600", color: "#fff"}}>Continue Shopping</Button>
                </Center>
            </Box>
        </Center>
    )
}

export default PaymentSuccessPage;