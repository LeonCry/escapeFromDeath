import React from 'react'
import style from './index.module.scss'
// 只有props改变才更改
export default React.memo(
  function NCroll(props:any) {
    console.log("running...")
      const numbers:number = props.num;
      const numArr = numbers.toString().split('');
      const size = props.size|16;
    return (
      <div className={style.body} style={{fontSize:size+'px',height:size===16?size+2:size-1+'px'}}>
          {
              numArr.map((item:string)=>{
                  return <span style={{width:size/2 + 1 +'px',left:-size/2 + 1 +'px'}}  data-number={item} key={Math.random()}>0123456789</span>
              })
          }
      </div>
    )
  }
)
