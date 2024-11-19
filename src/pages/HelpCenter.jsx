import React from 'react'
import DocumentationSection from '../components/DocumentationSection'
import Help from '../components/Help'
import SupportSection from '../components/SupportSection'

const HelpCenter = () => {
  return (
    <div className=''>
        <Help/>
        <DocumentationSection/>
        <SupportSection/>
    </div>
  )
}

export default HelpCenter