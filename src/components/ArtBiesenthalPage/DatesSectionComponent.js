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

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const [eventDataStructure,
        setEventDataStructure] = useState({})

    const tempDay = {}

    const tempDateCodes = {}

    const tempMonth = {}

    const getDateHeader = (rawDate) => {

        const weekDays = [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fr",
            "Sat",
            "Sun"
        ];

        const dateArray = rawDate.split("-");

        const rawYear = parseInt(dateArray[0]);

        const rawMonth = parseInt(dateArray[1]) - 1;

        const rawDay = parseInt(dateArray[2]);

        const objectDate = new window.Date(rawYear, rawMonth, rawDay);

        const weekDay = weekDays[objectDate.getDay() === 0
                ? objectDate.getDay()
                : objectDate.getDay() - 1];

        const month = months[objectDate.getMonth()]

        const dateHeader = `${rawDay}.${rawMonth + 1}.`

        return [dateHeader, rawDay, weekDay, month]
    }

    const eventDataStructureHandler = (data) => {

        data.map((_) => {
            if (!(_.node.dateCode in tempDateCodes)) {
                tempDateCodes[_.node.dateCode] = {}
            }
        })

        data.map((_) => {
            const [dateHeader,
                eventDay,
                eventWeekDay,
                eventMonth] = getDateHeader(_.node.dateAndTime)

            if (eventDay in tempDay) {

                tempDay[eventDay] = {
                    ...tempDay[eventDay],
                    [_.node.id]: {
                        ..._.node,
                        dateHeader: dateHeader,
                        eventWeekDay: eventWeekDay,
                        eventMonth: eventMonth,
                        eventDay: eventDay
                    }
                }

            } else {

                tempDay[eventDay] = {
                    [_.node.id]: {
                        ..._.node,
                        dateHeader: dateHeader,
                        eventWeekDay: eventWeekDay,
                        eventMonth: eventMonth,
                        eventDay: eventDay
                    }
                }

            }

        })

        Object
            .keys(tempDay)
            .map((_) => {

                Object
                    .keys(tempDay[_])
                    .map((i) => {

                        if (!(tempDay[_][i].eventMonth in tempMonth)) {
                            tempMonth[tempDay[_][i].eventMonth] = {}
                        }
                    })
            })

        const checkInRangeDateCode = (dc, item) => {
            const numbers = dc.split("-");
            const lower = parseInt(numbers[0]);
            const higher = parseInt(numbers[1]);

            if (item > lower - 1 && item < higher + 1) {
                return true
            } else {
                return false
            }
        }

        Object
            .keys(tempDay)
            .map((_) => {

                Object
                    .keys(tempDay[_])
                    .map((i) => {

                        console.log("1", tempDay[_])
                        console.log("2", tempDay[_][i])

                        const dc = tempDay[_][i].dateCode;

                        console.log("3", {...tempDay[_][i].dateCode})

                        if (checkInRangeDateCode(dc, _)) {
                            tempDateCodes[dc] = {
                                ...tempDateCodes[dc],
                                [tempDay[_][i].eventDay]: {
                                    ...tempDay[_][i],
                                    [tempDay[_][i].id]: tempDay[_][i]
                                }

                            }

                        }

                    })

            })

        Object
            .keys(tempDateCodes)
            .map((_) => {

                Object
                    .keys(tempDateCodes[_])
                    .map((i) => {
                        Object
                            .keys(tempMonth)
                            .map((m => {
                                if (tempDateCodes[_][i].eventMonth === m) {
                                    tempMonth[m] = {
                                        ...tempMonth[m],
                                        [tempDateCodes[_][i].dateCode]: tempDateCodes[_]

                                    }
                                }
                            }))
                    })
            })

    }

    eventDataStructureHandler(eventData)

    useEffect(() => {
        setEventDataStructure(tempMonth)
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

    const handleMonthVisibility = (e) => {

        console.log(e.target.innerHTML)
    }

    const [periods,
        setPeriods] = useState(["first-period", "second-period", "third-period", "fourth-period"])

    const sortCodesHandler = (events) => {

        if (events) {
            const sortedDateCodes = Object
                .keys(events)
                .sort(function (a, b) {
                    return parseInt(a.split("-")[0]) - parseInt(b.split("-")[0]);
                })
        }

        return sortedDateCodes
    }

    const sortMonths = (monthsArray) => {
        const sortedMonthArray = monthsArray.sort((a, b) => months.indexOf(a) - months.indexOf(b))
        return sortedMonthArray
    }

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

    const [visibleMonth,
        setVisibleMonth] = useState("")

    useEffect(() => {
        setVisibleMonth(sortMonths(Object.keys(eventDataStructure))[0])
    })

    const sortedDateCodes = sortCodesHandler(eventDataStructure)



    // const periodsMapped = sortedDateCodes.map((key, index) => (     <Period
    // id={periods[index]} onMouseOver={handleDatesVisibility}>{key}</Period> ))

    return (

        <div>

            <div css={css `display: flex; margin-bottom: 5rem;`}>{sortMonths(Object.keys(eventDataStructure)).map((_) => {
                    return (
                        <p css={css `margin-left: 2rem;`} onMouseOver={handleMonthVisibility}>{_}</p>
                    )
                })}</div>

            <DatesSection>
                <PeriodWrapper>
                    {/* {periodsMapped} */}
                </PeriodWrapper>

                <DatesWrapper
                    display={firstDateVisible
                    ? "visible"
                    : "none"}></DatesWrapper>

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

        </div>
    )
}

export default DatesSectionComponent
