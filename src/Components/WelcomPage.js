import React, { Component } from 'react'
import pic1 from "../Assets/Images/pic1.png"
import { Link } from 'react-router-dom'

export default class WelcomPage extends Component {
    render() {
        return (
            <div>
                <img src={pic1} className="App-logo" alt="logo" />
                <p>
                    Welcome to p2p-messenger!
                </p>
                <Link className="App-link" to={"/set_att"}>Start New Conversation</Link>
                
            </div>
        )
    }
}
