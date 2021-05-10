import React from 'react';
import './App.css';
// Componentes do roteamento
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
// Paginas que serao roteadas
import HomeApp from './index';
import Nivers from './home-one.component';
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            myPage: HomeApp // Funcao sendo executada deve ficar no State
        };
    }
    render() {
        return ( <
            div className = "App" >
            <
            button onClick = {
                () => {
                    this.setState({
                        myPage: HomeApp
                    })
                }
            } > Home < /button> <
            button onClick = {
                () => {
                    this.setState({
                        myPage: Nivers
                    })
                }
            } > Nivers < /button>

            {
                /* As paginas sao roteadas aqui */
            } <
            Router >
            <
            Route component = {
                this.state.myPage
            }
            /> < /
            Router > <
            /div>
        );
    }
}
