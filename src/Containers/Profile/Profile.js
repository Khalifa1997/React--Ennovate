import React , { Component }  from "react"
import { connect } from "react-redux";


class profile extends Component{
    constructor(props){
        super(props)

        // this.state = {
        //     username:this.props.username,
        //     token:this.props.token
        // }
    }



    render() {
        return(
            <h1>MAR7ABBAAAAA {this.props.auth.user.email}</h1>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  

export default connect(
    mapStateToProps
  )(profile)