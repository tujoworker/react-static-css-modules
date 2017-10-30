module.exports = {
    plugins: [],
    rules: {
        'import/no-unresolved': 0,
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }]
    },
    extends: ['react-app']
    // extends: 'react-tools',
}
