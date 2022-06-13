import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import {useState} from 'react';
import productData from './../../db//productData.json';
import TabUl from './TabUl';

function Tab(props) {
    const tabData = productData;
    const [dataIndex, setDataIndex] = useState(0); // useState는 초기값이 필요없으면 괄호 안에 null이라도 적어줘야함
    const handleTab = (e, index)=>{
        e.preventDefault(); //기본 기능을 방지함
        setDataIndex(index)
        
    }
    const dataUl = tabData.filter((data,index)=>index === dataIndex)
    return (
        <div className='Tab'>
            <div className='tab-title'>
                {
                    tabData.map((dataItem,index)=><button className={(dataIndex === index) ? "btn active" : "btn"} key={dataItem.id} onClick=
                    {(e)=>{handleTab(e,index)}}>{dataItem.title}</button>)

                }
                {/*
                <button onClick={(e)=>{handleTab(e,0)}}>애플</button>
                <button onClick={(e)=>{handleTab(e,1)}}>삼성</button>
                <button onClick={(e)=>{handleTab(e,2)}}>화훼이</button>
                <button onClick={(e)=>{handleTab(e,3)}}>ms</button> */}
            </div> 
            <div className='tab-body'> 
            {
                dataUl.map((data,index)=><TabUl key={data.id} data={data}/>)
            }
                
            </div>
        </div>
    );
}

export default Tab;