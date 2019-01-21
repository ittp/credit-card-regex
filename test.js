import test from 'ava';
import creditCardRegex from '.';

test('match credit card numbers', t => {
	const fixtures = [].concat(
		require('./fixtures/americanexpress.json'),
		require('./fixtures/dinersclub.json'),
		require('./fixtures/discover.json'),
		require('./fixtures/jcb.json'),
		require('./fixtures/maestro.json'),
		require('./fixtures/mastercard.json'),
		require('./fixtures/visa.json')
	);

	for (const x of fixtures) {
		t.true(creditCardRegex({exact: true}).test(x));
	}
});
