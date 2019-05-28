import React from 'react';
import './App.css';

function getText() {
    return "Kot ma Ale";
}

const SomeWrapper = ({children}) => (
    children
);

class App extends React.Component {
    componentDidMount() {
        this.listElement.addEventListener("click", (event) => {
            console.log(event)
        })
    }

    render() {
        const element2 = <span>Some other text</span>

        const element = (
            <React.Fragment>
                <div>{element2} {getText()}</div>
                <div>{element2} {getText()}</div>
            </React.Fragment>
        );

        return (
            <div className="App">
                <ul ref={(element) => {
                    this.listElement = element;
                }} onClick={(event) => {
                    console.log(event)
                }}>
                    {["element1", "element2"].map((element, index) => (
                        <SomeWrapper key={index}>
                            <li>{element}</li>
                            <li>{element}</li>
                        </SomeWrapper>
                    ))}
                </ul>
                {element}
                <button onClick={() => {
                    this.setState({
                        value: Math.random()
                    })
                }}>click me
                </button>
            </div>
        );
    }
}

export default App;
