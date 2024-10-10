import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-96">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#2563EB"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </div>
    )
}

export default Spinner
