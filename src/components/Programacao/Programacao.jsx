import React, { useState } from "react"
import Dexter from "./images/dexter.png"
import VacaeFrango from "./images/vaca.png"
import Du from "./images/du.png"
import Coragem from "./images/coragem.png"
import Jorel from "./images/jorel.png"
import Turma from "./images/monica.png"
import Steven from "./images/steven.png"
import Billy from "./images/billy.png"
import * as S from "./estilo.jsx"

function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { hora: "7:00h", nome: "O LABORATÓRIO DE DEXTER", imagem: Dexter, desenhoManha: true },
        { hora: "8:00h", nome: "A VACA E O FRANGO", imagem: VacaeFrango, desenhoManha: true },
        { hora: "9:00h", nome: "DU, DUDU E EDU", imagem: Du, desenhoManha: true },
        { hora: "10:00h", nome: "CORAGEM, O CÃO COVARDE", imagem: Coragem, desenhoManha: true },
        { hora: "11:00h", nome: "IRMÃO DO JOREL", imagem: Jorel, desenhoManha: true },
        { hora: "12:00h", nome: "TURMA DA MÔNICA JOVEM", imagem: Turma, desenhoManha: false },
        { hora: "13:00h", nome: "STEVEN UNIVERSO", imagem: Steven, desenhoManha: false },
        { hora: "14:00h", nome: "BILLY E MANDY", imagem: Billy, desenhoManha: false },
    ])

    const desenhoAntesMeioDia = desenhos.filter((item) => item.desenhoManha === true)

    return (
        <>
            <S.Section>
                {desenhos.map((item) => (
                    <S.Card>
                        <h2>{item.hora}</h2>
                        <h2> {item.nome} </h2>
                        <S.img src={item.imagem} alt="" />
                    </S.Card>
                ))}
            </S.Section>

            <S.Section2>
                <h2>Desenhos da manhã</h2>

                {desenhoAntesMeioDia.map((item) => (
                    <div>
                        <h3> {item.nome} </h3>
                        <h3> {item.hora}  </h3>
                        <S.img src={item.imagem} alt={item.nome} />
                    </div>

                ))}

            </S.Section2>

        </>

    )
}

export default Programacao