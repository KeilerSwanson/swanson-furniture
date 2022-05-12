import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/NavTop.module.scss'
// import effects from '../styles/Effects.module.scss'

export default function NavTop() {
	const [menuOpen, setMenuOpen] = useState(false)
	const menuClass = menuOpen ? styles.menuOpen : styles.menu
	const iconClass = menuOpen ? styles.iconCross : styles.icon

	// function closeMenu() {
	// 	console.log('close')
	// 	setMenuOpen(false)
	// }

	// function openMenu() {
	// 	console.log('open')
	// 	setMenuOpen(true)
	// }

	const toggleMenu = () => setMenuOpen(!menuOpen)

	return (
		<nav 
			className={styles.nav}
		>
			<Link href='/'>
				<a className={styles.logo}>Swanson Furniture</a>
			</Link>
			<menu 
				className={menuClass}
				// onClick={closeMenu}	
			>
				<Link href='/gallery'>
					<a className={styles.menuItem}>Gallery</a>
				</Link>
				<Link href='/about'>
					<a className={styles.menuItem}>About</a>
				</Link>
				<Link href='/reviews'>
					<a className={styles.menuItem}>Reviews</a>
				</Link>
				<Link href='/contact'>
					<a className={styles.menuItem}>Contact</a>
				</Link>
			</menu>
			<button 
				className={iconClass} 
				onClick={toggleMenu}
			>
				<div className={styles.bar2} />
				<div className={styles.bar3} />
			</button>
		</nav>
	)
}

