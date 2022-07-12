import React, {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import parse from 'html-react-parser';

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: ${props => props.h
        ? props.h
        : "4px"};
width: 100%;

`


const Period = styled("h1")`
font-size: 80px;
text-decoration: ${props => props.u};
opacity: ${props => props.o};
text-decoration-thickness: 5px;
text-underline-offset: 2px;
margin-bottom: 30px;
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
margin-bottom: 10px;
`

const DateNameWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
`
const DateName = styled("h6")`
font-size: 18px;
margin-bottom: 15px;
`

const DatesSection = styled("div")`
width: 100%;
display: flex;
position: relative;
`

const DatesWrapper = styled("div")`
width: 70%;
display: flex;
justify-content: space-evenly;
position: absolute;
right: 0;
display: ${props => props.display};
`
const PeriodWrapper = styled("div")`
width: 30%;
display: flex;
flex-direction: column;
`

const Month = styled("h3")`
margin-right: 30px;
text-decoration: ${props => props.u
    ? "none"
    : "underline"};
cursor: pointer;
&:hover {
    text-decoration: none;
}
`
const MonthWrapper = styled("div")`
display: flex;
margin-bottom: 100px;
`

const DateComponent = ({date, dateName, alfaWeek}) => {

    let slotMap = [];

    let orderSlot = ["All Day", "Noon", "Afternoon", "Evening"]

    let sortedDateName = dateName.sort((a, b) => {
        if (orderSlot.indexOf(a[1].timeSlot) < orderSlot.indexOf(b[1].timeSlot)) {
            return -1;
        }
        if (orderSlot.indexOf(a[1].timeSlot) > orderSlot.indexOf(b[1].timeSlot)) {
            return 1;
        }
        return 0;
    });

    return (
        <DateBlock>
            <h2 >{alfaWeek}</h2>
            <Hr css={css `margin: 10px 0 20px;`}/>
            <Date>{date}</Date>

            <DateNameWrapper>
                {sortedDateName[0][0] !== "null"
                    ? sortedDateName.map(e => (

                        <React.Fragment key={e[0]}>
                            {slotMap.includes(e[1].timeSlot)
                                ? <DateName>
                                        {parse(e[0])}
                                    </DateName>
                                : <React.Fragment>
                                    <div css={css `position: absolute; display: none;`}>
                                        {slotMap = [
                                            ...slotMap,
                                            e[1].timeSlot
                                        ]}
                                    </div>
                                    <Hr h="1px" css={css `margin: 10px 0;`}/>
                                    <p css={css `margin-bottom: 8px;`}>{e[1].timeSlot}</p>

                                    <DateName >
                                        {parse(e[0])}
                                    </DateName>
                                </React.Fragment>}

                        </React.Fragment>
                    ))
                    : <div></div>}
            </DateNameWrapper>

        </DateBlock>
    )
}

export default function DatesNew({data}) {

    const [datesData,
        setDatesData] = useState(null);
    const [visibleMonth,
        setVisibleMonth] = useState(null);
    const [visibleDateCode,
        setVisibleDateCode] = useState(null);

    const dateFormatter = (date) => {

        const dataArray = date.split("-");
        const year = dataArray[0];
        const numberMonth = dataArray[1];
        const numberDay = dataArray[2];

        return [year, numberMonth, numberDay]
    }

    const temp = {}

    const alfaWeekDay = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fr",
        "Sat"
    ];

    const alfaMonths = [
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

    const addLinkToEventName = (eName, toSpot, link) => {

        if (eName) {
            const eventNameArray = eName.split(" ");

            const index = eventNameArray.indexOf(toSpot);

            if (index !== -1) {
                eventNameArray[index] = `<a className="dates-link" target="_blank" href="${link}">${toSpot}</a>`
            }

            return eventNameArray.join(" ")
        } else {
            return `<div></div>`
        }
    }

    const isBrowser = typeof window !== "undefined"

    data.map((_) => {

        let dateObject

        let month
        let day
        let weekDay
        let dateToRender

        if (isBrowser) {
            const [y,
                m,
                d] = dateFormatter(_.node.dateAndTime);

            dateObject = isBrowser && new window.Date(y, m - 1, d);

            month = dateObject.getMonth();
            day = dateObject.getDate();
            weekDay = dateObject.getDay();
            dateToRender = `${day
                .toString()
                .padStart(2, '0')}.${ (month + 1)
                .toString()
                .padStart(2, '0')}`

        }

        const dateCode = _.node.dateCode
        const eventName = addLinkToEventName(_.node.eventName, "BALDON", "https://baldon.berlin/")
        const eventObject = _.node

        if (month in temp) {

            if (dateCode in temp[month] && temp[month]) {

                if (day in temp[month][dateCode] && temp[month][dateCode]) {

                    temp[month][dateCode][day] = {
                        ...temp[month][dateCode][day],
                        [eventName]: {
                            ...eventObject,
                            alfaWeekDay: alfaWeekDay[weekDay],
                            numberDay: day,
                            alfaMonth: alfaMonths[month],
                            dateToRender: dateToRender
                        }
                    }
                } else {
                    temp[month][dateCode][day] = {
                        [eventName]: {
                            ...eventObject,
                            alfaWeekDay: alfaWeekDay[weekDay],
                            numberDay: day,
                            alfaMonth: alfaMonths[month],
                            dateToRender: dateToRender
                        }
                    }
                }
            } else {
                temp[month][dateCode] = {
                    [day]: {
                        [eventName]: {
                            ...eventObject,
                            alfaWeekDay: alfaWeekDay[weekDay],
                            numberDay: day,
                            alfaMonth: alfaMonths[month],
                            dateToRender: dateToRender
                        }
                    }
                }
            }
        } else {
            temp[month] = {
                [dateCode]: {
                    [day]: {
                        [eventName]: {
                            ...eventObject,
                            alfaWeekDay: alfaWeekDay[weekDay],
                            numberDay: day,
                            alfaMonth: alfaMonths[month],
                            dateToRender: dateToRender
                        }
                    }
                }
            }
        }

    })

    useEffect(() => {
        setDatesData(temp)

        setVisibleMonth(Math.min(...Object.keys(temp)))

    }, [])

    let mappedDummyDays;

    useEffect(() => {}, [visibleMonth])

    let mappedDateCodes;
    let mappedMonths;

    if (datesData) {

        const sortedDateCodes = Object
            .keys(datesData[visibleMonth])
            .sort((a, b) => {
                return a.split("-")[0] - b.split("-")[0]
            })

        const showDC = visibleDateCode
            ? visibleDateCode
            : sortedDateCodes[0];

        mappedDummyDays = visibleDateCode
            ? Object
                .entries(datesData[visibleMonth][visibleDateCode])
                .map((day) => {
                    const findEventObject = day[1][Object.keys(day[1])[0]]
                    const findDate = findEventObject["dateToRender"]
                    const findAlfa = findEventObject["alfaWeekDay"]
                    const findSlot = findEventObject["timeSlot"]
                    const findName = Object.entries(day[1])

                    return (
                        <DateComponent
                            dateName={findName}
                            date={findDate}
                            alfaWeek={findAlfa}
                            key={findName + findDate}></DateComponent>
                    )
                })
            : <div></div>

        const dateCodesChangeHandler = (e) => {
            const unstyled = e
                .target
                .innerHTML
                .split("-")
                .map(item => item.slice(0, -1))
                .join("-");
            setVisibleDateCode(unstyled)
        }

        const formatDateCode = (_) => {
            const toReturn = _
                .split("-")
                .map(item => `${item}.`)
                .join("-");

            return toReturn
        }

        mappedDateCodes = sortedDateCodes.map((dc) => {
            console.log(visibleDateCode)
            return (
                <Period
                    onClick={dateCodesChangeHandler}
                    key={dc}
                    u={dc === visibleDateCode
                    ? "none"
                    : "underline"}
                    o={dc === visibleDateCode
                    ? "1"
                    : ".2"}>{formatDateCode(dc)}</Period>
            )
        })

        const monthChangeHandler = (e) => {
            if (visibleMonth !== alfaMonths.indexOf(e.target.innerHTML)) 
                setVisibleMonth(alfaMonths.indexOf(e.target.innerHTML))
            setVisibleDateCode(null)
        }

        mappedMonths = Object
            .keys(datesData)
            .map((month) => {
                return (

                    <Month
                        onClick={monthChangeHandler}
                        key={month}
                        u={alfaMonths[month] === alfaMonths[visibleMonth]}>{alfaMonths[month]}</Month>

                )
            })

    }

    return (
        <React.Fragment>
            <MonthWrapper>{mappedMonths}</MonthWrapper>
            <DatesSection>
                <PeriodWrapper>{mappedDateCodes}</PeriodWrapper>
                <DatesWrapper>{mappedDummyDays}</DatesWrapper>
            </DatesSection>
        </React.Fragment>
    )
}
