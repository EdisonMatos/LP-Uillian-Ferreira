import logo from "../assets/imgs/logo/logo.png";
import heroImg from "../assets/imgs/hero/lawHero.jpg";
import bgHeroImg from "../assets/imgs/hero/bgHero.webp";

import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";

import imgSteps from "../assets/imgs/steps/imgSteps.jpg";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.jpg";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.jpg";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.jpg";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.jpg";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.jpg";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.jpg";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.jpg";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";

import {
  Calculator,
  User,
  House,
  Briefcase,
  HardHat,
  CircleUserRound,
  BadgePercent,
  FileCheck,
  Scale,
  FileX,
  HousePlus,
  Grid2x2Check,
} from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Uillian Ferreira Gestão de Departamento Pessoal",
  email: "contato", // Email desejado pelo cliente
  domain: "uillianferreira.com.br", // Sem "www"
  phone: {
    ddd: "34",
    firstPart: "98433", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "9190", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>Avenida Josias Ferreira Sobrinho, nº 345</p>
      <p>Uberaba - MG</p>
      <p>CEP 38041-040</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda a Sexta-feira</p>
      <p>Das 9h às 17h</p>
    </div>
  ),
  obs: <span className="italic">A_Definir</span>,
  instagramProfile: "A_Definir", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre Nós", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "GESTÃO DE DEPARTAMENTO PESSOAL EM UBERABA - MG",
      title: (
        <h1 className="mb-[16px]">
          Revolucione sua empresa com uma
          <span className="text-primary"> contabilidade inteligente</span>
        </h1>
      ),
      subtitle:
        "Soluções estratégicas que garantem eficiência, conformidade e crescimento sustentável.",
      heroImg: heroImg,
      ctaButtonText: "Entre em contato",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "Atendimento presencial e online",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A_Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "ESPECIALIDADES",
      title: "Estratégias em contabilidade",
      subtitle:
        "Serviços personalizados para a gestão inteligente da sua equipe.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Administração de folha de pagamento",
        subtitle: "Gerenciamento preciso e eficiente da folha salarial.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hand-coins"
          >
            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 16 6 6" />
            <circle cx="16" cy="9" r="2.9" />
            <circle cx="6" cy="5" r="3" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "Gestão fiscal",
        subtitle:
          "Escrituração e apuração de impostos das notas de compra e venda.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: featuresImg3,
        title: "Gestão contábil",
        subtitle:
          "Escrituração dos fatos contábeis e elaboração das demonstrações.",
        description: (
          <div>
            A_Definir <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-notebook-pen"
          >
            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "Contabilidade gerencial",
        subtitle:
          "Elaboração da estrutura necessária para apuração dos índices, dashboards e realização de análises.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-chart-column"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M8 18v-1" />
            <path d="M12 18v-6" />
            <path d="M16 18v-3" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório",
      },
      miniTag: "QUEM É UILLIAN FERREIRA",
      title: "Minha trajetória",
      subtitle:
        "Apaixonado por negócios, encontrei na contabilidade meu propósito profissional.",
      paragraph: (
        <div>
          Minha relação com a contabilidade começou de forma despretensiosa, mas
          cheia de significado. Em 2012, eu enxerguei nessa profissão uma
          oportunidade de empreender em algo com que me identificava
          profundamente.
          <br />
          Sempre tive fascínio por negócios. Desde jovem, gostava de simular
          empresas, criar cenários em planilhas, calcular custos e imaginar
          estratégias. Mesmo sem conhecer a fundo sobre impostos e
          regulamentações, eu fazia tudo do meu jeito, guiado por uma paixão
          genuína.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Minha relação com a contabilidade começou de forma despretensiosa, mas
          cheia de significado. Em 2012, eu enxerguei nessa profissão uma
          oportunidade de empreender em algo com que me identificava
          profundamente.
          <br />
          <br />
          Sempre tive fascínio por negócios. Desde jovem, gostava de simular
          empresas, criar cenários em planilhas, calcular custos e imaginar
          estratégias. Mesmo sem conhecer a fundo sobre impostos e
          regulamentações, eu fazia tudo do meu jeito, guiado por uma paixão
          genuína.
          <br />
          <br />
          Quando finalmente entrei para a faculdade de contabilidade, em 2014,
          senti que estava no caminho certo. A cada semestre, minha confiança
          crescia, e ao me formar em 2019, tive a certeza de que havia
          encontrado meu propósito. O momento mais marcante foi ser aprovado no
          exame do conselho com aproximadamente 80% de acertos, um reflexo do
          meu empenho e dedicação.
          <br />
          <br />
          Ao longo da minha trajetória, passei por diferentes áreas, acumulando
          experiências valiosas. Fui analista de departamento pessoal, analista
          fiscal e contábil. Cada função contribuiu para a construção do
          profissional que sou hoje.
          <br />
          <br />
          Encerrei o ciclo CLT em cargos de coordenação. Essa posição me
          permitiu unir minha paixão por negócios e a experiência acumulada,
          conhecendo as dores mais comuns e ajudando empresas a crescerem de
          forma estruturada e eficiente. Cada desafio que enfrento reforça meu
          amor pela profissão e o desejo de continuar fazendo a diferença.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "A_Definir",
        title: "A_Definir",
        subtitle: "A_Definir",
        paragraph: <p>A_Definir</p>,
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title: "Precisa de ajuda com gestão de pessoal? Estamos aqui para isso!",
      subtitle:
        "Fale com nossa equipe. Estamos prontos para oferecer soluções completas em departamento pessoal.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Primeiro contato e análise inicial",
          cardDescription:
            "Entendemos as necessidades do cliente e identificamos os principais desafios.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Planejamento personalizado",
          cardDescription:
            "Desenvolvemos estratégias sob medida para otimizar processos e garantir eficiência.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Implementação das soluções",
          cardDescription:
            "Aplicamos as soluções acordadas, garantindo alinhamento com as normas.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Acompanhamento contínuo",
          cardDescription:
            "Monitoramos os resultados e ajustamos os processos para manter a excelência.",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "O que faz um profissional de departamento pessoal?",
          answer:
            "O departamento pessoal é responsável por gerenciar a relação entre empresa e funcionários, cuidando de processos como folha de pagamento, admissões e demissões, benefícios e controle de ponto, sempre alinhado às leis trabalhistas.",
        },
        question2: {
          question:
            "Qual a diferença entre departamento pessoal e recursos humanos?",
          answer:
            "Enquanto o departamento pessoal foca nos processos administrativos e legais, o RH trabalha com o desenvolvimento de pessoas, incluindo recrutamento, treinamentos e engajamento dos colaboradores.",
        },
        question3: {
          question: "Por que é importante terceirizar o departamento pessoal?",
          answer:
            "A terceirização permite que especialistas cuidem da gestão de pessoal, reduzindo erros, garantindo conformidade com as normas legais e otimizando o tempo da empresa para focar em seu core business.",
        },
        question4: {
          question: "Como funciona o cálculo da folha de pagamento?",
          answer:
            "O cálculo inclui o salário bruto, descontos obrigatórios (INSS, IRRF, etc.) e adicionais como horas extras e benefícios. Tudo isso deve ser feito de acordo com a legislação trabalhista vigente.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A_Definir",
      subtitle: "A_Definir",
      trustedMore: {
        title: "A_Definir",
        subtitle: "A_Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A_Definir",
      number2: 500,
      number2Description: "A_Definir",
      number3: 1000,
      number3Description: "A_Definir",
    },
    team: {
      title: "A_Definir",
      subtitle: "A_Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      adress: infos.endereco,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
