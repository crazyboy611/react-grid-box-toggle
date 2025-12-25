import ReactDOM from 'react-dom'
import React from 'react'
import Box from './Box'
import boxes from './boxes'
import MyForm from './Forms'
export default function App() {
   
    const [box, setMode] = React.useState(boxes)
    
    function toogle(id) {
        setMode(prevBox => {
                return prevBox.map((box) => {
                    return box.id === id ? {...box, on: !box.on} : box
                })
            })   
        }
        // function toogle(id) {
        // setMode(prevBox => {
        //     const newBoxes = []
        //     for(let i = 0; i < boxes.length; i++) {
        //         const currentBox = prevBox[i]
        //         if(currentBox.id == id) {
        //             const updatedBox = {
        //                 ...currentBox,
        //                 on: !currentBox.on
        //             }
        //             newBoxes.push(updatedBox)
        //         } else {
        //             newBoxes.push(currentBox)
        //         }
        //     }
        //     return newBoxes
        // })}
    
    const gridBox = box.map(item => (
         <Box
            key = {item.id}
            on = {item.on}
            toggle = {() => toogle(item.id)}
        />
    ))
    
    return (
        <div>
            <div>
                {gridBox}
            </div>
            <div style={{"margin-top": "100px"}}>
                <MyForm/>
            </div>        
        </div>
        )
}


