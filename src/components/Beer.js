function Beer({beer}){

    return(
        <div className='Beer'>
            <h4>{beer.name}</h4>
            <p><strong>Style:</strong>  {beer.style}</p>
            <p><strong>ABV:</strong> {beer.abv}% </p>
            <p>{beer.comment}</p>
            <img src={beer.image} alt='pic of beer'></img>
        </div>
    );
};

export default Beer;