import React from 'react'
import { Link } from 'react-router-dom'

const CommonFooter = () => {
  return (
    <footer className="px-4">
        <p className="mb-0 text-muted">© 2023 <Link to="https://Pixelwibes.com/" target="_blank" title="pixelwibes">pixelwibes</Link>, All Rights Reserved.</p>
    </footer>
  )
}

export default CommonFooter