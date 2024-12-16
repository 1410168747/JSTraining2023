export const KeyButton = ({ text }) => {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        margin: "5px",
        fontSize: "20px",
        borderRadius: "5px",
        border: "1px solid #000",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default KeyButton;
