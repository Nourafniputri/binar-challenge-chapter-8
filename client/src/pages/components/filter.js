import React from "react";
import { Input,Button } from "reactstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Filter({ handleChange,filterPlayer,handleFilter}) {
    return (
        <div>
            {/* <Label /> */}
            <div className='d-flex justify-content-center mb-3'>
                <Input 
                    placeholder='Search Player...' 
                    className='searchInput'
                    onChange={handleChange}
                    value={filterPlayer}
                />
                <Button 
                    className='ms-2' 
                    color='primary' 
                    onClick={handleFilter}
                >
                    <FaMagnifyingGlass />
                </Button>
            </div>
          </div>
    )
}

export default Filter;