import React from 'react';
import  PropTypes  from 'prop-types';
import moment from 'moment';
import {DATE_TIME_FORMATES} from './../constats';

const DateTimeFormatter = (props) => {
    const {time, format} = props;
    return <>{moment(time).format(format)}</>
}

DateTimeFormatter.protoType = {
    time: PropTypes.object,
    format: PropTypes.string,
}

DateTimeFormatter.defaultProps = {
    time: new Date(),
    format: DATE_TIME_FORMATES.DATETIME
}

export default DateTimeFormatter;