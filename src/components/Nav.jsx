import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DisplayMode from './DisplayMode';

const Nav = () => {
	const navRef = useRef();
	const [activeSection, setActiveSection] = useState('home');
	const sectionIds = ['home', 'about', 'projects', 'details'];

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	};

	const handleScrollToSection = (id) => {
		const section = document.getElementById(id);
		const headerHeight = 200;
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			const yOffset = -headerHeight;
			const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
		if (navRef.current.classList.contains("responsive-nav")) {
			showNavbar();
		}
	};

	const updateActiveSection = () => {
		let currentSection = '';
		sectionIds.forEach((id) => {
			const section = document.getElementById(id);
			const offsetTop = section.offsetTop - 300;
			if (window.scrollY >= offsetTop) {
				currentSection = id;
			}
		});
		setActiveSection(currentSection);
	};

	useEffect(() => {
		window.addEventListener('scroll', updateActiveSection);
		return () => {
			window.removeEventListener('scroll', updateActiveSection);
		};
	}, []);

	return (
		<nav className="menu-wrap">
			<div className="list-wrap" ref={navRef}>
				<ul>
					<li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleScrollToSection("home")}>
						<div className="nav-wrap">
							<p>Home</p>
						</div>
					</li>
					<li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleScrollToSection("about")}>
						<div className="nav-wrap">
							<p>About</p>
						</div>
					</li>
					<li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleScrollToSection("projects")}>
						<div className="nav-wrap">
							<p>Projects</p>
						</div>
					</li>
					<li className={`nav-item ${activeSection === 'details' ? 'active' : ''}`} onClick={() => handleScrollToSection("details")}>
						<div className="nav-wrap">
							<p>Details</p>
						</div>
					</li>
					<DisplayMode></DisplayMode>
				</ul>
				<button className="nav-btn nav-close-btn" onClick={showNavbar} aria-label="Fermer le menu">
					<AiOutlineClose size="2.8rem" />
				</button>
			</div>
			<button className="nav-btn" onClick={showNavbar} aria-label="Ouvrir le menu">
				<AiOutlineMenu size="2.8rem" />
			</button>
		</nav>
	);
};

export default Nav;
