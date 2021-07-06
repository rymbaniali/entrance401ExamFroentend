import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'


export class Fav extends Component {
    state = {
        favData: [],
        objModal: {},
        err: "",
        show: false
    }
    componentDidCatch = () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/readFav`

        axios.get(url).then(response => {
            this.setState({ favData: response.data.data })
        }).catch(err => {
            this.setState({
                err: err.message
            })
        })
    }
    handleModalShow = (i) => {
        this.setState({
            show: true,
            objModal: this.state.favData[i],
        })
    }

    handleClose = () => {
        this.setState(
            {
                show: false
            }
        )
    }

    deletItem = async (req, res) => {
        let name = req.params.name;
        const url = `${process.env.REACT_APP_SERVER_URL}/delete/${name}`
        axios.delete(url).then(response => {
            this.setState({
                favData: response.data
            }).catch(err => {
                this.setState({
                    err: err.message
                })
            })
        })


    }

    updateDataForm = (e) => {
        e.preventDeafult();
        const url= `${process.env.REACT_APP_SERVER_URL}/update`
        axios.put(url).then(response=>{
            this.setState({
                favData: response.data
        });

        let newData = {
            name: e.target.name.value,
            url: e.target.url.value
        }

        newData.save();
        this.handleClose();
    }).catch(err=>{
       this.setState({err:err.message}) 
    })
}

    render() {
        return (
            <div>
                {this.state.err ? (<P>{this.state.err}</P>) : (
                    <div className="contsiner">

                        {this.state.favData.map((item, i) => {

                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.strDrinkThumb} />
                                    <Card.Body>
                                        <Card.Title>{item.strDrink}</Card.Title>
                                        <Button variant="primary" onClick={() => this.deletItem(i)}>Delete</Button>
                                        <Button variant="primary" onClick={() => this.handleModalShow(i)}>Update</Button>
                                    </Card.Body>
                                </Card>)
                        }
                        )}
                    </div>
                )
                }z
                <updateDataForm
                show={this.state.show}
                objModal={this.state.objModal}
                handleClose={this.handleClose}
                updateDataForm={this.updateDataForm}

                />
            </div>

        )
    }

}


export default Fav
