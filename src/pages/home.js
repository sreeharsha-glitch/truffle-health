import { Welcome } from "../components/welcome";
import { UploadBillCard } from "../components/upload-bill-card";
import { UploadedBills } from "../components/uploaded-bills";
import { Box } from '@chakra-ui/react'

function Home() {
  return (
    <Box>
      <Welcome userName="Sree Harsha" />
      <UploadBillCard />
      <UploadedBills />
    </Box>
  );
}

export default Home;
