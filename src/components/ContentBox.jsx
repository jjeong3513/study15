import React, { useState } from 'react';
import {MdFavorite} from 'react-icons/md'; //react icons 사이트에서 카피 -> 하트모양 가져옴

const ContentBox = () => {
    //좋아요 버튼 클릭하면 'SoSo' #ddd <-> 'Love' #f00 */
        const favList = ['SoSo', 'Love'];
        const favListColor = [
            {color:'#ddd', fontSize:'1.5rem'},
            {color:'#f00', fontSize:'1.5rem'},
        ]
        const [fav,setFav] = useState(0);
        const fncFav = () =>{
            setFav((fav === 0) ? 1 : 0); //index 번호가 0일 때 클릭하면 1의 색상으로 바뀌고, 1일 때는 0의 색상으로 바뀐다
        }

        const [num, setNum] = useState(0);
        const fncIncrement = () =>{
            setNum(num >=3 ? num=3:num+1) //3까지만 증가
        }
    
        const fncDecrement = () =>{
            setNum(num <= 0 ? num=0:num-1 )//0까지만 감소
        }


    /*
    let [fav, setFav] = useState('🤍'); //const로 써주면 에러뜸 (변수를 받아서 사용하기 때문에) 
    const fncFav = () => { 
        fav= (fav === '🤍')? '❤️' : '🤍';
        // setFav((fav==='🤍')?'❤️' : '🤍') -> 이렇게 적으면 const로 써줘도 됨
        setFav(fav) 
     } */
    
    return (
        <div id="contentBox">
            <h2>상품리스트</h2>
            <div className='pd-card'>
                <div className='img'>상품이미지</div>
                <dl>
                    <dt>아이템1</dt>
                    <dd>아이템설명 아이템설명</dd>
                </dl>
                <div className='btn-area'>
                    <button type='button' onClick={fncFav}>좋아요</button>
                    <span style={favListColor[fav]}>{favList[fav]}<MdFavorite /></span>
                </div>
                <div className='btn-area'>
                    <button type='button' onClick={fncIncrement}>+1</button>
                    <button type='button' onClick={fncDecrement}>-1</button>
                    <span>{num}</span>
                </div>
            </div>
        </div>
    );
};

export default ContentBox;