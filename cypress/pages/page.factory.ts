
import path from 'path'
import { DEVICE, PAGE } from './constants'

export default class pageFactory {
  static getNativePage (name: PAGE, device: DEVICE, options: unknown): string {
    return pageFactory.createPage([
      { path: `./locators/${name}.locators`, name, device, options }
    ])
  }

  static createPage (trialPaths: { path: string, name: PAGE, device: DEVICE, options: unknown }[]): string {
    for (const trialPath of trialPaths) {
      if (cy.task('existsSync', { path: path.join(__dirname, trialPath.path) })) {
        // dynamic import
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const Page = require(trialPath.path + '.ts').default
        return new Page(trialPath.name, trialPath.device, trialPath.options)
      }
    }
    throw new Error(`Page ${trialPaths.join(' or ')} not found!`)
  }
}
