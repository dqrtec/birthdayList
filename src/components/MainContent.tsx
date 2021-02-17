import styles from '../index.module.css';
import React, { useState,useEffect } from 'react';
import ListEnable from './ListEnable';
import ListDisable from './ListDisable';
import Iitens from './itens';
import axios  from 'axios';

function MainContent(props:any) {

    const removerItem = (id :number)=>{
        console.log(id);
        let newItens = enable.filter( (i)=>{ return i.id!=id } );
        let removedItens = enable.filter( (i)=>{ return i.id==id } )[0];
        disable.push(removedItens);
        setdisable( [...disable ] )
        setenable([...newItens])
    }

    useEffect(()=>{
        
    })

    const getEnable = ()=>{
        axios.defaults.headers.common['secret-key'] = "$2b$10$.KZr.cKXKb.6c.se3YiUUu3i6kJRKwlgZsdKZI1XpEsPvq1Gt1bZu";
        axios.get("https://api.jsonbin.io/b/602c39445605851b065e453a").then((response)=>{
            console.log(response.data.itens);
            setenable( response.data.itens );
        })
    }

    const [enable, setenable] = useState([{
            nome_imagem: "img1.jpg",
            nome:"All star",
            descricao:" tenis all stars de cano alto",
            marca: "All Start",
            id:1
        },{
            nome_imagem: "img2.jpg",
            nome:"All star",
            descricao:" tenis all stars de cano alto",
            marca: "All Start",
            id:2
        }])
    const [disable, setdisable ] = useState([{
        nome_imagem: "img5.jpg",
        nome:"All star",
        descricao:" tenis all stars de cano alto",
        marca: "All Start"
    },{
        nome_imagem: "img6.jpg",
        nome:"All star",
        descricao:" tenis all stars de cano alto",
        marca: "All Start"
        },])

        return <div className={styles.titulo_bemvindo}>
            <p>
                Bem Vindo<br /> Esta é minha lista de presentes<br />
            </p>

            <button onClick={getEnable}> chamar requisicao </button>

            <ListEnable itens={enable} removeItem={removerItem}></ListEnable>
            <ListDisable itens={disable}></ListDisable>

        </div>; 
}

export default MainContent