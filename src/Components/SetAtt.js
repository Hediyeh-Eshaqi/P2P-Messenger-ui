import React, { Component } from 'react'
import "../../src/App.css"
import pic2 from "../Assets/Images/pic2.png"
import pic4 from "../Assets/Images/pic4.png"
import pic5 from "../Assets/Images/pic5.png"
import { Link } from 'react-router-dom'
export default class SetAtt extends Component {
    constructor(props){
        super(props);
        this.state = {
            my_port:"",
            dest_ip:"",
            dest_port:"",
            key_path:"",
            loading:false
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='d-none d-md-block col-md-4 d-flex justify-content-center'>
                       <img src={pic4} width={300}></img> 
                    </div>
                    <div className='col-12 col-md-4'>
                        <div class="mb-3">
                            <label for="inp1" class="form-label" style={{display:"flex", alignItems:"start"}}>my_port</label>
                            <input
                                type="text" 
                                class="form-control" 
                                id="inp1" 
                                placeholder="your port number"
                                value={this.state.value}
                                onChange={(e)=>this.setState({my_port:e.target.value})} 
                            />
                        </div>
                        <div class="mb-3">
                            <label for="inp2" class="form-label" style={{display:"flex", alignItems:"start"}}>dest_ip</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inp2" 
                                placeholder="destination ip"
                                value={this.state.dest_ip}
                                onChange={(e)=>this.setState({dest_ip:e.target.value})}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="inp3" class="form-label" style={{display:"flex", alignItems:"start"}}>dest_port</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inp3" 
                                placeholder="destination port"
                                value={this.state.dest_port}
                                onChange={(e)=>this.setState({dest_port:e.target.value})}
                            />
                        </div>
                        <div class="mb-5">
                            <label for="inp4" class="form-label" style={{display:"flex", alignItems:"start"}}>key_path</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inp4" 
                                placeholder="the path to secret shared key (.txt byte string file)"
                                value={this.state.key_path}
                                onChange={(e)=>this.setState({key_path:e.target.value})}
                            />
                        </div>
                        <Link to={"/chat"}><button className='button1'>{this.state.loading?<div class="lds-dual-ring"></div>:"start"}</button></Link>
                    </div>
                    <div className='d-none d-md-block col-md-4 d-flex justify-content-center'>
                       <img src={pic5} width={300}></img> 
                    </div>
                </div>
            </div>
        )
    }
}
