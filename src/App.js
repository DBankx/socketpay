import React from "react";
import {ChakraProvider, Box, extendTheme, Container} from "@chakra-ui/react";
import {Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./assets/css/app.css";
import {customTheme} from "./assets/chakra-ui-theme";
import ProductsPage from "./components/products/ProductPage";
import ProductPage from "./components/product/ProductPage";
import SavedItemsPage from "./components/saved/SavedItemsPage";
import PaymentSuccessPage from "./components/PaymentSuccessPage";
import HomePage from "./components/layout/HomePage";
import Footer from "./components/layout/Footer";
import NotFound from "./components/NotFound";

const theme = extendTheme(customTheme);

function App() {
   const savedItems = JSON.parse(localStorage.getItem("skp_ci"));
   if(!savedItems){
       localStorage.setItem("skp_ci", JSON.stringify([]));
   }
  return (
      <ChakraProvider theme={theme}>
          <Box className="content">
              <Navbar />
          <Box>
              <Container mt="2em" maxW="container.xl">
        <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products" component={ProductsPage} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/saved" component={SavedItemsPage} />
                <Route exact path="/payment-success/:reference/:email" component={PaymentSuccessPage} />
                <Route component={NotFound} />
        </Switch>
          </Container>
          </Box>
          </Box>
          <Box className="footer" mt="2em">
              <Container maxW="container.xl">
              <Footer />
              </Container>
          </Box>
      </ChakraProvider>
  );
}

export default App;
