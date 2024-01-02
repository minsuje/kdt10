import "./Introduce.css";

export default function Introduce(props) {
  const { food } = props;
  return (
    <div>
      <p>
        최애 음식은 <span style={{ color: "red" }}>{food}</span>입니다.
      </p>
    </div>
  );
}

Introduce.defaultProps = {
  food: "감자튀김",
};
