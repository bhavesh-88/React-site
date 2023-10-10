import React from 'react'
// import { useEffect } from 'react'
const useCustomhook = (count) => {
    return (
        React.useEffect(() => {
            document.title = `Count ${count}`
        },[count])
    )
}

export default useCustomhook
