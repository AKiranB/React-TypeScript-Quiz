import { Center, RadioGroup, Stack, Radio, Select, Flex, Text } from "@chakra-ui/react"
import { ChangeEvent } from "react";
import apiCategories from '../constants/apiCategories'
import Container from '../components/style/container'


type Props = {
    setDifficulty: (e: string) => void
    handleDropdownChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const OptionsCard: React.FC<Props> = ({ setDifficulty, handleDropdownChange }) => {
    let categoryList = apiCategories.map((category, i) => {
        return (

            <option
                key={i}
                value={category.categoryNumber}
            >
                {category.categoryName}
            </option>

        )
    });

    return (
        <>
            <Container>
                <Text color={'black'} fontSize={['sm', 'md', 'lg', 'xl']}>
                    <Center mb={'20px'}>
                        Difficulty
                        <RadioGroup fontSize={['sm', 'md', 'lg', 'xl']} onChange={event => setDifficulty(event)}>
                            <Stack ml={'15px'} direction='row'>
                                <Radio value={'easy'}>Easy</Radio>
                                <Radio value='medium'>Medium</Radio>
                                <Radio value='hard'>Hard</Radio>
                            </Stack>
                        </RadioGroup>
                    </Center>
                    <Center>
                        Category
                        <Select
                            width={'200px'}
                            onChange={handleDropdownChange}
                            ml={'25px'}
                            fontSize={['sm', 'md', 'lg']}
                            placeholder='Select option'>
                            {categoryList}
                        </Select>
                    </Center>
                </Text>
            </Container>
        </>
    )
}



export default OptionsCard;