import PropTypes from 'prop-types';
export const DateofBirthResult = ({ age }) => {
    return <>
        <h5>Your age today - {age.years} year/s & {age.months} month/s old</h5>
    </>
};

DateofBirthResult.prototypes = {
    age: PropTypes.shape({
        years: PropTypes.number.isRequired,
        months: PropTypes.number.isRequired,
    }),
};