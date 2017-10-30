/* eslint-disable react/no-unescaped-entities */

import css from './about.css'
import React, { Component } from 'react'

export default class MyComponent extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.iv = setInterval(() => {
            let { count } = this.state
            count += 1
            this.setState({
                count
            })
        }, 1e3)
    }
    componentWillUnmount() {
        clearInterval(this.iv)
    }
    render() {
        return (
            <div className={css.about} styleName="css.about">
                <h1>This is what we're all about.</h1>
                <h2>Count: {this.state.count}</h2>
                <p>
                    React, static sites, performance, speed. It's the stuff that
                    makes us tick.
                </p>
            </div>
        )
    }
}

// export default () => (
//     <div>
//         <h1>This is what we're all about.</h1>
//         <p>
//             React, static sites, performance, speed. It's the stuff that makes
//             us tick.
//         </p>
//     </div>
// )
