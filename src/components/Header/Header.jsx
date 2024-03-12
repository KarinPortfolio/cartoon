import React from "react"
import Cn from "./images/cn.png"
import Jogos from "./images/jogos.png"
import Programacao from "./images/programacao.png"

import * as S from "./estilo.jsx"

function Header(){
    return(
        <S.HeaderEstilo>
            <img src={Cn} alt="" />
            <S.Section>
                <S.Div>
                    <img src={Jogos} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>
                <S.Div>
                    <img src={Programacao} alt="" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>
            </S.Section>
        </S.HeaderEstilo>
    )
}

export default Header