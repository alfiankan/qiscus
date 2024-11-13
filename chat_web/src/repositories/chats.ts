import type { ChatsResponseDTO } from '@/dto/chat.type'
import { HTTJsonApiRemoteQiscus } from './base_api_remote'

export class ChatsRepository extends HTTJsonApiRemoteQiscus {
  public async getChats(): Promise<ChatsResponseDTO> {
    const response = await fetch(this.buildEndpoint('/chat.json'))

    if (!response.ok) {
      return Promise.reject(response.status)
    }
    // parse response to dto

    const dtoResponse: ChatsResponseDTO = await response.json()
    return Promise.resolve(dtoResponse)
  }
}
