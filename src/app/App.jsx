import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaReact, FaMobileAlt, FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { SiTypescript, SiRecoil, SiReactquery, SiPostgresql, SiDjango, SiScala } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsPuzzle } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiSpring, SiEclipseide } from "react-icons/si";
import minhaFoto from '../assets/images/minhaFoto.jpg'; // Importe a imagem

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import { FaLinux } from "react-icons/fa";
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';

//import images
import Ataa from '../assets/images/Ataa.png';
import Elzero from '../assets/images/Elzero.png';
import Kasper from '../assets/images/Kasper.png';
import Leon from '../assets/images/Leon.png';
import SokoNumber from '../assets/images/SokoNumber.png';
import GlobalShare from '../assets/images/GlobalShare.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
    {
        name: 'Java',
        icon: <BiLogoJava size="25px" color="white" />,
        cssName: "java"
    },
    {
        name: 'Spring',
        icon: <SiSpring size="25px" color="white" />,
        cssName: "spring"
    },
    {
        name: 'Eclipse',
        icon: <SiEclipseide size="25px" color="white" />,
        cssName: "eclipse"
    },
	{
        name: 'Linux',
        icon: <FaLinux size="25px" color="white" />,
        cssName: "linux"
    },
	{
        name: 'Git',
        icon: <FaGitAlt size="25px" color="white" />,
        cssName: "git"
    },
    {
        name: 'React',
        icon: <FaReact size="25px" color="white" />,
        cssName: "react"
    },
    {
        name: 'Responsive Design',
        icon: <FaMobileAlt size="25px" color="white" />,
        cssName: "responsive"
    },
    {
        name: 'Python',
        icon: <FaPython size="25px" color="white" />,
        cssName: "python"
    },
    {
        name: 'Scala',
        icon: <SiScala size="25px" color="white" />,
        cssName: "scala"
    },
    {
        name: 'SQL',
        icon: <SiPostgresql size="25px" color="white" />,
        cssName: "sql"
    },
    {
        name: 'PostgreSQL',
        icon: <SiPostgresql size="25px" color="white" />,
        cssName: "postgresql"
    },
    {
        name: 'Django',
        icon: <SiDjango size="25px" color="white" />,
        cssName: "django"
    },
	{
        name: 'HTML 5',
        icon: <FaHtml5 size="25px" color="white" />,
        cssName: "html"
    },
    {
        name: 'CSS 3',
        icon: <FaCss3Alt size="25px" color="white" />,
        cssName: "css"
    },
    {
        name: 'JavaScript',
        icon: <BiLogoJavascript size="25px" color="white" />,
        cssName: "javascript"
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size="25px" color="white" />,
        cssName: "typescript"
    },
];

const projects = [
	{
		name: `Projeto Sistema Bancário - Java`,
		link: 'https://github.com/VetorMelo/sistema_bancario_java',
		github: 'https://github.com/VetorMelo/sistema_bancario_java',
		description: "Quem diria que uma reclamação de cliente poderia inspirar um projeto? 😅 Após uma situação onde um cliente teve um pequeno desentendimento, percebi que era hora de inovar nos meus projetos pessoais. E assim nasceu a nova página web para contestação de compras e empréstimos!",
		image: Ataa
	},
	{
		name: 'Projeto Estacionamento',
		link: 'https://vetormelo.github.io/estacionamento_project_ts/',
		github: 'https://github.com/VetorMelo/estacionamento_project_ts',
		description: 'Este código gerencia uma lista de veículos em uma garagem, permitindo adicionar novos veículos, calcular o valor a ser pago com base no tempo estacionado e remover veículos da garagem. Além disso, utilizei o localStorage para a persistência de dados e manipulação de eventos DOM para a interação com o usuário.',
		image: GlobalShare
	},
	{
		name: 'Projeto Pokémon',
		link: 'https://vetormelo.github.io/Pokemon_project/',
		github: 'https://github.com/VetorMelo/Pokemon_project',
		description: 'Gostaria de apresentar o Projeto Pokémon, que demonstra uma variedade de tecnologias de desenvolvimento web.Para quem gosta de saber os detalhes dos cards, neste projeto você pode colocar em modo claro/escuro e rolar o card para saber mais detalhes sobre o Pokémon.',
		image: SokoNumber
	},
	{
		name: 'Projeto Calculadora IMC',
		link: 'https://vetormelo.github.io/Calculadora-IMC/',
		github: 'https://github.com/VetorMelo/Calculadora-IMC',
		description: 'Gostaria de apresentar o Projeto Calculadora-IMC, que demonstra uma variedade de tecnologias de desenvolvimento web. Neste projeto você pode calcular seu IMC preenchendo as informações solicitadas e saber se esta ou não acima do seu peso ideal.',
		image: Leon
	},
	{
		name: 'Projeto Habbits',
		link: 'https://ibrahimhiarea.github.io/Kasper/',
		github: 'https://github.com/VetorMelo/nlw-setup',
		description: 'Gostaria de apresentar o Projeto Habbits, que demonstra uma variedade de tecnologias de desenvolvimento web. Projeto desenvolvido para gestão de alguns habitos que possamos ter no nosso dia a dia, como atividade fisica, beber água, comer fruta e etc.',
		image: Kasper
	},
	
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_kvgrwik', 'template_ybfrg8i', form.current, 'CA0pEtv_9f3yJ18-0')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Victor Melo</h5>
				</a>

				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="https://github.com/VetorMelo">GitHub</a></li>
					<li><a href="#About">Sobre</a></li>
					<li><a href="#Projects">Projetos</a></li>
					<li><a href="#Contact">Contato</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="https://github.com/VetorMelo">GitHub</a></li>
					<li><a href="#About">Sobre</a></li>
					<li><a href="#Projects">Projetos</a></li>
					<li><a href="#Contact">Contato</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
				<h1>Olá, meu nome é<br className={style["mobile-break"]} />Victor Melo</h1>
					<p>Atualmente, sou desenvolvedor júnior em uma empresa especializada em defesa e engenharia aeronáutica. Tenho experiência prática em Java, Python, SQL, PostgreSQL, Power BI, Power Apps e SharePoint. Além do trabalho técnico, também participo de reuniões estratégicas, contribuindo com a governança de software e a gestão de projetos, em colaboração com o departamento de integração de projetos.</p>
					<p>Embora meu foco principal seja o desenvolvimento backend, possuo experiência em frontend utilizando React, JavaScript e TypeScript. Estou em constante busca por aprimoramento técnico e novos aprendizados, pois acredito que, quanto mais se aprende, maior é a consciência do quanto ainda há por descobrir.</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
						id='download-cv'
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>

				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/VetorMelo' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/victormelodev/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:contatomelo2@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.whatsapp} target="_blank" href='http://wa.me/5511955984209' >
                    <FaWhatsapp size="30px" color='black' />
                </a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>Sobre Mim</h2>
					<p>Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia.</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Vamos lá!</h3>
							<p>
								Sou<span> desenvolvedor Backend </span>responsável pela criação do Frontend e Backend de Sites e Aplicações Web, sempre com foco em contribuir para o sucesso global do produto. Confira alguns dos meus trabalhos na seção de <span>Projetos</span>. <br /> <br />
								Também compartilho conteúdo sobre o que aprendi ao longo dos anos em <span>Desenvolvimento Web</span> com o objetivo de ajudar a comunidade de desenvolvedores. Sinta-se à vontade para se conectar ou me seguir no meu  <a href="https://github.com/VetorMelo" target="_blank">Github</a> onde eu publico conteúdo útil relacionado a Desenvolvimento Web e Programação. <br /> <br />
								Estou aberto a <span>oportunidades de emprego</span> oportunidades onde eu possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em <span>entrar em contato</span> comigo.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projetos</h2>
					<p>Aqui você encontrará alguns dos projetos pessoais que criei, com cada projeto contendo seu próprio estudo de caso.</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contato</h2>
					<p>Fique à vontade para entrar em contato comigo enviando o formulário abaixo, e eu retornarei o mais breve possível.</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Victor Melo</h3>
							<p>Desenvolvedor com foco em Backend, mas também com habilidades em Frontend e Aplicações que contribuem para o sucesso do produto como um todo.</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/VetorMelo' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/victormelodev/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:contatomelo2@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.whatsapp} target="_blank" href='http://wa.me/5511955984209' >
                    				<FaWhatsapp size="30px" color='white' />
               					</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2025. Made by <span>Victor Melo</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;