import type { Locale } from "@/i18n/config";

interface ContentBlock {
  title: string;
  body: string;
}

export interface MedicalProvidersCopy {
  eyebrow: string;
  heading: string;
  introduction: string;
  recoveryHeading: string;
  recoveryIntro: readonly [string, string];
  recoverable: readonly [ContentBlock, ContentBlock];
  processHeading: string;
  processIntro: string;
  steps: readonly [ContentBlock, ContentBlock, ContentBlock, ContentBlock, ContentBlock];
  feeStatement: string;
  cta: string;
  contactNote: string;
}

// Keep the attorney-supplied English text verbatim. Translations require attorney review.
export const medicalProvidersByLocale: Record<Locale, MedicalProvidersCopy> = {
  en: {
    eyebrow: "FOR MEDICAL PROVIDERS",
    heading: "PIP Claim Recovery for Massachusetts Medical Providers",
    introduction: "Bostan Law helps Massachusetts medical providers recover unpaid or underpaid Personal Injury Protection (PIP) claims.",
    recoveryHeading: "What Is Recoverable Under Massachusetts PIP Law",
    recoveryIntro: [
      "Under Massachusetts law, auto insurers are required to pay reasonable and necessary medical expenses arising from motor vehicle accidents up to the policy limit.",
      "When insurers deny, delay, or underpay these claims, Bostan Law pursues recovery of:",
    ],
    recoverable: [
      {
        title: "Unpaid Medical Bills & Treatment Costs",
        body: "The full billed amount for services rendered, provided the treatment was reasonable, necessary, and causally related to the accident.",
      },
      {
        title: "Attorney's Fees & Legal Costs",
        body: "In many successful PIP dispute actions under Massachusetts law, courts require insurers to cover reasonable attorney's fees and litigation costs, meaning your recovery is not eroded by legal expenses.",
      },
    ],
    processHeading: "The Bostan Law PIP Recovery Process",
    processIntro: "We handle the entire collections pipeline so your billing staff doesn't have to waste time chasing insurance adjusters.",
    steps: [
      {
        title: "Claim Submission",
        body: "Send us your unpaid, denied, or underpaid patient bills and associated medical documentation.",
      },
      {
        title: "Free Legal & Financial Evaluation",
        body: "We audit the claim file, review insurer correspondence (such as IME reports, coordination of benefit issues, or \"usual and customary\" reduction notices), and assess legal viability and recovery potential.",
      },
      {
        title: "Formal Legal Demand",
        body: "We issue a formal statutory demand letter to the auto insurer, demanding immediate payment for the medical provider.",
      },
      {
        title: "Litigation & Arbitration (If Needed)",
        body: "If the insurer refuses to pay or fails to respond appropriately within the statutory window, we file suit in Massachusetts courts or pursue formal dispute resolution to compel payment.",
      },
      {
        title: "Fund Recovery",
        body: "Once the claim is resolved through settlement or judgment, funds are recovered.",
      },
    ],
    feeStatement: "There are zero upfront fees—we only get paid when we successfully recover what you are owed.",
    cta: "Request a Free Evaluation",
    contactNote: "Please do not include patient records in the website contact form.",
  },
  es: {
    eyebrow: "PARA PROVEEDORES MÉDICOS",
    heading: "Recuperación de reclamaciones de PIP para proveedores médicos de Massachusetts",
    introduction: "Bostan Law ayuda a los proveedores médicos de Massachusetts a recuperar importes adeudados en reclamaciones de Protección contra Lesiones Personales (PIP) impagadas o pagadas de forma insuficiente.",
    recoveryHeading: "Qué se puede recuperar conforme a la ley de PIP de Massachusetts",
    recoveryIntro: [
      "Conforme a la ley de Massachusetts, las aseguradoras de automóviles deben pagar los gastos médicos razonables y necesarios derivados de accidentes de vehículos motorizados, hasta el límite de la póliza.",
      "Cuando las aseguradoras deniegan, retrasan o pagan de forma insuficiente estas reclamaciones, Bostan Law procura recuperar lo siguiente:",
    ],
    recoverable: [
      {
        title: "Facturas médicas impagadas y costos de tratamiento",
        body: "El importe total facturado por los servicios prestados, siempre que el tratamiento haya sido razonable, necesario y guarde una relación causal con el accidente.",
      },
      {
        title: "Honorarios de abogados y costos legales",
        body: "En muchos litigios de PIP con resultado favorable conforme a la ley de Massachusetts, los tribunales exigen a las aseguradoras que cubran los honorarios razonables de abogados y los costos del litigio, de modo que los gastos legales no reduzcan el importe recuperado.",
      },
    ],
    processHeading: "El proceso de recuperación de PIP de Bostan Law",
    processIntro: "Nos encargamos de todo el proceso de cobro para que su personal de facturación no tenga que perder tiempo haciendo seguimiento con los ajustadores de seguros.",
    steps: [
      {
        title: "Presentación de la reclamación",
        body: "Envíenos las facturas de pacientes que estén impagadas, hayan sido denegadas o se hayan pagado de forma insuficiente, junto con la documentación médica correspondiente.",
      },
      {
        title: "Evaluación legal y financiera gratuita",
        body: "Auditamos el expediente de la reclamación, revisamos la correspondencia de la aseguradora (como informes de exámenes médicos independientes, cuestiones de coordinación de beneficios o avisos de reducción por importes «usuales y habituales») y evaluamos la viabilidad legal y las posibilidades de recuperación.",
      },
      {
        title: "Requerimiento legal formal",
        body: "Enviamos a la aseguradora de automóviles una carta de requerimiento formal conforme a la ley en la que exigimos el pago inmediato al proveedor médico.",
      },
      {
        title: "Litigio y arbitraje (si es necesario)",
        body: "Si la aseguradora se niega a pagar o no responde adecuadamente dentro del plazo legal, presentamos una demanda ante los tribunales de Massachusetts o recurrimos a un procedimiento formal de resolución de disputas para exigir el pago.",
      },
      {
        title: "Recuperación de fondos",
        body: "Una vez resuelta la reclamación mediante un acuerdo o una sentencia, se recuperan los fondos.",
      },
    ],
    feeStatement: "No hay honorarios por adelantado: solo cobramos cuando logramos recuperar lo que se le adeuda.",
    cta: "Solicite una evaluación gratuita",
    contactNote: "No incluya expedientes de pacientes en el formulario de contacto del sitio web.",
  },
  kea: {
    eyebrow: "PA PRESTADORIS DI SAÚDI",
    heading: "Rekuperason di riklamasons PIP pa prestadoris di saúdi na Massachusetts",
    introduction: "Bostan Law ta djuda prestadoris di saúdi na Massachusetts a rekupera pagamentus ki ka foi fetu ô ki foi fetu di forma insufisienti na riklamasons di Proteson kontra Ferimentus Pesoal (PIP).",
    recoveryHeading: "Kuzé ki pode ser rekuperadu sigundu lei PIP di Massachusetts",
    recoveryIntro: [
      "Sigundu lei di Massachusetts, seguradoras di karu ten ki paga gastus médikus razoável y nesesáriu ki ben di asidentis ku veíkulus motorizadu, ti limiti di apólice.",
      "Kantu seguradoras ta nega, atraza ô paga menus di ki é devidu na es riklamasons, Bostan Law ta buska rekupera:",
    ],
    recoverable: [
      {
        title: "Faturas médiku sen paga y kustus di tratamentu",
        body: "Valor total faturadu pa servisus prestadu, si tratamentu foi razoável, nesesáriu y kauzalmenti ligadu ku asidenti.",
      },
      {
        title: "Honorárius di advogadu y kustus legal",
        body: "Na txeu disputas PIP ku rezultadu favorável sigundu lei di Massachusetts, tribunais ta iziji ki seguradoras kubri honorárius razoável di advogadus y kustus di litíjiu, pa gastus legal ka diminui montanti rekuperadu.",
      },
    ],
    processHeading: "Prosésu di rekuperason di PIP di Bostan Law",
    processIntro: "Nu ta kuida di prosésu di kobransa interu, pa bu ekipa di faturason ka perde tenpu ta kori tras di ajustadoris di seguru.",
    steps: [
      {
        title: "Apresentason di riklamason",
        body: "Manda-nu faturas di pasientis ki ka foi pagu, ki foi negadu ô ki foi pagu di forma insufisienti, djuntu ku dokumentason médiku rilasionadu.",
      },
      {
        title: "Avaliason legal y finanséru di grasa",
        body: "Nu ta audita prosesu di riklamason, revê korrespondénsia di seguradora (sima relatórius di izami médiku indipendenti, kestons di koordenason di benefísius ô avizus di riduson di valor «uzual y kustumáriu») y avalia viabilidadi legal y posibilidadi di rekuperason.",
      },
      {
        title: "Izijénsia legal formal",
        body: "Nu ta manda un karta formal di izijénsia sigundu lei pa seguradora di karu, ta iziji pagamentu imediatu pa prestador di saúdi.",
      },
      {
        title: "Litíjiu y arbitrajen (si for nesesáriu)",
        body: "Si seguradora reseza paga ô ka responde di forma adikuadu dentu di prazu legal, nu ta entra ku un ason na tribunais di Massachusetts ô ta bai pa un prosésu formal di rizoluson di disputa pa iziji pagamentu.",
      },
      {
        title: "Rekuperason di fundus",
        body: "Dipos ki riklamason é rizolvidu pa akordu ô sentensa, fundus é rekuperadu.",
      },
    ],
    feeStatement: "Ka ten honorárius adiantadu. Nu só ta resebe pagamentu kantu nu konsigi rekupera kel ki bu ten pa resebe.",
    cta: "Pidi un avaliason di grasa",
    contactNote: "Ka inklui rejistus di pasientis na formuláriu di kontatu di site.",
  },
  ht: {
    eyebrow: "POU FOUNISÈ SWEN MEDIKAL",
    heading: "Rekiperasyon reklamasyon PIP pou founisè swen medikal nan Massachusetts",
    introduction: "Bostan Law ede founisè swen medikal nan Massachusetts rekipere peman yo poko resevwa oswa yo resevwa sèlman an pati pou reklamasyon Pwoteksyon pou Blesi Pèsonèl (PIP).",
    recoveryHeading: "Sa nou ka rekipere dapre lwa PIP nan Massachusetts",
    recoveryIntro: [
      "Dapre lwa Massachusetts, konpayi asirans otomobil yo dwe peye depans medikal rezonab ak nesesè ki soti nan aksidan ki enplike machin ak motè, jiska limit kontra asirans lan.",
      "Lè konpayi asirans yo refize reklamasyon sa yo, retade yo oswa peye mwens pase sa yo dwe, Bostan Law chèche rekipere:",
    ],
    recoverable: [
      {
        title: "Fakti medikal ki poko peye ak depans tretman",
        body: "Tout montan ki sou fakti pou sèvis ki te bay yo, depi tretman an te rezonab, nesesè epi li te gen yon relasyon koz ak aksidan an.",
      },
      {
        title: "Onorè avoka ak depans legal",
        body: "Nan anpil dosye kontestasyon PIP ki reyisi dapre lwa Massachusetts, tribinal yo egzije konpayi asirans yo peye onorè avoka ki rezonab ak depans litij yo, konsa depans legal yo pa diminye montan ou rekipere a.",
      },
    ],
    processHeading: "Pwosesis Bostan Law pou rekipere reklamasyon PIP",
    processIntro: "Nou okipe tout pwosesis rekouvreman an pou ekip faktirasyon ou a pa pèdi tan ap kouri dèyè moun k ap evalye reklamasyon asirans yo.",
    steps: [
      {
        title: "Soumèt reklamasyon an",
        body: "Voye ban nou fakti pasyan ki poko peye, yo refize oswa yo peye sèlman an pati, ansanm ak dokiman medikal ki gen rapò ak yo.",
      },
      {
        title: "Evalyasyon legal ak finansye gratis",
        body: "Nou kontwole dosye reklamasyon an, egzamine korespondans konpayi asirans lan (tankou rapò egzamen medikal endepandan, kesyon sou kowòdinasyon benefis oswa avi sou rediksyon dapre tarif «abityèl ak koutim») epi evalye si reklamasyon an posib legalman ak chans pou rekipere lajan an.",
      },
      {
        title: "Demann legal fòmèl",
        body: "Nou voye yon lèt demann fòmèl dapre lalwa bay konpayi asirans otomobil la pou egzije li peye founisè swen medikal la tousuit.",
      },
      {
        title: "Litij ak abitraj (si sa nesesè)",
        body: "Si konpayi asirans lan refize peye oswa li pa reponn jan sa dwe fèt nan delè legal la, nou depoze yon pwosè nan tribinal Massachusetts oswa itilize yon pwosesis fòmèl pou rezoud konfli a pou fòse li peye.",
      },
      {
        title: "Rekiperasyon lajan",
        body: "Lè reklamasyon an rezoud grasa yon antant oswa yon jijman, lajan an rekipere.",
      },
    ],
    feeStatement: "Pa gen onorè alavans. Nou touche sèlman lè nou reyisi rekipere sa yo dwe ou a.",
    cta: "Mande yon evalyasyon gratis",
    contactNote: "Tanpri, pa mete dosye pasyan nan fòm kontak sit la.",
  },
  ru: {
    eyebrow: "ДЛЯ ПОСТАВЩИКОВ МЕДИЦИНСКИХ УСЛУГ",
    heading: "Взыскание выплат PIP для поставщиков медицинских услуг в Массачусетсе",
    introduction: "Bostan Law помогает поставщикам медицинских услуг в Массачусетсе взыскивать невыплаченные или недоплаченные суммы по требованиям в рамках страхования Personal Injury Protection (PIP).",
    recoveryHeading: "Что можно взыскать по закону штата Массачусетс о PIP",
    recoveryIntro: [
      "По закону штата Массачусетс автостраховщики обязаны оплачивать разумные и необходимые медицинские расходы, возникшие в результате ДТП с участием автотранспортных средств, в пределах лимита полиса.",
      "Если страховщики отклоняют такие требования, задерживают выплаты или выплачивают меньше положенного, Bostan Law добивается взыскания следующих сумм:",
    ],
    recoverable: [
      {
        title: "Неоплаченные медицинские счета и расходы на лечение",
        body: "Полная сумма, выставленная за оказанные услуги, при условии что лечение было разумным, необходимым и причинно связано с аварией.",
      },
      {
        title: "Гонорары адвокатов и юридические расходы",
        body: "Во многих успешно разрешённых спорах по PIP в рамках законодательства Массачусетса суды обязывают страховщиков покрывать разумные гонорары адвокатов и расходы на судебное разбирательство, поэтому юридические расходы не уменьшают взысканную сумму.",
      },
    ],
    processHeading: "Как Bostan Law взыскивает выплаты PIP",
    processIntro: "Мы ведём весь процесс взыскания, чтобы вашим сотрудникам по выставлению счетов не приходилось тратить время на обращения к специалистам по урегулированию страховых требований.",
    steps: [
      {
        title: "Подача требования",
        body: "Передайте нам счета пациентов, которые не оплачены, отклонены или оплачены не полностью, и медицинскую документацию по ним.",
      },
      {
        title: "Бесплатная юридическая и финансовая оценка",
        body: "Мы проверяем материалы по требованию, изучаем переписку со страховщиком (например, отчёты о независимых медицинских обследованиях, вопросы координации страховых выплат или уведомления о снижении суммы по критерию «обычных и принятых» тарифов) и оцениваем юридическую обоснованность и перспективы взыскания.",
      },
      {
        title: "Официальное требование об оплате",
        body: "Мы направляем автостраховщику официальное письмо-требование в соответствии с законом и требуем немедленной оплаты поставщику медицинских услуг.",
      },
      {
        title: "Судебное разбирательство и арбитраж (при необходимости)",
        body: "Если страховщик отказывается платить или не отвечает надлежащим образом в установленный законом срок, мы подаём иск в суд штата Массачусетс или прибегаем к формальной процедуре урегулирования спора, чтобы добиться оплаты.",
      },
      {
        title: "Взыскание средств",
        body: "После разрешения требования по соглашению сторон или решению суда средства взыскиваются.",
      },
    ],
    feeStatement: "Авансовых гонораров нет. Мы получаем оплату, только когда нам удаётся взыскать причитающиеся вам средства.",
    cta: "Запросить бесплатную оценку",
    contactNote: "Пожалуйста, не отправляйте документы пациентов через контактную форму сайта.",
  },
  fr: {
    eyebrow: "POUR LES PRESTATAIRES DE SOINS",
    heading: "Recouvrement des demandes PIP pour les prestataires de soins du Massachusetts",
    introduction: "Bostan Law aide les prestataires de soins du Massachusetts à recouvrer les sommes impayées ou insuffisamment versées au titre des demandes relevant de la garantie Personal Injury Protection (PIP).",
    recoveryHeading: "Ce qui peut être recouvré en vertu de la loi PIP du Massachusetts",
    recoveryIntro: [
      "En vertu de la loi du Massachusetts, les assureurs automobiles sont tenus de payer les frais médicaux raisonnables et nécessaires découlant d’accidents impliquant des véhicules motorisés, dans la limite du montant prévu par la police.",
      "Lorsque les assureurs refusent ou retardent le paiement de ces demandes, ou versent un montant insuffisant, Bostan Law cherche à recouvrer les sommes suivantes :",
    ],
    recoverable: [
      {
        title: "Factures médicales impayées et frais de traitement",
        body: "La totalité du montant facturé pour les services rendus, à condition que le traitement ait été raisonnable, nécessaire et lié de façon causale à l’accident.",
      },
      {
        title: "Honoraires d’avocat et frais juridiques",
        body: "Dans de nombreux litiges PIP tranchés favorablement en vertu de la loi du Massachusetts, les tribunaux exigent des assureurs qu’ils couvrent les honoraires raisonnables d’avocat et les frais de procédure, de sorte que les frais juridiques ne réduisent pas le montant que vous recouvrez.",
      },
    ],
    processHeading: "Le processus de recouvrement PIP de Bostan Law",
    processIntro: "Nous prenons en charge tout le processus de recouvrement pour que votre équipe de facturation n’ait pas à perdre du temps à relancer les gestionnaires de sinistres.",
    steps: [
      {
        title: "Soumission de la demande",
        body: "Envoyez-nous vos factures de patients impayées, refusées ou insuffisamment réglées, ainsi que les documents médicaux correspondants.",
      },
      {
        title: "Évaluation juridique et financière gratuite",
        body: "Nous vérifions le dossier de la demande, examinons la correspondance de l’assureur (par exemple, les rapports d’examen médical indépendant, les questions de coordination des prestations ou les avis de réduction fondés sur des tarifs « usuels et habituels »), puis évaluons la viabilité juridique et les possibilités de recouvrement.",
      },
      {
        title: "Mise en demeure formelle",
        body: "Nous adressons à l’assureur automobile une lettre de mise en demeure conforme à la loi, exigeant le paiement immédiat du prestataire de soins.",
      },
      {
        title: "Contentieux et arbitrage (si nécessaire)",
        body: "Si l’assureur refuse de payer ou ne répond pas de manière appropriée dans le délai prévu par la loi, nous saisissons les tribunaux du Massachusetts ou engageons une procédure formelle de règlement du litige afin d’obtenir le paiement.",
      },
      {
        title: "Recouvrement des fonds",
        body: "Une fois la demande réglée par un accord ou un jugement, les fonds sont recouvrés.",
      },
    ],
    feeStatement: "Aucun honoraire n’est demandé à l’avance. Nous ne sommes rémunérés que lorsque nous parvenons à recouvrer ce qui vous est dû.",
    cta: "Demander une évaluation gratuite",
    contactNote: "Veuillez ne pas inclure de dossiers de patients dans le formulaire de contact du site.",
  },
};
