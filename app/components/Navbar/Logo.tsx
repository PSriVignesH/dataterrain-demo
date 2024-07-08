import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src="/logo.png" width={232} height={62} alt='logo' priority/>
  )
}

export default Logo