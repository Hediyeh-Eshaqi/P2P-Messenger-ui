import React, { Component } from 'react'
import "react-chat-elements/dist/main.css"
import { MessageList } from "react-chat-elements"
import { Input } from 'react-chat-elements'
import { SystemMessage } from "react-chat-elements"
import { Button } from 'react-chat-elements'
import axios from 'axios'
export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"",
            dataSource: [
                
            ]
        }
    }
    componentDidMount(){
        this.getMessages();
        this.interval = setInterval(() => this.getMessages(), 1000);
        // this.interval = setInterval(() => this.getMessages(), 10);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
      }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            var tosend = {
                "text":this.state.text
            }
            this.onMessageSend(tosend);
        }
      }
    onButtonClick(){
        var tosend = {
            "text":this.state.text
        }
        this.onMessageSend(tosend);
    }
    onMessageSend = async (tosend) => {
        await axios
            .post("http://127.0.0.1:8000/send/", tosend)
            .then((response) => {
                console.log(response);
                this.setState({text:""})
                // window.location.reload()
                // window.location.replace("/chat");
            })
            .catch((error) => {
                console.log(error);
            },)
    }
    onSendClick(){
        
        var tosend = {
            "text":this.state.text
        }
        this.onMessageSend(tosend);
    }
    

    getMessages = async () => {
        await axios
            .get("http://127.0.0.1:8000/messages")
            .then((response) => {
                console.log(response);
                if (this.state.dataSource!=response.data) {
                    this.setState({dataSource:response.data})
                }
                
            })
            .catch((error) => {
                console.log(error);
            },)
    }

    

    render() {
        return (
            <div className='container-fluid box'>
                <div className='row'>
                    <div style={{ position: "fixed", top: "0%", zIndex: "1000" }}>
                        <div className='row' style={{ backgroundColor: "rgb(41 48 58)", height: "70px" }}>
                            <div className='col-10 justify-content-start d-flex align-items-center'>
                                <h1>☺️</h1>
                            </div>
                            <div className='col-2 justify-content-end d-flex align-items-center'>
                                <div class="dropdown">
                                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className='dropdown-toggle' style={{ backgroundColor: 'transparent', border: "none", color: "white" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/set_att">new Conversation</a></li>
                                        <li><a class="dropdown-item" href="/">back to home</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='chat-boxes' className='row' style={{ height: window.innerHeight - 142, overflow: "scroll", marginTop: "72px" }}>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={this.state.dataSource}
                    />
                </div>
                <div>
                    <div style={{ position: "fixed", bottom: "0%", width: "100%" }}>
                        <div className='row' style={{ backgroundColor: "rgb(41 48 58)", height: "70px" }}>
                            <div className='d-flex align-items-center' style={{ width: "92%" }}>
                                <input
                                    onKeyDown={this._handleKeyDown}
                                    value={this.state.text}
                                    style={{ backgroundColor: "rgb(41 48 58)", width: "100%", border: "none", border: "2px solid #282a2d", borderRadius: "10px", height: "45px", color:"white"}}
                                    placeholder="Type here..."
                                    multiline={true}
                                    onChange={(e)=>this.setState({text:e.target.value})}
                                />
                            </div>
                            <div className='d-flex align-items-center' style={{ width: "8%" }}>
                                <Button text={"Send"} backgroundColor='#364e7f' onClick={() => this.onButtonClick()} title="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
