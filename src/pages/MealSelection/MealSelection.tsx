import Selector from "../../components/Selector";
import { DateToString } from "../../functions/functions";
import Moment from 'moment';
import styled from "styled-components";


const MealSelection = () => {

    var today = new Date();
    var today_formatted = Moment(today).format('YYYY-MM-DD')
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrow_formatted = Moment(tomorrow).format('YYYY-MM-DD');

    const tomorrow_1 = new Date();
    tomorrow_1.setDate(tomorrow_1.getDate() + 2);
    const tomorrow_1_formatted = Moment(tomorrow_1).format('YYYY-MM-DD');

    const tomorrow_2 = new Date();
    tomorrow_2.setDate(tomorrow_2.getDate() + 3);
    const tomorrow_2_formatted = Moment(tomorrow_2).format('YYYY-MM-DD');

    const tomorrow_3 = new Date();
    tomorrow_3.setDate(tomorrow_3.getDate() + 4);
    const tomorrow_3_formatted = Moment(tomorrow_3).format('YYYY-MM-DD');

    const tomorrow_4= new Date();
    tomorrow_4.setDate(tomorrow_4.getDate() + 5);
    const tomorrow_4_formatted = Moment(tomorrow_4).format('YYYY-MM-DD');

    const tomorrow_5 = new Date();
    tomorrow_5.setDate(tomorrow_5.getDate() + 6);
    const tomorrow_5_formatted = Moment(tomorrow_5).format('YYYY-MM-DD');

    const tomorrow_6 = new Date();
    tomorrow_6.setDate(tomorrow_6.getDate() + 7);
    const tomorrow_6_formatted = Moment(tomorrow_6).format('YYYY-MM-DD');

    const tomorrow_7 = new Date();
    tomorrow_7.setDate(tomorrow_7.getDate() + 8);
    const tomorrow_7_formatted = Moment(tomorrow_7).format('YYYY-MM-DD');

    const tomorrow_8 = new Date();
    tomorrow_8.setDate(tomorrow_8.getDate() + 9);
    const tomorrow_8_formatted = Moment(tomorrow_8).format('YYYY-MM-DD');

    return (
        <>
            <Title>Meal Selection</Title>
            <Selector date={today_formatted} />
            <Selector date={tomorrow_formatted} />
            <Selector date={tomorrow_1_formatted} />
            <Selector date={tomorrow_2_formatted} />
            <Selector date={tomorrow_3_formatted} />
            <Selector date={tomorrow_4_formatted} />
            <Selector date={tomorrow_5_formatted} />
            <Selector date={tomorrow_6_formatted} />
            <Selector date={tomorrow_7_formatted} />
            <Selector date={tomorrow_8_formatted} />
        </>
    )
}

export default MealSelection;

const Title = styled.h1`
display: flex;
justify-content: center;`