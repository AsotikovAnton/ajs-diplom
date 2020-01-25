import tempData from '../tempDataForMockGss';
import GameStateService from '../mockGameStateService';

jest.mock('../tempDataForMockGss');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Load', () => {
  const expected = `{"point":10,"maxPoint":10,"level":1,"currentThem":"prairie","userPositions":[]}`;
  tempData.mockReturnValue(expected);
  const recived = GameStateService.load();
  expect(JSON.stringify(recived)).toBe(expected);
});

test('Load = error', () => {
  const expected = '';
  tempData.mockReturnValue(expected);

  expect(() => {
    GameStateService.load();
  }).toThrow();
});
