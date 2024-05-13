import React, { useState, useRef, useEffect } from 'react'

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)
    const [maxHeight, setMaxHeight] = useState("0px")

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            const contentCurrent = contentRef.current
            setMaxHeight(`${contentCurrent.scrollHeight}px`)
        } else {
            setMaxHeight("0px")
        }
    }, [isOpen, content])

    return (
        <div className="collapse">
            <div onClick={toggleCollapse} className={`collapse__title ${isOpen ? 'open' : ''}`}>
                {title}
                <svg className={`arrow ${isOpen ? 'open' : ''}`} width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M7.19313 1.26415C7.63941 0.817873 8.36416 0.817873 8.81044 1.26415L15.6653 8.119C16.1116 8.56528 16.1116 9.29004 15.6653 9.73632C15.219 10.1826 14.4943 10.1826 14.048 9.73632L8 3.68834L1.95203 9.73275C1.50575 10.179 0.780989 10.179 0.33471 9.73275C-0.111569 9.28647 -0.111569 8.56171 0.33471 8.11543L7.18956 1.26058L7.19313 1.26415Z"/>
                </svg>
            </div>
            <div ref={contentRef} className={`collapse__content ${isOpen ? 'open' : 'closed'}`} style={{ maxHeight }}>
                {content}
            </div>
        </div>
    )
}

export default Collapse
