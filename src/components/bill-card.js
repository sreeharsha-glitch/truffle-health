import { Card, CardBody, Box, Button, Image, Text } from '@chakra-ui/react'
import { FORMAT_VISITED_DATE } from '../utils/date.utils'
import { Link } from "react-router-dom";

export function BillCard({ bill }) {

  return (
    <Card maxW='sm' m="8px">
      <CardBody>
        <Image
          h='200px'
          w='100%'
          objectFit='cover'
          objectPosition='top'
          src={bill.file}
          alt={bill.providerName}
          borderRadius='lg'
        />
        <Box my="6px">
          <Text size='sm' fontWeight="600">{bill.providerName}</Text>
          <Text>
            {bill.patientName} • visited on {FORMAT_VISITED_DATE(bill.visitDate)} • {bill.category}
          </Text>
        </Box>

        <Box m="0 auto" textAlign="center">
          <Button as={Link} to={`/bill-details/${bill.billId}`} size="sm" variant='solid'>
            View
          </Button>
        </Box>
      </CardBody>
    </Card>
  )
}
