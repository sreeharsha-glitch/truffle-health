import { Route, Routes } from "react-router-dom";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

import { SideNav } from "./components/side-nav";
import { TopNav } from "./components/top-nav";

// Routes
import { BillDetails } from "./pages/bill-details";
import Home from "./pages/home";


export function App() {
  return (
    <Grid templateColumns="250px auto 300px" h="full" gap={6} bg={useColorModeValue("gray.100", "gray.900")}>
      <GridItem w="100%" h="full">
        <SideNav />
      </GridItem>
      <GridItem w="100%" h="full">
        <Routes>
          <Route path="/bill-details/:billId" element={<BillDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </GridItem>
      <GridItem w="100%" h="full">
        <TopNav />
      </GridItem>
    </Grid>
  );
}
