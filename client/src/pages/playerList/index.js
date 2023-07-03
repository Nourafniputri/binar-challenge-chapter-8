import React, { useState } from 'react';
// import '../../styles/App.css';
import { 
  Container,
  Card,
  CardBody,
  CardTitle,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
 } from "reactstrap";

//  componenet
import Filter from "../components/filter";
import TablePlayer from "../components/TablePlayer";


const contohPlayer = [
  {
    id: 1,
    username: "PussySlayer613",
    email: "pussy.slay3r@gmail.com",
    experience: 600000,
    lvl: 600
  },
  {
    id: 2,
    username: "HardcoreLevellingWarrior",
    email: "hclw@gmail.com",
    experience: 600000,
    lvl: 666
  }
]

function playerList() {
  // ======Search=====
  // data
  const [player,setPlayer] = useState({ data: [...contohPlayer] })
  // filter
  const [filterPlayer, setFilterPlayer] = useState("")
  // handle change
  function handleChange(event) {
    setFilterPlayer(event.target.value);
  }
  // handle filter
  function handleFilter() {
    const newList = player.data.filter((value) => {
      if(value.username === filterPlayer) {
        return value.username === filterPlayer
      }else if(value.email === filterPlayer) {
        return value.email === filterPlayer
      }else if(value.experience === filterPlayer){
        return value.experience === filterPlayer
      }else if(value.lvl === filterPlayer){
        return value.lvl === filterPlayer
      }
    });

    if(filterPlayer !== "") {
      setPlayer({ data: newList })
    }else{
      setPlayer({ data: [...contohPlayer]})
    }
  }

  // ======Modal=======
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Container className='my-3'>
      <Card outline color='dark' className='card'>
        <CardBody>
          <CardTitle className='text-center'>
            <h3><b>PLAYER LIST</b></h3>
          </CardTitle>
          <hr />
          <div>
            <Filter 
              filterPlayer={filterPlayer}
              handleChange={handleChange}
              handleFilter={handleFilter}
            />
          </div>
          <div>
            <TablePlayer 
              player={player}
              toggle={toggle}
            />
          </div> 
          <Button block color='success' onClick={toggle}>
            Add Player
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Player</ModalHeader>
            <ModalBody>
              <div className='mb-1'>
                <Label for='username'><b>Username</b></Label>
                <Input
                  placeholder='Insert Username' 
                  type='text'
                  name='username'
                  id='username'  
                />
              </div>
              <div className='mb-1'>
                <Label for='email'><b>Email</b></Label>
                <Input 
                  placeholder='Insert your Email' 
                  type='text'
                  name='email'
                  id='email'
                />
              </div>
              <div className='mb-1'>
                <Label for='experience'><b>Experience</b></Label>
                <Input 
                  placeholder='Insert your Experience' 
                  type='number'
                  name='experience'
                  id='experience'
                />
              </div>
              <div className='mb-1'>
                <Label for='lvl'><b>Lvl</b></Label>
                <Input 
                  placeholder='Insert your Lvl'
                  type='number'
                  name='lvl'
                  id='lvl' 
                  />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Submit
              </Button>{' '}
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </Container>
  );
}

export default playerList;
    
   