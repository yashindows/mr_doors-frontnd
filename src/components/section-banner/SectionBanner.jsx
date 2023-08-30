import React from 'react'
import './section-banner.scss'

function SectionBanner(props) {
  return (
    <section className="section-banner">
      <div className="section-banner__title">{props.title}</div>
    </section>
  )
}

export default SectionBanner
