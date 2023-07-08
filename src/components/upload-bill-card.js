import { Card, CardBody, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function UploadBillCard() {

  return (
    <Card bg="primary" color="white" borderRadius="xl">
      <CardBody pb="3rem">
        <Text fontSize="xl">Let's Truffle sniff out the good stuff on your medical bills.</Text>
        <br></br>
        <Button as={Link} to={`/bill-details/new`} bg="white" color="primary">Upload a bill</Button>
      </CardBody>
    </Card>
  )
}
