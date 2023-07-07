import React from "react";
import Sidebar from "../dashboard/Sidebar";
import "./DashboardPage.css"
import WorkingArea from "../dashboard/WorkingArea";
import { Row, Col } from 'react-bootstrap'

const DashboardPage = () => {
    return (
        <div className="d-flex">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="workarea-container">
                <WorkingArea />
            </div>
        </div>
    )
}

export default DashboardPage;