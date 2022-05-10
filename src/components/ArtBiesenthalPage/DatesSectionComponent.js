import React, {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

const Period = styled("h1")`
font-size: 80px;
text-decoration: underline;
cursor: pointer;

&:hover {
    text-decoration: none;
}
`

const DateBlock = styled("div")`
display: flex;
flex-direction: column;
width: 30%;
`

const Date = styled("p")`
font-size: 18px;
`
const DateName = styled("h6")`
font-size: 18px;
`

const DatesSection = styled("div")`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`

const DatesWrapper = styled("div")`
width: 70%;
height: 100%;
display: flex;
justify-content: space-evenly;
position: absolute;
right: 0;
display: ${props => props.display};
`
const PeriodWrapper = styled("div")`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
`

const createWeekObject = (day1, day2, day3, code) => {
    const weekObject = {
        dayOne: day1,
        dayTwo: day2,
        dayThree: day3,
        weekCode: code
    }

    return weekObject
}

const createMonthObject = (week1, week2, week3, week4) => {
    const monthObject = {
        weekOne: week1,
        weekTwo: week2,
        weekThree: week3,
        weekFour: week4
    }

    return monthObject
}

const JulyOne = createWeekObject([
    "Friday 8", "Preview and press"
], [
    "Saturday 9", "Vernissage", "Tim Seifert party"
], [
    "Sunday 10", "Vernissage"
], "8-10");

const JulyTwo = createWeekObject([
    "Friday 15", "Dinner Baldon x Clara Hunger", "TRD Intra"
], [
    "Saturday 16", "Jakob Kukula", "Performance at sunset"
], ["Sunday 17"], "15-17")

const JulyThree = createWeekObject(["Friday 22"], [
    "Saturday 23", "eTape Performance "
], ["Sunday 24"], "22-24")

const JulyFour = createWeekObject([
    "Friday 29", "Stoke x Baldon", "Yellownose Studio", "Sound Metaphors"
], [
    "Saturday 30", "Sound Metaphors"
], ["Sunday 31"], "29-31")

const July = createMonthObject(JulyOne, JulyTwo, JulyThree, JulyFour)

const DateComponent = ({date, dateName, data}) => {

    return (
        <DateBlock>
            <Hr/>
            <Date>{date}</Date>

            <DateName>{dateName}</DateName>

        </DateBlock>
    )
}

function DatesSectionComponent({eventData}) {

    const [eventDataStructure,
        setEventDataStructure] = useState({})

    const tempState = {}

    const eventDataStructureHandler = (data) => {

        data.map((_) => {
            if (_.node.dateCode in tempState) {

                tempState[_.node.dateCode] = {
                    ...tempState[_.node.dateCode],
                    [_.node.id]: _.node

                }

            } else {

                tempState[_.node.dateCode] = {
                    [_.node.id]: _.node
                }

            }
           

        })
    }

    

    eventDataStructureHandler(eventData)

    useEffect(() => {
        setEventDataStructure(tempState)
    }, [])

    console.log(eventDataStructure)

    


    const [firstDateVisible,
        setFirstDateVisible] = useState(false);
    const [secondDateVisible,
        setSecondDateVisible] = useState(false);
    const [thirdDateVisible,
        setThirdDateVisible] = useState(false);
    const [fourthDateVisible,
        setFourthDateVisible] = useState(false);

    const handleDatesVisibility = (e) => {

        switch (e.target.id) {
            case "first-period":
                setSecondDateVisible(false);
                setFirstDateVisible(true);
                break;

            case "second-period":
                setFirstDateVisible(false);
                setSecondDateVisible(true);
                break;

            default:
                break;
        }
    }
    return (
        <DatesSection>
            <PeriodWrapper>
                <Period id="first-period" onMouseOver={handleDatesVisibility}>08 – 10</Period>
                <Period id="second-period" onMouseOver={handleDatesVisibility}>15 – 17</Period>
                <Period id="second-period" onMouseOver={handleDatesVisibility}>22 – 24</Period>
                <Period>22 – 23</Period>
                <Period>29 – 30</Period>
            </PeriodWrapper>

            <DatesWrapper
                display={firstDateVisible
                ? "visible"
                : "none"}>

                <DateBlock>
                    <Hr/>
                    <Date>SATURDAY 09.07.</Date>
                    <DateName>Vernissage</DateName>
                </DateBlock>

                <DateComponent date="FRIDAY 08.07." dateName=""/>

                <DateBlock>
                    <Hr/>
                    <Date>SUNDAY 10.07.</Date>
                    <DateName>Vernissage</DateName>
                </DateBlock>
            </DatesWrapper>

            <DatesWrapper
                display={secondDateVisible
                ? "visible"
                : "none"}>
                <DateBlock>
                    <Hr/>
                    <Date>FRIDAY 15.07.</Date>
                    <DateName>Preview & Press</DateName>
                </DateBlock>

                <DateBlock>
                    <Hr/>
                    <Date>SATURDAY 16.07.</Date>
                    <DateName>Vernissage</DateName>
                </DateBlock>

                <DateBlock>
                    <Hr/>
                    <Date>SUNDAY 17.07.</Date>
                    <DateName>Vernissage</DateName>
                </DateBlock>
            </DatesWrapper>

        </DatesSection>
    )
}

export default DatesSectionComponent
