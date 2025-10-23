import './footer.scss';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content"> Copyright &copy; {new Date().getFullYear()} | <span>Legrand Malobe </span> </div>
    </div>
  )
}