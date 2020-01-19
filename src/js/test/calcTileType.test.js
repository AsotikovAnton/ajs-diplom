import { calcTileType } from '../utils';

test('top-left', () => {
  const inputIndex = 0;
  const inputBoardSize = 6;
  const expected = 'top-left';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('top-right', () => {
  const inputIndex = 5;
  const inputBoardSize = 6;
  const expected = 'top-right';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('top', () => {
  const inputIndex = 5;
  const inputBoardSize = 9;
  const expected = 'top';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('bottom-left', () => {
  const inputIndex = 72;
  const inputBoardSize = 9;
  const expected = 'bottom-left';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('bottom-right', () => {
  const inputIndex = 15;
  const inputBoardSize = 4;
  const expected = 'bottom-right';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('bottom', () => {
  const inputIndex = 24;
  const inputBoardSize = 4;
  const expected = 'bottom';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('right', () => {
  const inputIndex = 14;
  const inputBoardSize = 5;
  const expected = 'right';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('left', () => {
  const inputIndex = 15;
  const inputBoardSize = 5;
  const expected = 'left';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});

test('center', () => {
  const inputIndex = 13;
  const inputBoardSize = 8;
  const expected = 'center';
  const received = calcTileType(inputIndex, inputBoardSize);
  expect(received).toBe(expected);
});
