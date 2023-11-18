import React from 'react'

const ChartWrapper = ({ children }: any) => {
    return (
        <div
            style={{
                background: "transparent",
                width: '100%',
                color: "#fff",
                paddingTop: '1rem',
                paddingBottom: '2rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                borderRadius: '4px',
            }}>
            <div style={{ height: '80%', width: '100%' }}>{children}</div>
        </div>
    )
}

export default ChartWrapper
