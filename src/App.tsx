import { Button } from "@mobiscroll/react-lite";
import React from "react";
import { useState } from "react";


function TestObj(props:{val?:number}){
    return (<div>This Is Test {props.val}</div>);
}


const ClickButton = ()=>{
    const [count, setCount] = useState(0);
    const clickHandler = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <Button onClick={clickHandler}>
                Click Me {count}
            </Button>
        </div>
    )
};

export class App extends React.Component{
    private names = ["Peter", "Boss", "Who", "Here"];
    private disNames = this.names.map(n => 
        <div>
            <p>{n}</p>
        </div>
    );

    render(): React.ReactNode {
        return(
            <div>
                <h3>Hello World</h3>
                {true && <div>True</div>}
                {false && <p>False</p>}
                {this.names !== undefined && <div>{this.names}</div>}
                {this.disNames}
                <TestObj val={100}/>
                <TestObj/>
                <ClickButton />
            </div>
        );
    }
}