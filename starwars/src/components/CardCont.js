import React from 'react'
import Card from './Card'
import styled from 'styled-components';

const ContStyler = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function CardCont(props) {
    console.log(props);
    return (

        <ContStyler>
            {props.data.map((char, index) => {
                return <Card char={char} key={index} />
            })}
        </ContStyler>

    )
}
