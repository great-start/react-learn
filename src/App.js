import React, {useState} from "react";

import './App.css';
import CreateFrom from "./components/Forms/CreateFrom";
import Cars from "./components/Cars/Cars";
import UpdateForm from "./components/Forms/UpdateForm";
import DeleteForm from "./components/Forms/DeleteForm";

function App() {

    const [rerenderCarList, setRerenderCarList] = useState(null);

    return (
        <>
            <div className={'wrap'}>
                <CreateFrom setRerenderCarList2={setRerenderCarList} />
                <UpdateForm setRerenderCarList={setRerenderCarList}/>
                <DeleteForm setRerenderCarList3={setRerenderCarList} rerenderCarList={rerenderCarList}/>
            </div>
            <Cars rerenderCarList={rerenderCarList}/>
        </>
    );

}

export default App;
