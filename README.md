# Crypto.com NFT automation

This repo contains an automation test on Crypto.com/nft, with the tests written in Cypress.

### A short description on design and test cases

- Use Cypress, Typescript as the framework for this scripting
- Use Eslint and Tslint to standardise the coding style 
- Implement GitHub CICD to ensure every code push matches the above standard
- Use Page Factory and Page Object Model Design patterns
    - Separate codes and elements for easier maintenance 
    - Reusable functions are stored in page.ts
    - Define different types of elements by naming in locators.ts
    - Loop all elements in locator files to check to be visible, except some naming
    - Elements naming starts with `popup` which are elements in dropdown/ popup
    - Elements naming starts with `exist`/ `skip` which are not visible by default. While `exist` is checked for existing, `skip` will be covered by later test cases
    - Elements naming ends with `Link` will be redirected to urls stored in elements naming ends with `LinkUrl`
    - Elements naming ends with `Href` will change the domain of the page, which is not naturally supported for cypress. Attribute `Href` is checked instead
    - Some modules in page are also separately store into a locator file, which may reused by different pages
- Device dimensions are stored in constants.ts for resolution checking

- Check all elements have attribute `data-test-id`, which is important information in page
- Check elements to be shown under different resolution
- Check buttons which redirect browser can lead to a correct url
- Check filters/ dropdowns and its options work properly
- Informative containers are sorted in descending order
- For Marketplace page, checking infinite scroll
- For Drops page, check which sessions(`early access`, `current`, `upcoming`, `ended`) and its elements should be shown by mocking the api
- For NFT details page, three most common cases(`bid`, `buy now`, `accepting offer`) are chosen for elements checking

## Getting Started
install node module `npm install`
then run `npm run test`

## Linting

* `npm run lint`