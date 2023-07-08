import { Box, useDisclosure, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { FORMAT_VISITED_DATE } from "../utils/date.utils";

function FieldItem({ label, value }) {
  return (
    <Box display="flex" mb="8px">
      <Text fontWeight="500" minW="120">{label}</Text>
      <Text mx="2">:</Text>
      <Text>{value}</Text>
    </Box>
  )
}

function DisplayBillImage({ file, fileName, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="md">{fileName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={file} alt={fileName} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}


export function DisplayBillDetails({ billDetails }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (Object.keys(billDetails || {}).length === 0) {
    return null;
  }

  return (
    <Box>
      <FieldItem label="Provider Name" value={billDetails.providerName} />
      <FieldItem label="Patient Name" value={billDetails.patientName} />
      <FieldItem label="Visit Date" value={FORMAT_VISITED_DATE(billDetails.visitDate)} />
      <FieldItem label="Provider Type" value={billDetails.providerType} />
      <FieldItem label="Category" value={billDetails.category} />
      <FieldItem label="Amount" value={`$ ${billDetails.amount}`} />
      <FieldItem label="Due Date" value={FORMAT_VISITED_DATE(billDetails.dueDate)} />
      <FieldItem label="Address" value={billDetails.address} />
      <Box display="flex">
        <Text fontWeight="500" minW="120">Bill Attachment</Text>
        <Text mx="2">:</Text>
        <Text as="span" color="primary" textDecoration="underline"
          cursor="pointer" onClick={onOpen}>{billDetails.fileName}</Text>
        <DisplayBillImage
          isOpen={isOpen} onClose={onClose}
          file={billDetails.file} fileName={billDetails.fileName} />
      </Box>
    </Box>
  )
}
