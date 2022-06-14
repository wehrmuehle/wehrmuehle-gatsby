import React, {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

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

const Month = styled("h3")`
margin-right: 30px;
text-decoration: underline;
cursor: pointer;

&:hover {
    text-decoration: none;
}
`
const MonthWrapper = styled("div")`
display: flex;
margin-bottom: 50px;
`



const DateComponent = ({date, dateName, alfaWeek}) => {

    return (
        <DateBlock>
            <h2 >{alfaWeek}</h2>
            <Hr css={css `margin: 10px 0 20px;`}/>
            <Date>{date}</Date>

            <DateNameWrapper>
                {dateName[0] !== "null" ? dateName.map(e => (
                    <DateName key={e}>
                        {e}
                    </DateName>
                )) : <div></div>}
            </DateNameWrapper>

        </DateBlock>
    )
}

export default function DatesNewDebug({data}) {

    console.log(data)

    // const [datesData,
    //     setDatesData] = useState(null);
    // const [visibleMonth,
    //     setVisibleMonth] = useState(null);
    // const [visibleDateCode,
    //     setVisibleDateCode] = useState(null);

    // const dateFormatter = (date) => {

    //     const dataArray = date.split("-");
    //     const year = dataArray[0];
    //     const numberMonth = dataArray[1];
    //     const numberDay = dataArray[2];

    //     return [year, numberMonth, numberDay]
    // }

    // const temp = {}

    // const alfaWeekDay = [
    //     "Sun",
    //     "Mon",
    //     "Tue",
    //     "Wed",
    //     "Thu",
    //     "Fr",
    //     "Sat"
    // ];

    // const alfaMonths = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December"
    // ]

    // const isBrowser = () => typeof window !== "undefined"

    // {isBrowser && data.map((_) => {

    //     const dateObject = new window.Date(dateFormatter(_.node.dateAndTime));

    //     const month = dateObject.getMonth();
    //     const day = dateObject.getDate();
    //     const weekDay = dateObject.getDay();
    //     const dateToRender = `${day
    //         .toString()
    //         .padStart(2, '0')}.${ (month + 1)
    //         .toString()
    //         .padStart(2, '0')}`
    //     const dateCode = _.node.dateCode
    //     const eventName = _.node.eventName
    //     const eventObject = _.node

    //     if (month in temp) {

    //         if (dateCode in temp[month] && temp[month]) {

    //             if (day in temp[month][dateCode] && temp[month][dateCode]) {

    //                 temp[month][dateCode][day] = {
    //                     ...temp[month][dateCode][day],
    //                     [eventName]: {
    //                         ...eventObject,
    //                         alfaWeekDay: alfaWeekDay[weekDay],
    //                         numberDay: day,
    //                         alfaMonth: alfaMonths[month],
    //                         dateToRender: dateToRender
    //                     }
    //                 }
    //             } else {
    //                 temp[month][dateCode][day] = {
    //                     [eventName]: {
    //                         ...eventObject,
    //                         alfaWeekDay: alfaWeekDay[weekDay],
    //                         numberDay: day,
    //                         alfaMonth: alfaMonths[month],
    //                         dateToRender: dateToRender
    //                     }
    //                 }
    //             }
    //         } else {
    //             temp[month][dateCode] = {
    //                 [day]: {
    //                     [eventName]: {
    //                         ...eventObject,
    //                         alfaWeekDay: alfaWeekDay[weekDay],
    //                         numberDay: day,
    //                         alfaMonth: alfaMonths[month],
    //                         dateToRender: dateToRender
    //                     }
    //                 }
    //             }
    //         }
    //     } else {
    //         temp[month] = {
    //             [dateCode]: {
    //                 [day]: {
    //                     [eventName]: {
    //                         ...eventObject,
    //                         alfaWeekDay: alfaWeekDay[weekDay],
    //                         numberDay: day,
    //                         alfaMonth: alfaMonths[month],
    //                         dateToRender: dateToRender
    //                     }
    //                 }
    //             }
    //         }
    //     }

    // })}
  

    // useEffect(() => {
    //     setDatesData(temp)

    //     setVisibleMonth(Math.min(...Object.keys(temp)))

    // }, [])

    // let mappedDummyDays;

    // useEffect(() => {}, [visibleMonth])

    // let mappedDateCodes;
    // let mappedMonths;

    // if (datesData) {

    //     const sortedDateCodes = Object
    //         .keys(datesData[visibleMonth])
    //         .sort((a, b) => {
    //             return a.split("-")[0] - b.split("-")[0]
    //         })

    //     const showDC = visibleDateCode
    //         ? visibleDateCode
    //         : sortedDateCodes[0];

    //     mappedDummyDays = Object
    //         .entries(datesData[visibleMonth][showDC])
    //         .map((day) => {
    //             const findEventObject = day[1][Object.keys(day[1])[0]]
    //             const findDate = findEventObject["dateToRender"]
    //             const findAlfa = findEventObject["alfaWeekDay"]
    //             const findName = Object.keys(day[1])

    //             return (
    //                 <DateComponent
    //                     dateName={findName}
    //                     date={findDate}
    //                     alfaWeek={findAlfa}
    //                     key={findName + findDate}></DateComponent>
    //             )
    //         })

    //     const dateCodesChangeHandler = (e) => {
    //         setVisibleDateCode(e.target.innerHTML)
    //     }

    //     mappedDateCodes = sortedDateCodes.map((dc) => {
    //         return (
    //             <Period onClick={dateCodesChangeHandler} key={dc}>{dc}</Period>
    //         )
    //     })

    //     const monthChangeHandler = (e) => {
    //         if (visibleMonth !== alfaMonths.indexOf(e.target.innerHTML)) 
    //             setVisibleMonth(alfaMonths.indexOf(e.target.innerHTML))
    //         setVisibleDateCode(null)
    //     }

    //     mappedMonths = Object
    //         .keys(datesData)
    //         .map((month) => {
    //             return (

    //                 <Month onClick={monthChangeHandler} key={month}>{alfaMonths[month]}</Month>

    //             )
    //         })

    // }

    return (
        <div></div>
    )
}
