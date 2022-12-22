import skills from '../description';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 1,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 2,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
    {
      id: 3,
      name: 'Тройная защита',
      icon: 'http://...',
    },
  ],
};

Object.defineProperty(character.special[1], 'description', {
  value: 'Сила удара + 100%',
});

test.each([
  ['description true', 1, {
    id: 1,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  }],
  ['description is hidden', 2, {
    id: 2,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  }],
  ['description false', 3, {
    id: 3,
    name: 'Тройная защита',
    icon: 'http://...',
    description: 'Описание недоступно',
  }],
])('тестирование функции skills со статусом "%s"', (_, id, expected) => {
  const result = skills(id, character);
  expect(result).toMatchObject(expected);
});
