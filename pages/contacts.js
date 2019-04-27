import Col from 'react-bootstrap/Col';
import { YMaps, Map, Placemark } from "react-yandex-maps";

import Layout from '../components/Layout'

const mapData = {
  center: [57.312843, 86.052244],
  zoom: 12,
};

const coordinates = [
  [57.312843, 86.052244],
];

export default function Contacts() {
  return (
    <Layout>
      <Col>
        <h1>Контакты</h1>
        <div>Директор, руководитель программы:</div>
        <div>Лузин Виктор Анатольевич</div>
        <div>Телефон: +79061984647</div>
        Мы находимся по адрессу: Томская область Первомайский район д.Сахалинка
        Банковские реквизиты: Автономная Некоммерческая Организация «Центр реабилитации и социальной адаптации «Эверест» 634009

        Расчетный счет: 40703810406710000174

        Инн: 7017372289 КПП: 701701001 ОГРН:1157000000156



        Банк: ОАО «Томскпромстройбанк» 634061, г. Томск, пр. Фрунзе 90

        Филиал №17 ОАО «Томскпромстройбанк»,634009, г. Томск, пр. Ленина,193

        БИК: 046902728 Корр. счет.: 30101810500000000728

        ИНН: 7000000130 КПП: 701702002 ОГРН: 1027000002446
        <YMaps>
          <Map defaultState={mapData} width="100%">
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
          </Map>
        </YMaps>
      </Col>
    </Layout>
  )
};
