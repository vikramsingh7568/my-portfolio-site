import React from "react";
import "./Projects.css";
import photo from '../Projects/port.png'
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://cdn.dribbble.com/users/4824889/screenshots/15064694/chat-app-icon-logo_4x.jpg"
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Chat App using Socket io</h2>
                <p>
                  World wide there are lot of chatting application's basically this one 
                  is also clone of them. to be a part of chtting aplication's i made this
                  using socket io i made Frontend and backend part of the application.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://github.com/vikramsingh7568/chat-app-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend Code
                    </span>
                  </a>
                  <a
                    href="https://github.com/vikramsingh7568/chat-app-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Backend code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={photo}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>First Portfolio</h2>
                <p>
                  this is my first portfolio dummy website which is designed and deployed by me.
                   this is my first project in react after that i made lot of small projects
                   in react like this portfolio website log in form crud operation full stack site
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      node 
                    </span>
                  </a>
                  <a
                    href="https://github.com/vikramsingh7568/myportfolio/tree/newbranch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAACQFBMVEX////5+fn//v/6+vrz8/P///3b6O4pcKctbaP29vbY6PP9///5+frx8fH///sAAAD5+P38+Pj///dbh63DbW24y9jy8vT6+fXq6uritXDy8u747u4ud7bu3rrfvr3j4+Pt9ffcUU3wq0lJd5yenp6tra38+OdGe6jHXljT09PjpUAVFBYrbqrLysuJiolycnKrq6rBwMDd7NtMrU3KxcDisGTOT0qEhIQze73QY17zrE0uLi03NzfhtXnnp0307dHt1tcPX5efu8xThrLY8fa41+gxbZyRl5Wdo6ienJnd2tK4urXHw8Zua2ywq6Ouqa6uzqxMo01VtFlatGF+x4F9woKP1ZGk3aS35sai2JyCvYhTuVSdyp/D2sZzqHRpa2ZTU1PFf4SXkIbkz53AtahvW0xFJhLzwGzcenjYW1ZwSizerpL/3ciskXubyt56pcHuzH7x25napJzlv6gQXZ9nkbGSveTtuLLOt6w9FgCYdlupinraZWNcOijAlXbqrpXkqmZZSDh7b2hvUEnchoP42K16rdnyxnPclZB1RTmvbF2XfnGLpb3IkpMvGwtJLiaKY1Y5Pj0qJi9qTz0eBQBJQksWEwA5KCW5XWBgPEGvb3mig4XCkGiWa0yfg2tndjmClU+Hk2NkaVaRnnaDjHios52UsFm2xI07PjGonX+Oo2x6lkiTj16wy29TQSq9tYuQo4tWXm/AxeBtdYePlbXKsI//zKvSi3H8v6ykgliIYjpfOhz4u5F6IyWLRj2TVVMTp4CgAAAcAklEQVR4nO1dj2MTVZ5/86thnB+ZRJyZDtVpMYGGNGnmLjTQlq7QXUoTQQ939+5W91QEKVYsFlk5q2WRClVk6YJ74IkKQnHF3XV1EffudP3X7vt9b5KmPyADTKrRfJpOJsnkzbxPvu/73pvvj0faurq2dgEi3xt0LbH3HWNFV9eKNvLgT1uaCICfRUiE6JKiKKSJW0Ei90RIF+F5IklI1/cU0i1fLg90CahaQXhF4RUgbPmw8GQE3yH+Hn3MHQi/KN0jxN8s8f16gyg6uWcF2QpUQROUllmi+QWv6GtKCUg4+5iX4M8/VpDwfQqBHrC8ALm6Zys2QIks889E7HlUwb4t8FrG5YnpEhDwDPtUIppKUqmMBkLPtKmtAmuasrxXC9erU6laAWqdSMup1uGXGYYnT7BTckZ3iUsyJKuRRMYlYjaRIlo20227rgSf5GyS6S65mmZ3k5QopzKq69q5ZbxWH8AW1VUg56Ctlu+80IAShCQz3cOZZCY7RLJZbyghku5cgkiFbpskXELy24aFYS/XbUsk4RS9fKqQzBRKuWSqlH24RJbxYhlAkr4jqlCqEqXunJJMZt1sarvnJRySIgWSKmkJ4nnE29EyrAzn7JKtk4RWfDjf8kiWJHNuKTOc9ZLLd6llfIdUJRJeLpctqbncENlOMvBKJLmhTMYeztrAYqKUd91sVkt0azpJak62YBfcbDLleqnhBDC57PjuqKruwZSbNye4QAW1KD1cYm+QuadlxHdDFfb6WG+JjgUkpEqC0cpSR1Kq6A4epsAwGS5U4vUfFVU6CpbkSwoPI2AcC+CgSqk6jlT4g6PhEF3BwSBOLJbrWiv4rqnCASbUnTG0gCqFHQoMESZaOgqWjofr9b26ytN8LfHd6Ko7wjIN0HWYRUEjxyddob8iRUNRtUzAmbEO8o1USbxSJeRNqhaAZxoCO2lgSi839iZVSyD+T2U4ZK5jblK1BB79l38G4OaJKv3YpGoJPLHz8cd2Pr4T/p+ADrep1m+BR3fu/PnPf/6LXz4GVEkVUppULYFHdz72r0888W///tjOJ2Dg19RVt8ATO3f+4le/+NUvsQHyTbV+KwBVO3c+/vjjSNXcDKpJ1RL49X+U8WuiN6m6FZS4jqYs2MBMde7dJlWLoFBTGp3ZKJLSVOu3gITdHsyWJarRm1TdAhKht84Itj9+Tq8vRZWomfCnaaYpVgPf0BzR1OBzgKbBrgMv6Ef06S4BBTqi6Jj0TA4841kcJ4SSRbhsU8TCNSxdq1mkVt5WMbgUVZogCIZqCaqwEKoM//B2zBBUTsVdlR6lLj70DqDFcBtjJdLCDVVY6jJuH5xgqniZlhC7rW/VpIpTVY5T6bYaQI8I54txnKFylloGB2XChrtbAFVAP0dPik+wE1M5/427LZszcStwMaQq+NdqUmXZ0EJV3kLTfPXpVFnUXdeGJiw5uo2WdGjUKuG4kKhStXaOCLzkWFrMVqAHkgQlDKIQJlyiK+iS7CqKQAJeraDVokoZzj+SdBN2zktlqrhCqkh3MplKllJPku2ZIS/leUk7qagL5e+OIGj8jowOpbtPxYcShVTGK+XsXPvd/wYI1eT01FNqLrU9YSfchBus1NpSpewY3jY0XBjKdW8vQFOrnA6okrq9xHBqe3KYFAqJbPe27FCh2wWqYndfG6CqlNIL3cPJAhlOFBKFoexwtjsTjlgBVVK2+5FhN1HIZroTCRLskmpSJeXzqUwpkfl9t+cpajVVju4RL9+eyOSsnOslShnPyySU0KhKDZUSHkqqZ+aSSa+ULybM0KiycraXSyWSqQQIbECqajZAKyYoAq+QDLTrKhZQqjhJBcXIC5IlQcOXVBymLdL/dwYBuhO4BAkKh84DTVq6bilGKGVb0ANaeLUCTwRQVjpcc6xy2THUIBZX6aiwj6cf1pYqnxyVx466qgcSgKoq4AfhsMSghVfUQsQE07A4AxsI7dwtwTBi1X2rYVlWWSbwbQN79gBSVS6DNj2r3ABleMyjKlzI9aTKUDUuDluLgdXPqgx4OCtmGZWK0jqrMtSXqyVVtnwziNpNPwoBdSxcpYVXcYd8qTJs6adIIfDoE2cY8MMZMn5US6qASjb+NtgXYc8/WuDoV2AyWY/pIv6ECjrFSNQxJkxbsqLLiqS0V4Poa+ag886qKjgxGNXp/iVVyliKKkVUccQpEAudnlW+IoiCTJ+kKuedECHylWJxvhouVY6iPLi2Cg+237++gtY1T3fOwymdp54SNakioizHLN0uFXcV8zAUkckcVUMkK9tOynZDrAgpn9f1Mpptu15So9P68KBIsq5sjrTNIdLyzOoK1q3p7Ojp6ZjD+bjiX1JVGUtRJYniKsvSrd17zj67e4eXcquoKmRyXraUShbkEGtSOW+ulEuWSslkMnyqiLK5rW3t4FoaL9PW1tXyTO/A+r0DA/CgVHW8OtLTs48+OjpWxpkCqE2V7Dig6OI7nht9fr9ju0yq0F1cJslsLldIpoYK4hJXdHdAqUomS14y4eVCbt/QAIGqSOSFsRe2jG0ZGxtEqgYGWg+0vvHGi4yqnvGN09Pj8Jga6eno9N3mg1C1CriKnz47fnB/vopdQZ73zZCx4LpCRVzklZc2tB3a8hugasvP1kZQqnpPrD+w6cUXB3oZVZ0vj4+/PD39MlB1nmeqsiZVvKw5jrPm8H++MnpwoqgL86liDmN1CF5aIKdhdrKSLmIDjAwOgkaHdhhBqlavHjixvnUvtEBKFTTAkVc7R17d+GpPz0o0QpAgap1Rtee1ySPPny3iHeYyVRxPXQvrSxW7XcuHSZWiiDrqqrJOb9tAqeqlD1+tV2n1jo06YyMwVadnjow+V8R78hWqSB1jWyrXRX+FUKnieVPCwUIk4o8VIltbYLDwWzZW+O1vFw4WntaZW1UAqpyiUzx8+ujMwf17nPlUlVEHxsLvKCpQiKhL80ag7VK8aggqSavmDUEthdeDqvVisbjnaProntd3FIFgRpVURVU9Iqeqrmu+o/HdQyEyjL8V3g95BCWix3GUyTQJrbuOlhr6j1FsvHQbVOWPHo1Go0/mS0WfKkmaJ1WNRhU6vPP0stHAh+ZQRddpxCgLQkRHbxqTSZUlG6wHpGr3rmg6HS0US/m4pS9ugHVAHRsgIXc2Yq49B5RtoOoppCqXz+edeJMqciuq8n1poCpf3FGE0WiTqptS5YJUUaq8/K58sUkV4ia6qpgv7k6DVo8mdzwJYuU0qbr5uMpx3GQikcjZVtG1LMlkXV6TqkVUqSbeRxU4VZAdGR0d5B8CVdXDG2nJ3UWoTZVfhgTTzHnfLFNVn9mNjNFrdDglLYyaumsosqTrGGJEQ0IwGkTBoZQk8fA2wVEUPxcxhmMrKdC4yqYOM5rmaKbmmKY250Oj2ejZQ32JFngUhQHb0RiobxL6+IQGU7RNEx2eNFox6osENTNx6+CE1xRxWwZegYYVrGmGKDvNKNTRRvd9R2CLjVJglqEwDYAMgsh8hdBkaYXjBlEpmrNEVa1kLKEjdUvAu5dxRcGNJUiKIdGMINS7EWtvQY1r+1fJ7LedA7MLCbJ4Oy43t1sfTbUM321LCPmnUAWNs+65rxrqmvvnEH/ogXl4iJkKA5hMGZnAMOhzxcBndkagynUl0Po8L4VZE45dl+G4NigPzVAUIVyqLM5Ulc1dNEdXVyQCT5tbnlm3bt3AwOrVsBnAe+t4w6oHb6z3dPSct6g1MIBUiYSHQw0z29+f4w1DVCtUkYSX8TLJh1Ne6NIlaHweXS9SOc/1Uim+9jduo2zVtPTNG6osNnhrr3cAqRpYvW7dms4eZrJBruC50zIMIRhV0FwNg/SfPjZzbJgYahVV2Uwik3xk21CqLlRhZo6St20omSDhKquYyekvbYiMHT8+uHZt21rfYrP3xPoTrQcGVqNU9UxNdW4c6dw4tXEfSpWhxgNTxZPi6TcnHph4TVZUfo6qDNGSdsZLBXTmup3qaELR5EsgUJmUl+JDbYBAVbvyUltkbIyaIV6gFpvVA60HDjyDFpvVVWaI8fEpKlXoGhOsAfICyex5Dag6q2KnyM4oi9ToLKClPsyasOqguy4M3AQ8Qcg/BFClUqkaOz4G2BIpS1Xriy8eGOilVE1PTQNgM9LRs5JSFVBXAVVP7XrzrcmJY6l5VNET+/8hV0crl1mHsn1dRe2loNrndBWCmUx7KqBSpQbUVfQ5+/rvZt48NlNcRFV9INTRaYhToQd8idpqfGy+Z4Ehfh46b6MHBHac/LNnz05MnIxLy0VV3YZsULjJCVverkb7mmcqeCP+wNOnqvGAQP06g1ClkEJftO/1mbfGx3eQZZOqOlJlOXS0TqtMTREkJsTjcUvQ4/FY3Irp0I9JLKsI4Q2iq9gBBpOqRDQa7T/6u9Mnj51TfwBUxQSginp7wsZC508rFlO5GLRM5soHh6A3moGAj6wYZwVrgHIqmk6nn3oHxlVH+5/8AVClqu1Qfw7dP1WDU2PImqxSl9yYwRnoHapaoMgFOl9UDXgTJ1m1qTKEQjQNf3tmJvb0/T7djXMdioalilMrfYY/tMUOrjzx9wc+6vxD1CBSpSJV6ei5mRkQqv6+dLbhpYrj7ujKAzRASlX63NmZk+f6+/r6067vcdqkakmqounXT8+cfCcNVPUV/Eo0qVqCqnS6r//Jc6+/3gdM9fcl/K82qVo8WLBd17VtfFCIfi2aVC26tUcjH9AlXjYMmcM/hh8dVbXDkbC7FDDiU+BiLDKVgd4wxsAb9ggTeCMbg4BuK2L2NiAKGGKM/3hzBU9owQaGVhj3y3H+WTlab8ESDPgPEJBro72kbOmYh9rx0XcDWxbbRTFUS00ZjmhjXUzcc6B6MmzxPKaBEev0E3ZaU2T7/uvagSM0NkTxc9VXHc3sgMotc57eOWReV3ReqYeRUSEymv7Q74zNAzEvJEz/yoDXcxZPnqCVMJgrGi9DcwCSBEHXaVi6PM8Zu14pOUXM+MnXpXSJN3nl0L0Mg3Tbfv+mTZtaW/GxadOaUyvnYZwoAaniSllAoYDb7NBQ1uMqhvhkUkCPf1lY6oruDiJJqRmdZDQMXQm3aF1pV9DDuHK7inkYr163Dp2Mexd5GHfGg1JlZfvPRKO/O/vsO+loFMZVWdWnSiZJkkt68FeH1NSi9HAymy9mk14imQm3aEVql6gz9tq2LsZXF97aw6iR8l3Qffs2dmDUCJpuelbqQalShv5wJnpscnLi9Jkz0f7f92eFClWJVLKUSCWS2Tr4rUuemSyVhpKJUi5sVw+dRkN0vTD2wtihsUOHBmk0xMCJA60vVqIhpkempqbhMTLS03Oe54O5+PNq9g/p/9p/5O+j+0/3Rc/0I1WST5XtEleWRduuR5CboziObduyG3b7ZjE2bZFDL7DAkcG2LhdjbE5Qi0114MgpP3CED+jiL2SjSNXE+OTEuaMwxYEGSLulejsN1S2Jczlya/D4IODewTakCi028LfXN0OMTHVOjYysHBnZ2NFxXleCRW7xUjbal54Z/eDY5OixifSZpxLLRFXdoPAL4wFZ4EjvwEBvb+/qdVZn2a7MHufjrKOv7QsqFKJ9/acnR8dfnpw4eQaoEhqcKiLJ0AOu6FqBiKyIRFZsbrl/oIzegTXne+Zhpc6CiGpTJRXS6eiewwcPHhw9Gz3X9wOQKh0q1T5v/SwS/8kc9FXFh6qxSjECxi4L2TPpvnOnTgFVe6LpNFJFtUgDU4Vh3lgJP9u9TiPQKuEvNKeeUt5Hxz2eBKSK3jB+979PHZx85Z1oup9SxTcyVUTGwBkWEobuUHQ1Ngy0Qu8M6vgIowPs9RR/kQAWEFzbGVsonDkHXL33wOSFyaPRdJQ2wEamSpJgggmUYA51iRJFl6vyF4TCmBpJiVMq6b6EMTbBQiehAZ7pO3Muehao+uBoNArjKl1qZKp0XeZBiHRJJ/SBUoRuswpbwovlKuD9Bb0oXQF7QAJSdSbdnz763IULF95/5eS5AlJFGpiq+vmtMzPEO3veB6omL+w/N6zifYkmVTehKh09+gpSdeHCB9HdhkQbcpOqxVTltncXuod3Hz54GLCru2iwbrVJ1eJEJxymrrLKMByT0ADVJlU3DRyBDkLXK6O0JlW181cZjixzdE+sX4opTPVVx9LvLDlWbU8YWZU5I4Z5sODfUA218lWsTUw2VdyGDM6vDZwyfM5ipkFdFmkKUwF20caFeeM4ui9DbeGzGN1yaswwZMvAS6pFlSo4GovIMWn0iOmnUaS59lQrRhPRhpCzcaF9EkNr6C7Ndqsyf6dQoKqmZfnT5XvYk66v+clP1vjTZXXVQ/Onyypo6CCJeS2HqqiymoKhrGZQLySgighSzIjrfPje2IJmxAXF4nlBUlWeU6mLb1iFGxoNHIlEulbAY0UkshkzDVVQdROGehqvZPIVwL/Kmv3w4ocffnhpdkcp/xFg1mIZjTHbLHnSThVzGbEOVPF5L+G6CTflph6WM6Yn1/5SUBgaRwNHIvDA+JENL1EP497Vvb29flImGl7TU/EwxoCk2oZ4gdvx4dVLH167fOXKRx9d+ejKX5EqjlGVTea8QilVCC25cAUgVfmkt2ubN5zIpZIJN+GlQgsTswwTqGqLDB4ajKwt3wXt7d17YP369Xv9e+sjU537Nm7ct3Hfvp6OzphhBfNb52YvXr148VJfNHru9StXrlwGqmgqSKDKS5ZKiXwqqdVFqjRSynglz3OTXjKTCTGOB3MYv9S2laX6evs3gzSBXG/rgVZqhqAxNuP7ximmp3o6zgtGLBhV1mdXr179+I/vnJ45uWf/J1cuzcoGTaaJugoXdlF4RaiHWgclRef/Cr3pw4fIFGda6OI/9sLxLWNjW7asZdEQe0+c2PTiAT/GZnpknKVFG+noWKnHrEC+oII8e+3Tqx+nT7/5/vjEB59cufzrOaoAMaq36kHVnFMrx4WSZ70MVdUsHc0Qa9uwAUYia7vueQakCdrfwHrfZPrqxp6N+zqxBaIZQg3mNmtZs9euXr187vSbM68c3vXR5cuzsqpyagP7V1mKwykvzbPYVAWOLGWIN4xg4UjWxxcvfvqns6f/c2Zm//5LPwCqYtADKofK/h2+e0drBZviC9074hgMEMRvXf74z1cv/em1s6+demv0k2tIFcc1NFWq6lgWux1cBsZ4+1izRuV1VMIMfMzghRgqmACZsa3Zq59eugZiNTPz5cfXLl97tOGpEhyunQ5qKWIAoR3TY1PgWg7ozleGYMBkJBYocAR0Faiqax//5fTJic+uXrt8qeGpsiyHRoP4CZ2tGE79KusTwC52eFbl4BiNHgm04AGo9T9fu/zZX47N7P/s4qXLl2axhIamSnVUzBNelXweKxRjMIwYLjcTq2TGNvz5ZwC1Hpu9+OnFS7N/PPrB4d2zly5dBqlqdLUOVAlGWW4wjUOsKt06hzQa5cgaA+VKDaarYA547eKlv155as/Mrofvu2/2r7Mcu2fRsFTBuIqGbVe/Z81NxqmIzUUjVbYBpCo+e2V2W+Hzz7s//+KL619cv69FtHCZn8alqm4u/qpV6v7b9et/+/zz61+8/fb169fvsyyjSdWSVJm222Latt3Sbpt2e7stOkwqm1QtpCouGriSGvq+O6vQ292kPauKOWHCrkLVddU1zPuOwu0DSBVdV8LPkEQ7Dmx9qlDvTEOVIJLwyxZELnDJ5QODBI5gEqyqoAsKGlNR58CR71/hNQNH5tLGVXaYBxdmxiZ8XXI9E+o2W8kdF/IZ0G12UZFoQMAEzegbs+hD3r+kqjKWDhzBVRoxSIetAimLvsFRkP2qSOFmjvfPK/lUKRIvCOGvODI/JYUyLyXF4VOnTk3DY5ptH/CXpq7tiibi2nw8vVaexwRyczE2KZKpfDNkAFUeXciEbvgwqeIlUSl7GLPt5hbfDIHJ6Qf8RCfMCoHLaPhL9QSiCiSzuGvXybxuWKDMy0nEZbLdzmaSXiljh1gRUj5vKud6gCGv5OVCFVueyDSLf6SrDZcbadtAzRCrB9ZTB2M/fc4+yhVN+LWSVwJ67YnwQl/zySf73x8tKkAVx5KI44ojuWzSK3h2lquHVNl21st6XhIXvLPCpCoumbyfv+rQ4KHBwbUVi82mAwd849b01MoReEyPvNrTsZLXg0mV4ugKr+/+cnT0xtdfrrFETZ6TKtd1UxmXS9alAcqeDYW7Kbdou0KYVOmKKNHAkd/4gSMbKFWtrSxwhKX66qGpvk69PNXT0ckHXBtCAWnlnS9Hj9y48cbXBx3NFud0FYPG1WtxFqnSv4aqqxTWAI8DDh0/NEZTfa1bvffEiQMnTvh2wKmplVNTUyMjUxspVcEWZ1FkUOv5Dy4cmTx4cHJylV1NFVV3Ol0ZPGywVg69t6KjH3CY0aY8ZvGn8YBsbSTfZMpCIdb5K46UrfCwe17SA665BeXq+58bfXPixuj7k45tayJTsnRcReo3riLlIVWoPGGpiqlTnwWa7LKLJbscYEuzMKp6WArHHva3MujiLOjkbc289dXfnx+98cZBh0pVmao6op7O2NAAScu8FKpKdQpVfWEKVVwqggShyuTj8V2TXx35+/SRGwe1qgbYqFRJujhPZeAQ2qrK76wvEGL08w9GlajrpPjBK0DV9JHnTduWy6P1RqWKSA7yoVQ58cPAsezTj9G3Oq7OwsxbehyzZUuBRusgrVJx/5evffX1jRujh7EHbHSqcMkff8EjhL+cTVmqdBpBIvF8OY4EIyWCreTGm7y0+3/2PPvVVxcuTH6JuqrxqTIJjTti0VqKv4YNzYSNyxYrZfIUuoYNe5sEUusKKf7v/71yBLn60jJtWWzwIDcJQydxGFKhA6mqvOQVzE3P+8ZnPAyaYCCqdCv20HvvH/n6a3h8PTnzXmqVzEKdGpYqHnQVjgaVMhk0FKncIFFt6TR9IzPEsxWngo3Wrfe++eYf//jHVwB4+uabRzgWHtewVNVvHZvY4W+f/vbYu9++C/h25ti7j8TwJlKTqiXUumYahizGTPRNdyzLER3qZ9ykaiFVJm20hA7UFLbSGe01mlQtlb1DgIGYKugCj44Qxlw+Lrk+ebjK2bjqB3JnV16LKswaVwHGW7SHHsfRKBBqUEXYwjv+ooOYHplaaeq3iGlj4BZUMUWFu3XJgdZwWJIqBolNkuqwanBj4qZUVRb5rMPtzsbEzaiq5BxoooybUMUck5mhWr/F139MuDlVLIUFaTbAMm5ClT86p2hSxbDkEJT6y6hbGO5r9/1n2FMdklw2CJY2bmHaAOXBrjb463pQwXvO1PkCtXxdJ2rfayxNFY8rgD/I/EbuVegNMZhE+x/+WHETqgij6tDxSNugoiteC5FEmt2pSdWCW3skIyBVG+493kWpamkhuqgobqopVYvSEtqUqra1TKrUbShVhLflJlWLqJKaumoRKlRVeSxWekCKB9G0IbF3mz0gUKUjIcxYyMvoM2u231cZV5lsXGWasKfyP1YoRAequkic+ulIFZBqM3UTEk6IgaqtIFVNBMFPt5K2rV1bVzRRA5EVkbb/B2VMaHXxd+MaAAAAAElFTkSuQmCC" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>full stack crud website</h2>
                <p>
                  this is full stack crud operation website in which i used react js for Frontend
                  and node js for backend and mongo db for database this is fully working full satack website
                  also used jwt middleware for authentication and authorization
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://github.com/vikramsingh7568/crud-operation-website-full-stack-frontend/tree/Master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend Code
                    </span>
                  </a>
                  <a
                    href="https://github.com/vikramsingh7568/crud-operation-website-full-stack-frontend/tree/server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Backend Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Library management</h2>
                <p>
                 i made book management which is also like library management in which user can register
                 and book a slot for books and after reading the book the can submit the books in the library
                 this project manage all the things which are nesessary for the library management.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://www.npmjs.com/package/node"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for node
                    </span>
                  </a>
                  <a
                    href="https://github.com/vikramsingh7568/project-3-book-management-G-31"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1326994614/photo/summer-interns-this-way.jpg?s=612x612&w=0&k=20&c=xx5FAUKgO-qv9-LzU6-D9jDlcplYd20q31g9xQJ_RQ8="
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2> Internship backend</h2>
                <p>
                  this is Internship project which just like internshala comapnies and student's
                  can came and register their self for their requirement and also get the perfect candidate
                  in this project i used node js as backend and mongo db as a database
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  
                 
                </div>
                <div>
                  <a
                    href="https://www.npmjs.com/package/node"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      node Package url
                    </span>
                  </a>
                  <a
                    href="https://github.com/vikramsingh7568/project-internshipGroup-33/tree/project/internshipGroup33"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBgUFBUYGBgYGRkbGRobGxoYGhgbGxkaGRkbGhsbIS0kGx0qHxsbJTcmKi4xNDQ0GiM6PzoyPy0zNDEBCwsLEA8QHRISHzMjIiEzMTMzPjMzMzMzMzMzMzMzMzMzMzEzMzMzMzUzMTMxNTMzMzEzMTMzMzMzMzMzMzMzM//AABEIAKoBKQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAEQQAAEDAgMEBgcFBQgCAwAAAAEAAhEDIQQSMQUiQVETMmFxgZEGFFKhscHwIzNCktEVU2Ky4QckQ3KCotLxFnM0RML/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EACIRAQEAAgICAgMBAQAAAAAAAAABAhESIQMxQWETUYEUBP/aAAwDAQACEQMRAD8A+zIiIC1sXiW02F7tAWjgLucGi7iALkalbKiq0w4Q4SJafFrg4HzAQatPadIgHNEgGNTcwAMshxJIgAmZBEggrJ20aQmXixg68nE+Ayuk8MrpiCsTsylJOUgnWHOGjswIg2IIEEaAAaCEOzKW8MnWmd43zBzXHXUhzp751QR19q02NDyHQS4Cwadyc1nkcjYXKn9epzAdJvYBxNtSABJbIidJtqs2YZoggaFxFyYLiS7U8zpw4KL9m0pnKbEOG86xaS5sCdASYboJNroM8Nim1BLCTZpuCIzNDgDIsYIMaiRzW2tTDYJlMywEHK1t3OdutsBvErbQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF4vVpbWbNMjtb8Qg2s45he5hzC5dtJTMpIOizDmF5nHMKibSR+HBEEIL3MOYTMOYXzvE7RqU6ppmCwkhpIIIiLTx11K8qUcSajMrJYHNfYSQ5pBbPZK5mUq3Gzt9HleSFW4ekes4QSOrwB59ikNILpG9mHNeqsdQCy2zbCVf8A1P8A5Cg3ukbzHmE6RvtDzC+RB4hRvqCQLT81xydcX2LOOY8wmccx5hfKwQ0LTq1pMDVXkmn1/pG+0PMJnHMea+OM2dUqOHs6lWuAwop2zTmLSBHePBc3OSyOpha+ndK32h5hZZhzC4nD7Eotfn6NmaZzZRM85W/WrU2NMvYD2uA+K0cOmzjmFmuVpNBE2Npmbea6DZ33bfH+YqDYzDmmYc1zwWTV3xc8l/mCZgqNZAJxNrrMmZU0JCaNrmQkhUsImjkusy9VGrDZ3VPf8ks0S7bqIi5dCIiAiIgLU2j92e8fFba1cf1D3j4oKprFK1qNC1cfTJIAJEtdpwyuaf1QbeYKQN7D5FV+GbBV3S6vggrcRs6nU67JPAxccJB4FbVGmGgTwgT7lOVkE0bVu3Kj6dPp2X6KXPb7bI3x3xcdoWzhsaypES0mRDmltxqL2JEG3ZKzxtMuZAGaHMJbbeDXBxF7TAVdhcO4OcxoPR5qb2ucC0tyneaQ4AndY0Ajgb8SQtixa233RhKx5Un/AMhW5C0/SBoOErg6GlUB/IUHxfE7SyiwJJMAAST3Bb2AwufecHtOu+I8bWVfQxTqNTKWgtnUtLZ7iukbTq1WEECmx1pNuyw1dqs2krbwmzmkSYI4wf0WxTwVImGNuLk3v2LT2ZsQ0GRnLWEiXvnjYQySR3nyXT4bZbaYkGZiXTJPI8o7lZEyymlbXoOawhthFzMQOK5vH+lFCm7cpudkygGYEtPOF2uOwbajCxznBrhBDYE3nUiy5HaXoZTa1zqcB2UiX74E6nesD2xZZ547uzx+fCdVgfSWli4bUD6cG2QjU851CkqbBY7Su0NPMb3lK5vAYToHugtqP0a0NzBoGrnC4nl9RuvZXqGSx5PJrHeUALPe729Wprrp09PGUqRDelAItfN48IXa7Ariph2PDg6c28LTD3D5L5U/0bxIbm6N3OLE+QMr6R6EUnNwVJrgQQakgiCPtX8Ct8Ld9vP5JNdMAVkCocyyD16HmTArMFQh69DkE0pKjzJmQ2kleSsMyxLkGZcrHZh3T3/JVRcrPZR3Xd/yCmXpcfawREXDsREQEREBa2N6h8Pitla2N6h8Pig0GqHEi7f9Q82k/JTNWGI/Cb2eJi9oI+aDVovE6jzVsx4yG/A/BcvTY4Hqu8ir7C1Rli/kUHEYvaNahiWvzPeA4hzS49VxEEZgZHYIiJuLDvsJiszZII8r8QQQYXJ+leDmn0jbOZBB/wClY+jOONWiwkjNAB7/AAWclmX1W1ymWPfuOkzJnUQNlg960Yp+kC1fSFubCVxu3o1BvSW3YetHBaOJxUFb21t7CVNb0Xaa3Yg+a7HwdJ7S4Vmsc0mejqF7IBi4eCAZndBJtwVlW2kyn92C9/tvufAaBVVHAgOc4CM1zFhJ1MdpU2JoZWEjs+IlZXL9O8cd3S0BGIpl7KjiTbeJgPGoc2bHMDYAWPitbZXpDUYTRFO7RJzzDOxpHWB5W+SpsVhXtqmpTrZGPyl7JBzw0w7LHWmOVl0WDr0qgDSZPA6O7bp+SXXTv/PZb3uNbHbdrucWsLW88rePHrEwtals12Ig1a7G3Bh7i51jOhMR2SvcVRyOIP8A2oC1TbH8UmW66bA+jWHpjdkuJlzg6J7IFgOxXTGBogWC4BlR7Oo9ze4kLbo7cxLSAHZ5MAEA++xVx4y700ytvuu3Vngfux4/Eqko1iWiYBgTGk8Y7FdYA/Zt8f5itWblX4kNYXuLQ1oJeSeqAJOg1HJQ1NsUW0xVdUAY7Q3v2ARM9i5LHek1CmTTpseWknM5xp1mkka7z3ZgYEtlveo8XtWhjMlEZQGmW2NFjy7VouejeDoTLXEkWJBGu2WnW7P27QrSKdQEt1BsferD1gDivkm19nNwtUsOJjJvN3KmcS6Q2zcgMSZDoJHDgxPpHWqVh0bHNDbMpiS60kF5/E/ifLRNmn2BlaQs+kXzqn6atgTTLHgw4AnKTx3dW3XS4LbLXZQ4wXnK08C72Z59ih2v+kXheqD/AMgpXl4s8sNx1h3HTtWu/wBJaY0dImCRoJ0kpLLNwu5dV0herjYjpY7/ADfILjsNtanUEse13cbjvHBdV6NOljv83/5CZTpcb2ukRFm0EREBERAWvjOofD4rYUdWmHCCgqwsgVt+pN5n3J6mOZ9yDVyhZLZGEHM+5ZeqjmUFDtukHUnj+ErlvRKq4NfYQIa3mcpJJPi6y+g4jZzXggk3EcP0VNgvQ+lSJIqVDPMt+TUFpnkTzC1q71v08CA0NzOMCOErF+zWn8Tvd+iDl8dUuulxgnCu/wDUf5FBV9H6btXv/wBv6KxqYcOpmnJgtyzxiI80HAMYsauF6Rrm8wRPKQutHo3S9up5t/4qWnsKm3Rzv9v6Lji62+QYnA1Kbsr5nvkEcwVngMQabw43jgvrlTYFJ3Wk9+U/ELSrehuFdwcP8pA90QuL4/02nlny5entejVbFRsd+o7oXjtnsdenU8HfqP0V4f7P8NMipXHc5n/BbFH0Npt0rViO0s/4LnhktzwvtyVXZ9Rv4Z7Wmf6qz2Rs7LFR4vwB4D9V0zPRxg/xKnm3/ipRsJntv/2/8V1jjZ8M7x+KqsS2WwFebCaRQYD/ABfzOUY2K323/wC39Fu4agGMDQSYm51uSeHetZtxdfD5H/4I0f8A2HGH5iG0/wALho1uZzSZi8REzPDfo+jDKdRzmZXhrd2m9gDRUyD7Quymm063DY0HAg/QKWxabGhjJa0CAGhrQO4NAA8Fqu9GaRe57nvcXCCCQRFxAkS0X0BE8ZWm4y1XyCpgKj7YljgHANZVp1Kb8mQEAPAMPbe5ERE2us8NsBoYKmHxLGMcC1zqjDTdMlpyOgiDMbpm2pX1yj6LYZlJtFrT0bZhkyJJmSdSdeN5VZi/QGg92anXxNC3VpVMjZtcCLfNTa6cxsfZtCk5mWkKtVubNUZAY0k8C914u3gdbcFhtVrsLTqZKhZIc4Co6m+7i6TTgh7TvG+8NYC7Cn6GMaGZcTXDmWLyKTnPHJ7nsJPgQqjEf2V4ao5z6mJxT3u6z3Oplx/2aBMrLNGMsy2+ebMw1TEOfTa+k3cLs9TLu3DSWkmziS299O5XGE9BsY2T0jMjyC6myoZcAZEOcyDGonzGq6ih/ZJg2melrnsJp/Ji6HYvoozDOe4Vqr84a2HluVjWAhrWta0AAAws/HjMJqNPNnfJlbrT5NtT0dxdBxcGF7CAN0Oq1ABEummIp3Jje0sZuu//ALJK1V2GrCrmzNrZRmBBA6NhvPaSui2psF1ZuVuJrURxNPIHH/U9ri3/AEwU9GPR1mBY9jKlWpnfnc6oQ505Wt1AE2aNbru1xIvURFFEREBERAREQcttLE48Vnimw9GCMhDGOBGUTJLgetK1fW9px1HTB/BTiYMRvc4V7icdVZUyilnZmaJaHSAW1HEzcGC1o4dcaKN+1amSm8YeoM+YvaQS5gBytnKDcuLTB/CHHUQbtNN3ZbqppMNYRULd8WsfCy3VT1dqPaY6CoR7QBicjXm0TEuy97XWtBhbt4udlFGpIDC5pa6W55jMAJaBBJsbDSbKKvkVC7bbwSTQeGtc1pkEOOYWyyACZLWxzkAm07Nfab21MgoPcJIzjq2ax0kxpL4n+F3JBaoqVm2XkD+7VeqHRlM7xgDSJuJva/AStjBY91R+U0qjN0ulwtZ0ZbWDogwe2JglBZIiIKfaNXEB4FMHLlFw1rt6TIuRwWp0+Mjqmf8AKyPPN3Lfx+KqsewMYHNcL2Nj0lNnWFhaoXaaUz4Qu2s80y9uHqZswDWOEFwjMTacu6HRNpLedsL4bbbuz+ubPtZYMuNNpeIdlGYdsXU6qTtJ4y/Yvdmc8SARAa54aSCJu1s97m85Ws70gNh0FTMQ12XKcxBdDoaQLga8iRqFtOpp06BFR19sVAYbQeYLJJDg0h2pDnNAgcz4wpf2q4hjm0ajm1AwgxEB+YguB0gMuDcF7RxtRboqRu2XkD+7VZLc0QfaLcsxZ1pgxu3nQGbD7Uc9waaFRoJADnC12ZrgXHK9u2bILVERBWbUfWGXoROuawPARqtI1sXwB7N1nh+JWO0Kr2hpYM0uIdul0AMc7gbXaB/qHjq09pvLXk0HhzGkgRZzgS3K20wTEGNJmOPlz/57nlcuVn1L01w8sxkmpf43dnOqGmDVEPvItzMadkLaVRS2nULZNB0mo1mWCImm1znEkdUOzNnQwFrV/SEtbPq9UEgZQ5pBJc7IGxxdMOgHq8QbL0YY8ZJvev2zt3bfTokVFitsVGg5MO8utG6+LvLTMN1AEmDxGoupv2o4sL20Xuhz2wObDlcRbTPIniGkibLpFuipHbZeJnDVdHEWk7rssEAam8RM2vBkZfth0ker1YAuS0xIfkcAIl0EOMgGRlIkOBQXKIiAiIgIiICIiAiIgqcRjK7XuDaGZgc0B2cyQW5nPy5dGm0CSeCw9exMt/u0AlwcM4MQ3MCCBeerHOeAvYPxlNrwwvAe7Rs3Mf8AY8wtlBQ/tTEOpZ6eHlxzADNIBAb2DNcuvYHIRMkJT2nXJdGHsHlpOY2ADN6Msmzi6LHhciFfIgp24rEuDh0Qa4HddctI6QtFjEnJDrHymFiMfiTlHqwElkzUs0OZmcerfK6W/wCkm0ibpEFPUx2I3Iw5ghrn73VzMcS2wklrheBxbEkkCKjtHFZRmw29lE7xAzZWkizTAkuOp6sakA3qIIMLVLmNc5paSBLTq0xcKdEQV2NxVZrgKdHON2Tmym5dMCCLBo1I6wWs3H4klo9WjeEkvtlJe0HSQRlDiCLB7dSTlscRjKbCA97WlxAAJ1J0Wygo6O1azg/+7HMwM3M/FxfLS7LEgNabT1xMQVizaWJzZfV8xBAO9l3TMO0MXBbGlpmFfIgqMPi67n5X0QGumHDNugU2EZgReXF7eBsLEXUVHHYrKwPw4LyGhxDi1oJOVzogwBYxJMOETBi8RBVeuYgsYeghzs2YZwcmV0N1AzZhfhC12bSxV5w34SRvkXzEBnV5AbxjrTEAkXqINTBV3PBzsLCCRBuDcgEG06cgttEQaWPr1GgdHTDyTeXZYGZonQzYk+C0jtDEnTDEbxE5wYaCLkRckHhaxvZWWKxTKbS6o4NaOJMKVjgRIMg8UFPS2nWLix2HhwpveAHkyWuDWtnLAzdt7Gx1UVTaeJDo9XmXjKJPV6OXOO7NnTwnQRJE9AiCnbjsRnE0N0uDTBJLd8gumIIy5XRbU3JELH13EtzTQD95wbDsu7ne1toP4GtdM3zcLK6RBVMxdctk0ADnywHzuklofdotIaSPZJ1Ig61PaOK/Fhvw+1EOGa0gGcwynkNJJsr5EFfgcU95IfSLIAIMyDIBIkgXBP0QQLBEQEREBERAREQEREFBj/RxlZ7nvc6HREEhzOpmDXA2B6Nvv4GFdPpg89I8F4+qQYDSe5edMfZPH3R+vuKDH1UcS46/iMXBGncUbhQPxP8AzO7Tz7V70zr7juzS6CqYO6f1vH9UGfRiAJNu0z5oaY5nSFgap9g6dnLRZGqfZP19e9Bk2mBdSLXNd3sO9yzpVCdWkd6CVERBS7W2I3EPD3OMZcuW8A5ajQ4QQQ6Kjh5cQFYYXCNpsZTBcQxrWgkySGgAZjxMDVSVKhBgNJ008ViKxicruFrTdA9WHN3dmIHkLLwYRo0L/wA7v1XrapP4HC3y0RlVx1YR5ckGbKcCJd4kk+ZToxa5ssBVd7J4/FeisYnKddOKDNtIDmpFr9MfYd8lkyqSYLSO9BMiIgrNq7MFfJLiA10lv4XCWmCOYLQQe8aErPZmzW0KQpNLiAXOkkky97nkAzMAugDgAFuPcRwJ7vD68FH0zvYd7kHjsODeXDucR4218U9UbMy78zuUc+weS9FU23He6318l4KrvYOvZzgfr4cUGdKnl4uM8yT8dF70Q0k+awNY+yezt1RtY33SI9/NBIaQPNSLW6Y+w764/V16yq4m7SNP6+CDYREQEREBERAREQEREGrUa6SQ8AC8QLWMzf6hMrtOkE8LD9VjVyyZY4nmBrbv+oXkNv8AZu8tefFBIA6xLxHEQINr3XgDh+MR3C8i1yfFYbp/w3WEiRF7+RXgykn7N1hyjjprreUEpY7i8flHgsQHW+0Hk2/1dYOycabvy8uFj9QvDl/dOtpb+tuBQSOa6I6QCJ4DSB8PmpWOgbzge2wUIDZcMh48LO008lizJH3bhpbL9ckG8iwp6C0WFuXYs0EFVriYa/LbSAfFRgOt9oPIXPmvcQGzvMLu0CeYj3nzUbct4pu0m416x1n6zIJMjj/icToB4T7166ZkPAHcDz7fqFGMpgdGYkcPAErzdJA6MzHLSbnvvHl2IJcrvbETyGk6eVlhDv3o15N7o8144NIg03WkRHbwg+KxOT907n1eNhz+oQTEO/eC8RYdvx+S9omNXh03Gg1UbQ2RuEcJjSecfXksRkn7t3ZuoNxrgbi6yUVCMtgRrY66qVBBWBMAOy68AZ81HDv3g48B4ceSkrgWlpPdwWuzKYim65FyNNDOtuHkglLHXGflwE8fmR5JDrQ8WABsDe19eR+CjBbH3RvYiPHxEhHZRbI7UxA17fHKgkyuOlQRbQDkP+/FHB14qAa8GwFgWtu3o3RPKQdRa/afMrw5Y+7cfDw5zogkIdB+0HG8CyyZIN3g62gBQ7tvs3RJ4XGgkiePyQhgJ+zOovl48+5BuNcDoQVktfDEQYaWidCI4Az9clsICIiAiIgIiICIiCBzXyYcALQIWJZU4OHl2D5z9aeuD5MZSOEyI8l7v/w+9VNvMr/aGo4cLymWp7TePDyUrJi8T2aLNRUGR8dYeXf/AE8l7Ta6d4gi/CONlMiAiIgIiIIKrXk7rgBHKVjkf7Q7bdp05WjyWdTPO7ljtn5LD7T+Dt17I+fuVTZlqX3m6WtxXpa/2h5fX1yUlPN+KPCfmpFFQBr/AGh5fX17jWPkS4Ecba2j43U6ICIiAiIgiqNcYykDnaZssMr/AGh5fX15LOpm/DHjxWH2l+r2a9v9PeqmwNfPWHkvMtT2m6HhxvF/LyUlPN+LL4T8/BSqKgDX+0PJeBj7bw7bdpPwgLYRAREQEREBERAREQEREBRvqBolxAHM2Ui0dr/dnvb8UE3rlP22+YT1un7bfMLnGqRqDoPWaftt8wvHYumNXtHeQqVqVdEF0cXTGr2+YWBx9K32jLkAbwuSYAHaSuQwrjlqX0cQOwchyVXWeekp3P3lPj/EpB9K6ZvMeadM3mPNVbPvHf5QfGHXUrlRvdOz2h5pUqNa0uJAaBJJMADWSeSrHKbbH/xKv/qf/IUGf7Yw376n+dv6rz9s4b99T/O39V8yasTqFztdPqA2vhz/AIzPzBDtfDj/ABqf52/qvnNPQdwWtidU2afTHbbwo1r0vzt/VZs2th3XbWpnue0/NfGsR1h3q42Jq7vZ/KU36JPb6Qzb+ELsgxFIumMoe2Z5ROq3Riqftt8wuPwrBOg1VmeqV0i89bp+23zCla8ESDI5hcvR/T4Lodnfdt8fiVBsZhzTMOa10VGxmHNMw5qFEE2Yc0zDmtCu45hfmpaPVHj8UG1mHNMw5qFEE2Yc16CoFJSQSIiICIiD/9k="
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Blog Management</h2>
                <p>
                 this is blog management project in which i write bakcend code using node js and mongo db
                 this is simple blogging website in which user can write their blogs on any topic .
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://www.npmjs.com/package/node"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      node Package url
                    </span>
                  </a>
                  <a
                    href="https://github.com/vikramsingh7568/mini-blog-project/tree/project/blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
