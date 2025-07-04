import { FAQData } from '@/types/types';

export const faqDataMain: FAQData[] = [
  {
    question: 'Кто обязан проходить аттестацию в Ростехнадзоре?',
    answer:
      'Аттестацию должны проходить руководители и специалисты, чья деятельность связана с эксплуатацией опасных производственных объектов (ОПО), включая тепло- и электроустановки, а также объекты, подпадающие под требования промышленной безопасности.',
  },
  {
    question: 'Как часто необходимо проходить повторную аттестацию?',
    answer:
      'Согласно действующим нормативам, периодичность аттестации составляет 5 лет. Однако при изменении должности или переходе на другой объект может потребоваться внеочередная аттестация.',
  },
  {
    question: 'Какие документы необходимы для прохождения аттестации?',
    answer:
      'Необходимы: заявление на аттестацию, копия удостоверения личности, документы об образовании и квалификации, а также подтверждение прохождения обучения по соответствующей программе.',
  },
  {
    question: 'Предоставляется ли удостоверение после успешной аттестации?',
    answer:
      'Да, после успешного прохождения аттестации выдается удостоверение установленного образца, подтверждающее квалификацию специалиста.',
  },
  {
    question: 'Как записаться на подготовку к аттестации?',
    answer:
      'Вы можете оставить заявку на нашем сайте, и наш специалист свяжется с вами для уточнения деталей и подбора подходящей программы обучения.',
  },
];

const faqDataEl: FAQData[] = [
  {
    question: 'Кому необходима аттестация по электроэнергетике?',
    answer:
      'Аттестация обязательна для специалистов, работающих с электроустановками: электромонтеров, наладчиков, инженеров, мастеров, энергетиков и руководителей.',
  },
  {
    question: 'Что такое группа допуска по электробезопасности?',
    answer:
      'Это уровень квалификации и допуска к работе с электроустановками. Группы бывают от I до V и определяются по уровню напряжения и ответственности.',
  },
  {
    question: 'Как часто нужно подтверждать группу допуска?',
    answer:
      'Проверка знаний по электробезопасности проводится ежегодно, а переаттестация — раз в 5 лет.',
  },
  {
    question: 'Можно ли пройти обучение дистанционно?',
    answer:
      'Да, есть удобный онлайн-формат, с возможностью изучения материалов в свободное время и последующей сдачей тестов.',
  },
  {
    question: 'Что будет, если сотрудник работает без группы допуска?',
    answer:
      'Это нарушение может привести к штрафу, отстранению от работы, а при несчастном случае — к уголовной ответственности работодателя.',
  },
];

const faqDataTep: FAQData[] = [
  {
    question:
      'Здание нашей организации подключено к централизованной системе теплоснабжения и горячего водоснабжения. В связи с тем, что мы не являемся теплоснабжающей организацией и у нас только радиаторы отопления, необходимо ли иметь специальный персонал для эксплуатации такого оборудования?',
    answer: (
      <span>
        Указанная тепловая энергоустановка является системой теплопотребления и должна
        эксплуатироваться в соответствии с Правилами технической эксплуатации тепловых
        энергоустановок, утв. Приказом Минэнерго России от 24.03.2003 №115.
        <br /> В соответствии с требованием Правил эксплуатация осуществляется подготовленным
        персоналом. Для непосредственного выполнения функций по эксплуатации руководитель
        организации назначает ответственного за исправное состояние и безопасную эксплуатацию
        тепловых энергоустановок и его заместителя из числа управленческого персонала и специалистов
        после проверки знаний Правил в комиссии органов государственного энергетического надзора.
      </span>
    ),
  },
  {
    question:
      'Какое количество ответственных за исправное состояние и безопасную эксплуатацию тепловых энергоустановок должно быть в организации?',
    answer:
      'В теплоснабжающей и теплосетевой организации распорядительным документом должно быть назначено лицо, ответственное за исправное состояние и безопасную эксплуатацию тепловых энергоустановок, а также лицо, его замещающее (на время его отсутствия), которые обязаны пройти ежегодную проверку знаний Правил технической эксплуатации тепловых энергоустановок, утв. Приказом Минэнерго России от 24.03.2003 №115 "Об утверждении Правил технической эксплуатации тепловых энергоустановок", и иметь удостоверения установленного образца.',
  },
  {
    question:
      'Каким работникам организации и с какой периодичностью необходимо проходить проверку знаний правил технической эксплуатации тепловых энергоустановок в органах государственного энергетического надзора?',
    answer: (
      <span>
        В соответствии с п. 2.3.8 Правил технической эксплуатации тепловых энергоустановок, утв.
        Приказом Минэнерго России от 24.03.2003 №115 (далее - ПТЭТЭ), обязательной является проверка
        знаний органами госэнегонадзора для руководящих работников и руководителей структурных
        подразделений организации.
        <br /> Также в соответствии с п. 2.3.20 ПТЭТЭ проверка знаний органами госэнегонадзора
        проводится для работников, назначенных ответственными за исправное состояние и безопасную
        эксплуатацию тепловых энергоустановок, их заместителей и специалистов по охране труда, в
        обязанности которых входит контроль за эксплуатацией тепловых энергоустановок.
        <br /> При этом проверка знаний ответственных и их заместителей проводится не реже 1 раза в
        12 месяцев, а для остальных вышеперечисленных работников - не реже 1 раза в 3 года.
        <br />
        Сообщаем, что в соответствии с п. 2 Правил подготовки нормативных правовых актов федеральных
        органов исполнительной власти и их государственной регистрации, утв. Постановлением
        Правительства РФ от 13.08.1997 №1009, настоящие письма не являются нормативными правовыми
        актами, имеют информационный характер, не направлены на установление, изменение или отмену
        правовых норм, а содержащиеся в них разъяснения вопросов применения нормативных правовых
        актов не могут рассматриваться в качестве общеобязательных государственных предписаний
        постоянного или временного характера и не препятствуют возможности руководствоваться
        непосредственно нормами законодательства.
      </span>
    ),
  },
  {
    question:
      'Какова периодичность проверки знаний работников при производстве работ в тепловых энергоустановках?',
    answer:
      'В соответствии с требованиями п. 2.3.15 Правил технической эксплуатации тепловых энергоустановок очередная проверка знаний у лица, являющегося ответственным за исправное состояние и безопасную эксплуатацию тепловых энергоустановок, проводится не реже 1 раза в год.',
  },
];

const faqDataPr: FAQData[] = [
  {
    question: 'Что включает в себя аттестация по промышленной безопасности?',
    answer:
      'Аттестация охватывает знание общих требований промышленной безопасности, а также специфических требований в зависимости от отрасли и типа ОПО.',
  },
  {
    question: 'Какие изменения в аттестации вступили в силу с 2025 года?',
    answer:
      'С 1 марта 2025 года вступили в силу новые правила аттестации, утвержденные Постановлением Правительства от 21.10.2024 № 1416, которые уточняют порядок проведения аттестации и требования к специалистам.',
  },
  {
    question: 'Какие области включает промышленная безопасность?',
    answer:
      'Химическое производство, подъемные сооружения, оборудование под давлением, горные работы, объекты газоснабжения и т.д.',
  },
  {
    question: 'Какие типы ОПО требуют обязательной аттестации персонала?',
    answer:
      'Все 4 класса опасных производственных объектов (в зависимости от масштаба и рисков), в том числе котельные, газораспределительные сети и лифтовое оборудование.',
  },
  {
    question: 'Можно ли проходить обучение без отрыва от производства?',
    answer: 'Да, возможно дистанционное обучение в удобное для вас время.',
  },
];

export const faqDataServices: Map<string, FAQData[]> = new Map([
  ['teploenergetika', faqDataTep],
  ['elektroenergetika', faqDataEl],
  ['promyshlennaya-bezopasnost', faqDataPr],
]);
