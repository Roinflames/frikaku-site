import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const TERMS = ['gamer', 'otaku', 'friki']

const pillars = [
  {
    icon: '🏆',
    title: 'Competencia',
    desc: 'Torneos y ligas para todos los niveles. Sube el ranking y demuestra de qué estás hecho.',
  },
  {
    icon: '🤝',
    title: 'Comunidad',
    desc: 'Miles de jugadores que comparten tu pasión. Encuentra tu squad y haz amigos reales.',
  },
  {
    icon: '📺',
    title: 'Contenido',
    desc: 'Streams, clips y guías creadas por y para la comunidad.',
  },
  {
    icon: '📚',
    title: 'Aprendizaje',
    desc: 'Tutoriales, mentorías y estrategias para llevar tu juego al siguiente nivel.',
  },
  {
    icon: '🎉',
    title: 'Diversión',
    desc: 'Eventos, sorteos y actividades que hacen cada día una nueva aventura.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Regístrate',
    desc: 'Crea tu perfil en segundos. Solo necesitas un usuario y tu correo.',
  },
  {
    n: '02',
    title: 'Entra al servidor',
    desc: 'Únete a nuestro Discord, preséntate y comienza a conectar con la comunidad.',
  },
  {
    n: '03',
    title: 'Juega con nosotros',
    desc: 'Encuentra partidas, únete a torneos y vive la experiencia Frikaku.',
  },
]

function App() {
  const [termIndex, setTermIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTermIndex((prev) => (prev + 1) % TERMS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentTerm = TERMS[termIndex]
  const capitalizedTerm = currentTerm.charAt(0).toUpperCase() + currentTerm.slice(1)

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">FRIKAKU</a>
          <ul className="nav-links">
            <li><a href="#comunidad">Comunidad</a></li>
            <li><a href="#actividades">Actividades</a></li>
            <li><a href="#unete">Únete</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <a href="#unete" className="btn-primary nav-btn">Únete gratis</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-chip">
              🎮 Comunidad <span key={currentTerm} className="term-switch">{capitalizedTerm}</span>
            </span>
            <h1 className="hero-title">
              La comunidad<br />
              <em key={currentTerm} className="term-switch">{currentTerm}</em><br />
              que estabas<br />
              buscando
            </h1>
            <p className="hero-sub">
              Únete a miles de personas, comparte estrategias, compite y
              diviértete. Frikaku es tu hogar <span key={currentTerm} className="term-switch">{currentTerm}</span>.
            </p>
            <div className="hero-ctas">
              <a href="#unete" className="btn-primary">Únete ahora</a>
              <a href="#comunidad" className="btn-ghost">Conoce más →</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Mascota Frikaku" className="mascot" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="comunidad" className="pillars">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">¿Por qué Frikaku?</span>
            <h2 className="section-title dark">Todo lo que necesitas</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-card">
                <span className="pillar-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="actividades" className="steps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag alt">Empieza hoy</span>
            <h2 className="section-title light">3 pasos para unirte</h2>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <span className="step-num">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social / Connect */}
      <section id="unete" className="social-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Conéctate</span>
            <h2 className="section-title dark">Encuéntranos aquí</h2>
          </div>
          <div className="social-grid">
            <a href="#" className="social-card discord">
              <div className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <div className="social-content">
                <h3>Discord</h3>
                <p>El corazón de la comunidad. Chat, voz y eventos en vivo.</p>
                <span className="social-cta">Unirse al servidor →</span>
              </div>
            </a>
            <a href="#" className="social-card instagram">
              <div className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </div>
              <div className="social-content">
                <h3>Instagram</h3>
                <p>Contenido, memes y noticias del mundo <span key={currentTerm} className="term-switch">{currentTerm}</span>.</p>
                <span className="social-cta">@frikaku →</span>
              </div>
            </a>
            <a href="#" className="social-card whatsapp">
              <div className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <div className="social-content">
                <h3>WhatsApp</h3>
                <p>Escríbenos con tus dudas o para saber más.</p>
                <span className="social-cta">Escribir ahora →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo">FRIKAKU</span>
              <p>La comunidad <span key={currentTerm} className="term-switch">{currentTerm}</span> que estabas buscando.</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#comunidad">Comunidad</a>
              <a href="#actividades">Actividades</a>
              <a href="#unete">Únete</a>
              <a href="#">Discord</a>
              <a href="#">Instagram</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Frikaku. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
