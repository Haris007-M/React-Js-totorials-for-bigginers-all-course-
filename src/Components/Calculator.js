//calculator in Reactjs


import { useState } from "react";
import React from 'react'
import { InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Calculator() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [total, setTotal] = useState(0);
    function add() {
        setTotal(numberOne + numberTwo);
    }

    return (
        <>
            <h1>Addition function</h1>
            <div className="row">
                <div className="col-6">
                    <InputGroup className="mb-3" id="num1">
                        <Form.Control
                            type="number"
                            placeholder="number1"
                            value={numberOne}
                            onChange={(e) => setNumberOne(+e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="col-6">
                    <InputGroup className="mb-3" id="num2">
                        <Form.Control
                            type="number"
                            placeholder="number2"
                            value={numberTwo}
                            onChange={(e) => setNumberTwo(+e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="col-6">
                    <InputGroup className="mb-3" id="res">
                        <Form.Control placeholder="answer" value={total} />
                    </InputGroup>
                </div>
                <Button variant="dark" onClick={add}>
                    Add
                </Button>
            </div>
        </>
    );
}



