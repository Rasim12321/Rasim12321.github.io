import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import MyList from "./MyList";
import Header from "./Header";
import Main from "./Main";

export default function App6(){
    let continentsSet = new Set()
    const [continents, setContinents] = useState([])
    const [obj, setObj] = useState({})

    useEffect(() => {
        async function a(){
            let obj2 ={}
            let response = await fetch('https://restcountries.com/v3.1/all')
            let data = await response.json()

            //выводим из URL континенты
            await data.forEach(item => continentsSet.add(item.region))
            let continentsArr = Array.from(continentsSet)
            
            //заполняем obj, где ключ - континент, значение - массив стран, входящих в него
            continentsArr.map(item => obj2[item] = [])
            await data.forEach(item => obj2[item.region].push(item.name.common))
            console.log(obj2)

            //перезаписываем state
            setContinents(continentsArr)
            setObj(obj2)
        }
        a()
    }, [])

    return(
        <>
            <Router>
                <Header continents={continents}/>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    {continents.map((item, index) =>  <Route key={index} path={`${item}`} element={<MyList obj={obj[`${item}`]}/>} />)}
                </Routes>
            </Router>
        </>
    )
}





            // const [list, setList] = useState([])

            // let click = (event) => {
            //     event.preventDefault()
            //     let list2 = obj[event.target.getAttribute('name')]
            //     setList(list2)
            // }


            // <div >
            //     {/* <Header  continents={continents}></Header>     */}
            // </div>
            // <div>
            //     <List list={list}></List>
            // </div>
