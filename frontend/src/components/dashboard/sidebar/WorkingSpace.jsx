import React from "react";
import "./WorkingSpace.css"
import {ReactComponent as SquareIcon} from "../../../assets/icons/square.svg"
import {ReactComponent as TriangleIcon} from "../../../assets/icons/triangle.svg"
import {ReactComponent as OctagonIcon} from "../../../assets/icons/octagon.svg"
import {ReactComponent as AnalyticsIcon} from "../../../assets/icons/dashbaord.svg"
import {ReactComponent as PerformanceIcon} from "../../../assets/icons/Star.svg"
import {ReactComponent as TestlabIcon} from "../../../assets/icons/bulb.svg"

const WorkingSpace = () => {
    return (
        <div className="working-container">
            <div className="learning-container">
                <div className="learning-header-container">
                    <p className="workingspace-header-text">LEARNING SPACES</p>
                </div>
                <div className="learning-list-container">
                    <ul className="learning-list">
                        <li><a href="#" className="menu-btn-standard"><SquareIcon className="learn-icon"/>Learning App</a></li>
                        <li><a href="#" className="menu-btn-standard"><TriangleIcon className="gpthub_icon"/>GPT-Hub</a></li>
                        <li><a href="#" className="menu-btn-standard"><SquareIcon className="personal_ai_icon"/>Personal AI-GPT</a></li>
                        <li><a href="#" className="menu-btn-standard"><OctagonIcon className="booking_icon"/>Exam Booking App</a></li>
                    </ul>
                </div>
            </div>
            <div className="achievement-container">
                <div>
                    <p className="achievement-header-text">ACHIEVENMENT SPACES</p>
                </div>
                <div className="achievement-list-container">
                    <ul className="achievement-list">
                        <li><a href="#"><AnalyticsIcon  className="analytics-icon"/>Analytics</a></li>
                        <li><a href="#"><PerformanceIcon className="performance-icon"/>Performance</a></li>
                        <li><a href="#"><TestlabIcon className="testlab-icon"/>TestLab</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkingSpace;