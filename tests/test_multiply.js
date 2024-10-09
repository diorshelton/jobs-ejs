const multiply = require("../utils/multiply");
const get_chai = require("../utils/get_chai");

describe("testing multiply", () => {
	it("should give 7*6 is 42", async () => {
		const { expect } = await get_chai();
		expect(multiply(7, 6)).to.equal(42);
	});
	it("should give 6*6 is 36", async () => {
		const { expect } = await get_chai();
		expect(multiply(6, 6)).to.equal(36);
	});
});
