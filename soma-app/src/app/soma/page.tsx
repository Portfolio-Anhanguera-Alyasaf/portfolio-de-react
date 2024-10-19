"use client";
import { useState } from "react";

const Soma = () => {
    const [numOne, setNumOne] = useState<number>(0);
    const [numTwo, setNumTwo] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const handleSum = () => {
        setResult(numOne + numTwo);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-black">Calculadora de Soma</h1>
            <div className="flex flex-col items-center space-y-4">
                <input
                    type="number"
                    value={numOne}
                    onChange={(e) => setNumOne(Number(e.target.value))}
                    placeholder="Número 1"
                    className="p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    value={numTwo}
                    onChange={(e) => setNumTwo(Number(e.target.value))}
                    placeholder="Número 2"
                    className="p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSum}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Somar
                </button>
                <h2 className="text-2xl mt-4 text-black">Resultado: {result}</h2>
            </div>
        </div>
    );
}

export default Soma;