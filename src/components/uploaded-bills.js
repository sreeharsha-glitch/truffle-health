import { Box, Heading, Text, Flex, Skeleton, Stack, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useStateContext } from "../hooks/state";
import { BillCard } from "./bill-card";

const NoBills = () => (
  <Box>
    <Text fontSize="md">
      No bills uploaded yet
    </Text>
  </Box>
)

const BillSkeleton = () => (
  <Stack w="330px" m="8px" p="8px">
    <Skeleton height="200px" />
    <SkeletonText noOfLines={1} />
    <SkeletonText noOfLines={1} />
    <Skeleton height="20px" />
  </Stack>
)


export function UploadedBills() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getBills } = useStateContext();

  useEffect(() => {
    const bills = getBills();
    // setting timeout to mimic network call
    const to = setTimeout(() => {
      setBills(bills || []);
      setLoading(false);
      clearTimeout(to);
    }, 3000)
  }, []);


  return (
    <Box>
      <Heading my="1.6rem" as="h3" fontSize="xl">
        Uploaded bills
      </Heading>
      <Flex flexWrap="wrap">
        {loading && (
          <>
            <BillSkeleton />
            <BillSkeleton />
          </>
        )}
        {!loading && bills.length === 0 && (<NoBills />)}


        {bills.map((bill) => (
          <BillCard bill={bill} key={bill.billId} />
        ))}
      </Flex>
    </Box>
  )
}
