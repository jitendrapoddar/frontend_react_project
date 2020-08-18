import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/claiminfoform1.css'
import { updateClaim } from '../redux/action/action'

class ClaimInfoForm1 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            claims: {
                    prefix:this.props.claim.claims.prefix? this.props.claim.claims.prefix:"",
                    firstName:this.props.claim.claims.firstName? this.props.claim.claims.firstName:"",
                    middleName:this.props.claim.claims.middleName?this.props.claim.claims.middleName:"",
                    lastName:this.props.claim.claims.lastName?this.props.claim.claims.lastName:"",
                    suffix:this.props.claim.claims.suffix?this.props.claim.claims.suffix:"",
                    dob:this.props.claim.claims.dob?this.props.claim.claims.dob:"",
                    gender:this.props.claim.claims.gender?this.props.claim.claims.gender:"",
                    empid:this.props.claim.claims.empid?this.props.claim.claims.empid:"",
                    address:this.props.claim.claims.address?this.props.claim.claims.address:"",
                    city:this.props.claim.claims.city?this.props.claim.claims.city:"",
                    state:this.props.claim.claims.state?this.props.claim.claims.state:"",
                    zip:this.props.claim.claims.zip?this.props.claim.claims.zip:"",
                    phone:this.props.claim.claims.phone?this.props.claim.claims.phone:"",
                    doh:this.props.claim.claims.doh?this.props.claim.claims.doh: "",
                    rtw:this.props.claim.claims.rtw?this.props.claim.claims.rtw: "",
                    salary: this.props.claim.claims.salary?this.props.claim.claims.salary:null,
                    fda:this.props.claim.claims.fda?this.props.claim.claims.fda:""

                    },
            "formToogle" :true

            
             
        }
    }
    
    isValidPhoneNumber = num => {
        return /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(num)
    }
    
    handleChange = event => {
        console.log('in change', event.target.value)

        this.setState({
            claims: {
                ...this.state.claims, 
                [event.target.name]:event.target.value
            }
        })
       
    }
    handleNext = event => {
        let validation = true
        console.log('in change', event.target.value)
       
        if(this.state.claims.firstName === null || this.state.claims.firstName === ''){
            validation= false
            document.getElementById('nameErr').innerHTML=
            '<p style="color:brown">please enter the first name</p>'
        }
        if(this.state.claims.dob === null || this.state.claims.dob === ''){
            validation= false
            document.getElementById('dobErr').innerHTML=
            '<p style="color:brown">please enter the date of birth</p>'
        }
        if(this.state.claims.empid === null || this.state.claims.empid === ''){
            validation= false
            document.getElementById('idErr').innerHTML=
            '<p style="color:brown">please enter yout employee ID</p>'
        }
        if(this.state.claims.gender === null || this.state.claims.gender === ''){
            validation= false
            document.getElementById('genderErr').innerHTML=
            '<p style="color:brown">please enter your gender</p>'
        }
        if(this.state.claims.phone === null || this.state.claims.phone === ''){
            validation = false
            document.getElementById('phoneNumErr').innerHTML=
            '<p style="color:brown">please enter the phone number</p>'
        }else {
            let temp = this.isValidPhoneNumber(this.state.claims.phone)
            if(!temp){
                validation=false;
                document.getElementById('phoneNumErr').innerHTML=
                '<p style="color:brown">number format shoud be xxx-xxx-xxxx</p>'
            }
        }
        if(this.state.claims.zip === null || this.state.claims.zip === ''){
            validation= false
            document.getElementById('zipErr').innerHTML=
            '<p style="color:brown">please enter the pin code</p>'
        }
        if(this.state.claims.state === null || this.state.claims.state === ''){
            validation= false
            document.getElementById('stateErr').innerHTML=
            '<p style="color:brown">please enter the state</p>'
        }
        if(this.state.claims.city === null || this.state.claims.city === ''){
            validation= false
            document.getElementById('cityErr').innerHTML=
            '<p style="color:brown">please enter the city</p>'
        }
        if(this.state.claims.address === null || this.state.claims.address === ''){
            validation= false
            document.getElementById('addressErr').innerHTML=
            '<p style="color:brown">please enter the address</p>'
        }
        if(validation){
            this.setState({
                formToogle: false
            })
        }else {
            return false
        }

        
    }
    handleCancel = event => {
        window.location="/"
    }
    handleSubmit = event => {
        this.props.updateClaim(this.state.claims)
        history.back()
    }
    render(){

       console.log("state claim ", this.props)
        const {prefix, firstName, middleName, lastName, suffix,
             dob,gender, empid, address, city, state, zip, phone, doh, rtw, salary, fda}= this.state.claims
        return (
        <div className="upper-form">
            <form>
                <div className={this.state.formToogle?'show-panel': 'hide-panel'}>
                <table>
                <ul>
                    <tr>
                    <li >
                        <td><label>Prefix</label></td>  
                        <td>
                            <div>
                                <select name="prefix" 
                                value={prefix}
                                onChange = {this.handleChange}
                                
                                >
                                    <option selected value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Ms.">Ms.</option>
                                </select>
                            </div>
                        </td>                    
                    </li>
                    </tr>
                    <tr>
                    <td>
                        <li>
                            <label> First Name
                                <div className="sub-element">
                                    <input 
                                        name="firstName" 
                                        type="text" 
                                        value={firstName}
                                        onChange = {this.handleChange}
                                        placeholder="First Name"/>
                                </div>
                                <div id={'nameErr'}></div>
                            </label>
                        </li>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <li>
                            <label>Middle Name
                                <div className="sub-element">
                                    <input 
                                        name="middleName" 
                                        type="text" 
                                        value={middleName}
                                        onChange = {this.handleChange}
                                        placeholder="Middle Name"/>
                                </div>
                            </label>
                        </li>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <li>
                            <label> Last Name
                                <div className="sub-element">
                                    <input 
                                        name="lastName" 
                                        type="text" 
                                        value={lastName}
                                        onChange = {this.handleChange}
                                        placeholder="Last Name"/>
                                </div>
                            </label>
                        </li>
                    </td>

                    </tr>
                    <tr>
                        <li>
                            <td><label>
                                Suffix                            
                                <div className="sub-element">
                                <input 
                                    name="suffix" 
                                    type="text" 
                                    value={suffix}
                                    onChange = {this.handleChange}
                                    placeholder="your title"/>
                                </div>
                                </label>
                            </td>
                        </li>
                    </tr>
                    <tr>
                        <td>
                            <li>
                                <label>
                                    Date of Birth
                                    <div className="sub-element">
                                        <input
                                            name="dob"
                                            value={dob}
                                            onChange = {this.handleChange}
                                            type="date"
                                        />
                                    </div>
                                    <div id={'dobErr'}></div>
                                </label>
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li>
                                <label>
                                    Gender
                                    <div className="sub-element">
                                        <select name="gender" value={gender} onChange={this.handleChange}>
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                            <option value="others">others</option>
                                        </select>
                                    </div>
                                    <div id={'genderErr'}></div>
                                </label>                            
                            </li>
                        </td>  
                    </tr>                      
                    <tr>
                    <li>
                        <td><label> 
                            Employee ID
                        <div className="sub-element">
                            <input 
                                name="empid" 
                                type="text" 
                                value={empid}
                                onChange = {this.handleChange}
                                placeholder="Employee ID"/>
                        </div>
                        <div id={'idErr'}></div>
                        </label>
                        </td>                        
                    </li>
                    </tr>
                    <tr>
                    <li>
                        <td><label>Address
                        <div className="sub-element">
                        <textarea 
                                name="address" 
                                value={address}
                                onChange = {this.handleChange}
                                placeholder="Address"/>
                        </div>
                        </label>
                        <div id={'addressErr'}></div>
                        </td>                        
                    </li>
                    </tr>
                    <tr>
                        <td>
                    <li>
                        <label>
                            City
                            <div className="sub-element">
                            <input 
                                name="city" 
                                type="text" 
                                value={city}
                                onChange = {this.handleChange}
                                placeholder="city"/>
                            </div>
                            <div id={'cityErr'}></div>
                        </label>
                    </li></td></tr>
                    <tr><td><li>
                        <label>
                            State
                            <div className="sub-element">
                            <input 
                                name="state" 
                                type="text" 
                                value={state}
                                onChange = {this.handleChange}
                                placeholder="state"/>
                            </div>
                            <div id={'stateErr'}></div>
                        </label>
                    </li></td></tr>
                    <tr><td><li>
                        <label>
                            Zip
                            <div className="sub-element">
                            <input 
                                name="zip" 
                                type="text" 
                                value={zip}
                                onChange = {this.handleChange}
                                placeholder="zip"/>
                            </div>
                            <div id={'zipErr'}></div>
                        </label>
                    </li>
                    </td>
                    </tr>
                    <tr>
                    <li>
                        <td><label> Contact
                            <div className="sub-element">
                            <input 
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={this.handleChange}
                                placeholder = "xxx-xxx-xxxx" 
                            />
                            </div>
                            <div id={'phoneNumErr'}></div>
                        </label>
                            
                        </td>
                    </li>
                    </tr>
                </ul>
                <tr>
                <div className="button-style">
                    <td>
                        <button type="button" onClick={this.handleCancel} >CANCEL</button>
                    </td>
                    <td>
                        <button type="button" onClick={this.handleNext}>NEXT</button>
                    </td>
                </div>
                </tr>
                </table>
                </div>


                <div className={this.state.formToogle?'hide-panel': 'show-panel'}>
                <table>
                <tr>
                    <td>
                        <li>
                            <div>
                                <label>
                                    Date of Hire
                                    <div className="sub-element">
                                        <input 
                                            type="date" 
                                            name="doh"
                                            value={doh}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Return to Work
                                    <div className="sub-element">
                                        <input 
                                            type="date" 
                                            name="rtw"
                                            value={rtw}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </label>
                            </div>
                        </li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li>
                            <div>
                                <label>
                                    Salary
                                    <div className="sub-element">
                                        <input 
                                            type="text" 
                                            name="salary"
                                            value={salary}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    First Day Absent
                                    <div className="sub-element">
                                        <input 
                                            type="date" 
                                            name="fda"
                                            value={fda}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </label>
                            </div>
                        </li>
                    </td>
                </tr>
                <tr>
                    <div className="button-style">
                        <td>
                            <button type="button" onClick={this.handleCancel}>CANCEL</button>
                        </td>
                        <td>
                            <button type="button" onClick={this.handleSubmit}>SUBMIT</button>
                        </td>
                        
                    </div>
                </tr>
                </table>
                </div>
                
            </form>
        </div>
    )
    }
}
const mapStateToProps = state => {
    console.log('in form 1 state to props', state)
    return{
        claim: state.main        
    }
  }
const mapDispatchToProps=(dispatch) => ({
    updateClaim: (data) => dispatch(updateClaim(data))
})

export default ClaimInfoForm1 = connect(
    mapStateToProps,
    mapDispatchToProps
    
)(ClaimInfoForm1)



    
