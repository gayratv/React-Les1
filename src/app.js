import React from 'react';
import CounterClass from './counters/class.js';
import CounterFunction from './counters/function.js';
import  ButtonA from './toogle/toogle.js';

export default function(){
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClass/>
            <h2>Counter as function</h2>
            <CounterFunction/>
            <h2>Button</h2>
            <ButtonA />
        </div>
    );
}