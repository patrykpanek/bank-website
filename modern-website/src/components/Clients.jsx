import React from 'react'
import { clients } from '../constants'
import styles from '../styles'


const Clients = () =>  (
    <section className={`${styles.flexCenter} m-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client)=>(
            <div className={`flex-1 ${styles.flexCenter} sm:min-w-[200px] min-w-[120px] sm:mt-5 mt-4`} key={client.id}>
              <img src={client.logo} alt="client" className='sm:w-[200px] w-[100px] object-contain' />
            </div>
          ))}
        </div>
    </section>
  )


export default Clients