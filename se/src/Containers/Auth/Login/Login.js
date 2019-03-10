import React, { Component } from 'react'
import Aux from "./../../../HOC/Aux"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class login extends Component {

constructor(props){
    super(props)

    this.state = {
        name = "",
        password = ""
    }
}

  render() {
    return (
      <Aux>
          <container>
          <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>;
          </container>
      </Aux>
    )
  }
}

export default login;
