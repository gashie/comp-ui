import React from 'react'
import { Link } from 'react-router-dom'

const CommonFooter = () => {
  return (
    <footer className="px-4">
        <p className="mb-0 text-muted">© 2024 <Link to="https://BE360.com/" target="_blank" title="BE360">BE360</Link>, All Rights Reserved.</p>
    </footer>
  )
}

export default CommonFooter