import { Center, RadioGroup, Stack, Radio, Select } from "@chakra-ui/react"
import { ChangeEvent } from "react";
import apiCategories from '../constants/apiCategories'


type Props = {
    setDifficulty: (e: string) => void
    handleDropdownChange: (e: ChangeEvent<HTMLSelectElement>) => void
}




const OptionsCard: React.FC<Props> = ({ setDifficulty, handleDropdownChange }) => {

    let list = apiCategories.map((category, i) => {
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
            <Center mb={'20px'}>
                Difficulty
                <RadioGroup onChange={event => setDifficulty(event)}>
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
                    placeholder='Select option'>
                    {list}

                </Select>
            </Center>
        </>
    )
}



export default OptionsCard;