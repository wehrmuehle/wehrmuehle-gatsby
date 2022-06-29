import React, {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

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

export default function DatesMobile({data}) {

    const [datesData,
        setDatesData] = useState(null);
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
            const stringMonth = typeof(month) === "number"
                ? (month + 1).toString()
                : month + 1;
            day = dateObject.getDate();
            const stringDay = typeof(day) === "number"
                ? day.toString()
                : day;
            weekDay = dateObject.getDay();
            dateToRender = `${stringDay.padStart(2, '0')}.${stringMonth.padStart(2, '0')}`

        }

        const dateCode = _.node.dateCode
        const eventName = _.node.eventName
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

    }, [])

    const eventsVisibilityHandler = (e) => {
        const unstyled = e
            .target
            .innerHTML
            .split("-")
            .map(item => item.slice(0, -1))
            .join("-");

        if (unstyled === visibleDateCode) {
            setVisibleDateCode(null)
        } else {
            setVisibleDateCode(unstyled)
        }

    }

    let allVisibleMapped;

    if (datesData) {
        let slotMap = [];

        allVisibleMapped = Object
            .entries(datesData)
            .map((month, i) => {

                const dateCodes = Object
                    .keys(month[1])
                    .sort((a, b) => a.split("-")[0] - b.split("-")[0])
                    .map((dc) => {
                        const eventDays = Object
                            .keys(month[1][dc])
                            .map((eventDay) => {

                                let date;
                                let alfaWeek;

                                let orderSlot = ["All Day", "Noon", "Afternoon", "Evening"]

                                let sortedDateName = Object
                                    .keys(month[1][dc][eventDay])
                                    .sort((a, b) => {
                                        if (orderSlot.indexOf(a[1].timeSlot) < orderSlot.indexOf(b[1].timeSlot)) {
                                            return -1;
                                        }
                                        if (orderSlot.indexOf(a[1].timeSlot) > orderSlot.indexOf(b[1].timeSlot)) {
                                            return 1;
                                        }
                                        return 0;
                                    });

                                const singleEvents = sortedDateName.map((singleEvent) => {
                                    date = month[1][dc][eventDay][singleEvent]["dateToRender"];
                                    alfaWeek = month[1][dc][eventDay][singleEvent]["alfaWeekDay"]

                                    return (
                                        <React.Fragment key={singleEvent + date}>
                                            {singleEvent === "null"
                                                ? <div></div>
                                                : <React.Fragment>
                                                    {slotMap.includes(month[1][dc][eventDay][singleEvent].timeSlot + date)
                                                        ? <h3 css={css `margin-top: 20px;`}>{singleEvent}</h3>
                                                        : <React.Fragment>

                                                            <div css={css `position: absolute; display: none;`}>
                                                                {slotMap = [
                                                                    ...slotMap,
                                                                    month[1][dc][eventDay][singleEvent].timeSlot + date
                                                                ]}
                                                            </div>

                                                            <Hr h="2px" css={css `margin: 35px 0 15px;`}/>
                                                            <p css={css `margin-bottom: 8px; font-size: 15px;`}>{month[1][dc][eventDay][singleEvent].timeSlot}</p>

                                                            <h3 css={css `margin-top: 20px;`}>
                                                                {singleEvent}
                                                            </h3>
                                                        </React.Fragment>
}

                                                </React.Fragment>}
                                        </React.Fragment>

                                    )
                                })
                                return (

                                    <div
                                        css={css `display: ${visibleDateCode === dc
                                        ? "visible"
                                        : "none"}; position: ${visibleDateCode === dc
                                            ? "relative"
                                            : "absolute"}; margin-bottom: 25px;`}
                                        key={dc + date}>
                                        <h2 css={css `font-size: 60px;`}>{alfaWeek}</h2>
                                        <Hr css={css `margin: 10px 0 20px;`}/>
                                        <p>{date}</p>
                                        <div>{singleEvents}</div>
                                    </div>

                                )
                            })

                        const renderDC = dc
                            .split("-")
                            .map(item => `${item}.`)
                            .join("-");
                        return (
                            <div onClick={eventsVisibilityHandler} key={renderDC + i}>
                                <h1 css={css `font-size: 80px; letter-spacing: 8px; margin-bottom: 25px;`}>{renderDC}</h1>
                                {eventDays}
                            </div>
                        )
                    })

                return (
                    <div css={css `margin-bottom: 30px;`} key={alfaMonths[month[0]] + i}>
                        <p css={css `margin-bottom: 15px;`}>{alfaMonths[month[0]]}</p>
                        <div css={css `margin-bottom: 10px;`}>{dateCodes}</div>
                    </div>

                )
            })
    }

    return (
        <React.Fragment>
            {allVisibleMapped}
        </React.Fragment>
    )
}
