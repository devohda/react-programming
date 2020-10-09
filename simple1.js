function LikeButton() {
  const [liked, setLiked] = React.useState(false); //React는 react.development.js가 실행될 때 전역변수로 노출.
  const text = liked ? "좋아요 취소" : "좋아요";

  return React.createElement(
    "button", //html에 해당 태그 생성 <button></button>
    { onClick: () => setLiked(!liked) }, // 태그의 속성값
    text,
  );
}

const domContainer = document.getElementById('root');  
ReactDOM.render( //3개 한꺼번에 render
  React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton),
  ),
  domContainer,
)
