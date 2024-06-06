import { useState } from "react";
import { DateofBirthCalculator } from "./date-of-birth-calculator"
import { DateofBirthResult }from "./date-of-birth-result"
import {differenceInMonths, differenceInYears } from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DateOfBirthMain() {
    const [age, setAge] = useState(null);

    const calculateAge = (date) => {
        const today = new Date();
        const dateObject = new Date(date);
        const ageYears = differenceInYears(today, dateObject);
        const ageMonths = differenceInMonths(today, dateObject);
        setAge({
            years: ageYears,
            months: ageMonths
        });
    };

    return (
        <center className="container my-3">
            <h1>Date Of Birth - Calculator</h1>
            <div className="my-3">
                <DateofBirthCalculator calculateAge={calculateAge} />
            </div>
            {age && <DateofBirthResult age={age} />}
        </center>
    )
}