import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const DelAll = this.props.DelAll

        return (
            <div
                id="Del-All"
                onClick={e => {
                    e.preventDefault()
                    DelAll()
                }}
            >
                Delete All
            </div>
        )
    }
}

export default Footer
