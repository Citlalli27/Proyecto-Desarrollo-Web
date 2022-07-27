import React, {useState} from 'react'
import img1 from "../img/bitcoin.png";
import img2 from "../img/ethereum.png";
import img3 from "../img/binanceusd.png";
import img4 from "../img/xrp.png"

function OpcionesBotones() {

    const [imageClicked, setImageClicked] = useState({
        uno: false,
        dos: false,
        tres: false,
        cuatro: false
      });
    
      const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
          ...prevState,
          [order]: !prevState[order]
        }));
      };

  return (
    <div id="inicio-izq-btn">


        <div class="form-group" className="mx-4">
        <button id="add-btn" onClick={() => onClickHandler("uno")}
        class="btn btn-success" style={{backgroundColor:'#83D95B'}} > Bitcoin</button>
        <button id="add-btn" onClick={() => onClickHandler("dos")}
        class="btn btn-success" style={{backgroundColor:'#83D95B'}} > Ethereum</button>
        <button id="add-btn" onClick={() => onClickHandler("tres")}
        class="btn btn-success" style={{backgroundColor:'#83D95B'}} > Binance USD</button>
        <button id="add-btn" onClick={() => onClickHandler("cuatro")}
        class="btn btn-success" style={{backgroundColor:'#83D95B'}} > XRP</button>
        </div>

        <div id="grafica">
         {imageClicked.uno && <img src={img1} alt="uno" style={{position:'absolute', top:'180px', left:'610px', width:'750px', height:'500px'}}/>}
         {imageClicked.dos && <img src={img2} alt="dos" style={{position:'absolute', top:'180px', left:'610px', width:'750px', height:'500px'}} />}
         {imageClicked.tres && <img src={img3} alt="tres" style={{position:'absolute', top:'180px', left:'610px', width:'750px', height:'500px'}}/>}
         {imageClicked.cuatro && <img src={img4} alt="cuatro" style={{position:'absolute', top:'180px', left:'610px', width:'750px', height:'500px'}} />}
      </div>

        
  </div>

  
  )
}

export default OpcionesBotones