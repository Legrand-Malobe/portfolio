import './skill.scss';
import reactIcon from '../../../assets/svg/stack/react.svg';
import typescriptIcon from '../../../assets/svg/stack/typescript.svg';
import nodejsIcon from '../../../assets/svg/stack/nodejs.svg';
import nestjsIcon from '../../../assets/svg/stack/nestjs.svg';
import postgresqlIcon from '../../../assets/svg/stack/postgresql.svg';
import sassIcon from '../../../assets/svg/stack/sass.svg';
import javascriptIcon from '../../../assets/svg/stack/javascript.svg';
import htmlIcon from '../../../assets/svg/stack/html.svg';
import mysqlIcon from '../../../assets/svg/stack/mysql.svg';
import { useRef, useState, useEffect, type CSSProperties } from 'react';
import { triggerAnimation } from '../../../utils/triggerAnimation';
import type { SkillType } from '../../../types/sectionTypes';

export default function Skill() {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const skillsList: SkillType[] = [
    { id: 0, icon: reactIcon, name: 'React', color: 'rgba(0, 216, 255, 0.75)' },
    { id: 1, icon: typescriptIcon, name: 'TypeScript', color: 'rgba(49, 120, 198, 0.75)' },
    { id: 2, icon: nodejsIcon, name: 'Node.js', color: 'rgba(140, 200, 75, 0.75)' },
    { id: 3, icon: nestjsIcon, name: 'NestJs', color: 'rgba(234, 40, 69, 0.75)' },
    { id: 4, icon: postgresqlIcon, name: 'PostgreSql', color: 'rgba(51, 103, 145, 0.75)' },
    { id: 5, icon: javascriptIcon, name: 'JavaScript', color: 'rgba(247, 223, 30, 0.75)' },
    { id: 6, icon: mysqlIcon, name: 'MySql', color: 'rgba(93, 135, 161, 0.75)' },
    { id: 7, icon: sassIcon, name: 'Sass', color: 'rgba(140, 200, 75, 0.75)' },
    { id: 8, icon: htmlIcon, name: 'HTML', color: 'rgba(241, 101, 41, 0.75)' },
  ]

  useEffect(() => {
    triggerAnimation(containerRef, setIsVisible, windowWidth, setWindowWidth);
  }, []);

  const skillStyle = (color?: string) => {
    const imgStyle: CSSProperties = {
      boxShadow: `0px 0px 30px 13px ${color}`,
      background: 'transparent',
      height: '3px',
      aspectRatio: '1',
      position: 'absolute',
      zIndex: '0'
    }

    return imgStyle;
  }


  return (
    <div className="skill-container" id="skills">
      <div className="title">
        Skills
      </div>
      <div className={`skill-content ${isVisible ? 'slide-in' : 'hidden'}`} ref={containerRef}>
        {skillsList.map((skill, index) => (
          <div key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1rem'
            }}>
            <div className="skill-wrapper"
              key={index}
              style={{ animationDuration: `${index * 1}s` }}
            >
              <img src={skill.icon} alt="" />
              <div style={skillStyle(skill?.color)}></div>
            </div>
            <div className="label">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}