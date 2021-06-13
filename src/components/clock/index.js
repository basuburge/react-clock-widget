import React, { useEffect, useState } from 'react';
import  PropTypes  from 'prop-types';
import moment from 'moment';
import { DATE_TIME_FORMATES } from './constats';
import DateTimeFormatter from  './formatter/DateTimeFormatter';
import './stylesheet/index.scss';

const getNewTime = (time) => {
    if(time) {
        return new Date(time);
    } else {
        return new Date();
    }
}

const Clock = (props) => {
    const { startTime, showDate, DateFormatter, dateFormat, showTime, TimeFormatter, timeFormat, showTimeOffset, TimeOffsetFormatter, timeOffsetFormat, CustomDateTimeFormatter } = props;
    const [currentTime, setCurrentTime] = useState(startTime);

    const startTimer = () => {
        setInterval(() => {
            setCurrentTime(getNewTime());            
        }, 1000);
    }
    useEffect(() => {
        startTimer();
    }, []);

    if(CustomDateTimeFormatter) {
        return <CustomDateTimeFormatter time={moment(currentTime)}/>
    }

    return <div className="clock-widget">
        {showDate && <div className="date-container">
            <DateFormatter time={currentTime} format={dateFormat} />
        </div>}
        &nbsp;
        {showTime && <div className="time-widget">
            <TimeFormatter time={currentTime} format={timeFormat} />
        </div>}
        &nbsp;
        {showTimeOffset && <div className="timeoffset-widget">
             <TimeOffsetFormatter time={currentTime} format={timeOffsetFormat} />
        </div>}
    </div>;
}

Clock.defaultProps = {
    startTime : getNewTime(),
    showDate: true,
    DateFormatter: DateTimeFormatter,
    dateFormat: DATE_TIME_FORMATES.DATE,
    showTime: true,
    TimeFormatter: DateTimeFormatter,
    timeFormat: DATE_TIME_FORMATES.TIME,
    showTimeOffset: true,
    TimeOffsetFormatter: DateTimeFormatter,
    timeOffsetFormat: DATE_TIME_FORMATES.TIMEOFFSET,
    CustomDateTimeFormatter: null
}

Clock.protoType = {
    startTime: PropTypes.object,
    showDate: PropTypes.bool,
    DateFormatter: PropTypes.element,
    dateFormat: PropTypes.string,
    showTime: PropTypes.bool,
    TimeFormatter: PropTypes.element,
    timeFormat: PropTypes.string,
    showTimeOffset: PropTypes.bool,
    TimeOffsetFormatter: PropTypes.element,
    timeOffsetFormat: PropTypes.string,
    CustomDateTimeFormatter: PropTypes.element
}
export default Clock;