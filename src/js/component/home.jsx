import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [active, setActive]= useState("")
	
	const lightDefault = "traffic-light"

	const handleClick = (event) => {
		console.log(event.target.id)
		setActive(event.target.id)
	}
	
	const handleButton = () => {
		// if(purple){
		// 	if(active === "red"){
		// 		setActive("green")
		// 	} else if(active ==="green"){
		// 		setActive("yellow")
		// 	} else if(active === "yellow") {
		// 		setActive("purple")
		// 	} else {
		// 		setActive("red")
		// 	}
		// } else {
		// 	if(active === "red"){
		// 		setActive("green")
		// 	} else if(active ==="green"){
		// 		setActive("yellow")
		// 	} else {
		// 		setActive("red")
		// 	}
		// }
		switch(active){
			
			case "red":
				setActive("green")
			break;
			case "green":
				setActive("yellow")
			break;
			case "yellow":
				if(purple){
					setActive("purple")
				} else {
					setActive("red")
				}
			break;
			case "purple":
				setActive("red")
			break;
			default: setActive("green")
		}
	}

	const [purple, setPurple] = useState(false)
	
	const handleNewColorButton = () => {	
		setPurple(!purple)
	}
	
	return (
		<>
		<div className="text-center traffic-top">
		</div>
			<div className="container">
				<div className={`traffic-light red ${active === "red" ? "active" : "" }`} id="red" onClick={handleClick}></div>
				<div className={`traffic-light yellow ${active === "yellow" ? "active" : "" }`} id="yellow" onClick={handleClick}></div>
				<div className={`traffic-light green ${active === "green" ? "active" : "" }`} id="green" onClick={handleClick}></div>
				{ purple && <div className={`traffic-light purple ${active === "purple" ? "active" : "" }`} id="p" onClick={handleClick}></div>}
			</div>
		<button onClick={handleButton}>Cycle</button>
		<button onClick={handleNewColorButton}>Add a new color</button>
		</>
	);
};

export default Home;
