import React, {useState} from "react";

import './App.css';
import CreateFrom from "./components/Forms/CreateFrom";
import Cars from "./components/Cars/Cars";
import UpdateForm from "./components/Forms/UpdateForm";
import DeleteForm from "./components/Forms/DeleteForm";

function App() {

    const [remainingCars, setRemainingCars] = useState(null);
    const [allCars,setAllCars] = useState(null);

    return (
        <>
            <div className={'wrap'}>
                <CreateFrom setAllCars={setAllCars}/>
                <UpdateForm/>
                <DeleteForm setRemainingCars={setRemainingCars}/>
            </div>
            <Cars remainingCars={remainingCars} allCars={allCars}/>
        </>
    );

}

export default App;
