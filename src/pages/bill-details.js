import { useEffect, useState } from "react";
import { Box, Button, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'

import { BillFormDialog } from "../components/bill-form-dialog";
import { useStateContext } from "../hooks/state";
import { DisplayBillDetails } from "../components/display-bill-details";

export function BillDetails() {
  const { billId: billIdParam } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [billId, setBillId] = useState();
  const [bill, setBill] = useState({});
  const { getBillById, updateBill, addBill } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (billIdParam === 'new') {
      // if id is new stright away open the dialog
      onOpen();
    } else {
      // fetch bill details by billId
      const bill = getBillById(+billIdParam);
      setBill(bill);
      setBillId(billIdParam);
    }
  }, [billId, billIdParam]);

  const closeDialogHandler = () => {
    onClose();
    if (billId === 'new') {
      navigate('/');
    }
  }

  const saveHandler = (updatedBillDetails) => {
    if (billIdParam === 'new') {
      // if it is a new bill, add it to the state
      const newBillId = addBill(updatedBillDetails);
      // navigate to the new bill
      navigate(`/bill-details/${newBillId}`);
    } else {
      // if it is an existing bill, update it in the state
      updateBill(billIdParam, updatedBillDetails);
      // update the view up new details
      setBill(updatedBillDetails);
    }
    onClose();
  }


  return (
    <Box mt="1rem">
      <Heading as="h3" fontWeight="500" fontSize="lg" mb="0.5rem">
        Bill: <Box as="span" fontWeight="400">{billId}</Box>
      </Heading>

      <Tabs isFitted colorScheme="purple" variant='line'>
        <TabList mb='1em'>
          <Tab fontWeight="600">1. Upload a bill</Tab>
          <Tab fontWeight="600">2. Link insurance or EOB</Tab>
          <Tab fontWeight="600">3. Saving Opportunities</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex justify="flex-end">
              <Button onClick={onOpen} variant="ghost">
                <Icon as={FiEdit3} mr="5px" />
                Edit Bill Details
              </Button>
            </Flex>

            {<DisplayBillDetails billDetails={bill} />}

            <BillFormDialog isOpen={isOpen} onClose={closeDialogHandler}
              onSave={saveHandler} billDetails={{ ...(bill || {}) }} />
          </TabPanel>
          <TabPanel>
            Link insurance or EOB - To be designed
          </TabPanel>
          <TabPanel>
            Saving Opportunities - To be designed
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
