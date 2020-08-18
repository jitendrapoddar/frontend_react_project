import React from 'react'
import '../style/claimsummarycard.css'

function ClaimSummarCard(props) {
    console.log("in SUmmery card function")
    console.log(props)
    const { prefix,
            firstName,
            middleName,
            lastName,
            suffix,
            dob,
            gender ,
            empid,
            address,
            city,
            state,
            zip,
            phone,
            doh,
            rtw,
            salary,
            fda
        }=props.props
    return (
        <div>
            <header>
                <h1>Claim Summary Card</h1>
            </header>
            <table>
                <tr>
                    <td>Employee Name</td>
                    <td>{prefix}&nbsp;{firstName}&nbsp;{middleName}&nbsp;{lastName}&nbsp;{suffix}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{dob}</td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>{gender}</td>
                </tr>
                <tr>
                    <td>Employee ID</td>
                    <td>{empid}</td>
                </tr>
                <tr>
                    <td>Full Address</td>
                    <td>{address}&nbsp;{city}&nbsp;{state}&nbsp;{zip}</td>
                </tr>
                <tr>
                    <td>Contact Number</td>
                    <td>{phone}</td>
                </tr> 
                <tr>
                    <td>Date of Hire</td>
                    <td>{doh}</td>
                </tr> 
                <tr>
                    <td>salary</td>
                    <td>{salary}</td>
                </tr> 
                <tr>
                    <td>Return to Work</td>
                    <td>{rtw}</td>
                </tr> 
                <tr>
                    <td>First Day Absent</td>
                    <td>{fda}</td>
                </tr>       
                         
            </table>
                
            
        </div>
    )
}


export default ClaimSummarCard