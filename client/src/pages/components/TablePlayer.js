import React from "react";
import { Table,Button } from "reactstrap";

function TablePlayer({ player,toggle}) {
    return (
        <Table striped>
            <thead>
              <tr>
                <th>NO.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Experience</th>
                <th>Lvl</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {player.data.map( data => {
                    return (  
                    <tr key={data.id}>
                        <th scope="row">{data.id}</th>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.experience}</td>
                        <td>{data.lvl}</td>
                        <td>
                            <Button color="info" onClick={toggle}>
                                Update
                            </Button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TablePlayer;