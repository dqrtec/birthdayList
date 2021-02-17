import styles from '../index.module.css';

import 'antd/es/modal/style/index.css'
import 'antd/es/modal/style/index'
import 'antd/es/button/style/index'
import 'antd/es/button/style/index.css'

import 'antd/es/button/style/css';
import 'antd/es/modal/style/css';

import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import Iitens from './itens';
const confirm = Modal.confirm;

function ListEnable(props:any) {

    const showConfirm = (id?:number) => {
        confirm({
          title: 'Confirma sua escolha de presente?',
          content: 'Ao clicar em OK, você confirma que deseja ficar responsável pela compra e entrega do presente. Pense bem pois não será possível mudar de escolha após a confirmação',
          onOk() {
            props.removeItem(id);
            return new Promise((resolve, reject) => {
                alert(" Sua Escolha de presente foi confimada! ")
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
    }
    
    return (<>
    <div className={styles.list_presents}>            
        <h3 className={styles.titulo_disponiveis}>
            Lista de Presentes Disponíveis
        </h3>
        <ul>
        { props.itens.map( (i:Iitens) =>{
            return (
            
            <li key={i.id} className="list-inline-item"> 
            <div>
                <img className={styles.imagem_present} src={ process.env.PUBLIC_URL + './imagens/' + i.nome_imagem } />
                <div>
                        <span>{i.nome}</span> <b><span className={styles.tamanho}>Tam:{i.tamanho}</span> </b> <br />
                        <span> {i.marca} </span><br />
                        <Button type="primary" onClick={()=>{showConfirm(i.id)}}>
                            Presentear 
                            <svg style={{marginLeft:10, marginTop:3}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                            </svg>
                        </Button>
                    </div>
            </div>
            </li>);
        }) 
        }
        </ul>

    </div>
    </>);
} 

export default ListEnable