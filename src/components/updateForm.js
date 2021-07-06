import React, { Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

export class updateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateDataForm}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{this.props.objmodal.strDrink}</Form.Label>
                                <Form.Control type="text" placeholder="enter drink name" 
                                defaultValue="this.props.objmodal.strDrink"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{this.props.objmodal.strDrinkThumb}</Form.Label>
                                <Form.Control as="textarea" type="text" placeholder="enter image url" defaultValue="{this.props.objmodal.strDrinkThumb}" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                           update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default updateForm
