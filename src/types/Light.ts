import { loggers } from 'winston';
const logger = loggers.get('logger')

interface IHaContextProps {
  entityId: string
  attributes: string
}

interface ILightContext {
  type: "home-assistant"
  props: IHaContextProps
}

export interface ILight {
  context: ILightContext
}

export class Light implements ILight {

  context
  state: any
  listeners: any[]

  constructor(config: ILight) {
    this.state = {}
    this.context = config.context
    this.listeners = []
  }

  update(state: any) {
    logger.info(state)
    this.state = state
  }

}

