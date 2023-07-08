import {
  Modal, Box, Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button
} from '@chakra-ui/react';
import { useForm } from "react-hook-form"

import { FileUpload, InputField, SelectField, TextareaField } from './form'
import { useEffect } from 'react';

export function BillFormDialog({ isOpen, onClose, onSave, billDetails }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = (data) => onSave(data);

  useEffect(() => {
    reset({ ...billDetails })
  }, [billDetails]);

  const fileDeleteHandler = () => {
    reset({ file: null, fileName: null })
  }

  const fileUploadHandler = ({ file, fileName }) => {
    reset({ file, fileName })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="md">Bill Information</ModalHeader>
        <ModalCloseButton onClick={onClose} />

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField label="Provider's Name" name="providerName" errors={errors} register={{ ...register('providerName', { required: true }) }} />

            <Flex w="100%" justify="space-between">
              <InputField label="Patient's Name" name="patientName" errors={errors} register={{ ...register('patientName', { required: true }) }} />
              <Box mx="5px"></Box>
              <InputField type="date" label="Visit date" name="visitDate" errors={errors} register={{ ...register('visitDate', { required: true }) }} />
            </Flex>

            <Flex w="100%" justify="space-between">
              <SelectField
                label="Provider's Type"
                name="providerType"
                errors={errors}
                register={{ ...register('providerType', { required: true }) }}
                options={['In Network', 'Onsite', 'Online']}
              />
              <Box mx="5px"></Box>
              <SelectField
                label="Category"
                name="category"
                errors={errors}
                register={{ ...register('category', { required: true }) }}
                options={['Emergency', 'Casual', 'Medicine']}
              />
            </Flex>

            <Flex w="100%" justify="space-between">
              <InputField label="You owe" name="amount" errors={errors} register={{ ...register('amount', { required: true }) }} />
              <Box mx="5px"></Box>
              <InputField type="date" label="Due date" name="dueDate" errors={errors} register={{ ...register('dueDate', { required: true }) }} />
            </Flex>

            <TextareaField label="Address" name="address" errors={errors} register={{ ...register('address', { required: true }) }} />
            <FileUpload
              label="Bill Upload"
              acceptedFileTypes=".jpg,.png,.jpeg"
              name="fileName"
              errors={errors}
              onDelete={fileDeleteHandler}
              onUpload={fileUploadHandler}
              register={{ ...register('fileName', { required: true }) }}
            />
          </form>
        </ModalBody>

        <ModalFooter>
          <Button bg='primary' color="white" w="100%" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
