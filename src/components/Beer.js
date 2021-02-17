import {Item} from 'semantic-ui-react'

function Beer({beer}){

    return(
       
<Item.Group>
    <Item>
      <Item.Image size='tiny' src={beer.image} />
      <Item.Content text align='left'>
        <Item.Header as='a'>{beer.name}</Item.Header>
        <Item.Meta>Style: {beer.style} </Item.Meta>
        <Item.Description>
          ABV: {beer.abv}%
        <Item.Extra>{beer.comment}</Item.Extra>
          
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
    );
};

export default Beer;




{/* <div className='Beer'>
<h4>{beer.name}</h4>
<img src={beer.image} alt='pic of beer'></img>
<p><strong>Style:</strong>  {beer.style}</p>
<p><strong>ABV:</strong> {beer.abv}% </p>
<p>{beer.comment}</p>

</div> */}


// TODO: Fonts, Fix Api Seed(render more breweries), navbar links, fix login,