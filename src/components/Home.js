import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
export class Home extends Component {
    state = {
        allData: [],
        err: ""

    }

    componentDidCatch = () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/allDrinks`

        axios.get(url).then(response => {
            this.setState({ allData: response.data.data })
        }).catch(err => {
            this.setState({
                err: err.message
            })
        })
    }

    addFav = (i) => {
        const url = `${process.env.REACT_APP_SERVER_URL}/readFav`;
        const targetData = this.state.allData[i]
        const bodydata = {
            strDrink: targetData.strDrink,
            strDrinkThumb: targetData.strDrinkThumb,
            idDrink: targetData.idDrink
        }

        axios.get(url, bodydata).then(response => {
            this.setState({
                allData: response.data.allData[i]
            })
        }).catch(err => {
            this.setState({
                err: err.message
            })
        })
    }
    render() {

        return (
            <div>
                {this.state.err ? (<P>{this.state.err}</P>) : (
                    <div>

                        {this.state.allData.map((item, i) => {

                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.strDrinkThumb} />
                                    <Card.Body>
                                        <Card.Title>{item.strDrink}</Card.Title>

                                        <Button variant="primary" onClick={() => this.addFav(i)}>Go somewhere</Button>
                                    </Card.Body>
                                </Card>)
                        }
                        )}
                    </div>
                )
                }
            </div>

        )
    }

}
export default Home
