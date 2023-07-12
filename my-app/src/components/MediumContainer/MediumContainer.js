import React from "react"
import "./mediumcontainer.css"
import Todolist from "../Todolist/Todolist";
class MediumContainer extends React.Component{
render(){
	return <div className="mediumcontainer">Medium container</div>,
	<Todolist/>
}
}

export default MediumContainer;