import React from "react";

import "./peak.css";

const PeakListItem = ({ peak }) => {
    return (
        <section className="peak-wrapper">
            <div>
                <img
                    src={peak.image_url}
                    alt={peak.peak_name}
                    className="peak-image"
                />
            </div>
            <div>
                <div>
                    <span className="peak-title">PEAK: </span>
                    {peak.peak_name}
                </div>
                <div>
                    <span className="peak-title">RANGE: </span>
                    {peak.range_name}
                </div>
                <div>
                    <span className="peak-title">ELEVATION: </span>
                    {peak.elevation}
                </div>
                <div>
                    <span className="peak-title">DIFFICULTY: </span>
                    {peak.difficulty}
                </div>
            </div>
        </section>
    );
};

export default PeakListItem;
