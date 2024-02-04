import { useState } from "react";

export default function Listing({data}) {
    const [expanded, setExpanded] = useState(false);

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    if (expanded) {
        return (
            <div onClick={toggleExpanded}>
                <h1>{data.name}</h1>
                <ul>
                    <li>Address: {data.address}</li>
                    <li>Number of Bedrooms: {data.bedrooms}</li>
                    <li>Monthly Rent: {data.rent}</li>
                </ul>
            </div>
        );
    }
    return (
        <div onClick={toggleExpanded}>
            <h1>{data.name}</h1>
        </div>
    );
}