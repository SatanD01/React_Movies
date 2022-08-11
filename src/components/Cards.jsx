import Card from "./Card";

const Cards = (props) => {
    const {movies = []} = props

    return (
      <div className={'movies'}>
          {movies.length ? (movies.map((movie) => <Card key={movie.key} {...movie}/>)) : (<h3>Not Found</h3>)}
      </div>
    );
}

export default Cards;