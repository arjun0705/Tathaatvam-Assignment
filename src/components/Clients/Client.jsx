import React from 'react'
import "./client.css"

const Client = () => {

    const data = [
        {
            clientName: "Walmart Inc."
        },
        {
            clientName: "China Petroleum & Chemical Corp"
        },
        {
            clientName: "Reliance Industries."
        },
        {
            clientName: "China Petroleum & Chemical Corp"
        },
        {
            clientName: "Walmart Inc."
        },
        {
            clientName: "China Petroleum & Chemical Corp"
        },
        {
            clientName: "Walmart Inc."
        },
        {
            clientName: "China Petroleum & Chemical Corp"
        },
        {
            clientName: "Walmart Inc."
        },
        {
            clientName: "China Petroleum & Chemical Corp"
        },
    ]

    return (
        <>
            <h3 className='heading'>TOP 12 CLIENTS</h3>
            <div className='client-container'>

                {
                    data.map((client) =>
                        <div className='client'>
                            {client.clientName}
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Client
