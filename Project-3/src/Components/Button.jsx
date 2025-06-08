import "./Calculator.css";

const Button = ({ value, handleClick }) => {
    const getClass = () => {
        if (value === "=") return "button equals";
        if (value === "C") return "button clear";
        if (value === "⌫") return "button backspace";
        if (["/", "*", "-", "+", "%"].includes(value)) return "button operator";
        if (value === "0") return "button number zero";
        return "button number";
    };

    return (
        <button className={getClass()} onClick={() => handleClick(value)}>
            {value}
        </button>
    );
};

export default Button;
