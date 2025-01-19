import { sum } from './mocks/sum';
import { describe, test, expect } from '@jest/globals';

describe('Тесты на функцию sum', () => {
    test('1 + 2 = 3', () => {
        const result = sum(1, 2);

        expect(result).toBe(3);
    });
});