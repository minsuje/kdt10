import "./Introduce.css";

export default function Introduce(props) {
  const { food } = props;
  return <p>최애 음식은 {food}입니다.</p>;
}

Introduce.defaultProps = {
  food: "감자튀김",
};
