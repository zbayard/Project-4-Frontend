import {Item} from 'semantic-ui-react'

function Beer({beer}){

    return(
       
<Item.Group>
    <Item>
      <Item.Image size='tiny' src={beer.image} />
      <Item.Content>
        <Item.Header as='a'>{beer.name}</Item.Header>
        <Item.Meta>ABV: {beer.abv}% Style: {beer.style}</Item.Meta>
        <Item.Description>
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