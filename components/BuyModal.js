import React, { useContext, useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import { BlockContext } from '../context/BlockContext'
import { HashLoader } from 'react-spinners'
import Link from 'next/link'

const BuyModal = ({close}) => {
  const styles = {
    container: `h-full w-full flex flex-col bg-gradient-to-t from-[#00ffff] to-[#ff00ff] mt-[40px] `,
    closeX: `w-full h-[50px] flex items-center justify-end mb-[20px]`,
    title: `text-3xl font-bold flex flex-1 items-center mt-[20px] justify-center mb-[40px] text-white`,
    content: `flex w-full mb-[30px] text-xl justify-center text-white`,
    input: `w-[50%] h-[50px] bg-[#f7f6f2] rounded-lg p-[10px] flex mx-auto`,
    inputBox: `w-full h-full flex items-center justify-center bg-[#f7f6f2] focus:outline-none`,
    price: `w-full h-full flex justify-center items-center mt-[20px] font-bold text-3xl text-white`,
    buyBtn: `w-[20%] h-[50px] bg-[#000] mt-[40px] rounded-lg p-[10px] flex mx-auto text-white justify-center items-center cursor-pointer`,
    loaderContainer: `w-full h-[500px] flex items-center justify-center`,
    loader: `w-full h-full flex items-center justify-center`,
    etherscan: `w-full h-full flex items-center justify-center text-white text-2xl mt-[20px] font-bold cursor-pointer`,
    success: `w-full h-full flex items-center justify-center text-xl mt-[20px] font-bolder`,
  }
  const {
    amountDue,
    setAmountDue,
    tokenAmount,
    setTokenAmount,
    isLoading,
    setIsLoading,
    etherscanLink,
    setEtherscanLink,
    buyTokens
  } = useContext(BlockContext)

  useEffect(() => {
    calculatePrice()
  }, [tokenAmount])

  const calculatePrice = () => {
    const price = parseFloat(tokenAmount * 0.0001)
    price = price.toFixed(4)
    setAmountDue(price)
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <div className={styles.loaderContainer}>
            <HashLoader size={80} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.closeX}>
            <IoIosClose
              onClick={() => {
                close()
                setAmountDue('')
                setTokenAmount('')
                setEtherscanLink('')
              }}
              fontSize={50}
              className='cursor-pointer'
            />
          </div>
          <div className={styles.title}>Buy More Block Republic Exchange Coins Here!</div>
          <div className={styles.content}>
            Add the amount BREX tokens you would like to purchase.
          </div>
          <div className={styles.input}>
            <input
              type='text'
              placeholder='Amount...'
              className={styles.inputBox}
              onChange={e => setTokenAmount(e.target.value)}
              value={tokenAmount}
            />
          </div>
          <div className={styles.price}>
            Total Due: {''}
            {tokenAmount && tokenAmount > 0 ? amountDue + 'MATIC' : '0 MATIC'}
          </div>
          <button
            className={styles.buyBtn}
            disabled={!tokenAmount || tokenAmount < 0}
            onClick={() => {
              setIsLoading(true)
              buyTokens()
            }}
          >
            Purchase
          </button>
          {etherscanLink && (
            <>
              <div className={styles.success}>
                Transaction Complete! Review your receipt for your
                transaction below!
              </div>
              <Link href={`${etherscanLink}`} className={styles.etherscan}>
                <a className={styles.etherscan} target='_blank'>
                  Transaction Receipt
                </a>
              </Link>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default BuyModal
