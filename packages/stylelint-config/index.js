module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		indentation: 'tab',
		'order/order': ['dollar-variables', 'custom-properties', 'declarations', 'at-variables', 'rules'],
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep', 'slotted', 'global'],
			},
		],
		'string-quotes': 'single',
		'length-zero-no-unit': null,
		'no-descending-specificity': true,
		'rule-empty-line-before': [
			'always',
			{
				except: 'first-nested',
			},
		],
		'block-closing-brace-empty-line-before': 'never',
		'block-opening-brace-newline-after': 'always-multi-line',
	},
};
