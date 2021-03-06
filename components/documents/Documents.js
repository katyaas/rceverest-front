import React from 'react'

import Certificate from './Certificate';
const certificates = [
  {
    url: 'c1',
    title: 'Лузин В.А. Введение в гештальт-терапию/гештальт-консультирование. Контакт с собой и другими'
  },
  {
    url: 'c5',
    title: 'Лузин В.А. Современные пододы к лечению химической зависимости'
  },
  {
    url: 'c6',
    title: 'Лузина С. Введение в гештальт-терапию/гештальт-консультирование. Контакт с собой и другими'
  },
  {
    url: 'c2',
    title: 'Лузин В.А. Психиатрия для психологов "Под ключ"'
  },
  {
    url: 'c3',
    title: 'Лузин В.А. Комплексный интегрированный подход в терапии зависимости и созависимости'
  },
  {
    url: 'c4',
    title: "Лузин В.А. Основы и методы гештальт терапии в реабилитации зависимого поведения"
  },
  {
    url: 'c7',
    title: 'Свидетельство о государственной регистрации некоммерческого предприятия'
  },
  {
    url: 'c8',
    title: 'Свидетельство о государственной регистрации юридического лица'
  },
  {
    url: 'c9',
    title: 'Свидетельство о постановке на учет Российской организации в налоговом органе по месту ее нахождения'
  }
];


const Documents = () => (
  <div className="documents">
    {
      certificates.map(item => <Certificate name={item.url} title={item.title}/>)
    }
    <style jsx>{`
      .documents {
        display: flex;
        flex-wrap: wrap;
      }
    `}
    </style>
  </div>
);

export default Documents;
