import Head from 'next/head'
import { useState, useCallback } from 'react'
import client from '../client'
import NavTop from '../components/NavTop'
import Modal from '../components/Modal'
import Category from '../components/Category'
import styles from '../styles/gallery.module.scss'

export default function GalleryPage({ cabinetry, tables, stairs, beds, doors }) {
	const [modalUrl, setModalUrl] = useState('')

	const openModal = useCallback((target) => {
		if (target.dataset.url) {
			setModalUrl(target.dataset.url)
		}
	}, [setModalUrl])

	function closeModal() {
		setModalUrl('')
	}

	return (
		<div className={styles.gallery}>
			<Head>
        <title>Gallery | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div className={styles.categories}>
				{
					[cabinetry, tables, stairs, beds, doors].map((category, i) => {
						return (
							<Category 
								category={category}	
								key={i}
								openModal={openModal}
							/>
						)
					})
				}
			</div>
			<Modal url={modalUrl} closeModal={closeModal} />
		</div>
	)
}

export async function getStaticProps() {
	const cabinetry = await client.fetch(
		`*[_type == 'collection' && category == 'cabinetry-shelving']{ images }`
	)
	const tables = await client.fetch(
		`*[_type == 'collection' && category == 'tables-chairs']{ images }`
	)
	const stairs = await client.fetch(
		`*[_type == 'collection' && category == 'stairs-rails']{ images }`
	)
	const beds = await client.fetch(
		`*[_type == 'collection' && category == 'beds']{ images }`
	)
	const doors = await client.fetch(
		`*[_type == 'collection' && category == 'doors']{ images }`
	)
	
  return {
    props: {
			cabinetry: {
				title: 'Cabinetry & Shelving',
				collections: cabinetry
			},
			tables: {
				title: 'Tables & Chairs',
				collections: tables
			},
			stairs: {
				title: 'Stairs & Rails',
				collections: stairs
			},
			beds: {
				title: 'Beds',
				collections: beds
			},
			doors: {
				title: 'Doors',
				collections: doors
			},
		}
  }
}