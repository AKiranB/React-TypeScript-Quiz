import { Center, Flex } from "@chakra-ui/react";
import { colors } from "../../theme";

const Container = (props: any) => {
  console.log(colors.surface.main);

  const shadowColor = "rgba(185, 227, 198, ";
  const boxShadow = `${shadowColor}1) -5px 5px,
  ${shadowColor}0.8) -10px 10px,
  ${shadowColor}0.6) -15px 15px,
  ${shadowColor}0.4) -20px 20px,
  ${shadowColor}0.2) -25px 25px;`;
  return (
    <Center>
      <Flex
        marginTop={"90px"}
        direction="column"
        alignItems="center"
        width={["sm", "md", "lg", "xl"]}
        padding={"30px"}
        boxShadow={boxShadow}
        backgroundColor={"primary.main"}
        {...props}
      ></Flex>
    </Center>
  );
};

export default Container;
