import type { Locale } from "@/i18n/config";
import type { PracticeAreaDetails, PracticeAreaId } from "@/types/practiceArea";

/** Draft public-facing copy. Attorney and qualified language review required before deployment. */
export const practiceAreaDetailsByLocale: Record<Locale, Record<PracticeAreaId, PracticeAreaDetails>> = {
  en: {
    "car-accidents": {
      introduction: "After a car crash, medical care, missed work, and insurance questions can arrive at once. Understanding which coverage may apply and what information to preserve can help you make informed decisions. BOSTAN LAW can review the circumstances of your accident and explain possible next steps.",
      keyPoints: [
        "Massachusetts Personal Injury Protection (PIP) may help with certain crash-related medical expenses and lost income, depending on the policy and circumstances.",
        "Keep medical records, photographs, witness information, and insurance correspondence. These details can help an attorney understand what happened.",
        "Potential injury claims and filing deadlines depend on the facts. An attorney can help identify which rules may apply to your situation.",
      ],
    },
    "motorcycle-accidents": {
      introduction: "A motorcycle collision can leave you dealing with injuries, treatment, time away from work, and questions about responsibility. The available insurance coverage and legal options depend on the vehicles and people involved. BOSTAN LAW can listen to your account and help you understand what information matters.",
      keyPoints: [
        "Seek appropriate medical care and keep records of your treatment, expenses, and missed work.",
        "Preserve photographs, witness details, and information about the vehicles and road conditions when you can do so safely.",
        "Coverage and responsibility are fact-specific. A review can help clarify the options available after your collision.",
      ],
    },
    "truck-accidents": {
      introduction: "A collision involving a commercial truck may raise questions about the driver, the vehicle, the company, and the available insurance. The details of each crash matter. BOSTAN LAW can review what happened, identify information worth preserving, and help you understand possible next steps.",
      keyPoints: [
        "Document injuries, medical care, missed work, and the location and circumstances of the crash.",
        "Photos, witness accounts, vehicle information, and relevant records may help explain how the collision occurred.",
        "Potentially responsible parties and insurance coverage depend on the facts and should be evaluated individually.",
      ],
    },
    "slip-fall": {
      introduction: "A fall on someone else's property can happen because of a condition you did not expect. Whether a legal claim is available depends on the location, the condition, and the surrounding facts. BOSTAN LAW can help you review the incident and understand the questions that may matter.",
      keyPoints: [
        "Get needed medical care and keep records of your injuries and treatment.",
        "If possible, document the exact location, the condition that caused the fall, and any witnesses.",
        "Property responsibility is fact-specific. An attorney can assess whether the circumstances may support a claim.",
      ],
    },
    "pedestrian-accident": {
      introduction: "BOSTAN LAW helps people who were injured as pedestrians in motor vehicle crashes. We can review what happened and discuss possible next steps.",
      keyPoints: [
        "Keep records of your injuries, treatment, and related expenses.",
        "Preserve the crash location, vehicle details, photographs, and witness information if you have them.",
        "Bring any crash report or insurance correspondence to your consultation.",
      ],
    },
    "scooter-accident": {
      introduction: "BOSTAN LAW can review an injury involving a scooter and discuss whether the firm can assist. The type of scooter and the circumstances of the crash may matter.",
      keyPoints: [
        "Keep records of your injuries and treatment.",
        "Note the scooter type, the crash location, and any vehicles involved.",
        "Preserve photographs, witness information, and any records from a rental operator if applicable.",
      ],
    },
  },
  es: {
    "car-accidents": {
      introduction: "Después de un choque, es común tener que atender lesiones, faltar al trabajo y responder preguntas del seguro al mismo tiempo. Entender qué cobertura podría corresponder y qué información conviene conservar ayuda a tomar decisiones. BOSTAN LAW puede revisar las circunstancias y explicarle posibles próximos pasos.",
      keyPoints: [
        "La Protección contra Lesiones Personales (PIP) de Massachusetts podría cubrir ciertos gastos médicos e ingresos perdidos, según la póliza y las circunstancias.",
        "Conserve expedientes médicos, fotografías, datos de testigos y comunicaciones con las aseguradoras para ayudar a aclarar lo sucedido.",
        "Las posibles reclamaciones y los plazos dependen de los hechos. Un abogado puede evaluar qué reglas podrían aplicar a su caso.",
      ],
    },
    "motorcycle-accidents": {
      introduction: "Un accidente de motocicleta puede dejar lesiones, tratamientos, días sin trabajar y dudas sobre quién tuvo responsabilidad. La cobertura del seguro y las opciones legales dependen de los vehículos y las personas involucradas. BOSTAN LAW puede escuchar su relato y ayudarle a identificar la información importante.",
      keyPoints: [
        "Busque la atención médica necesaria y guarde los registros de tratamientos, gastos y trabajo perdido.",
        "Si puede hacerlo sin riesgo, conserve fotografías, datos de testigos e información sobre los vehículos y la vía.",
        "La cobertura y la responsabilidad dependen de los hechos; una revisión puede aclarar sus opciones.",
      ],
    },
    "truck-accidents": {
      introduction: "Un choque con un camión comercial puede plantear preguntas sobre el conductor, el vehículo, la empresa y las pólizas disponibles. Los detalles de cada accidente importan. BOSTAN LAW puede revisar lo ocurrido, ayudarle a conservar información útil y explicarle posibles próximos pasos.",
      keyPoints: [
        "Documente las lesiones, la atención médica, el trabajo perdido y las circunstancias del choque.",
        "Fotografías, testimonios, datos de los vehículos y otros registros pueden ayudar a entender cómo ocurrió.",
        "Las posibles responsabilidades y coberturas deben evaluarse según los hechos de cada caso.",
      ],
    },
    "slip-fall": {
      introduction: "Una caída en una propiedad ajena puede ocurrir por una condición que usted no esperaba. La posibilidad de presentar una reclamación depende del lugar, la condición y las circunstancias. BOSTAN LAW puede revisar el incidente con usted y explicarle qué preguntas podrían ser importantes.",
      keyPoints: [
        "Reciba la atención médica necesaria y conserve los registros de sus lesiones y tratamiento.",
        "Si es posible, documente el lugar exacto, la condición que causó la caída y los datos de testigos.",
        "La responsabilidad por una propiedad depende de los hechos; un abogado puede evaluar sus opciones.",
      ],
    },
    "pedestrian-accident": {
      introduction: "BOSTAN LAW ayuda a personas que sufrieron lesiones como peatones en accidentes con vehículos motorizados. Podemos revisar lo sucedido y conversar sobre los posibles próximos pasos.",
      keyPoints: [
        "Conserve los registros de sus lesiones, tratamientos y gastos relacionados.",
        "Guarde la ubicación del accidente, los datos de los vehículos, las fotografías y la información de los testigos, si dispone de ellos.",
        "Traiga a la consulta cualquier informe del accidente o comunicación de una aseguradora.",
      ],
    },
    "scooter-accident": {
      introduction: "BOSTAN LAW puede revisar una lesión relacionada con un scooter y analizar si el despacho puede ayudarle. El tipo de scooter y las circunstancias del accidente pueden ser relevantes.",
      keyPoints: [
        "Conserve los registros de sus lesiones y tratamientos.",
        "Anote el tipo de scooter, el lugar del accidente y los vehículos involucrados.",
        "Conserve las fotografías, los datos de los testigos y, si corresponde, los registros de la empresa de alquiler.",
      ],
    },
  },
  kea: {
    "car-accidents": {
      introduction: "Dipôs di un asidenti di karu, kuidadu médiku, trabadju perdidu y pergunta di seguru pode txiga djuntu. Konxê kubertura ki pode aplika y guarda informason ta djuda bu toma disizons. BOSTAN LAW pode analiza bus sirkunstânsia y splika pusível próximus pasus.",
      keyPoints: [
        "Proteçon kontra Ferimentus Pessoal (PIP) na Massachusetts pode djuda ku sertus gastus médikus y rendimentu perdidu, dipendendu di apólice y situason.",
        "Guarda rejistus médikus, fotus, kontaktus di testemunhas y komunikasons ku seguradoras.",
        "Pusível riklamasons y prazus ta dipende di fatuz; un advogadu pode avalia kual regra ta aplika.",
      ],
    },
    "motorcycle-accidents": {
      introduction: "Un asidenti di mota pode traze ferimentus, tratamentu, tempu sen trabadju y dúvida sobri responsabilidadi. Kubertura di seguru y opsons legal ta dipende di kel situason. BOSTAN LAW pode obi bu istória y djuda bu konxê informason importanti.",
      keyPoints: [
        "Prokura kuidadu médiku y guarda rejistus di tratamentu, gastus y trabadju perdidu.",
        "Si for siguru, guarda fotus, kontaktus di testemunhas y informason di veíkulus y strada.",
        "Kubertura y responsabilidadi ta dipende di fatuz; un avaliason pode klarifika bus opsons.",
      ],
    },
    "truck-accidents": {
      introduction: "Un kolizon ku kamion komersial pode levanta pergunta sobri motorista, veíkulu, empresa y seguru. Kada asidenti ten ses próprius fatuz. BOSTAN LAW pode analiza kuzê ki kontise y djuda bu guarda prova útil.",
      keyPoints: [
        "Dokumenta ferimentus, tratamentu, trabadju perdidu y lokal di asidenti.",
        "Fotus, testemunhas y informason di veíkulus pode djuda splika kolizon.",
        "Responsabilidadi y kubertura di seguru meste ser avaliadu konformi fatuz di kada kazu.",
      ],
    },
    "slip-fall": {
      introduction: "Un keda na propriedadi di otu algen pode kontise pamodi un kondison perigosu. Pusibilidadi di riklamason ta dipende di lokal, kondison y sirkunstânsia. BOSTAN LAW pode revê kuzê ki kontise ku bo.",
      keyPoints: [
        "Prokura kuidadu médiku y guarda rejistus di ferimentus y tratamentu.",
        "Si bu pode, dokumenta lokal izatu, kondison ki kauza keda y testemunhas.",
        "Responsabilidadi di propriedadi ta dipende di fatuz; un advogadu pode avalia opsons.",
      ],
    },
    "pedestrian-accident": {
      introduction: "BOSTAN LAW ta djuda pesoas ki fika feridu komu pedons na asidentis ku veíkulus motorizadu. Nu pode revê kuzé ki kontise y konversa sobri prósimus pasus posível.",
      keyPoints: [
        "Guarda rejistus di bus ferimentus, tratamentus y gastus rilasionadu.",
        "Guarda lokal di asidenti, dadus di veíkulus, fotus y informason di testimunhas, si bu ten es.",
        "Tráze pa konsulta kualker relatóriu di asidenti ô korrespondénsia di seguradora.",
      ],
    },
    "scooter-accident": {
      introduction: "BOSTAN LAW pode revê un ferimentu ki envolvi un scooter y konversa sobri si skritóriu pode djuda-bu. Tipu di scooter y sirkunstánsias di asidenti pode ser importanti.",
      keyPoints: [
        "Guarda rejistus di bus ferimentus y tratamentus.",
        "Nota tipu di scooter, lokal di asidenti y veíkulus envolvidu.",
        "Guarda fotus, informason di testimunhas y rejistus di inpraza di aluguer, si aplika.",
      ],
    },
  },
  ht: {
    "car-accidents": {
      introduction: "Apre yon aksidan machin, swen medikal, jou travay ou pèdi ak kesyon asirans ka vini ansanm. Lè ou konprann ki pwoteksyon ki ka aplikab epi ki enfòmasyon pou konsève, sa ka ede w pran desizyon. BOSTAN LAW ka egzamine sikonstans aksidan an avèk ou.",
      keyPoints: [
        "Pwoteksyon pou aksidan pèsonèl (PIP) nan Massachusetts ka ede peye kèk depans medikal ak revni ki pèdi, selon kontra a ak sikonstans yo.",
        "Konsève dosye medikal, foto, enfòmasyon temwen ak kominikasyon ou te genyen ak konpayi asirans yo.",
        "Reklamasyon ak delè posib yo depann de reyalite yo; yon avoka ka evalye sa ki aplikab.",
      ],
    },
    "motorcycle-accidents": {
      introduction: "Yon aksidan motosiklèt ka lakòz blesi, tretman, absans nan travay ak kesyon sou responsablite. Pwoteksyon asirans ak chwa legal yo depann de sikonstans yo. BOSTAN LAW ka koute sa ki pase epi ede w idantifye enfòmasyon ki enpòtan.",
      keyPoints: [
        "Chèche swen medikal ou bezwen epi konsève dosye tretman, depans ak travay ou pèdi.",
        "Si sa san danje, konsève foto, kontak temwen ak enfòmasyon sou machin yo ak wout la.",
        "Asirans ak responsablite depann de reyalite yo; yon egzamen ka ede klarifye chwa ou yo.",
      ],
    },
    "truck-accidents": {
      introduction: "Yon kolizyon ak yon kamyon komèsyal ka soulve kesyon sou chofè a, kamyon an, konpayi an ak asirans yo. Chak aksidan gen pwòp reyalite pa li. BOSTAN LAW ka egzamine sa ki pase epi ede w konsève enfòmasyon ki ka itil.",
      keyPoints: [
        "Dokimante blesi, swen medikal, travay ou pèdi ak kote aksidan an te fèt.",
        "Foto, temwen ak enfòmasyon sou machin yo ka ede esplike kolizyon an.",
        "Moun ki ka responsab ak pwoteksyon asirans depann de reyalite chak ka.",
      ],
    },
    "slip-fall": {
      introduction: "Yon tonbe sou pwopriyete yon lòt moun ka rive akòz yon kondisyon ou pa t atann. Posibilite pou fè yon reklamasyon depann de kote a, kondisyon an ak sa ki pase. BOSTAN LAW ka ede w egzamine ensidan an.",
      keyPoints: [
        "Jwenn swen medikal ou bezwen epi konsève dosye blesi ak tretman ou.",
        "Si ou kapab, dokimante kote egzak la, kondisyon ki te lakòz tonbe a ak temwen yo.",
        "Responsablite sou yon pwopriyete depann de reyalite yo; yon avoka ka evalye chwa ou yo.",
      ],
    },
    "pedestrian-accident": {
      introduction: "BOSTAN LAW ede moun ki te blese antanke pyeton nan aksidan ki enplike machin. Nou ka egzamine sa ki te pase epi pale sou ki etap ou ta ka pran.",
      keyPoints: [
        "Kenbe dosye sou blesi ou, tretman ou ak depans ki gen rapò ak yo.",
        "Kenbe adrès kote aksidan an te fèt, detay sou machin yo, foto ak enfòmasyon sou temwen yo, si ou genyen yo.",
        "Pote nenpòt rapò sou aksidan an oswa korespondans ak konpayi asirans lan nan konsiltasyon ou.",
      ],
    },
    "scooter-accident": {
      introduction: "BOSTAN LAW ka egzamine yon blesi ki gen rapò ak yon skoutè epi pale sou si kabinè a ka ede ou. Kalite skoutè a ak sikonstans aksidan an ka enpòtan.",
      keyPoints: [
        "Kenbe dosye sou blesi ou ak tretman ou.",
        "Note kalite skoutè a, kote aksidan an te fèt ak tout machin ki te enplike.",
        "Kenbe foto, enfòmasyon sou temwen yo ak dosye ki soti nan konpayi lokasyon an, si sa aplikab.",
      ],
    },
  },
  ru: {
    "car-accidents": {
      introduction: "После автомобильной аварии вопросы лечения, пропущенной работы и страхования часто возникают одновременно. Понимание возможного покрытия и сохранение документов помогут принимать решения. BOSTAN LAW может изучить обстоятельства происшествия и объяснить возможные дальнейшие шаги.",
      keyPoints: [
        "Страхование Personal Injury Protection (PIP) в Массачусетсе может покрывать отдельные медицинские расходы и потерянный доход в зависимости от полиса и обстоятельств.",
        "Сохраняйте медицинские документы, фотографии, контакты свидетелей и переписку со страховщиками.",
        "Возможные требования и сроки зависят от фактов; адвокат поможет определить применимые правила.",
      ],
    },
    "motorcycle-accidents": {
      introduction: "Авария на мотоцикле может привести к травмам, лечению, пропуску работы и вопросам об ответственности. Страховое покрытие и юридические возможности зависят от обстоятельств. BOSTAN LAW выслушает вас и поможет понять, какие сведения могут иметь значение.",
      keyPoints: [
        "Обратитесь за необходимой медицинской помощью и сохраняйте документы о лечении, расходах и пропущенной работе.",
        "Если это безопасно, сохраните фотографии, контакты свидетелей и сведения о транспорте и дороге.",
        "Покрытие и ответственность зависят от фактов; оценка ситуации поможет понять варианты.",
      ],
    },
    "truck-accidents": {
      introduction: "Столкновение с коммерческим грузовиком может вызвать вопросы о водителе, машине, компании и страховом покрытии. Обстоятельства каждой аварии важны. BOSTAN LAW может изучить произошедшее и помочь сохранить полезные сведения.",
      keyPoints: [
        "Зафиксируйте травмы, лечение, пропущенную работу и обстоятельства столкновения.",
        "Фотографии, свидетели и данные о транспорте могут помочь установить, как произошла авария.",
        "Возможная ответственность и страховое покрытие оцениваются с учётом фактов конкретного дела.",
      ],
    },
    "slip-fall": {
      introduction: "Падение на чужой территории может произойти из-за неожиданного опасного условия. Возможность предъявить требование зависит от места, состояния территории и других обстоятельств. BOSTAN LAW может обсудить с вами произошедшее и помочь понять важные вопросы.",
      keyPoints: [
        "Получите необходимую медицинскую помощь и сохраните документы о травмах и лечении.",
        "По возможности зафиксируйте точное место, причину падения и контакты свидетелей.",
        "Ответственность владельца зависит от фактов; адвокат может оценить ваши варианты.",
      ],
    },
    "pedestrian-accident": {
      introduction: "BOSTAN LAW помогает пешеходам, получившим травмы в ДТП с участием автотранспортных средств. Мы можем изучить обстоятельства происшествия и обсудить возможные дальнейшие шаги.",
      keyPoints: [
        "Сохраните документы о травмах, лечении и связанных с ними расходах.",
        "Сохраните данные о месте ДТП и транспортных средствах, фотографии и сведения о свидетелях, если они у вас есть.",
        "Возьмите на консультацию имеющийся отчёт о ДТП и переписку со страховщиком.",
      ],
    },
    "scooter-accident": {
      introduction: "BOSTAN LAW может изучить обстоятельства травмы в происшествии со скутером и обсудить, может ли фирма вам помочь. Тип скутера и обстоятельства аварии могут иметь значение.",
      keyPoints: [
        "Сохраните документы о травмах и лечении.",
        "Запишите тип скутера, место аварии и сведения об участвовавших в ней транспортных средствах.",
        "Сохраните фотографии, сведения о свидетелях и документы компании проката, если это применимо.",
      ],
    },
  },
  fr: {
    "car-accidents": {
      introduction: "Après un accident de voiture, les soins, les journées de travail manquées et les questions d’assurance peuvent survenir en même temps. Comprendre les garanties possibles et conserver les informations utiles aide à prendre des décisions éclairées. BOSTAN LAW peut examiner les circonstances et expliquer les prochaines étapes envisageables.",
      keyPoints: [
        "La garantie Personal Injury Protection (PIP) du Massachusetts peut contribuer à certaines dépenses médicales et pertes de revenus, selon le contrat et les circonstances.",
        "Conservez les dossiers médicaux, les photos, les coordonnées des témoins et les échanges avec les assureurs.",
        "Les demandes possibles et les délais dépendent des faits; un avocat peut examiner les règles applicables.",
      ],
    },
    "motorcycle-accidents": {
      introduction: "Un accident de moto peut entraîner des blessures, des soins, une absence au travail et des questions de responsabilité. Les garanties d’assurance et les options juridiques dépendent des circonstances. BOSTAN LAW peut écouter votre récit et vous aider à identifier les informations utiles.",
      keyPoints: [
        "Obtenez les soins nécessaires et conservez les documents relatifs aux traitements, aux dépenses et au travail manqué.",
        "Si cela ne présente pas de danger, gardez les photos, les coordonnées des témoins et les informations sur les véhicules et la route.",
        "Les garanties et la responsabilité dépendent des faits; un examen peut clarifier vos options.",
      ],
    },
    "truck-accidents": {
      introduction: "Une collision avec un camion commercial peut soulever des questions sur le conducteur, le véhicule, l’entreprise et les assurances disponibles. Chaque accident a ses particularités. BOSTAN LAW peut examiner ce qui s’est passé et vous aider à préserver les informations utiles.",
      keyPoints: [
        "Documentez les blessures, les soins, le travail manqué et les circonstances de la collision.",
        "Photos, témoignages et renseignements sur les véhicules peuvent aider à comprendre l’accident.",
        "La responsabilité éventuelle et les garanties d’assurance doivent être évaluées selon les faits de chaque dossier.",
      ],
    },
    "slip-fall": {
      introduction: "Une chute sur la propriété d’autrui peut résulter d’une situation dangereuse inattendue. La possibilité d’une action dépend du lieu, de la condition en cause et des circonstances. BOSTAN LAW peut examiner l’incident avec vous et expliquer les questions importantes.",
      keyPoints: [
        "Recevez les soins nécessaires et conservez les documents relatifs à vos blessures et traitements.",
        "Si possible, documentez le lieu exact, la condition ayant causé la chute et les témoins.",
        "La responsabilité liée à un bien dépend des faits; un avocat peut évaluer vos options.",
      ],
    },
    "pedestrian-accident": {
      introduction: "BOSTAN LAW aide les piétons blessés dans des accidents impliquant des véhicules motorisés. Nous pouvons examiner les circonstances et discuter des prochaines démarches possibles.",
      keyPoints: [
        "Conservez les documents relatifs à vos blessures, à vos soins et aux dépenses associées.",
        "Conservez le lieu de l’accident, les renseignements sur les véhicules, les photos et les coordonnées des témoins si vous les avez.",
        "Apportez à la consultation tout rapport d’accident ou échange avec un assureur.",
      ],
    },
    "scooter-accident": {
      introduction: "BOSTAN LAW peut examiner une blessure liée à un accident de scooter et déterminer avec vous si le cabinet peut vous aider. Le type de scooter et les circonstances de l’accident peuvent avoir leur importance.",
      keyPoints: [
        "Conservez les documents relatifs à vos blessures et à vos soins.",
        "Notez le type de scooter, le lieu de l’accident et les véhicules impliqués.",
        "Conservez les photos, les coordonnées des témoins et, le cas échéant, les documents du service de location.",
      ],
    },
  },
};
