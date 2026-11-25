import { Link } from '@tanstack/react-router'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="REGIIS SERVICES UK LTD home">
      <span className="logo-mark" aria-hidden="true">RS</span>
      <span className="logo-text">
        REGIIS SERVICES <span>UK LTD</span>
      </span>
    </Link>
  )
}
