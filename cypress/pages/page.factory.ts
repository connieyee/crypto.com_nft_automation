
import path from 'path'

export default class pageFactory {
  static getNativePage (name: string): string {
    return pageFactory.createPage([
            `./locators/${name}`
    ])
  }

  static createPage (trialPaths: string[]): string {
    for (const trialPath of trialPaths) {
      if (cy.task('existsSync', { path: path.join(__dirname, trialPath) })) {
        // dynamic import
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const Page = require(trialPath + '.ts').default
        return new Page()
      }
    }
    throw new Error(`Page ${trialPaths.join(' or ')} not found!`)
  }
}
