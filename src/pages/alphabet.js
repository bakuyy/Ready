import React from "react";
import styled from 'styled-components';
import "./alphabet.css"


export default function Alphabet() {

function clickMeA() {
  alert('A')
  alert('/Ay/ but can vary based on different words!')
  alert('Jack uses -ah, Zebra uses -aw, and About uses -uh')
if (window.confirm('If you click "ok" you would be redirected for the letter pronounciation! Cancel will load this website ')) 
{window.location.href='https://drive.google.com/file/d/1H5Qm44Zsyu9IcdDbOlEKMlBAjGzxMpdE/view?usp=sharing'}
}

function clickMeB(){
  alert('B')
  alert('/Bee/ but can vary based on different words!' )
  alert('Boy uses a HARD b, Tube uses a SOFT b, and Tomb uses a SILENT b')
if (window.confirm('If you click "ok" you would be redirected for the letter pronounciation! Cancel will load this website ')) 
{window.location.href='https://drive.google.com/file/d/1kb0Aj2a5yxhm7p98t-H7BzyqRi8ReiT8/view?usp=sharing'}
}

function clickMeC(){
  alert('C')
}
const Button = styled.button`
  background-color: #030042;
  color: white;
  font-size: 20px;
  padding: 15px 60px;
  border-radius: 5px;
  margin: 20px 80px;
  cursor: pointer;
`;
  return (
    <div>
      <div className = 'instructions'>
        <h2> Click on any letter to learn more about it!</h2>
      </div>
      <Button onClick={clickMeA}>
      A     
        </Button>
      <Button onClick={clickMeB}>B</Button>
      <Button onClick ={clickMeC}>C</Button>
      <Button >D</Button>
      <Button >E</Button>
      <Button >F</Button>
      <Button >G</Button>
      <Button >H</Button>
      <Button >I</Button>
      <Button >J</Button>
      <Button >K</Button>
      <Button >L</Button>
      <Button >M</Button>
      <Button >N</Button>
      <Button >O</Button>
      <Button >P</Button>
      <Button >Q</Button>
      <Button >R</Button>
      <Button >S</Button>
      <Button >T</Button>
      <Button >U</Button>
      <Button >V</Button>
      <Button >W</Button>
      <Button >X</Button>
      <Button >Y</Button>    
      <Button >Z</Button>

    </div>
  );
}

