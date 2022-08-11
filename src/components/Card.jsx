const Card = (props) => {
    const {Title, Year, Type, Poster, imdbID} = props
    return (
        <div className="col s4" key={imdbID}>
            <div className="card">
                <div className="card-image">
                    {
                        Poster === 'N/A' ? <div style={{backgroundImage:`url(https://via.placeholder.com/300x450?text=${Year})`}}/> :
                            <div style={{backgroundImage:`url(${Poster})`}}/>
                    }
                </div>
                <div className="card-content row">
                    <span className="card-title col s12">{Title}</span>
                    <p className={'col s6'}>{Type}</p>
                    <p className={'col s6'}>{Year}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;