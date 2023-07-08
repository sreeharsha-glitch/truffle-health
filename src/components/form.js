import { useRef } from "react";
import {
  Input, FormControl, FormLabel, InputGroup,
  Select, Textarea,
  InputLeftElement, Icon, InputRightElement
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export function InputField({ label, name, register, errors = {}, type = "text" }) {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={name} fontWeight="500" >{label}</FormLabel>
      <Input isInvalid={errors[name]} type={type}
        size='md' mb="0.8rem"
        name={name} {...register} />
    </FormControl>
  )
}

export function TextareaField({ label, name, register, errors = {} }) {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={name} fontWeight="500" >{label}</FormLabel>
      <Textarea isInvalid={errors[name]}
        size='md' mb="0.8rem"
        name={name} {...register} />
    </FormControl>
  )
}

export function SelectField({ label, name, register, options, errors = {} }) {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={name} fontWeight="500" >{label}</FormLabel>
      <Select size='md' mb="0.8rem" name={name} isInvalid={errors[name]} {...register}>
        <option value={null}></option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </Select>
    </FormControl>
  )
}

export const FileUpload = ({ name, acceptedFileTypes, label, onDelete, onUpload, register, errors = {} }) => {
  const inputRef = useRef();

  const onUploadHandler = (event) => {
    const file = event.target.files[0];
    const blobUrl = URL.createObjectURL(file);
    onUpload({ file: blobUrl, fileName: file.name });
  }

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="writeUpFile">{label}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiFile} />}
        />
        <input type='file' accept={acceptedFileTypes}
          onChange={onUploadHandler}
          name={name} ref={inputRef} style={{ display: 'none' }}></input>
        <Input
          isInvalid={errors[name]}
          name={name}
          placeholder={"Your file ..."}
          onClick={() => inputRef.current.click()}
          {...register}
        />
        <InputRightElement
          onClick={onDelete}
          children={<Icon as={AiOutlineDelete} />}
        />
      </InputGroup>
    </FormControl>
  );
}

