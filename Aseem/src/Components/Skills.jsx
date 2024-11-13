import React from "react";
import {FaHtml5} from "react-icons/fa"
import {FaCss3} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {FaBootstrap} from "react-icons/fa"
import {FaJs} from "react-icons/fa"
import {FaJava} from "react-icons/fa"
import {FaPhp} from "react-icons/fa"
import {FaDatabase} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFilePowerpoint} from "react-icons/fa"
import {FaObjectGroup} from "react-icons/fa"
import {FaBusinessTime} from "react-icons/fa"
import {FaPeopleArrows} from "react-icons/fa"
import Dotnet from '../assets/dot-net.svg';
import Dot from '../assets/dot.svg';
import Sql from '../assets/Sqlserver.svg';
import CSharp from '../assets/csharp.svg';
import Tailwind from '../assets/tailwind.svg';
import '../ComponentCss/Animations.css'

const Skills = () => {
  return (
    <div>
      <div className="card-header fs-5 fw-bold" style={{ borderColor: '#2e0f54', color: '#d933ca' }}>
        TECH POWERHOUSE
      </div>

      <div className="SlideInRight card-body">
        <h4 className="card-title" style={{ color: "#d933ca" }}>
          Frontend Skills
        </h4>
        <p className="card-text fs-5 text-light ps-4"><FaHtml5 className='me-2 fs-2 pb-1'/>HTML</p>
        <p className="card-text fs-5 text-light ps-4"><FaCss3 className='me-2 fs-2 pb-1'/> CSS</p>
        <p className="card-text fs-5 text-light ps-4"><img style={{ width: '30px', height: '30px' }} className=" me-2 mb-1" src={Tailwind}/>Tailwind CSS</p>
        <p className="card-text fs-5 text-light ps-4"><FaBootstrap className='me-2 fs-2 pb-1'/>Bootstrap</p>
        <p className="card-text fs-5 text-light ps-4"><FaJs className='me-2 fs-2 pb-1'/>JavaScript</p>
        <p className="card-text fs-5 text-light ps-4"><FaReact className='me-2 fs-2 pb-1'/>React.js</p>
        <h4 className="card-title" style={{ color: "#d933ca" }}>
          Backend Skills
        </h4>
        <p className="card-text fs-5 text-light ps-4"><img style={{ width: '30px', height: '30px' }} className=" me-2 mb-1" src={CSharp}/>C#</p>
        <p className="card-text fs-5 text-light ps-4"><img style={{ width: '30px', height: '30px' }} className=" me-2 mb-1" src={Dotnet}/>ASP.NET Core</p>
        <p className="card-text fs-5 text-light ps-4"><img style={{ width: '30px', height: '30px' }} className=" me-2 mb-1" src={Dot}/>Entity Framework Core</p>
        <h4 className="card-title" style={{ color: "#d933ca" }}>
          Database
        </h4>
        <p className="card-text fs-5 text-light ps-4"><img style={{ width: '30px', height: '30px' }} className=" me-2 mb-1" src={Sql}/>SQL Server</p>
        <h4 className="card-title" style={{ color: "#d933ca" }}>
          Familiar Technologies
        </h4>
        <p className="card-text fs-5 text-light ps-4"><FaPhp className='me-2 fs-1 pb-1'/>PHP</p>
        <p className="card-text fs-5 text-light ps-4"><FaJava className='me-2 fs-1 pb-1'/>Java</p>
        <p className="card-text fs-5 text-light ps-4"><FaDatabase className='me-2 pb-1'/>MySQL</p>
        <h4 className="card-title" style={{ color: "#d933ca" }}>
          ADDITIONAL SKILLS
        </h4>
            <p className="card-text fs-5 text-light ps-4"><FaGithub className='me-2 fs-4 pb-1'/>GIT AND GITHUB</p>
            <p className="card-text fs-5 text-light ps-4"><FaFilePowerpoint className='me-2 fs-4 pb-1'/>POWERPOINT</p>
            <p className="card-text fs-5 text-light ps-4"><FaObjectGroup className='me-2 fs-4 pb-1'/>CANVA</p>
            <p className="card-text fs-5 text-light ps-4"><FaBusinessTime className='me-2 fs-4 pb-1'/>TIME MANAGEMENT</p>
            <p className="card-text fs-5 text-light ps-4"><FaPeopleArrows className='me-2 fs-4 pb-1'/>COMMUNICATION</p>
      </div>
    </div>
  );
};

export default Skills;
