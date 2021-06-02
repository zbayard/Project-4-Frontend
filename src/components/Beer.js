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




