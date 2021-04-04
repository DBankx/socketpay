import React from "react";
import {Box, SimpleGrid, Button, Center} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import data from "../../products.json";
import ProductItem from "../products/ProductItem";

const SavedItemsPage = () => {
    const savedItemsId = JSON.parse(localStorage.getItem("skp_ci"));
    const products = [];
    savedItemsId.forEach(itemId => {
        const item = data.products.find(x => x.id === itemId);
        products.push(item);
    });
    
    return (
        <Box>
            <Box fontSize="xl" fontWeight="semibold" as="h2">{savedItemsId.length} Saved items</Box>
            <Box mt="2em">
                {savedItemsId.length > 0 ? <SimpleGrid mt="1em" templateColumns={{xl: "repeat(3, 0.8fr)", lg: "repeat(3, 0.8fr)", md: "repeat(2, 1fr)", sm: "1fr", base: "1fr"}} spacing="1em">
                    {products.map((product) => (
                        <Box key={product.id}>
                            <ProductItem product={product} />
                        </Box>
                    ))}
                </SimpleGrid> : <Center>
                    <Box>
                    <Box color="gray.600" fontWeight="semibold">You have no saved items</Box>
                    </Box>
                </Center>}
                <Button disabled={savedItemsId.length < 1} onClick={() => {
                    localStorage.setItem("skp_ci", JSON.stringify([]));
                    window.location.reload();
                }} mt="2em" colorScheme="red" leftIcon={<DeleteIcon />}>Removed all saved</Button>
            </Box>
        </Box>
    )
}

export default SavedItemsPage;