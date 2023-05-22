import { Center, Flex } from "@chakra-ui/react";
import { colors } from "../../theme";

const Container = (props: any) => {
  return (
    <Center>
      <Flex
        marginTop={"90px"}
        direction="column"
        alignItems="center"
        width={["sm", "md", "lg", "xl"]}
        padding={"30px"}
        boxShadow={`${colors.surface.main} -5px 5px, ${colors.surface.main}  -10px 10px, ${colors.surface.main}  -15px 15px, ${colors.surface.main}  -20px 20px, ${colors.surface.main}  -25px 25px;`}
        backgroundColor={"primary.main"}
        {...props}
      ></Flex>
    </Center>
  );
};

export default Container;
