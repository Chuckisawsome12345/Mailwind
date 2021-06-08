import Layout from "../components/Layout";
import Link from "next/link";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";

const IndexPage = () => (
  <Layout>
    <Flex>
      <Box p="2">
        <Heading size="md">Chakra App</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </Flex>
  </Layout>
);

export default IndexPage;
