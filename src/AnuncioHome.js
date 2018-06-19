import React from 'react'

// class AnuncioHome extends React.Component {
//     render () {
//       return (
//         <div className="col-lg-4 col-md-6 mb-4">
//         <div className="card h-100">
//             <a href="#"><img className="card-img-top" src="http://placehold.it/200x140" alt="" /></a>
//             <div className="card-body">
//                 <h4 className="card-title">
//                     <a to={`/anuncios/ver/`}>nome</a>
//                 </h4>
//                 <h5>preco</h5>
//                 <p className="card-text">descricao</p>
//             </div>
//         </div>
//     </div>
//       )
//     }
//    }
   
const AnuncioHome = ({anuncio}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={anuncio.foto} alt="Foto" /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a to={`/anuncios/ver/`}>{anuncio.nome}</a>
                    </h4>
                    <h5>{anuncio.preco}</h5>
                    <p className="card-text">{anuncio.descricao}</p>
                </div>
            </div>
        </div>
    )
}

   export default AnuncioHome