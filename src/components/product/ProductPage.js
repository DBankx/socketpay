import React, {useEffect, useState} from "react";
import {Box, Spinner, Center, SimpleGrid, Badge, HStack, Divider} from "@chakra-ui/react";
import data from "../../products.json";
import ProductCarousel from "./ProductCarousel";
import Rater from "../Rater";
import {StarIcon} from "@chakra-ui/icons";
import PaymentBox from "./PaymentBox";
import {nFormatter} from "../../utilFunctions";
import {Redirect} from "react-router-dom";

const ProductPage = (props) => {
    // const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     (async () => {
    //         setLoading(true);
    //         const prod = await data.products.find(x => x.id === parseInt(props.match.params.id)); 
    //         setProduct(prod);
    //         setLoading(false);  
    //     })();
    // }, [props.match.params.id])
    
    // if(loading && !product) return <Center w="100%"><Spinner
    //     thickness="4px"
    //     speed="0.65s"
    //     emptyColor="gray.200"
    //     color="#1DBF73"
    //     size="xl"
    // />
    // </Center>
    
    
    const product = data.products.find(x => x.id === parseInt(props.match.params.id));
    const dateObj = new Date();
    const deliveryDate = dateObj.setDate(dateObj.getDate() + 4);
    if(!product) return <Redirect to="/not-found" />
    return (
        <Box>
            <SimpleGrid spacing="1em" templateColumns={{xl: "1fr 1fr 0.8fr", lg: "1fr 1fr 0.8fr", md: "1fr", sm: "1fr", base: "1fr"}}>
                <ProductCarousel product={product} />
                <Box>
                    <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                            {product.condition}
                        </Badge>
                        <HStack
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            <HStack>
                                <Rater rating={product.ratings} boxSize={3} />
                                <p>{nFormatter(product.reviews)} review(s)</p>
                            </HStack>
                            <p>&bull;</p>
                            <p>{nFormatter(product.stock)} left</p>
                            <p>&bull;</p> 
                            <p>{product.category}</p>
                        </HStack>
                    </Box>
                    <Divider mt="1" mb="1" />
                    <Box
                        fontWeight="bold"
                        as="h1"
                        lineHeight="tight"
                        // isTruncated
                    >
                        {product.title}
                    </Box>
                    <Divider mt="1" mb="1" />
                    <HStack>
                        <Box
                            fontWeight="normal"
                            as="p"
                            lineHeight="tight"
                            // isTruncated
                        >
                            Condition:
                        </Box>
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            // isTruncated
                        >
                            {product.condition}
                        </Box>
                    </HStack>
                    {product.ratings > 3 && <Box border="1px solid #DADBDD" borderRadius="10px" width="fit-content" p="0.2em" m="0.5em 0">
                       <small><StarIcon  color="#FFC100" /> BEST SELLER </small>
                    </Box>}
                    {product.stock >= 1 ? <HStack>
                        <Box
                            fontWeight="normal"
                            as="p"
                            lineHeight="tight"
                            // isTruncated
                        >
                            Quantity left:
                        </Box>
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            // isTruncated
                        >
                            {product.stock}  <Box as="span" color="#1DBF73" fontSize="sm">
                            / 12 sold
                        </Box>
                        </Box>
                    </HStack> : <Box fontWeight="semibold" as="h4" lineHeight="tight" color="red"> This item is out of stock </Box> }
                    <Divider mt="1" mb="1" />
                    <HStack>
                        <Box
                            fontWeight="normal"
                            as="p"
                            lineHeight="tight"
                            // isTruncated
                        >
                            Price:
                        </Box>
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            fontSize="1.4em"
                            lineHeight="tight"
                            // isTruncated
                        >
                            ₦{product.price} <Box as="span" color="gray.600" fontSize="sm">
                            / unit
                        </Box>
                        </Box> 
                    </HStack>
                    <HStack mt="1" alignItems="flex-start">
                        <Box
                            fontWeight="normal"
                            as="p"
                            lineHeight="tight"
                            // isTruncated
                        >
                            Postage:
                        </Box>
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            fontSize="sm"
                            lineHeight="tight"
                            // isTruncated
                        >
                            {product.deliveryPrice > 0 ? `₦${product.deliveryPrice}` : "FREE" } <Box as="span" color="gray.600" fontSize="sm">
                            Standard Delivery | See details
                            <br />
                            Item location:
                            Lekki, Lagos, Nigeria
                            <br />
                            Posts to:
                            Anywhere in Lagos 
                        </Box>
                        </Box>
                    </HStack>
                    <HStack mt="1" alignItems="flex-start">
                        <Box
                            fontWeight="normal"
                            as="p"
                            lineHeight="tight"
                            // isTruncated
                        >
                           Delivery: 
                        </Box>
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            fontSize="sm"
                            lineHeight="tight"
                            // isTruncated
                        >
                             <Box mr="1" as="span" color="gray.600" fontSize="sm">
                           Estimated devlivery before  
                        </Box>
                            {new Date(deliveryDate).toUTCString()}
                        </Box>
                    </HStack>
                    <Divider mt="1" mb="1" />
                    <Box as="h3" fontSize="lg" mb="2" fontWeight="semibold">About this item</Box>
                    <p>{product.description}</p>
                </Box>
                
                <Box>
                <PaymentBox product={product} />
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default ProductPage;