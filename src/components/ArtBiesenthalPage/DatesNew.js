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

export default function DatesNew({data}) {

    const [datesData,
        setDatesData] = useState("");

    const dateFormatter = (date) => {

        const dataArray = date.split("-");
        const year = dataArray[0];
        const numberMonth = dataArray[1];
        const numberDay = dataArray[2];

        return [year, numberMonth, numberDay]
    }

    const temp = {}

    const alfaWeekDay = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fr",
        "Sat",
        "Sun"
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

    data.map((_) => {
        

        

        const dateObject = window ? new window.Date(dateFormatter(_.node.dateAndTime)) : null;

        const month = dateObject.getMonth();
        const day = dateObject.getDate();
        const weekDay = dateObject.getDay();
        const dateCode = _.node.dateCode
        const eventName = _.node.eventName
        const eventObject = _.node

        // if (temp[month]) {     console.log(temp[month]) }

        if (month in temp) {

            if (dateCode in temp[month] && temp[month]) {

                if (day in temp[month][dateCode] && temp[month][dateCode]) {

                    temp[month][dateCode][day] = {
                        ...temp[month][dateCode][day],
                        [eventName]: {
                            ...eventObject,
                            alfaWeekDay: alfaWeekDay[weekDay],
                            numberDay: day,
                            alfaMonth: alfaMonths[month]
                        }
                    }
                } else {
                    temp[month][dateCode][day] = {
                        [eventName]: {
                            ...eventObject,
                            alfaWeekDay: alfaWeekDay[weekDay],
                            numberDay: day,
                            alfaMonth: alfaMonths[month]
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
                            alfaMonth: alfaMonths[month]
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
                            alfaMonth: alfaMonths[month]
                        }
                    }
                }
            }
        }

    })

    useEffect(() => {
        setDatesData(temp)
    }, [])

    console.log(datesData)



    return (
        <div>DatesNew</div>
    )
}
