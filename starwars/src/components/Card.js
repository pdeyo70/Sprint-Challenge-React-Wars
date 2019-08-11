import React from 'react'
import styled from 'styled-components';

const CardStyler = styled.div`
    color: #073964;
    text-shadow: -2px 0px 4px yellow;
    margin: 50px;
    padding: 50px;
    font-size: 150%;
    border: 5px solid #003b6f;
    background-color: rgba(0, 59, 111, 0.6);
    border-radius: 100%;
    max-width: 300px;
    font-family: 'Exo', sans-serif;
`;

export default function Card(props) {

    return (
        <CardStyler>
            <h4 className='name'>{props.char.name}</h4>
            <section className='birthYear'>Born:  {props.char.birth_year}</section>
            <section className='gender'>Gender: {props.char.gender}</section>
            <section className='skinColor'>Complexion: {props.char.skin_color}</section>
            <section className='hairColor'>Hair: {props.char.hair_color}</section>
            <section className='eyeColor'>Eyes: {props.char.eye_color}</section>
        </CardStyler>
    )
}
