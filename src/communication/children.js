import React from 'react'

export default function ChildrenComponent(props) {
    return (
        <div>
            <h3>Children</h3>
            {props.children}
        </div>
    )
}
