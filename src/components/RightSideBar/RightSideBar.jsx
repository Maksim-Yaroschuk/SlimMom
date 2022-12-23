import { useSelector } from "react-redux";
import { Wrapper, SummaryWrap, FoodWrap, Title, Item, Text } from './RightSideBar.styled';

export const RightSideBar = () => {

    const date = useSelector((state) => state.date);

    return (
        <Wrapper>
            <SummaryWrap>
                <Title>Summary for {date}</Title>
                <ul>
                    <Item>
                        <Text>Left</Text>
                        <Text>000 kcal</Text>
                    </Item>
                    <Item>
                        <Text>Consumed</Text>
                        <Text>000 kcal</Text>
                    </Item>
                    <Item>
                        <Text>Daily rate</Text>
                        <Text>000 kcal</Text>
                    </Item>
                    <Item>
                        <Text>n% of normal</Text>
                        <Text>000 kcal</Text>
                    </Item>
                </ul>
            </SummaryWrap>
            <FoodWrap>
                <Title>Food not recommended</Title>
                <Text>Your diet will be displayed here</Text>
            </FoodWrap>
        </Wrapper>
    )
};