import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  pt: {
    // Navigation
    home: "Início",
    about: "Sobre mim",
    services: "Áreas de Atuação",
    blog: "Artigos",
    contact: "Contato",
    contact_btn: "Contato",
    logo: "Dra. Rivânia Saraiva",

    // Hero Section
    hero_title_1: "Rivânia",
    hero_title_2: "Saraiva",
    hero_tagline: "Advocacia especializada em segurança social. Assegurando seus direitos com ética, transparência e dedicação.",
    hero_cta: "Agendar Consulta",
    marquee_text: "DRA. RIVÂNIA SARAIVA • ADVOCACIA PREVIDENCIÁRIA • APOSENTADORIA • SEGURANÇA SOCIAL • PENSÕES • BENEFÍCIOS • BOA VISTA • RORAIMA • BRASIL • ",

    // About Section
    about_title: "Escritório de Advocacia Dra. Rivânia Saraiva",
    about_intro: "Advogada especializada em Direito Previdenciário em Boa Vista, Roraima. Atuação dedicada e personalizada para garantir seus direitos junto ao INSS.",
    about_established: "Fundado em 2018",
    about_desc_1: "O Escritório de Advocacia Dra. Rivânia Saraiva destaca-se pela excelência no atendimento personalizado e artesanal no âmbito do Direito Previdenciário (Segurança Social). Compreendemos que cada caso representa a história de vida e o futuro de um trabalhador, por isso empenhamos máxima precisão técnica e atenção aos detalhes em cada requerimento de benefício.",
    about_desc_2: "Nossa sede fica localizada em Boa Vista, Roraima, oferecendo um atendimento humanizado e acolhedor para a comunidade local e regional, com elevado índice de resolutividade e dedicação.",
    about_contact_title: "Contato Direto",
    about_email: "E-mail",
    about_phone: "Telefone",
    about_address: "Endereço",
    about_faq_title: "Dúvidas Frequentes",
    
    // FAQ Rows
    faq_1_title: "Como saber se tenho direito a me aposentar?",
    faq_1_content: "Realizamos uma análise completa do seu extrato de contribuições (CNIS), idade e tempo de serviço sob as regras de transição da reforma da previdência para indicar o momento exato e a modalidade de aposentadoria mais vantajosa.",
    faq_2_title: "Quais documentos são fundamentais para dar entrada?",
    faq_2_content: "Documentos de identificação (RG/CPF), comprovante de residência atualizado, Carteiras de Trabalho (CTPS), carnês de contribuição, extrato do CNIS e, em casos de trabalho especial/insalubre, o PPP (Perfil Profissiográfico Previdenciário).",
    faq_3_title: "O que é o planejamento previdenciário e por que fazer?",
    faq_3_content: "É um estudo técnico personalizado que avalia todo o histórico contributivo do trabalhador para projetar cenários futuros de aposentadoria, evitando erros na concessão, reduzindo perdas e garantindo o melhor valor de benefício possível.",

    // Timeline / Achievements
    achievements_title: "Marcos e Reconhecimentos",
    achievement_1_year: "2018",
    achievement_1_title: "Fundação do Escritório",
    achievement_1_desc: "Abertura da sede própria em Boa Vista - RR focada exclusivamente em causas previdenciárias.",
    achievement_2_year: "2020",
    achievement_2_title: "Especialização Avançada",
    achievement_2_desc: "Implementação de metodologias digitais integradas com o sistema Meu INSS para agilidade nacional.",
    achievement_3_year: "2023",
    achievement_3_title: "Reconhecimento Regional",
    achievement_3_desc: "Marca de 60+ casos resolvidos com aprovação unânime de 5.0 estrelas nas avaliações locais.",
    achievement_4_year: "2026",
    achievement_4_title: "Presença Digital Expandida",
    achievement_4_desc: "Desenvolvimento de atendimento previdenciário digital para brasileiros que vivem no exterior.",

    // Services / Practice Areas
    services_hero_title: "ÁREAS DE",
    services_hero_subtitle: "ATUAÇÃO",
    services_tagline: "Soluções personalizadas em Direito Previdenciário e Assistencial.",
    service_1_title: "Aposentadoria por Idade",
    service_1_desc: "Planejamento e solicitação de aposentadorias urbanas e rurais para quem atingiu a idade mínima.",
    service_2_title: "Aposentadoria por Tempo",
    service_2_desc: "Cálculo detalhado de tempo de contribuição incluindo conversão de atividade especial ou insalubre.",
    service_3_title: "Planejamento Previdenciário",
    service_3_desc: "Diagnóstico completo das contribuições passadas para maximizar o valor futuro do seu benefício.",
    service_4_title: "Auxílio-Doença & Invalidez",
    service_4_desc: "Acompanhamento em processos de incapacidade laboral temporária ou permanente perante a perícia médica.",
    service_5_title: "Pensão por Morte & BPC/LOAS",
    service_5_desc: "Suporte para dependentes e benefícios assistenciais a idosos e pessoas com deficiência de baixa renda.",

    // Blog
    blog_hero_title: "Artigos e",
    blog_hero_subtitle: "Informativos",
    blog_read_more: "Ler Artigo",
    blog_tag_planning: "Planejamento",
    blog_tag_benefits: "Benefícios",
    blog_tag_rights: "Direitos",
    blog_post_1_title: "Como Planejar Sua Aposentadoria em 2026",
    blog_post_2_title: "BPC/LOAS: Quem tem direito e como solicitar?",
    blog_post_3_title: "Pensão por Morte: Entenda as regras atuais e quem tem direito",
    blog_post_4_title: "Conversão de Tempo Especial: Como aumentar seu tempo de serviço",
    blog_post_5_title: "O que fazer se o seu benefício for negado pelo INSS?",
    blog_post_6_title: "Planejamento Previdenciário para Profissionais Autônomos",

    // Contact & Google Reviews
    contact_title: "Fale Conosco",
    contact_subtitle: "ou envie-nos uma mensagem",
    contact_name_placeholder: "Nome Completo",
    contact_email_placeholder: "E-mail",
    contact_message_placeholder: "Sua mensagem ou descrição do seu caso",
    contact_submit: "Enviar Mensagem",
    contact_whatsapp_cta: "Falar no WhatsApp",
    contact_newsletter_title: "Informativo Previdenciário",
    contact_newsletter_desc: "Assine nosso informativo para receber novidades sobre direitos sociais e mudanças nas leis previdenciárias diretamente no seu e-mail.",
    contact_newsletter_placeholder: "Seu melhor e-mail",
    contact_newsletter_submit: "Inscrever",
    contact_socials_title: "Redes Sociais",
    contact_hours_title: "Horário de Atendimento",
    contact_hours_mon_wed: "Segunda a Quarta: 09h às 18h",
    contact_hours_thu: "Quinta-feira: 09h às 18h",
    contact_hours_fri: "Sexta-feira: 09h às 16h",
    contact_hours_sat_sun: "Sábado e Domingo: Fechado",
    contact_address_val: "Av. Nossa Sra. de Nazaré, 2008 - Caimbé, Boa Vista - RR, 69312-165, Brasil",

    // Google Reviews Card
    reviews_title: "Avaliações no Google",
    reviews_subtitle: "O que dizem os nossos clientes no Google Maps",
    reviews_rating_summary: "Calificação de 5,0 de 62 avaliações no Google Maps",
    review_julian_name: "Julian Farias",
    review_julian_text: "Ela é uma profissional extremamente confiável. A melhor para nós, pode confiar, é nota dez!",
    review_julian_reply: "Obrigada, estimado cliente.",
    review_miguel_name: "Miguel Brazon",
    review_miguel_text: "Excelente atendimento, uma grande pessoa, fundamental para resolver o meu caso.",
    review_miguel_reply: "Obrigada!",
    review_fran_name: "Fran Costa",
    review_fran_text: "Excelente profissional! A Dra. Rivânia foi fundamental para a resolução do meu caso, demonstrando um alto nível de conhecimento técnico e grande atenção aos detalhes. Recomendo muito.",
    review_reply_label: "Resposta da Dra. Rivânia",
    review_verified_label: "Avaliação Verificada no Google"
  },
  es: {
    // Navigation
    home: "Inicio",
    about: "Sobre mí",
    services: "Áreas de Práctica",
    blog: "Artículos",
    contact: "Contacto",
    contact_btn: "Contacto",
    logo: "Dra. Rivânia Saraiva",

    // Hero Section
    hero_title_1: "Rivânia",
    hero_title_2: "Saraiva",
    hero_tagline: "Abogacía especializada en seguridad social. Asegurando sus derechos con ética, transparencia y dedicación.",
    hero_cta: "Agendar Consulta",
    marquee_text: "DRA. RIVÂNIA SARAIVA • ABOGACÍA DE LA SEGURIDAD SOCIAL • JUBILACIONES • PENSIONES • BENEFICIOS • BOA VISTA • RORAIMA • BRASIL • ",

    // About Section
    about_title: "Estudio Jurídico Dra. Rivânia Saraiva",
    about_intro: "Abogada especializada en Derecho de la Seguridad Social en Boa Vista, Roraima. Actuación dedicada y personalizada para garantizar sus derechos ante el INSS.",
    about_established: "Fundado en 2018",
    about_desc_1: "El Estudio Jurídico de la Dra. Rivânia Saraiva se destaca por la excelencia en la atención personalizada y artesanal en el ámbito del Derecho de la Seguridad Social. Comprendemos que cada caso representa la historia de vida y el futuro de un trabajador, por lo que empleamos la máxima precisión técnica y atención al detalle en cada solicitud de beneficio.",
    about_desc_2: "Nuestra sede principal se encuentra ubicada en Boa Vista, Roraima, ofreciendo una atención humana y acogedora a la comunidad local y regional, con un alto índice de resolución y dedicación.",
    about_contact_title: "Contacto Directo",
    about_email: "Correo",
    about_phone: "Teléfono",
    about_address: "Dirección",
    about_faq_title: "Preguntas Frecuentes",
    
    // FAQ Rows
    faq_1_title: "¿Cómo sé si tengo derecho a jubilarme?",
    faq_1_content: "Realizamos un análisis completo de su extracto de cotizaciones (CNIS), edad y tiempo de servicio bajo las reglas de transición de la reforma previsional para indicarle el momento exacto y la modalidad de jubilación más beneficiosa.",
    faq_2_title: "¿Qué documentos son fundamentales para iniciar el trámite?",
    faq_2_content: "Documentos de identidad (RG/CPF), comprobante de domicilio actualizado, Carnets de Trabajo (CTPS), recibos de aportes, extracto del CNIS y, en casos de trabajo especial/insalubre, el formulario PPP (Perfil Profisiográfico Previsional).",
    faq_3_title: "¿Qué es la planificación previsional y por qué realizarla?",
    faq_3_content: "Es un estudio técnico personalizado que evalúa todo el historial de aportes del trabajador para proyectar futuros escenarios de jubilación, evitando errores en la concesión, reduciendo pérdidas y garantizando el mayor monto de beneficio posible.",

    // Timeline / Achievements
    achievements_title: "Hitos y Reconocimientos",
    achievement_1_year: "2018",
    achievement_1_title: "Fundación de la Firma",
    achievement_1_desc: "Apertura de la sede propia en Boa Vista - RR enfocada exclusivamente en causas de seguridad social.",
    achievement_2_year: "2020",
    achievement_2_title: "Especialización Avanzada",
    achievement_2_desc: "Implementación de metodologías digitales integradas con el sistema Meu INSS para agilidad a nivel nacional.",
    achievement_3_year: "2023",
    achievement_3_title: "Reconocimiento Regional",
    achievement_3_desc: "Marca de más de 60 casos resueltos con aprobación unánime de 5.0 estrellas en las evaluaciones locales.",
    achievement_4_year: "2026",
    achievement_4_title: "Presencia Digital Expandida",
    achievement_4_desc: "Desarrollo de asesoría previsional digital para brasileños que residen en el extranjero.",

    // Services / Practice Areas
    services_hero_title: "ÁREAS DE",
    services_hero_subtitle: "PRÁCTICA",
    services_tagline: "Soluciones personalizadas en Derecho Previsional y de la Seguridad Social.",
    service_1_title: "Jubilación por Edad",
    service_1_desc: "Planificación y solicitud de jubilaciones urbanas y rurales para quienes cumplieron con la edad mínima.",
    service_2_title: "Jubilación por Tiempo de Aportes",
    service_2_desc: "Cálculo detallado del tiempo de cotización incluyendo la conversión de actividades especiales o insalubres.",
    service_3_title: "Planificación Previsional",
    service_3_desc: "Diagnóstico completo de los aportes pasados para maximizar el valor futuro de su jubilación.",
    service_4_title: "Subsidios por Enfermedad e Invalidez",
    service_4_desc: "Acompañamiento en procesos de incapacidad laboral temporal o permanente ante la junta médica evaluadora.",
    service_5_title: "Pensión por Fallecimiento y BPC/LOAS",
    service_5_desc: "Soporte para beneficiarios dependientes y asistencia social para adultos mayores y personas con discapacidad de bajos recursos.",

    // Blog
    blog_hero_title: "Artículos e",
    blog_hero_subtitle: "Informativos",
    blog_read_more: "Leer Artículo",
    blog_tag_planning: "Planificación",
    blog_tag_benefits: "Beneficios",
    blog_tag_rights: "Derechos",
    blog_post_1_title: "Cómo Planificar su Jubilación en 2026",
    blog_post_2_title: "BPC/LOAS: ¿Quién tiene derecho y cómo solicitarlo?",
    blog_post_3_title: "Pensión por Fallecimiento: Entienda las reglas actuales y quién tiene derecho",
    blog_post_4_title: "Conversión de Tiempo Especial: Cómo aumentar sus años de servicio",
    blog_post_5_title: "Qué hacer si su solicitud de beneficio es denegada por el INSS",
    blog_post_6_title: "Planificación Previsional para Profesionales Autónomos",

    // Contact & Google Reviews
    contact_title: "Contáctenos",
    contact_subtitle: "o envíenos un mensaje",
    contact_name_placeholder: "Nombre Completo",
    contact_email_placeholder: "Correo Electrónico",
    contact_message_placeholder: "Su mensaje o detalles de su caso",
    contact_submit: "Enviar Mensaje",
    contact_whatsapp_cta: "Hablar por WhatsApp",
    contact_newsletter_title: "Informativo Previsional",
    contact_newsletter_desc: "Suscríbase a nuestro boletín para recibir novedades sobre derechos sociales y cambios en las leyes de seguridad social directamente en su correo.",
    contact_newsletter_placeholder: "Su mejor correo electrónico",
    contact_newsletter_submit: "Suscribirse",
    contact_socials_title: "Redes Sociales",
    contact_hours_title: "Horario de Atención",
    contact_hours_mon_wed: "Lunes a Miércoles: 09h a 18h",
    contact_hours_thu: "Jueves: 09h a 18h",
    contact_hours_fri: "Viernes: 09h a 16h",
    contact_hours_sat_sun: "Sábado y Domingo: Cerrado",
    contact_address_val: "Av. Nossa Sra. de Nazaré, 2008 - Caimbé, Boa Vista - RR, 69312-165, Brasil",

    // Google Reviews Card
    reviews_title: "Reseñas en Google",
    reviews_subtitle: "Lo que dicen nuestros clientes en Google Maps",
    reviews_rating_summary: "Calificación de 5,0 de 62 opiniones en Google Maps",
    review_julian_name: "Julian Farias",
    review_julian_text: "Ella es una mujer sumamente confiable. La mejor para nosotros, se puede confiar en ella, ¡es excelente!",
    review_julian_reply: "Gracias, estimado cliente.",
    review_miguel_name: "Miguel Brazon",
    review_miguel_text: "Excelente servicio, una gran persona, fundamental para resolver mi caso.",
    review_miguel_reply: "Gracias",
    review_fran_name: "Fran Costa",
    review_fran_text: "¡Excelente profesional! La Dra. Rivânia fue fundamental para la resolución de mi caso, demostrando un alto nivel de conocimientos técnicos y una gran atención al detalle. La recomiendo.",
    review_reply_label: "Respuesta de la Dra. Rivânia",
    review_verified_label: "Reseña Verificada de Google"
  }
};

export const LanguageProvider = ({ children }) => {
  // Try to load language from localStorage or default to Brazilian Portuguese ('pt')
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("app_lang");
    return saved === "es" ? "es" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", language);
    // Dynamically set HTML lang attribute
    document.documentElement.lang = language === "es" ? "es" : "pt-BR";
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
