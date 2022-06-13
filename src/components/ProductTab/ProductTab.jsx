import React from 'react';
import ProductList from './ProductList';
import './css/ProductTab.css';
import productData from './../../db/productData.json';
import { useState } from 'react';


function ProductTab() {
    const [num, setNum] = useState(0);
    const tabData = productData;
    const code = productData.filter((data,index)=> index === num ) //index가 일치하는 대상만 return을 시켜줌
    console.log(code)
    const fncTab = (e,index)=>{
        e.preventDefault(); //버튼은 기본값이 submit인데 그것을 막아줌
        setNum(index);
    }
    return (
        <div className='product-tab'>
            <div className='tab-btn'>
                {
                    tabData.map((data,index)=> <button className={num === index ? "btn active" : "btn"} key={data.id} 
                    //index가 일치할때 active, 일치하지 않으면 그냥 btn
                    onClick={(e)=>{fncTab(e,index)}}>{data.brand}</button>)  //index를 클릭하면 num이 업데이팅된다
                } 
            </div>
            <div className='tab-contents'>
                {
                    code.map((data,index) =><ProductList key={data.id} data={data}/>) //code는 productDara.json을 순회한다
                    // data={data}는 데이터 전체를 가져옴
                }
            </div>
        </div>
    );
}

export default ProductTab;