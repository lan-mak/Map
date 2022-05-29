import ErrorRepository from '../app';

test('Получение описания ошибки', () => {
  const numberError = new ErrorRepository();
  expect(numberError.translate(404)).toBe('Not Found');
});

test('Ошибка отсутствует в списке известных', () => {
  const numberError = new ErrorRepository();
  expect(numberError.translate(500)).toBe('Unknown error');
});
