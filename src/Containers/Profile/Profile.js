import React , { Component }  from "react"

class profile extends Component{
    constructor(props){
        super(props)

        this.state = {
            username:this.props.username,
            token:this.props.token
        }
    }



    render() {
        return(
            <h1>{this.state.username}</h1>
        )
    }
}

export default profile