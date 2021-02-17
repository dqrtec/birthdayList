import styles from '../index.module.css';
import React, {useState} from 'react';


function ListDisable(props:any){
        return <div className={styles.list_presents}>
            
            <h3 className={styles.titulo_disponiveis}>
                Lista de Presentes Indisponíveis
            </h3>

            <ul>
                { props.itens.map((i:any) => {
                    return (
                        <li key={i.id} className="list-inline-item"> 
                            <div  className={styles.lista_desabilitada}>
                                <img className={styles.imagem_present_disable} src={ process.env.PUBLIC_URL + './imagens/' + i.nome_imagem } />
                                <div>
                                    <span> {i.descricao}</span> 
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

export default ListDisable