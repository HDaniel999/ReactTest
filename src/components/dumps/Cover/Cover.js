import React from 'react'
import Proptypes from 'prop-types'
import './Cover.css'
function Cover ({ style, src, children, ...otherParams}) {
    const resultStyle = { ...style, backgroundImage: `url('${src}')`}
    return (
        <div className='Cover' style={resultStyle}>
            {children}
        </div>
    )
}

Cover.defaultProps = {
    style: {

    }
}

//Validar que el src se mando correctamente y es un string, si no manda un error en consola
Cover.propTypes = {
    src: Proptypes.string.isRequired 
}

export default Cover 