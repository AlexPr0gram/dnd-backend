import { Injectable } from '@nestjs/common';
import { IStroies } from './interface/stories.interface';

@Injectable()
export class AppService {
  getAll(): Array<IStroies> {
    return [
      {
        id: '1',
        title: 'ТИРАНИЯ ДРАКОНОВ',
        subtitle: '',
        description: 'Эпическая история, изложенная в двух приключениях, начинающаяся событиями, описанными в приключении «Клад Королевы Драконов» и завершающаяся приключением «Восстание Тиамат». Клад Королевы Драконов рассчитан на группу персонажей 1го уровня, которые по окончанию этого приключения получат 7й или даже 8й уровень. Приключение рассчитано на партию из четырех персонажей.',
        image: '',
        genre: 'Исторический',
        playersCount: 5,
        createdDate: new Date().getTime()
      },
      {
        id: '2',
        title: 'ЭЛЕМЕНТАЛЬНОЕ ЗЛО',
        subtitle: '',
        description: 'На южных берегах Лунного Моря обитатели Мулмастера влачат существование там, где другие бы давным-давно сдались — в мрачном городе, где неистовствует коррупция, а Церковь Бейна господствует над всеми. В этих пяти коротких ознакомительных приключениях вы пройдетесь по Городу Опасностей, встретитесь с его жителями, посмотрите на достопримечательности и своими глазами удостоверитесь как он получил свое зловещее прозвище. ',
        image: '',
        genre: 'Фантастика',
        playersCount: 5,
        createdDate: new Date().getTime()
      },
      {
        id: '3',
        title: 'ГРОМ ШТОРМОВОГО КОРОЛЯ',
        subtitle: '',
        description: 'Известная охотница за реликвиями ищет авантюристов, готовых помочь ей разыскать тайники с сокровищами, которые оставили побежденные последователи Культа Дракона. Ее карты и заметки могут привести вас к огромным богатствам или к ужасной смерти. Интересно, а у других групп тоже есть планы на эти клады? Пять 1-часовых мини-приключений для героев 1-2 уровней',
        image: '',
        genre: 'Фантастика',
        playersCount: 4,
        createdDate: new Date().getTime()
      },
      {
        id: '4',
        title: 'ГРОБНИЦА АННИГИЛЯЦИИ',
        subtitle: '',
        description: 'Часто называемый «Ворота Чульта», экзотический город Порт Нянзару построен среди таинственного и чудесного пейзажа. Тем не менее яркая красота города омрачена таинственным злом, которое угрожает всей земле. Успеет ли кто-нибудь в городе понять, что происходит, прежде чем станет поздно',
        image: '',
        genre: 'Фантастика',
        playersCount: 3,
        createdDate: new Date().getTime()
      },
      {
        id: '5',
        title: 'ВОСХОЖДЕНИЕ АВЕРНУСА',
        subtitle: '',
        description: 'Проклятье! Весь город Элтурель вместе с его обитателями был низвергнут в Авернус, первый круг Девяти Преисподних! Хотя те, кому посчастливилось в этот момент оказаться за стенами города, избежали этой участи, они ещё не вне опасности! Беженцы образовали караван, направляющийся в близлежащий город — Врата Балдура. Сможете ли вы защитить их от дьяволов, бандитов и друг друга, пока они не окажутся в безопасном месте?',
        image: '',
        genre: 'Приключения',
        playersCount: 6,
        createdDate: new Date().getTime()
      }
    ];
  }
}
