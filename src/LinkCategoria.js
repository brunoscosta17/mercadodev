import React from 'react'

// class LinkCategoria extends React.Component {
//     render() {
//         return (
//             <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
//                 <i className={`fa fa-car fa-4x`} aria-hidden="true"></i><br />
//                 {this.props.categoria.categoria}
//             </a>
//         )
//     }
// }

const LinkCategoria = ({categoria}) => {
    return(
        <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${categoria.icon} fa-4x`} aria-hidden="true"></i><br />
            {categoria.categoria}
        </a>
    )
}

// const LinkCategoria = (props) => {
//     return(
//         <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
//             <i className={`fa fa-car fa-4x`} aria-hidden="true"></i><br />
//             {props.categoria.categoria}
//         </a>
//     )
// }

export default LinkCategoria