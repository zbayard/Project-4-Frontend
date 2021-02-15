function Beer({beer}){

    return(
        <div className='Beer'>
            <h1>{beer.name}</h1>
            <p>{beer.style}</p>
            <p>{beer.abv}</p>
            <img src={beer.image} alt='pic of beer'></img>
        </div>
    );
};

export default Beer;