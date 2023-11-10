import '../ProfileImage.css'

const ProfileImage = ({titulo, imagem, descrição, categoria ,descrição2  }) => {
    return(
        <div className='card'>
            <h2 className='titulo'>{titulo}</h2>
            <h3 className='categoria'>{categoria}</h3>
            <img src={imagem} className='imagem'/>
            <p className='descrição'>{descrição}</p>   
            <p className='descrição2'>{descrição2}</p>               
           
        </div>

    )

}

export default ProfileImage
