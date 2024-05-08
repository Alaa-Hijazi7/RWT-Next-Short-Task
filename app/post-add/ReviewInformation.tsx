import { Box } from "@chakra-ui/react";
import { styles } from "./styles";
import BasicInformation from "./BasicInformation";
import ImagesUpload from "./ImagesUpload";

export default function ReviewInformation({ formDetails }: any) {
  return (
    <Box sx={styles.reviewInformationSection}>
      <BasicInformation formDetails={formDetails} />
      <ImagesUpload formDetails={formDetails} />
    </Box>
  )
}