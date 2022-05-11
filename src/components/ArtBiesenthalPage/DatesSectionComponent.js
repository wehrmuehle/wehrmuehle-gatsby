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

const DateNameWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
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

const DateComponent = ({date, dateName, data}) => {

    return (
        <DateBlock>
            <Hr/>
            <Date>{date}</Date>

            <DateNameWrapper>
                {dateName.map(e => (
                    <DateName>
                        {e}
                    </DateName>
                ))}
            </DateNameWrapper>

        </DateBlock>
    )
}

function DatesSectionComponent({eventData}) {

    const [eventDataStructure,
        setEventDataStructure] = useState({})

    const tempState = {}

    const getDateHeader = (rawDate) => {

        const weekDays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];

        const dateArray = rawDate.split("-");

        const rawYear = parseInt(dateArray[0]);

        const rawMonth = parseInt(dateArray[1]) - 1;

        const rawDay = parseInt(dateArray[2]);

        const objectDate = new window.Date(rawYear, rawMonth, rawDay);

        const weekDay = weekDays[objectDate.getDay() === 0
                ? objectDate.getDay()
                : objectDate.getDay() - 1];

        const dateHeader = `${weekDay} ${rawDay}.${rawMonth + 1}.`

        return [dateHeader, rawDay]
    }

    const eventDataStructureHandler = (data) => {

        data.map((_) => {
            const dateHeaderData = getDateHeader(_.node.dateAndTime)
            if (_.node.dateCode in tempState) {

                tempState[_.node.dateCode] = {
                    ...tempState[_.node.dateCode],
                    [_.node.id]: {
                        ..._.node,
                        dateHeader: dateHeaderData[0],
                        orderingDay: dateHeaderData[1]
                    }
                }

            } else {

                tempState[_.node.dateCode] = {
                    [_.node.id]: {
                        ..._.node,
                        dateHeader: dateHeaderData[0],
                        orderingDay: dateHeaderData[1]
                    }
                }

            }

        })
    }

    eventDataStructureHandler(eventData)

    useEffect(() => {
        setEventDataStructure(tempState)
    }, [])

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

    const [periods,
        setPeriods] = useState(["first-period", "second-period", "third-period", "fourth-period"])

    const sortCodesHandler = (events) => {
        const sortedDateCodes = Object
            .keys(events)
            .sort(function (a, b) {
                return parseInt(a.split("-")[0]) - parseInt(b.split("-")[0]);
            })

        return sortedDateCodes
    }

    const sortedDateCodes = sortCodesHandler(eventDataStructure)

    const handleDaysDivision = (dayGroup) => {
        const days = {};

        if (typeof(dayGroup) === "object") {
            Object
                .keys(dayGroup)
                .map(_ => (days[dayGroup[_].orderingDay]
                    ? days[dayGroup[_].orderingDay] = [
                        days[dayGroup[_].orderingDay],
                        dayGroup[_].eventName
                    ]
                    : days[dayGroup[_].orderingDay] = dayGroup[_].eventName))

        }

        return days

    }

    const test = handleDaysDivision(eventDataStructure["8-10"])
    console.log(test)
 

    const periodsMapped = sortedDateCodes.map((key, index) => (
        <Period id={periods[index]} onMouseOver={handleDatesVisibility}>{key}</Period>
    ))

    return (
        <DatesSection>
            <PeriodWrapper>
                {periodsMapped}
            </PeriodWrapper>

            <DatesWrapper
                display={firstDateVisible
                ? "visible"
                : "none"}>

                

                
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
