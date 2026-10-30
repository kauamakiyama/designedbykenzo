import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'

const englishParagraphs = [
  "I'm Luan Kenzo, a designer based in São Paulo, Brazil.",
  'My practice moves across product, furniture and spatial design, often extending into brand experiences and temporary environments.',
  "I'm interested in how objects, materials and spaces shape the way we interact with the world around us. My work moves between hands-on making and digital processes, from prototyping and material experimentation to 3D development and spatial design.",
  'Rather than working within a single scale or discipline, I approach each project as an opportunity to build something tangible — an object, a piece of furniture, a space or an experience.',
  "I'm always open to collaborations, commissions and new projects.",
]

const portugueseParagraphs = [
  'Sou Luan Kenzo, designer baseado em São Paulo.',
  'Minha prática transita entre design de produto, mobiliário e espaços, muitas vezes se estendendo a experiências de marca e ambientes temporários.',
  'Tenho interesse em como objetos, materiais e espaços moldam nossa relação com aquilo que está ao nosso redor. Meu trabalho combina processos manuais e digitais, passando pela prototipagem e experimentação de materiais até o desenvolvimento 3D e espacial.',
  'Mais do que trabalhar dentro de uma única escala ou disciplina, encaro cada projeto como uma oportunidade de construir algo tangível — seja um objeto, um móvel, um espaço ou uma experiência.',
  'Estou sempre aberto a colaborações, projetos comissionados e novas oportunidades.',
]

interface LanguageSectionProps {
  label: string
  paragraphs: string[]
}

const LanguageSection = ({ label, paragraphs }: LanguageSectionProps) => (
  <section className="about-language">
    <div className="language-label">[{label}]</div>
    {paragraphs.map((paragraph) => (
      <p key={paragraph} className="details-text about-paragraph">
        {paragraph}
      </p>
    ))}
  </section>
)

const About = () => (
  <PageShell contentClassName="about-container content-area">
    <h1 className="mobile-text-large about-title">HELLO.</h1>

    <LanguageSection label="EN" paragraphs={englishParagraphs} />
    <LanguageSection label="PT" paragraphs={portugueseParagraphs} />

    <div className="about-image-wrap">
      <OptimizedImage
        src="https://i.ibb.co/zhLzJysJ/37909da8-3ae5-43ab-9bb8-e5d062fb2c26-1.png"
        alt="Luan Kenzo"
        className="about-image"
      />
    </div>
  </PageShell>
)

export default About
