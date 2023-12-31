function Result({ data }) {
  const { fruit, background, color, content } = data;
  return (
    <>
      <img src={`${fruit}.jpeg`} width={100} height={100} alt={fruit} />
      {/* text */}
      <div
        style={{
          marginTop: "10px",
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
      </div>
    </>
  );
}

export default Result;
