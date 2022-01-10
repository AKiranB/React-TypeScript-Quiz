
import { Center, Flex } from '@chakra-ui/react'

const Container = (props) => {
    return (
        <Center>
            <Flex
                marginTop={'90px'}
                direction="column"
                alignItems="center"
                width={['sm', 'md', 'lg', 'xl']}
                padding={'30px'}
                boxShadow={'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;'}
                backgroundColor={'#1fa6c4'}
                {...props}>
            </Flex>
        </Center>

    )
};

export default Container;