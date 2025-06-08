import React, { useState } from 'react';
import "./Calculator.css"; // Make sure the path is correct
import Button from './Button';
import Input from './Input';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                const expression = input.replace(/%/g, "/100");
                const evaluatedResult = eval(expression);
                setResult(evaluatedResult);
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else if (value === "⌫") {
            setInput((prev) => prev.slice(0, -1));
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        "C", "⌫", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    return (
        <div className="calculator">
            <Input input={input} result={result} />
            <div className="buttons">
                {buttons.map(button => (
                    <Button key={button} value={button} handleClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
