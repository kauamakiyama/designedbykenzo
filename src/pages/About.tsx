import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'

const englishParagraphs = [
  "I'm Luan Kenzo, a designer based in São Paulo.",
  'My practice moves through everything humans can touch and connect with - from objects, furniture, and everyday utensils to accessories, clothing, and spatial experiences.',
  'I believe design is about creating tangible solutions that live in the world: sometimes crafted by hand in the workshop, other times prototyped digitally or explored through materials and forms.',
  "I'm always open to collaborations, partnerships, and new challenges that push ideas further and expand the ways we experience daily life.",
]

const portugueseParagraphs = [
  'Sou Luan Kenzo, designer em São Paulo.',
  'Minha prática percorre tudo aquilo que o humano pode tocar e se relacionar - de objetos, mobiliário e utensílios do dia a dia a acessórios, roupas e experiências espaciais.',
  'Acredito que o design é sobre criar soluções tangíveis que habitam o mundo: ora feitas à mão na oficina, ora prototipadas digitalmente ou exploradas por meio de materiais e formas.',
  'Estou sempre aberto a colaborações, parcerias e novos desafios que levem ideias além e ampliem as maneiras como vivemos o cotidiano.',
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
