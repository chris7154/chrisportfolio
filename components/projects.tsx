import React from 'react'
import SectionHeading from './section-heading'

import Project from './project'
import { projectsData } from '@/app/lib/data'


export default function Projects() {
  return (
    
    <section className='scroll-mt-28 mb-28' id='projects'>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                    
                       <Project  {...project}/>
                    
                    </React.Fragment>
                    
        
                ))
            }
        </div>
    </section>
  )
}