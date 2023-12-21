import React from 'react'
import './Notification.css'
function Notification() {
    return (
        <div>
        <div className = "notificationContainer">
            <p className="notificationTitle">
                Admit
            </p>
            <p className = "notificationDetails">
                Patient Admitted on Room No : 22
            </p>
            <p className = "patientName"> Name : Damian Levander</p>
            <p className = "patientAge"> Age : 28</p>
            <p className = "patientCovid"> Covid : Negative</p>

        </div>
        <div className = "notificationContainer">
            <p className="notificationTitle">
                Discharge
            </p>
            <p className = "notificationDetails">
                Patient Admitted on Room No : 20
            </p>
            <p className = "patientName"> Name : Annie frost</p>
            <p className = "patientAge"> Age : 20</p>
            <p className = "patientCovid"> Covid : positive</p>

        </div>
        </div>
    )
}

export default Notification
