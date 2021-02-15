import styles from '../index.module.css';

import 'antd/es/modal/style/index.css'
import 'antd/es/modal/style/index'
import 'antd/es/button/style/index'
import 'antd/es/button/style/index.css'

import 'antd/es/button/style/css';
import 'antd/es/modal/style/css';

import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
const confirm = Modal.confirm;

class ListEnable extends React.Component< {},{presentes: any[] } > {
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
        const showConfirm = () => {
            confirm({
              title: 'Confirma sua escolha de presente?',
              content: 'Ao clicar em OK, você confirma que deseja ficar responsável pela compra e entrega do presente. Pense bem pois não será possível mudar de escolha após a confirmação',
              onOk() {
                return new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
              },
              onCancel() {},
            });
          }
        return <div className={styles.list_presents}>
            
            <h3 className={styles.titulo_disponiveis}>
                Lista de Presentes Disponíveis
            </h3>

            <ul>
                { this.state.presentes.map(function(i){
                    return (
                        <li className="list-inline-item"> 
                            <div>
                                <img className={styles.imagem_present} src={ process.env.PUBLIC_URL + './imagens/' + i.nome } />
                                <div>
                                    <span>{i.descricao}</span> 
                                    <span> {i.marca} </span><br />
                                    {/* <a className="btn btn-primary btn-sm"  > Confirmar Presente</a> */}
                                    <Button type="primary" onClick={showConfirm}>
                                        Confirmar <Icon type="gift" />
                                    </Button>
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

export default ListEnable