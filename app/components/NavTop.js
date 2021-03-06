import Link from 'next/link'
import { useState, memo } from 'react'
import styles from '../styles/NavTop.module.scss'

function NavTop() {
	const [menuOpen, setMenuOpen] = useState(false)
	const menuClass = menuOpen ? styles.menuOpen : styles.menu
	const iconClass = menuOpen ? styles.iconCross : styles.icon

	const toggleMenu = () => setMenuOpen(!menuOpen)

	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<a className={styles.logo}>Swanson Furniture</a>
			</Link>
			<menu className={menuClass}>
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
			<button className={iconClass} onClick={toggleMenu} aria-label='Open navigation menu'>
				<div className={styles.bar2} />
				<div className={styles.bar3} />
			</button>
		</nav>
	)
}

export default memo(NavTop)