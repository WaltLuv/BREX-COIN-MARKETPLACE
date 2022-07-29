import React, { useContext } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { IoMdSearch } from 'react-icons/io'
import { BlockContext } from '../context/BlockContext'
import { FaCoins } from 'react-icons/fa'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal'
import 'react-simple-hook-modal/dist/styles.css'
import BuyModal from './BuyModal'

const Header = () => {
  const styles = {
    container: `h-[60px] w-full flex items-center gap-5 px-16`,
    logo: `flex items-center ml-[20px] cursor-pointer flex-1`,
    search: `p-[25px] mr-[30px] w-[400px] h-[40px] bg-black text-purple-500 rounded-full shadow-lg flex flex items-center border border-purple-500`,
    searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex`,
    menu: `flex items-center gap-6`,
    menuItem: `bg-black flex items-center text-md font-bold cursor-pointer text-white`,
    coins: `ml-[10px]`,
  }

  
  const {balance} = useContext(BlockContext)
  const { openModal, isModalOpen, closeModal } = useModal()
  return (
  
      <div className={styles.container}>
          <div className={styles.logo} >
            <Image 
              src={logo}
              alt='blockmatic'
              height={100}
              width={100}
              className='object-cover'
            /> 
          </div>  
        <div className={styles.search}>
          <input
            type='text'
            placeholder='Search For Items...'
            className={styles.searchInput}
          />
          <IoMdSearch fontSize={20} />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>Admin Marketplace</div>
          <div className={styles.menuItem}>Real Estate Marketplace</div>
          {balance ? (
            <div
              className={(styles.balance, styles.menuItem)}
              onClick={openModal}
            >
              {balance}
              <FaCoins className={styles.coins} />
              <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} />
              </Modal>
            </div>
          ) : (
            <div
            className={(styles.balance, styles.menuItem)}
            onClick={openModal}
            >
            0 BREX 
            <FaCoins className={styles.coins} />
            <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} />
              </Modal>
            </div>
          )}
          <CgMenuGridO fontSize={30} className={styles.menuItem} />
        </div>
      </div>
   
  )
}

export default Header
