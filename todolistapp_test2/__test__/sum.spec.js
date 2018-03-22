import sum from '../src/sum.js';

describe('sum 테스트',()=>{
	it('1+2+=3',()=>{
		expect(sum(1,2)).toBe(3);
	})
})