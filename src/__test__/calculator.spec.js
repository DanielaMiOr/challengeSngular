// import '@testing-library/jest-dom';
import Calculator from "../Calculator"


describe('calculator(n)', () => {
    it('Debería retornar "null" para "0"', () => {
        expect(Calculator(0)).toBe(null);
    });
    it('Debería retornar "null" para "1"', () => {
        expect(Calculator(1)).toBe(null);
    });
    it('Debería retornar "-14" para "2"', () => {
        expect(Calculator(2)).toBe(-14);
    });
    it('Debería retornar "-16" para "3"', () => {
        expect(Calculator(3)).toBe(-16);
    });
    it('Debería retornar "-24" para "4"', () => {
        expect(Calculator(4)).toBe(-24);
    });
    it('Debería retornar "-27" para "5"', () => {
        expect(Calculator(5)).toBe(-27);
    });
    it('Debería retornar "-41" para "6"', () => {
        expect(Calculator(6)).toBe(-41);
    });
    it('Debería retornar "-36" para "7"', () => {
        expect(Calculator(7)).toBe(-36);
    });
    it('Debería retornar "-40" para "8"', () => {
        expect(Calculator(8)).toBe(-40);
    });
    it('Debería retornar "-23" para "9"', () => {
        expect(Calculator(9)).toBe(-23);
    });
});