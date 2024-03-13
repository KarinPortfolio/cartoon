import React, {useState} from "react"
import Scooby from "./images/scooby.png"
import Ben10 from "./images/ben10.png"
import Looney from "./images/looney.png"

//map
import Gumball from "./images/gumball.png"
import Meninas from "./images/meninas.png"
import TomJerry from "./images/tomjerry.png"

import Warner from "./images/warner.png"
import GitHub from "./images/github.png"
import Linkedin from "./images/linkedin.png"
import Programacao from "../Programacao/Programacao.jsx"
import * as S from "./estilo.jsx"


function Main(){

    const [galeria, setGaleria] = useState([
        Gumball,
        Meninas,
        TomJerry
        ])       

        return(
            <main>
                <S.PrimeiraSection>
                    <img src={Scooby} alt="scooby" />
                    <img src={Ben10} alt="ben10" />
                    <img src={Looney} alt="looney" />
                </S.PrimeiraSection>

                <S.SegundaSection>
                    {galeria.map((item)=>(
                        <img src={item} alt="" />
                    ))}
                </S.SegundaSection> 

                 <Programacao />

                <S.TerceiraSection>
                <img src={Warner} alt="" />
                <h2>sobre nós</h2>
                <h2>produtos</h2>
                <h2>personagens</h2>
                <S.img src={GitHub} alt="" />
                <S.img src={Linkedin} alt="" />   
                </S.TerceiraSection>                  
            </main>
        )
}
export default Main