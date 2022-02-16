import healthLevel from '../app';

test.each([
  [{ name: '', health: 51 }, 'healthy'],
  [{ name: '', health: 50 }, 'wounded'],
  [{ name: '', health: 15 }, 'wounded'],
  [{ name: '', health: 14 }, 'critical'],
])('getting hero health', (hero, expected) => {
  const result = healthLevel(hero);
  expect(result).toBe(expected);
});
