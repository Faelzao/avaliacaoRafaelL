import '../ProfileImage.css'

const Comentario = ({ img, nome, comentario }) => {
    return(
        <div className='card'>

            <img src={img} className='img' />

            <h2 className='nome'>{nome}</h2>

            <p className='comentario'>{comentario}</p>               
           
        </div>

    )

}


export default Comentario