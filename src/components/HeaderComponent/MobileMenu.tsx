import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { MobileMenuOpen } from '../../util/atomItems.js'
import { useStore } from '@nanostores/preact'
import MenuLinks from './MobileMenu/menuLinks.tsx'
import { Logo } from '../../customization/logo.js'
import SwitchComponent from '../switch/switch_component.tsx'

const WIDTH = 250
const MENU_WIDTH = `w-[${WIDTH}px]`
const TRANSLATE = `translate-x-[${WIDTH}px]`
const MobileMenuComponent = () => {
	const $MobileMenuOpen = useStore(MobileMenuOpen)

	const CloseMobileMenu = () => {
		MobileMenuOpen.set(false)
	}

	const MobileMenuRef = useRef<HTMLDivElement | null>(null)
	let HeaderComponent = document.getElementById('header-component')
	let MobileIconComponent = document.getElementById('MobileIcon')
	const checkIfClickedOutside = (evt: MouseEvent) => {
		if (
			MobileMenuRef.current &&
			!MobileMenuRef.current.classList.contains(TRANSLATE) &&
			MobileIconComponent != evt.target &&
			!MobileIconComponent?.contains(evt.target as HTMLDivElement) &&
			!MobileMenuRef.current.contains(evt.target as HTMLDivElement)
		) {
			CloseMobileMenu()
		}
	}

	useEffect(() => {
		window.addEventListener('mousedown', checkIfClickedOutside)
		return () => {
			window.removeEventListener('mousedown', checkIfClickedOutside)
		}
	}, [])

	useEffect(() => {
		if ($MobileMenuOpen) {
			MobileMenuRef.current?.classList.remove(TRANSLATE)
		} else {
			MobileMenuRef.current?.classList.add(TRANSLATE)
		}
	}, [$MobileMenuOpen])

	return (
		<div
			id="Mobile_Menu"
			class={`mobile-menu fixed left-auto right-0 top-0 grid h-full w-[250px] translate-x-[250px] overflow-y-auto overflow-x-hidden transition-all md:hidden`}
			ref={MobileMenuRef}
		>
			<div
				id="Mobile_Menu_Wrapper"
				class="Mobile_Menu_Wrapper mx-auto mt-[20px] flex w-9/12 flex-col text-black [&>a]:mb-10"
			>
				<a href="/" class="userselect-none mx-auto">
					<img src={Logo().src} class="mb-5" alt="logo" />
				</a>
				<div class="mobile-menu-links grid">
					<MenuLinks />
				</div>
				<hr class="mx-auto mb-5 w-11/12 border-[1px] bg-slate-300" />
				<div class="flex flex-row justify-between">
					<span>Dark Mode</span>
					<SwitchComponent />
				</div>
				<hr class="mx-auto my-5 w-11/12 border-[1px] bg-slate-300" />
				<p
					class="mb-10 w-full cursor-pointer rounded-lg px-1 hover:bg-white"
					onClick={CloseMobileMenu}
				>
					Close
				</p>
			</div>
		</div>
	)
}
export default MobileMenuComponent
