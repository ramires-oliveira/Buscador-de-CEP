import { useState } from 'react';
import { Container, Content, Toggle } from './styles';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from "../../redux/Features/darkModeSlice";

export function ToggleDark() {

  const dispatch = useDispatch();
  const { mode } = useSelector((state: any) => state.darkMode);
  const [isOn, setIsOn] = useState(mode || false);
  
  const handleToggle = () =>{
    setIsOn(!isOn);
    dispatch(toggleDarkMode())
  }

  return (
    <Container>
      <Content>
        <span className='title'>Modo noturno</span>
        <Toggle isOn={isOn}>
          <div className='switch' onClick={handleToggle}>
            <span className='slider'>{isOn ? <BsFillMoonStarsFill /> : <BsFillSunFill />}</span>
            <span className='option'>{isOn ? 'Ativado' : 'Desativado'}</span>
          </div>
        </Toggle>
      </Content>
    </Container>
  );
}
