// Props 사용
// Props : Properties 의 약자
// componenet 와 component 사이에서 값을 전달할 때 사용하는  객체

function Props(props){
    return(
        <article classNmae="article">
            {props.number}
        </article>
    ); 
}

export default Props;