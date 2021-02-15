import styles from '../index.module.css';
import React, {useState} from 'react';

class ListDisable extends React.Component< {},{presentes: any[] } > {
    constructor(props:any){
        super(props);
        this.state = {presentes: [
            {
                nome:"img1.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            },{
                nome:"img2.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            },
            {
                nome:"img3.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            },{
                nome:"img4.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            },
            {
                nome:"img5.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            },{
                nome:"img6.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            },
            {
                nome:"img7.jpg",
                descricao:"Descrição",
                marca: "Marca do produto"
            }
        ]};
    }

    render() {
        return <div className={styles.list_presents}>
            
            <h3 className={styles.titulo_disponiveis}>
                Lista de Presentes Indisponíveis
            </h3>

            <ul>
                { this.state.presentes.map(function(i){
                    return (
                        <li className="list-inline-item"> 
                            <div className={styles.lista_desabilitada}>
                                <img className={styles.imagem_present_disable} src={ process.env.PUBLIC_URL + './imagens/' + i.nome } />
                                <div>
                                    <span>{i.descricao}</span> 
                                    <span> {i.marca} </span><br />
                                </div>
                            </div>    
                        </li>
                    );
                })
                }
            </ul>

        </div>;
    }   
}

export default ListDisable