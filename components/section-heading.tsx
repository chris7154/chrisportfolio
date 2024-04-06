import React from 'react'

type SectonHeadinProps = {
    children: React.ReactNode;
}

export default function SectionHeading({
    children }: SectonHeadinProps ) {
  return (
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}