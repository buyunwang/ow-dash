import React from "react";
import styled, {css} from "styled-components";
import {AppContext} from './AppProvider';

const Bar = styled.div`
    display:grid;
    grid-template-columns:100px 100px 100px 100px;
`

const ControlButtonElem = styled.div`
    cursor:pointer;
    ${props => props.active && css`
        color:orange;
    `
    }
`

function ControlButton({name}){
    return(
        <AppContext.Consumer>
            {({pageName, setPageName}) => (
                <ControlButtonElem 
                active={pageName === name}
                onClick={()=> setPageName(name)}>
                    {name}
                </ControlButtonElem>
            )
            }
        </AppContext.Consumer>
    )
}


export default function() {
    return (
        <div>
            <AppContext.Consumer>
            {({ stages }) => (
                <Bar>
                {stages.map(stage => (       
                    <ControlButton name={stage.name} />     
                ))}
                </Bar>
            )}
            </AppContext.Consumer>
        </div>
    );
}